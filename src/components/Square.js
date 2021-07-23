import { ReactComponent as SquareSvg } from "../assets/square.svg";
import { motion } from "framer-motion";

export function Square() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0,
        },
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.div
        className="Shape Square"
        animate={{
          translateY: ["-30px", "0px", "0px", "-30px"],
          rotate: [90, 30, 360, 90],
          scale: [1, 1.2, 1.3, 1],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          times: [0, 0.5, 0.8, 1],
          loop: Infinity,
        }}
      >
        <SquareSvg />
      </motion.div>
    </motion.div>
  );
}
