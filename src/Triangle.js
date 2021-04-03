import { ReactComponent as TriangleSvg } from "./triangle.svg";
import { motion } from "framer-motion";

export function Triangle() {
  return (
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
  );
}
