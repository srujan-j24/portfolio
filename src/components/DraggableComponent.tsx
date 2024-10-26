import { motion } from "framer-motion";
import React from "react";

const DraggableComponent: React.FC = () => {
  return (
    <motion.div
      drag
      dragConstraints={{
        left: 0,
        right: window.innerWidth - 100, // adjust based on component size
        top: 0,
        bottom: window.innerHeight - 100, // adjust based on component size
      }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#4CAF50",
        borderRadius: "10px",
        position: "absolute",
      }}
    />
  );
};

export default DraggableComponent;