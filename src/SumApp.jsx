import { useState } from "react";

export default function SumApp({ setScreen }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleClick = () => {
    const sum = Number(number1) + Number(number2);
    alert("The result is: " + sum);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6">Sum App</h2>

      <div className="flex flex-col items-center gap-3 w-full max-w-xs">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="Number 1"
          className="border p-3 rounded w-full"
        />

        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Number 2"
          className="border p-3 rounded w-full"
        />

        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white w-full p-3 rounded"
        >
          Result
        </button>

        <button
          onClick={() => setScreen("home")}
          className="bg-blue-500 hover:bg-blue-600 text-white w-full p-3 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}