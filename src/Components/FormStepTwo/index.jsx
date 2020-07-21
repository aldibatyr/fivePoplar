import React, { useState } from "react";
import FormCheckboxField from "../FormCheckboxField";
import { motion } from "framer-motion";

const FormStepTwo = ({ checkmarkVariants }) => {
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
  return (
    <motion.div
      key="stepTwo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="formStepLabel">
        <h3>I'm watching with</h3>
      </div>
      <FormCheckboxField
        action={handleCheckFamily}
        stateBoolean={watchingWithFamily}
        checkmarkVariants={checkmarkVariants}
        title="Family"
      />
      <FormCheckboxField
        action={handleCheckAlone}
        stateBoolean={watchingAlone}
        checkmarkVariants={checkmarkVariants}
        title="Alone"
      />
      <FormCheckboxField
        action={handleCheckSignificant}
        stateBoolean={watchingWithSignificant}
        checkmarkVariants={checkmarkVariants}
        title="Significant Other"
      />
      <FormCheckboxField
        action={handleCheckFriends}
        stateBoolean={watchingWithFriends}
        checkmarkVariants={checkmarkVariants}
        title="Friends"
      />
    </motion.div>
  );
};

export default FormStepTwo;
