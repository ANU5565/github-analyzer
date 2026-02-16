import React, { useState } from "react";
import "./MoreMenu.css";


export default function MoreMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Small circular More button */}
      <div className="more-menu-btn" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${open ? "active" : ""}`}>
        <button onClick={() => alert("Home clicked")}>Home</button>
        <button onClick={() => alert("Another User")}>Another User</button>
        <button onClick={() => alert("Profile")}>Profile</button>
        <button onClick={() => alert("Settings")}>Settings</button>
      </div>
    </>
  );
}

