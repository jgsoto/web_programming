import Card from "./Card";

export default function CardList({ results, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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