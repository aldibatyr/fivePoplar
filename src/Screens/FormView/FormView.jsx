import React from "react";
import FormContainer from "../../Components/FormContainer/FormContainer.jsx";
import styled from "styled-components";

const FormView = () => {
  return (
    <FormPage>
      <FormContainer />
    </FormPage>
  );
};

const FormPage = styled.div`
  padding-top: 100px;
  width: 100vw;
`;

export default FormView;
