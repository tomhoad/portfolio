import "./Home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFetchProjects } from "../hooks/useFetchProjects";
import classNames from "classnames";

function Home() {
  const projects = useFetchProjects();

  return projects ? (
    <div className="Home">
      <motion.div
        className="Header"
        initial={{
          y: -50,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 1],
          delay: 0.8,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <Link to={"/about"}>About</Link>
        <a href="mailto: tom@tomhoad.com">Contact</a>
      </motion.div>
      <motion.div
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
        <span className="Divider"></span>
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
