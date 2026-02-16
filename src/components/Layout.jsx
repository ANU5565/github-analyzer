import { useState } from "react";

export default function Analyzer({ goHome, onAnalyze }) {
  const [username, setUsername] = useState("");

  const analyze = async () => {
    if (!username) return;

    const res = await fetch(
      `https://api.github.com/users/${username}`
    );

    const data = await res.json();
    onAnalyze(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Analyzer Page</h2>

      <input
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={analyze}>Analyze</button>

      <button onClick={goHome}>Home</button>
    </div>
  );
}
