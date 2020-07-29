import React, { useState, useContext } from "react";
import styled from "styled-components";
import { data } from "../../data";
import { motion, AnimateSharedLayout } from "framer-motion";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { Context } from "../../Context/Context";

const ResultsView = () => {
  const context = useContext(Context);
  const [selectedId, setSelectedId] = useState(null);

  const selectCard = (item) => {
    setSelectedId(item.id);
  };

  return (
    <ResultsPage>
      <AnimateSharedLayout>
        <ResultsContainer>
          {context.items.map((item) => {
            return (
              <ItemCard
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

const ResultsPage = styled.div`
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
