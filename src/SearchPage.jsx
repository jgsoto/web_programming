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
    <div className="p-4">
      <div className="flex flex-col items-center gap-3 mb-4">
        <input
          className="p-2 border rounded w-60 max-w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />

        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={search}
          >
            Search
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setScreen("home")}
          >
            Back
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((r, i) => (
          <Card
            key={i}
            data={r.show}
            onClick={() => {
              setSelected(r.show);
              setScreen("detail");
            }}
          />
        ))}
      </div>
    </div>
  );
}