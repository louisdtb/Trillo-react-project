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

  // const animate = {
  //   hidden: { y: "0" },
  //   show: {
  //     y: "-100%",
  //     transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
  //   },
  //   exit: { y: "100%" },
  // };

  return (
    <div className="welcome-wrapper">
      <motion.div
        // className="transition"
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        // variants={animate}
      />
      <div className="welcome">
        {/* <img
          src={require("../../../img/logo-1.png").default}
          alt="Trillo logo"
          class="welcome__logo"
        /> */}
        <div className="heading-primary">Welcome to Trillo</div>
        <div>
          A fictional travel app designed by Jonas Schmedtmann and built in
          React by Louis de Tilly.
        </div>
      </div>
    </div>
  );
};

export default Welcome;
