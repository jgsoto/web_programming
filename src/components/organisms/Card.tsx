import Button from "../atoms/Button";
import type {Show} from "../../types/Show";

type CardProps = {
  data: Show;
  onClick: () => void;
};

export default function Card({ data, onClick }: CardProps) {
  const cleanSummary = data.summary
    ? data.summary.replace(/<[^>]+>/g, "").slice(0, 120)
    : "No description";

  const image = data.image?.medium;

  return (
    <div className="bg-white border rounded-lg p-3 cursor-pointer hover:shadow-md transition text-left">
      <h3 className="text-sm font-bold mb-1">{data.name}</h3>

      {image && (
        <img
          className="float-left w-24 h-24 object-cover mr-2 mb-1 rounded"
          src={image}
          alt={data.name}
        />
      )}

      <p className="text-xs leading-tight">{cleanSummary}...</p>

      <div className="clear-both"></div>

      <Button text="View Details" onClick={onClick} color="blue" />
    </div>
  );
}