import Input from "../atoms/Input";
import Button from "../atoms/Button";

type SearchBarProps = {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
  onBack: () => void;
};

export default function SearchBar({
  query,
  setQuery,
  onSearch,
  onBack,
}: SearchBarProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-3 mb-6">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <div className="flex gap-2">
        <Button text="Search" onClick={onSearch} color="blue" />
        <Button text="Back" onClick={onBack} color="blue" />
      </div>
    </div>
  );
}