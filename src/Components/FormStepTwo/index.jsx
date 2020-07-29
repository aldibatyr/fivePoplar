import React, { useState } from "react";
import FormCheckboxField from "../FormCheckboxField";
import styled from "styled-components";

const FormScreen = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormStepTwo = ({
  checkmarkVariants,
  watchingWithFamily,
  watchingAlone,
  watchingWithSignificant,
  watchingWithFriends,
  handleCheckFamily,
  handleCheckAlone,
  handleCheckFriends,
  handleCheckSignificant,
  formHeight
}) => {
  return (
    <FormScreen height={formHeight}>
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
    </FormScreen>
  );
};

export default FormStepTwo;
