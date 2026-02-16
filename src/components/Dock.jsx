import { Link } from "react-router-dom";

export default function Dock() {
  return (
    <div style={dock}>
      <Link to="/">Home</Link>
      <Link to="/analyzer">Analyzer</Link>
      <Link to="/compare">Compare</Link>
      <Link to="/trending">Trending</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

const dock = {
  position: "fixed",
  bottom: 20,
  left: "50%",
  transform: "translateX(-50%)",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(15px)",
  padding: "12px 20px",
  borderRadius: 20,
  display: "flex",
  gap: 15,
};
