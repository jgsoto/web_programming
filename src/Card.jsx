export default function Card({ data, onClick }) {
  return (
    <div className="bg-white border rounded-lg p-3 cursor-pointer hover:shadow-md transition text-left">
      <h3 className="text-sm font-bold mb-1">{data.name}</h3>

      {data.image && (
        <img
          className="float-left w-24 h-24 object-cover mr-2 mb-1 rounded"
          src={data.image.medium}
          alt={data.name}
        />
      )}

      <p className="text-xs leading-tight">
        {data.summary?.replace(/<[^>]+>/g, "").slice(0, 120)}...
      </p>

      <div className="clear-both"></div>

      <button
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
        onClick={onClick}
      >
        View Details
      </button>
    </div>
  );
}