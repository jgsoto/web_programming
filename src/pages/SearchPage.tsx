import { useState } from "react";
import SearchBar from "../components/molecules/SearchBar";
import CardList from "../components/organisms/CardList";
import type { Show, ApiResult } from "../types/Show";
import type { Screen } from "../types/Screen";

type SearchPageProps = {
  setScreen: (screen: Screen) => void;
  setSelected: (item: Show) => void;
};

export default function SearchPage({
  setScreen,
  setSelected,
}: SearchPageProps) {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<ApiResult[]>([]);

  const search = async () => {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data: ApiResult[] = await response.json();
    setResults(data);
  };

  const handleSelect = (item: Show) => {
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