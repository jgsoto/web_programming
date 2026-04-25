import { useState } from "react";
import Card from "./Card";

export default function SearchPage({ setScreen, setSelected }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data = await response.json();
    setResults(data);
  };

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search....."
      ></input>
      <button onClick={search}>Search</button>
      <button onClick={() => setScreen("home")}>Back</button>
      <div className="results">
        {results.map((r, i) => (
          <Card
            key={i}
            className="card"
            data={r.show}
            onClick={() => {
              setSelected(r.show);
              setScreen("detail");
            }}
          />
        ))}
      </div>
    </>
  );
}
