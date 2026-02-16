import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Analyzer({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyze = async () => {
    const cleanName = username.trim();

    if (!cleanName) {
      setError("Enter a username");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://api.github.com/users/${cleanName}`,
        {
          headers: {
            Authorization : "Bearer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"
        },
      }
     );

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("DATTA:", data);

      // GitHub error handling
      if (!res.ok ) {
        throw new Error(data.message || "User not found");
      }

      setUser(data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      
    }

    setLoading(false);
  };

  return (
    <div style={page}>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          style={card}
          >

    
        <h2>🔍 GitHub Analyzer</h2>
        <input
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={input}
        />

        <button onClick={analyze} style={btn}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}
      </motion.div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  /* soft Apple gradient */
  background: `
    linear-gradient(
      135deg,
      #f6f8fb,
      #e9eef5,
      #ffffff
    )
  `,

  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
};

const card = {
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",

  background: `
    linear-gradient(
      135deg,
      rgba(255,255,255,0.85),
      rgba(255,255,255,0.45)
    )
  `,

  padding: 30,
  borderRadius: 26,
  width: 340,

  border: "1px solid rgba(0,0,0,0.06)",

  boxShadow: `
    0 10px 35px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.7)
  `,
};

const input = {
  width: "100%",
  padding: 14,

  borderRadius: 14,
  border: "1px solid rgba(0,0,0,0.08)",

  background: "rgba(255,255,255,0.7)",

  outline: "none",
  marginBottom: 14,

  fontSize: 15,

  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
};

const btn = {
  width: "100%",
  padding: 14,

  borderRadius: 14,
  border: "none",

  cursor: "pointer",

  background: `
    linear-gradient(
      135deg,
      #0071e3,
      #4da3ff
    )
  `,

  color: "white",
  fontWeight: 600,
  fontSize: 15,

  boxShadow: "0 6px 18px rgba(0,113,227,0.3)",

  transition: "all 0.2s ease",
};
