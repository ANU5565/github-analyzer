import { useEffect, useState } from "react";

export default function Trending({ goHome }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=stars:>50000"
    )
      .then((r) => r.json())
      .then((data) => setRepos(data.items || []));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Trending Page</h2>

      {repos.slice(0, 5).map((repo) => (
        <p key={repo.id}>{repo.full_name}</p>
      ))}

      <button onClick={goHome}>Home</button>
    </div>
  );
}
