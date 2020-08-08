import React from "react";
import FormContainer from "../../Components/FormContainer/FormContainer.jsx";
import styled from "styled-components";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const pageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const FormView = () => {
  return (
    <FormPage
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <FormContainer />
    </FormPage>
  );
};

const FormPage = styled(motion.div)`
  padding-top: 100px;
  width: 100vw;
`;

export default FormView;
