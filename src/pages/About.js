import * as React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <motion.div
        className="Overlay"
        initial={{
          y: "calc(100vh)",
        }}
        animate={{
          y: "calc(0vh)",
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 1],
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Link className="Back" to={"/"}>
          Back
        </Link>
        <h1 className="Title">About</h1>
      </motion.div>
    </>
  );
};

export default About;
