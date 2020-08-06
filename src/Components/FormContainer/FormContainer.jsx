import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import "./FormContainer.scss";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "../FormStepTwo";
import FormStepThree from "../FormStepThree";
import FormStepFour from "../FormStepFour";
import config from "../../config";
import { Context } from "../../Context/Context";
import { useHistory } from "react-router-dom";

const variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const checkmarkVariants = {
  unchecked: { scale: 0 },
  checked: { scale: 1 },
};

const FormContainer = () => {
  const context = useContext(Context);
  let history = useHistory();
  // form state

  const formContainer = useRef(null);
  const [formHeight, setFormHeight] = useState(0);
  const [formWidth, setFormWidth] = useState(0);
  const [[step, direction], setStep] = useState([0, 0]);
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const disableButtons = () => {
    if (step === 0) {
      setPrevButtonDisabled(true);
    } else if (step === 3) {
      setNextButtonDisabled(true);
    } else {
      setNextButtonDisabled(false);
      setPrevButtonDisabled(false);
    }
  };

  const handleButtonClick = (direction) => {
    setStep([step + direction], direction);
  };

  useEffect(() => {
    disableButtons();
  }, [step]);

  useLayoutEffect(() => {
    setFormHeight(formContainer.current.clientHeight);
    setFormWidth(formContainer.current.clientWidth);
  }, []);

  // step one state
  const [isMovie, setIsMovie] = useState(false);
  const [isSeries, setIsSeries] = useState(false);

  const handleCheckMovie = () => {
    setIsMovie(true);
    setIsSeries(false);
  };

  const handleCheckSeries = () => {
    setIsSeries(true);
    setIsMovie(false);
  };

  //step two state
  const [watchingWithFamily, setWatchingWithFamily] = useState(false);
  const [watchingAlone, setWatchingAlone] = useState(false);
  const [watchingWithSignificant, setWatchingWithSignificant] = useState(false);
  const [watchingWithFriends, setWatchingWithFriends] = useState(false);

  const handleCheckFamily = () => {
    setWatchingWithFamily(true);
    setWatchingAlone(false);
    setWatchingWithFriends(false);
    setWatchingWithSignificant(false);
  };
  const handleCheckAlone = () => {
    setWatchingWithFamily(false);
    setWatchingAlone(true);
    setWatchingWithFriends(false);
    setWatchingWithSignificant(false);
  };
  const handleCheckFriends = () => {
    setWatchingWithFamily(false);
    setWatchingAlone(false);
    setWatchingWithFriends(true);
    setWatchingWithSignificant(false);
  };
  const handleCheckSignificant = () => {
    setWatchingWithFamily(false);
    setWatchingAlone(false);
    setWatchingWithFriends(false);
    setWatchingWithSignificant(true);
  };

  //step three state
  const [vintage, setVintage] = useState(false);
  const [twothousands, setTwothousands] = useState(false);
  const [current, setCurrent] = useState(false);

  const handleCheckVintage = () => {
    setVintage(true);
    setTwothousands(false);
    setCurrent(false);
  };

  const handleCheckTwoK = () => {
    setVintage(false);
    setTwothousands(true);
    setCurrent(false);
  };

  const handleCheckRecents = () => {
    setVintage(false);
    setTwothousands(false);
    setCurrent(true);
  };

  // step four logic
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadGenres = async () => {
    try {
      setLoading(true);
      const url = `${config.API_ENDPOINT}/genre/${
        isMovie ? "movie" : "tv"
      }/list?api_key=${config.API_KEY}`;
      const genresData = await fetch(url);
      const genresJson = await genresData.json();
      setGenres(genresJson.genres);
      setLoading(false);
      return;
    } catch (error) {
      setError(true);
      return;
    }
  };

  const addToGenresList = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
  };

  const removeFromGenresList = (genre) => {
    const filteredGenres = selectedGenres.filter(
      (item) => item.id !== genre.id
    );
    setSelectedGenres(filteredGenres);
  };

  const makeURLString = async () => {
    let searchFor = "";
    let certification = "";
    let timeframe = "";
    let genresString = "";
    let url = "";
    if (isMovie) {
      searchFor = "movie";
      if (watchingWithFamily) {
        certification = "certification_country=US&certification.lte=PG-13";
      } else {
        certification = "certification_country=US&certification.lte=NC-17";
      }

      if (vintage) {
        timeframe = "release_date.lte=1990-01-01";
      } else if (twothousands) {
        timeframe = "release_date.gte=1990-01-01&release_date.lte=2010-01-01";
      } else {
        timeframe = "release_date.gte=2010-01-01";
      }
      const genreIds = selectedGenres.map((genre) => genre.id);
      genresString = genreIds.join("%2C");

      url = `${config.API_ENDPOINT}/discover/${searchFor}?api_key=${config.API_KEY}&${certification}&${timeframe}&with_genres=${genresString}`;
    } else {
      searchFor = "tv";
      if (vintage) {
        timeframe = "first_air_date.lte=1990-01-01";
      } else if (twothousands) {
        timeframe =
          "first_air_date.gte=1990-01-01&first_air_date.lte=2010-01-01";
      } else {
        timeframe = "first_air_date.gte=2010-01-01";
      }
      const genreIds = selectedGenres.map((genre) => genre.id);
      genresString = genreIds.join("%2C");
      url = `${config.API_ENDPOINT}/discover/${searchFor}?api_key=${config.API_KEY}&${timeframe}&with_genres=${genresString}`;
    }

    return url;
  };

  const redirectToResults = async () => {
    const url = await makeURLString();
    await context.fetchItems(url);
    history.push("/results");
  };

  const pages = [
    <FormStepOne
      checkmarkVariants={checkmarkVariants}
      variants={variants}
      isMovie={isMovie}
      isSeries={isSeries}
      handleCheckMovie={handleCheckMovie}
      handleCheckSeries={handleCheckSeries}
      formHeight={formHeight}
      formWidth={formWidth}
    />,
    <FormStepTwo
      checkmarkVariants={checkmarkVariants}
      variants={variants}
      watchingWithFamily={watchingWithFamily}
      watchingAlone={watchingAlone}
      watchingWithSignificant={watchingWithSignificant}
      watchingWithFriends={watchingWithFriends}
      handleCheckFamily={handleCheckFamily}
      handleCheckAlone={handleCheckAlone}
      handleCheckFriends={handleCheckFriends}
      handleCheckSignificant={handleCheckSignificant}
      formHeight={formHeight}
    />,
    <FormStepThree
      checkmarkVariants={checkmarkVariants}
      variants={variants}
      vintage={vintage}
      twothousands={twothousands}
      current={current}
      handleCheckVintage={handleCheckVintage}
      handleCheckTwoK={handleCheckTwoK}
      handleCheckRecents={handleCheckRecents}
      formHeight={formHeight}
    />,
    <FormStepFour
      loadGenres={loadGenres}
      genres={genres}
      loading={loading}
      error={error}
      formHeight={formHeight}
      variants={variants}
      addToGenresList={addToGenresList}
      removeFromGenresList={removeFromGenresList}
      redirectToResults={redirectToResults}
    />,
  ];

  return (
    <StyledFormContainer step={step} ref={formContainer}>
      <form action="submit">
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            key={step}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {pages[step]}
          </motion.div>
        </AnimatePresence>
      </form>
      <Controls>
        <ControlButton
          disabled={prevButtonDisabled}
          onClick={() => handleButtonClick(-1)}
          whileTap={{ scale: 0.9 }}
          style={{ marginRight: "5px" }}
        >
          previous
        </ControlButton>
        {step === 3 ? (
          <ControlButton
            whileTap={{ scale: 0.9 }}
            style={{ marginLeft: "5px" }}
            onClick={redirectToResults}
          >
            Search
          </ControlButton>
        ) : (
          <ControlButton
            disabled={nextButtonDisabled}
            onClick={() => handleButtonClick(1)}
            whileTap={{ scale: 0.9 }}
            style={{ marginLeft: "5px" }}
          >
            next
          </ControlButton>
        )}
      </Controls>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  position: relative;
  margin: auto;
  max-width: 600px;
  width: 100%;
  min-width: 300px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px auto;
  width: calc(100% - 20px);
  margin: auto;
  margin-top: 5px;
`;

const ControlButton = styled(motion.button)`
  width: 100%;
  height: 96px;
  border-radius: 6px;
  background: #d6d608;
  border: none;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    background: gray;
  }
`;

const ProgressBar = styled.div`
  max-width: 600px;
  width: ${({ step }) => step * 25}%;
  height: 2px;
  background: white;
  margin-right: auto;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export default FormContainer;
