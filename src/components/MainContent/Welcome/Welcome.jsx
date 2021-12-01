import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../../../pageTransition";

const Welcome = () => {
  const animate = {
    hidden: { y: "100%" },
    show: { y: "-100%" },
    exit: { y: "100%" },
  };

  return (
    <>
      <motion.div
        className="transition"
        exit="hidden"
        animate="show"
        initial="exit"
        variants={animate}
      ></motion.div>
      <div className="welcome">Welcome to Trillo!</div>
    </>
  );
};

export default Welcome;
