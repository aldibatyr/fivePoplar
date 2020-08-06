import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GenreCellContainer from "../GenreCellContainer/GenreCellContainer";

const GenresScreen = styled.div`
  display: flex;
  height: ${({ height }) => `${height - 40}px`};
  justify-content: space-evenly;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FormStepFour = ({
  loadGenres,
  genres,
  loading,
  error,
  formHeight,
  addToGenresList,
  removeFromGenresList,
  redirectToResults,
}) => {
  useEffect(() => {
    loadGenres();
  }, []);

  const makeLoadingScreen = () => {
    return (
      <div className="loadingScreen">Placeholder for a loading indicator</div>
    );
  };

  const makeErrorScreen = () => {
    return <div className="errorScreen">Placeholder for the Error Screen</div>;
  };

  const makeGenresScreen = () => {
    return (
      <>
        <div className="formStepLabel">
          <h3>Select all genres that apply</h3>
        </div>
        <GenresScreen height={formHeight}>
          {genres.map((genre) => {
            return (
              <GenreCellContainer
                key={genre.id}
                addToGenresList={addToGenresList}
                removeFromGenresList={removeFromGenresList}
                genre={genre}
              />
            );
          })}
        </GenresScreen>
      </>
    );
  };

  return loading
    ? makeLoadingScreen()
    : error
    ? makeErrorScreen()
    : makeGenresScreen();
};

export default FormStepFour;
