import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../../../pageTransition";

const Welcome = () => {
  // const [transition, setTransition] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTransition(false);
  //   }, 1000);
  // }, []);

  const animate = {
    hidden: { y: "0" },
    show: {
      y: "-100%",
      transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
    },
    exit: { y: "100%" },
  };

  return (
    <div className="welcome-wrapper">
      <motion.div
        className="transition"
        exit="hidden"
        animate="show"
        initial="exit"
        variants={animate}
      />
      <div className="welcome">Welcome to Trillo!</div>
    </div>
  );
};

export default Welcome;
