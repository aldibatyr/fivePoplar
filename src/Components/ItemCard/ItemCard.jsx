import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import config from "../../config";

const ItemCard = ({ item, selectCard, cardSelected }) => {
  return (
    <CardContainer layout onClick={() => selectCard(item)}>
      <CardImageContainer layout>
        {item.poster_path === null ? (
          <div
            style={{
              height: "300px",
              width: "300px",
              background: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="placeholder"
          >
            <span>NO IMAGE AVAILABLE</span>
          </div>
        ) : (
          <img
            style={{ maxWidth: "100%" }}
            src={`${config.IMAGE_PATH}/w500${item.poster_path}`}
            alt=""
          />
        )}
      </CardImageContainer>
      <AnimatePresence>
        {cardSelected && (
          <CardDetailsContainer
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            layout
          >
            <h3>{item.title || item.original_name}</h3>
            <p>{item.overview}</p>
          </CardDetailsContainer>
        )}
      </AnimatePresence>
    </CardContainer>
  );
};

export default ItemCard;

const CardContainer = styled(motion.li)`
  position: relative;
  width: 300px;
  margin: 10px;
  list-style: none;
  background: #2d00f7;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const CardImageContainer = styled(motion.div)`
  height: 300px;
  width: 300px;
  overflow: hidden;
  border-radius: 10px;
`;

const CardDetailsContainer = styled(motion.div)`
  padding: 20px 10px;

  h3 {
    margin-bottom: 10px;
  }
`;
