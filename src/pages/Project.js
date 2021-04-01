import * as React from "react";
import { motion } from "framer-motion";
import "./Project.css";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      {/*<motion.div*/}
      {/*  className="Home"*/}
      {/*  initial={{*/}
      {/*    y: 0,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <div>*/}
      {/*    <h1 className="Intro">*/}
      {/*      <b>Tom Hoad</b> is a Software Engineer*/}
      {/*    </h1>*/}
      {/*    <span className="Divider"></span>*/}
      {/*    <ul className="Items">*/}
      {/*      <Link to={"/project/times"}>*/}
      {/*        <li className="Items__Item">*/}
      {/*          <a href="#">The Times &amp; The Sunday Times</a>*/}
      {/*        </li>*/}
      {/*      </Link>*/}
      {/*      <li className="Items__Item">Learn With Facebook</li>*/}
      {/*      <li className="Items__Item">Local Opportunity With Google</li>*/}
      {/*      <li className="Items__Item">Ballantine's Whisky</li>*/}
      {/*      <li className="Items__Item">Sharp Electronics</li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</motion.div>*/}
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
        <h1 className="Title">Ballantine's Whisky</h1>
      </motion.div>
    </>
  );
};

export default Project;
