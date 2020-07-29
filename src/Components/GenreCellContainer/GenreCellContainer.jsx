import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const GenreCell = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 6px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const CheckedIndicator = styled(motion.div)`
  height: 19px;
  width: 19px;
  border-radius: 100%;
  margin-right: 10px;
  margin-top: 1px;
  background: #000;
`;

const GenreCellContainer = ({ genre, addToGenresList, removeFromGenresList }) => {
  const [checked, setChecked] = useState(false);

  const colors = ["#2d00f7", "#6a00f4", "#8900f2", "#a100f2", "#b100e8"];

  const variants = {
    checked: { scale: 1.0 },
    unchecked: { scale: 0.0 },
  };

  const cellColorVariants = {
    checked: {
      background: "#D6D60880",
      color: "#000",
    },
    unchecked: {
      background: colors[Math.floor(Math.random() * 5)],
      color: "#fff",
    },
  };

  const handleClick = () => {
    if (!checked) {
      setChecked(true)
      addToGenresList(genre)
    } else {
      setChecked(false)
      removeFromGenresList(genre)
    }
  }

  return (
    <GenreCell
      initial={false}
      variants={cellColorVariants}
      animate={checked ? "checked" : "unchecked"}
      key={genre.id}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      <CheckedIndicator
        initial={false}
        variants={variants}
        animate={checked ? "checked" : "unchecked"}
      />
      <span>{genre.name}</span>
    </GenreCell>
  );
};

export default GenreCellContainer;
