import { useState } from "react";
import SearchBar from "../components/molecules/SearchBar";
import CardList from "../components/organisms/CardList";

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

  const handleSelect = (item) => {
    setSelected(item);
    setScreen("detail");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">

        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={search}
          onBack={() => setScreen("home")}
        />

        <CardList
          results={results}
          onSelect={handleSelect}
        />

      </div>
    </div>
  );
}