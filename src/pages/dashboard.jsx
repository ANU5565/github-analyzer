import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard({ user }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!user) return;

    fetch(user.repos_url)
      .then(r => r.json())
      .then(setRepos);
  }, [user]);

  if (!user) return <p>No user selected</p>;

  return (
    <div style={page}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={card}
      >
        <img
          src={user.avatar_url}
          width={90}
          style={{ borderRadius: "50%" }}
        />

        <h2>{user.login}</h2>

        <div style={stats}>
          <Stat label="Followers" value={user.followers} />
          <Stat label="Repos" value={user.public_repos} />
        </div>
        <div style={repoGrid}>
          {repos.map(repo => (
           <motion.div
             key={repo.id}
             whileHover={{ scale: 1.05 }}
             style={repoCard}
             onClick={() => window.open(repo.html_url)}
           >
             <h4>{repo.name}</h4>
             ⭐ {repo.stargazers_count}
          </motion.div>
        ))}
    </div>


        <h3>Repositories</h3>

        <div style={repoGrid}>
          {repos.slice(0, 6).map(repo => (

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            style={card}
          >



              ⭐ {repo.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={statCard}>
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}


const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background: `
    linear-gradient(
      135deg,
      #f6f8fb,
      #e9eef5,
      #ffffff
    )
  `,

  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
  color: "#1d1d1f",
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

  borderRadius: 28,
  padding: 32,
  width: "92%",
  maxWidth: 560,

  border: "1px solid rgba(0,0,0,0.06)",

  boxShadow: `
    0 12px 35px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.7)
  `,
};

const stats = {
  display: "flex",
  justifyContent: "space-around",
  margin: "22px 0",
};

const statCard = {
  textAlign: "center",
  padding: 12,

  borderRadius: 16,
  background: "rgba(255,255,255,0.6)",

  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};

const repoGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 14,
  marginTop: 12,
};

const repoCard = {
  background: "rgba(255,255,255,0.7)",
  padding: 14,
  borderRadius: 16,

  border: "1px solid rgba(0,0,0,0.05)",

  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",

  cursor: "pointer",
  transition: "all 0.2s ease",
};
  