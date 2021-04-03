import { ReactComponent as CircleSvg } from "./circle.svg";
import { motion } from "framer-motion";

export function Circle() {
  return (
    <motion.div
      className="Shape Circle"
      animate={{
        translateY: ["-20px", "0px", "0px", "-20px"],
        scale: [1, 1.3, 1.3, 1],
      }}
      transition={{
        duration: 15,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 1],
        loop: Infinity,
      }}
    >
      <CircleSvg />
    </motion.div>
  );
}
