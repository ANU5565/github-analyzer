import { motion } from "framer-motion";

export default function Glass({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{
        /* 🍎 Apple glass look */
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        /* soft white translucent layer */
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(255,255,255,0.35))",

        borderRadius: "26px",
        padding: "28px",

        /* subtle Apple border */
        border: "1px solid rgba(255,255,255,0.6)",

        /* floating Apple shadow (soft, not dark) */
        boxShadow: `
          0 8px 30px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.6)
        `,

        width: "380px",
        maxHeight: "85vh",
        overflowY: "auto",

        /* smooth feel */
        transition: "all 0.25s ease",
      }}
      whileHover={{
        y: -4,
        boxShadow:
          "0 14px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.7)",
      }}
    >
      {children}
    </motion.div>
  );
}
