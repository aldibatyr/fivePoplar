import React from "react";
import { motion } from "framer-motion";
import { colors } from "../../Globals/backgroundColors";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RefreshIcon } from "../../Assets/svgs";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const NavigationBody = () => {
  return (
    <NavigationBodyList variants={variants}>
      <MenuItem i={1} />
    </NavigationBodyList>
  );
};

const NavigationBodyList = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  right: 0;
  width: 230px;
`;

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ i }) => {
  return (
    <StyledMenuItem
      color={colors[i]}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/">Restart</Link>
    </StyledMenuItem>
  );
};

const StyledMenuItem = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 10px 5px;
  border: 2px solid ${({ color }) => color};
  cursor: pointer;

  a {
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: ${({ color }) => color};
  }
`;

export default NavigationBody;
