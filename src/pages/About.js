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
        <motion.div
          className="Text Text__Wide"
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
          <p>
            An experienced, pragmatic, and highly-motivated Software Engineer
            with 11 years experience spanning digital agencies, production
            companies, and enterprise clients. I enjoy breaking down and
            explaining complex technical problems for engineers and
            non-engineers alike.
          </p>
          <p>
            My software engineering background focuses mainly on modern
            JavaScript and the surrounding ecosystem, in particular React. I am
            currently stationed in the newsroom at The Times building scalable
            tools for journalists to publish TheTimes.co.uk.
            <p>
              I have a particular interest in highly-polished user interface
              design and build. I hold an MSc in Computer Science (Distinction)
              from the University of London, Birkbeck.
            </p>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
