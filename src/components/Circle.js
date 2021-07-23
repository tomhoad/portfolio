import { ReactComponent as CircleSvg } from "../assets/circle.svg";
import { motion } from "framer-motion";

export function Circle() {
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
        key="circle"
        className="Shape Circle"
        animate={{
          translateY: ["-20px", "0px", "-10px", "-20px"],
          scale: [1, 1.3, 1.3, 1],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.5, 0.7, 1],
          loop: Infinity,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <CircleSvg />
      </motion.div>
    </motion.div>
  );
}
