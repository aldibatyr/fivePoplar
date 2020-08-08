import React from "react";
import FormCheckboxField from "../FormCheckboxField";
import styled from "styled-components";

const FormScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `${width}px`};
`;

const FormStepOne = ({
  checkmarkVariants,
  isMovie,
  isSeries,
  handleCheckMovie,
  handleCheckSeries,
  formHeight,
  formWidth,
}) => {
  return (
    <FormScreen width={formWidth} height={formHeight}>
      <div style={{ textAlign: "center" }}>
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
    </FormScreen>
  );
};

export default FormStepOne;
