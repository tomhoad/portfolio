import "./Home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
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
          delay: 0.5,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
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
          <Link to={"/project/times"} className="Items__Item">
            The Times &amp; The Sunday Times
          </Link>
          <Link to={"/project/times"} className="Items__Item">
            Learn With Facebook
          </Link>
          <Link to={"/project/times"} className="Items__Item">
            Local Opportunity With Google
          </Link>
          <Link to={"/project/times"} className="Items__Item">
            Ballantine's Whisky
          </Link>
          <Link to={"/project/times"} className="Items__Item">
            Sharp Electronics
          </Link>
        </ul>
      </motion.div>
    </div>
  );
}

export default Home;
