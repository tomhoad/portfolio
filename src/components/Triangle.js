import { ReactComponent as TriangleSvg } from "../assets/triangle.svg";
import { motion } from "framer-motion";

export function Triangle() {
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
        className="Shape Triangle"
        animate={{
          translateY: ["0px", "-30px", "-30px", "0px"],
          rotate: [30, 90, 360, 30],
          scale: [1, 1.2, 1.3, 1],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 1],
          loop: Infinity,
        }}
      >
        <TriangleSvg />
      </motion.div>
    </motion.div>
  );
}
