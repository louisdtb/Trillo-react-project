import React from "react";
import { motion } from "framer-motion";

const ComingSoon = (props) => {
  return (
    <motion.div className="coming-soon">
      Check back soon to book {props.activePage}!
    </motion.div>
  );
};

export default ComingSoon;
