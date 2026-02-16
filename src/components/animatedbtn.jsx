import { motion } from "framer-motion";

export default function AnimatedBtn({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      style={{
        padding: "12px",
        marginTop: "10px",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        width: "100%",
      }}
    >
      {children}
    </motion.button>
  );
}
