"use client"
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const click = async () => {
    setLoading(true);
    const msg = await fetch(`/api/chat`, {
      method: "GET"
    })
    const result = await msg.json();
    setMsg(result);
    setLoading(false);
  }
  return (
    <div>
      <input className="border-gray-400 rounded-lg p-2 w-1/2 m-2" type="text" value={query} placeholder="Write something" onChange={e => setQuery(e.target.value)}/>
      <button onClick={click} className="bg-green-500 p-2 rounded-lg">Search</button>
      {loading && <h2>Loading</h2>}
      {msg !== "" && <div>{msg}</div>}
    </div>
  );
}
