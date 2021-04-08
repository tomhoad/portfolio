import "./Home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFetchProjects } from "../hooks/useFetchProjects";
import classNames from "classnames";
import { ReactComponent as GithubLogo } from "../GithubLogo.svg";
import { ReactComponent as LinkedinLogo } from "../LinkedinLogo.svg";

import { Triangle } from "../Triangle";
import { Square } from "../Square";
import { Circle } from "../Circle";

function Home() {
  const projects = useFetchProjects();

  return projects ? (
    <div className="Home">
      <Triangle />
      <Square />
      <Circle />
      <motion.div
        className="Header"
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 1],
          delay: 1.25,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <Link className="Header__Item Left" to={"/about"}>
          About
        </Link>
        <a className="Header__Item Right" href="mailto: t.hoad.88@gmail.com">
          Contact
        </a>
        <a
          className="Header__Item Right Github"
          href="https://github.com/tomhoad"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo />
        </a>
        <a
          className="Header__Item Right Github"
          href="https://www.linkedin.com/in/tomhoad/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo />
        </a>
      </motion.div>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 1],
          delay: 0.25,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.4,
          },
        }}
      >
        <h1 className="Intro">
          <Link to={"/about"} className="Items__Item">
            <b>Tom Hoad</b>
          </Link>{" "}
          is a Software Engineer
        </h1>
      </motion.div>
      <motion.span
        className="Divider"
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1.5,
        }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.75,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.4,
          },
        }}
      />
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.5,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.4,
          },
        }}
      >
        <ul className="Items">
          {projects.map((project) => (
            <Link
              key={project.path}
              to={`/project/${project.path}`}
              className={classNames("Items__Item", project.color)}
            >
              {project.headline}
            </Link>
          ))}
        </ul>
      </motion.div>
    </div>
  ) : null;
}

export default Home;
