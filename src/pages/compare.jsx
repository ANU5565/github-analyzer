import { useState } from "react";
import { Glass } from "../App";

export default function Compare() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [u1, setU1] = useState(null);
  const [u2, setU2] = useState(null);

  const compare = async () => {
  const u1 = await fetch(`https://api.github.com/users/${name1}`).then(r=>r.json());
  const u2 = await fetch(`https://api.github.com/users/${name2}`).then(r=>r.json());

  setUser1(u1);
  setUser2(u2);
};


  const load = async (name, set) => {
    const r = await fetch(`https://api.github.com/users/${name}`);
    set(await r.json());
  };

  return (
    <Glass>
      <h2>Compare Users</h2>

      <input placeholder="User A" onChange={e=>setA(e.target.value)} />
      <input placeholder="User B" onChange={e=>setB(e.target.value)} />

      <button onClick={()=>{
        load(a,setU1);
        load(b,setU2);
      }}>
        Compare
      </button>

      {u1 && u2 && (
        <>
          <p>{u1.login}: ⭐ {u1.public_repos}</p>
          <p>{u2.login}: ⭐ {u2.public_repos}</p>
        </>
      )}
    </Glass>
  );
}
