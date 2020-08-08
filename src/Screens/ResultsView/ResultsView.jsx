import React, { useState, useContext } from "react";
import styled from "styled-components";
import { data } from "../../data";
import { motion, AnimateSharedLayout } from "framer-motion";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { Context } from "../../Context/Context";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const resultsVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const ResultsView = () => {
  const context = useContext(Context);
  const [selectedId, setSelectedId] = useState(null);

  const selectCard = (item) => {
    setSelectedId(item.id);
  };

  return (
    <ResultsPage
      initial="exit"
      animate="enter"
      exit="exit"
      variants={resultsVariants}
    >
      <AnimateSharedLayout>
        <ResultsContainer>
          {context.items.map((item) => {
            return (
              <ItemCard
                key={item.id}
                selectCard={selectCard}
                item={item}
                cardSelected={item.id === selectedId}
              />
            );
          })}
        </ResultsContainer>
      </AnimateSharedLayout>
    </ResultsPage>
  );
};

const ResultsPage = styled(motion.div)`
  width: 100vw;
`;

const ResultsContainer = styled(motion.ul)`
  width: 80%;
  max-width: 1200px;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  /* background: wheat; */
  padding: 100px 0;
`;

export default ResultsView;
