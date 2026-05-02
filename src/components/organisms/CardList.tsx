import Card from "./Card";
import type {Show} from "../../types/Show";

type ApiResult = {
  show: Show;
};

type CardListProps = {
  results: ApiResult[];
  onSelect: (item: Show) => void;
};

export default function CardList({ results, onSelect }: CardListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.map((r, i) => (
        <Card
          key={i}
          data={r.show}
          onClick={() => onSelect(r.show)}
        />
      ))}
    </div>
  );
}