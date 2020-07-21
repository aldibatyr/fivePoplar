import React, { useState, useEffect } from "react";
import "./FormContainer.scss";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import FormCheckboxField from "../FormCheckboxField";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "../FormStepTwo";

const FormContainer = () => {
  const [step, setStep] = useState(1);
  const [genre, setGenre] = useState("");
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [vintage, setVintage] = useState(false);
  const [twothousands, setTwothousands] = useState(false);
  const [current, setCurrent] = useState(false);
  const checkmarkVariants = {
    unchecked: { scale: 0 },
    checked: { scale: 1 },
  };

  const disableButtons = () => {
    if (step === 1) {
      setPrevButtonDisabled(true);
    } else if (step === 4) {
      setNextButtonDisabled(true);
    } else {
      setNextButtonDisabled(false);
      setPrevButtonDisabled(false);
    }
  };

  const returnStep = () => {
    if (step === 1) {
      return <FormStepOne checkmarkVariants={checkmarkVariants} />;
    } else if (step === 2) {
      return <FormStepTwo checkmarkVariants={checkmarkVariants} />;
    } else if (step === 3) {
      return (
        <>
          <div className="formStepLabel">
            <h3>I want to see</h3>
          </div>
          <FormCheckboxField title="Vintage" />
          <FormCheckboxField title="Shot in 2000s" />
          <FormCheckboxField title="Current" />
        </>
      );
    }
  };

  useEffect(() => {
    disableButtons();
  }, [step]);
  return (
    <div className="formContainer">
      <ProgressBar step={step} />
      <AnimatePresence>
        <form action="submit">{returnStep()}</form>
      </AnimatePresence>
      <div className="formControls">
        <button disabled={prevButtonDisabled} onClick={() => setStep(step - 1)}>
          previous
        </button>
        <button disabled={nextButtonDisabled} onClick={() => setStep(step + 1)}>
          next
        </button>
      </div>
    </div>
  );
};

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
