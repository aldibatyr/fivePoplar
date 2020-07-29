import React from "react";
import { motion } from "framer-motion";
import { colors } from "../../Globals/backgroundColors";

import "./FormCheckboxField.scss";
import styled from "styled-components";

const InputField = styled(motion.div)`
  display: flex;
  align-items: center;
  background: ${({ color }) => color};
  border-radius: 6px;
  padding: 20px 10px;
  width: calc(100% - 20px);
  min-height: 120px;
  height: 30%;
  margin: 5px 10px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const CheckedIndicator = styled(motion.div)`
  height: 19px;
  width: 19px;
  border-radius: 100%;
  margin-right: 10px;
  margin-top: 1px;
  background: #000;
`;

const cellColorVariants = {
  checked: {
    background: "#D6D60880",
    color: "#000",
  },
  unchecked: {
    background: colors[Math.floor(Math.random() * 5)],
    color: "#fff",
  },
};

const FormCheckboxField = ({
  action,
  stateBoolean,
  checkmarkVariants,
  title,
}) => {
  return (
    <InputField
      color={colors[Math.floor(Math.random() * 5)]}
      initial={false}
      variants={cellColorVariants}
      animate={stateBoolean ? "checked" : "unchecked"}
      onClick={() => action()}
      whileTap={{ scale: 0.9 }}
    >
      <CheckedIndicator
        initial={false}
        variants={checkmarkVariants}
        animate={stateBoolean ? "checked" : "unchecked"}
      />
      <div className="inputLabel">
        <span>{title}</span>
      </div>
    </InputField>
  );
};

export default FormCheckboxField;
