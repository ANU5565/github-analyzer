import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={page}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={glass}
      >
        <h1 style={title}>ANU'S GitHub Lab</h1>
        <p style={subtitle}>
          Analyze • Compare • Explore GitHub like a pro
        </p>

        <NavButton to="/analyzer">🔍 Analyzer</NavButton>
        <NavButton to="/compare">⚖ Compare Users</NavButton>
        <NavButton to="/trending">🔥 Trending</NavButton>
        <NavButton to="/dashboard">📊 Dashboard</NavButton>
      </motion.div>
    </div>
  );
}


function NavButton({ to, children }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to={to} style={btn}>
        {children}
      </Link>
    </motion.div>
  );
}


const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  // Apple gradient vibe
  background:
    "linear-gradient(135deg,#0f172a,#1e293b,#020617)",

  fontFamily:
    "-apple-system, BlinkMacSystemFont, sans-serif",

  color: "white",
};

const glass = {
  backdropFilter: "blur(20px)",
  background: "rgba(255,255,255,0.08)",
  borderRadius: 24,
  padding: 40,
  width: 380,

  boxShadow:
    "0 20px 60px rgba(0,0,0,0.6)",

  border: "1px solid rgba(0, 0, 0, 0.15)",
};

const title = {
  fontSize: 32,
  fontWeight: 600,
  marginBottom: 6,
};

const subtitle = {
  opacity: 0.7,
  marginBottom: 24,
};

const btn = {
  display: "block",
  textAlign: "center",
  marginTop: 12,
  padding: 14,

  borderRadius: 14,
  textDecoration: "none",

  background:
    "linear-gradient(135deg,#2563eb,#1d4ed8)",

  color: "white",
  fontWeight: 500,

  boxShadow:
    "0 6px 20px rgba(238, 239, 240, 0.9)",
};


// src/pages/Home.jsx
import React from "react";
import UserCard from "../components/UserCard";

export default function Home({ users }) {
  return (
    <div className="container">
      <h1>GitHub Users</h1>
      <div className="grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
import { motion } from "framer-motion";

<motion.div
  className="card"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  {/* Card content */}
</motion.div>
import React, { useState } from "react";
import UserCard from "../components/UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${query}`);
    const data = await res.json();
    setUsers([data]);
  };

  const fetchAnotherUser = () => setUsers([]);

  return (
    <div className="main-bg">
      <div className="container">
        <h1>GitHub Analyzer</h1>

        {/* Search input */}
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchUser}>Search</button>

        {/* Show Home / Back / Another user buttons if user data exists */}
        {users.length > 0 && (
          <div>
            <button className="nav-btn" onClick={() => setUsers([])}>
              Home
            </button>
            <button className="nav-btn" onClick={fetchAnotherUser}>
              Another User
            </button>
          </div>
        )}

        {/* User cards */}
        <div className="grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
