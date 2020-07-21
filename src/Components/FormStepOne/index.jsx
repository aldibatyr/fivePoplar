import React, { useState } from "react";
import FormCheckboxField from "../FormCheckboxField";
import { motion } from "framer-motion";

const FormStepOne = ({ checkmarkVariants }) => {
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
  return (
    <motion.div
      key="stepOne"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="formStepLabel">
        <h3>I'm looking for</h3>
      </div>
      <FormCheckboxField
        action={handleCheckMovie}
        stateBoolean={isMovie}
        checkmarkVariants={checkmarkVariants}
        title="Movies"
      />
      <FormCheckboxField
        action={handleCheckSeries}
        stateBoolean={isSeries}
        checkmarkVariants={checkmarkVariants}
        title="TV Series"
      />
    </motion.div>
  );
};

export default FormStepOne;
