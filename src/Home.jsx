export default function Home({ setScreen }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-48"
        onClick={() => setScreen("one")}
      >
        SumApp
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-48"
        onClick={() => setScreen("two")}
      >
        Calculator
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-48"
        onClick={() => setScreen("three")}
      >
        Search
      </button>
    </div>
  );
}