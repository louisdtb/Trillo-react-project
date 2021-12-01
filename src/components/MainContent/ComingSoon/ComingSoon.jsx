import React from "react";
import { motion } from "framer-motion";

const ComingSoon = (props) => {
  return (
    <motion.div
      className="coming-soon"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      Check back soon to book {props.activePage}!
    </motion.div>
  );
};

export default ComingSoon;
