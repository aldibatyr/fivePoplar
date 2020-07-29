import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DetailedItem = ({ item }) => {
  return (
    <StyledDetailedItem layoutId={item.id}>
      <h1>{item.title}</h1>
    </StyledDetailedItem>
  );
};

const StyledDetailedItem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
`;

export default DetailedItem;
