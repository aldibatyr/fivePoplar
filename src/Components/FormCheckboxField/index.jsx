import React from "react";
import { motion } from "framer-motion";

import "./FormCheckboxField.scss";

const FormCheckboxField = ({
  action,
  stateBoolean,
  checkmarkVariants,
  title,
}) => {
  return (
    <div onClick={() => action()} className="inputField">
      <div className="customCheckboxContainer">
        <div className="outerCircle">
          <motion.div
            initial={false}
            animate={stateBoolean ? "checked" : "unchecked"}
            variants={checkmarkVariants}
          >
            <div className="innerContent"></div>
          </motion.div>
        </div>
      </div>
      <div className="inputLabel">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default FormCheckboxField;
