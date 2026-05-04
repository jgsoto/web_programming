import SearchBar from "../components/molecules/SearchBar";
import CardList from "../components/organisms/CardList";
import { useShows } from "../hooks/useShows";
import type { Show } from "../types/Show";
import type { Screen } from "../types/Screen";

type SearchPageProps = {
  setScreen: (screen: Screen) => void;
  setSelected: (item: Show) => void;
};

export default function SearchPage({
  setScreen,
  setSelected,
}: SearchPageProps) {
  const { query, setQuery, results, search, loading } = useShows();

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

        {loading && <p className="text-center">Loading...</p>}

        <CardList
          results={results}
          onSelect={handleSelect}
        />

      </div>
    </div>
  );
}