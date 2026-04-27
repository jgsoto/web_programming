export default function DetailPage({ item, setScreen }) {
  if (!item) return <p className="text-center mt-4">No data</p>;

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

      <p
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: item.summary }}
      />

      <div className="clear-both"></div>

      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setScreen("three")}
      >
        Back
      </button>
    </div>
  );
}
