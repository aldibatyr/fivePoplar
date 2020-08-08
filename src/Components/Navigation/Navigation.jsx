import React, { useRef } from "react";
import logo from "../../Assets/FivePoplarLogo.svg";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import styled from "styled-components";
import NavigationBody from "../NavigationBody/NavigationBody";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navigation = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <NavigationBackground
        className="background"
        variants={sidebar}
      />
      <NavigationBody isOpen={isOpen} toggleOpen={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

const NavigationBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
  z-index: 1;
`;

export default Navigation;
