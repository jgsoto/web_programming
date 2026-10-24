import Button from "../atoms/Button";
import type {Show} from "../../types/Show";

type DetailCardProps = {
  item: Show;
  onBack: () => void;
};

export default function DetailCard({ item, onBack }: DetailCardProps) {
  const cleanSummary = item.summary
    ? item.summary.replace(/<[^>]+>/g, "")
    : "No description";

  return (
    <div className="max-w-3xl mx-auto p-4 text-left">
      <h1 className="text-2xl font-bold mb-3">{item.name}</h1>

      {item.image && (
        <img
          src={item.image.medium}
          alt={item.name}
          className="float-left w-48 mr-4 mb-2 rounded"
        />
      )}

      <p className="text-gray-700 leading-relaxed">{cleanSummary}</p>

      <div className="clear-both"></div>

      <Button text="Back" onClick={onBack} color="blue" />
    </div>
  );
}