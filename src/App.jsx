import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import MoreMenu from "./MoreMenu";


import Analyzer from "./pages/Analyzer";
import Compare from "./pages/Compare";
import Trending from "./pages/Trending";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div style={app}>
        {/* Sidebar */}
        <div style={sidebar}>
          <h2>✨ ANU'S GitHub Lab</h2>

          <Nav to="/">Home</Nav>
          <Nav to="/analyzer">Analyzer</Nav>
          <Nav to="/compare">Compare</Nav>
          <Nav to="/trending">Trending</Nav>
          <Nav to="/dashboard">Dashboard</Nav>
        </div>

        {/* Content */}
        <div style={content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
           path="/analyzer"
           element={<Analyzer setUser={setUser} />}
           />

            <Route path="/compare" element={<Compare />} />
            <Route path="/trending" element={<Trending />} />
            <Route
             path="/dashboard"
             element={<Dashboard user={user} />}
              />

          </Routes>
          <div className="footer">
  Designed by Anu ❤️
</div>

        </div>
      </div>
    </BrowserRouter>
  );
}


function Nav({ to, children }) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <Link to={to} style={navBtn}>
        {children}
      </Link>
    </motion.div>
  );
}


function Home() {
  return (
    <Glass>
      <h1>Welcome</h1>
      <p>Introduce Github Analyzer an platform showing GitHub user data and insights.</p>
    </Glass>
  );
}

export function Glass({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={glass}
    >
      {children}
    </motion.div>
  );
}




const app = {
  display: "flex",
  height: "100vh",

  background: `
    linear-gradient(
      135deg,
      #f6f8fb,
      #e9eef5,
      #ffffff
    )
  `,

  color: "#1d1d1f",
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
};

const sidebar = {
  width: "260px",
  padding: "24px",

  backdropFilter: "blur(18px)",
  background: "rgba(255,255,255,0.55)",

  borderRight: "1px solid rgba(0,0,0,0.06)",

  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
};

const content = {
  flex: 1,
  padding: "40px",
  overflowY: "auto",
};

const navBtn = {
  display: "block",
  padding: "12px 16px",
  marginTop: "10px",
  borderRadius: "14px",
  textDecoration: "none",

  background: "rgba(255,255,255,0.6)",
  color: "#1d1d1f",

  border: "1px solid rgba(0,0,0,0.05)",

  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",

  transition: "all 0.2s ease",
};

const glass = {
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",

  background: `
    linear-gradient(
      135deg,
      rgba(255,255,255,0.8),
      rgba(255,255,255,0.4)
    )
  `,

  padding: "28px",
  borderRadius: "24px",

  border: "1px solid rgba(0,0,0,0.05)",

  boxShadow: `
    0 8px 30px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.7)
  `,
};
