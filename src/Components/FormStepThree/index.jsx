import React, { useState } from "react";
import FormCheckboxField from "../FormCheckboxField";

const FormStepThree = ({
  checkmarkVariants,
  vintage,
  twothousands,
  current,
  handleCheckVintage,
  handleCheckTwoK,
  handleCheckRecents,
}) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Show me movies from</h3>
      </div>
      <FormCheckboxField
        action={handleCheckVintage}
        stateBoolean={vintage}
        checkmarkVariants={checkmarkVariants}
        title="Pre 90s"
      />
      <FormCheckboxField
        action={handleCheckTwoK}
        stateBoolean={twothousands}
        checkmarkVariants={checkmarkVariants}
        title="Up to 2010"
      />
      <FormCheckboxField
        action={handleCheckRecents}
        stateBoolean={current}
        checkmarkVariants={checkmarkVariants}
        title="Recent"
      />
    </>
  );
};

export default FormStepThree;
