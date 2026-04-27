import { useState } from "react";

export default function Calculator({ setScreen }) {
  const [display, setDisplay] = useState("");

  const agregate = (value) => {
    setDisplay(display + value);
  };

  const erase = () => {
    setDisplay(display.slice(0, -1));
  };

  const reset = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("ERROR");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Calculator</h2>

      <input
        type="text"
        value={display}
        readOnly
        className="border p-3 text-right text-xl w-full max-w-xs mb-4 rounded bg-white"
      />

      <div className="grid grid-cols-4 gap-2 max-w-xs w-full">
        <button
          onClick={erase}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded"
        >
          Er
        </button>
        <button
          onClick={() => agregate("/")}
          className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded"
        >
          /
        </button>
        <button
          onClick={() => agregate("*")}
          className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded"
        >
          *
        </button>
        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded"
        >
          C
        </button>

        <button
          onClick={() => agregate("1")}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          1
        </button>
        <button
          onClick={() => agregate("2")}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          2
        </button>
        <button
          onClick={() => agregate("3")}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          3
        </button>
        <button
          onClick={() => agregate("+")}
          className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded"
        >
          +
        </button>

        <button
          onClick={() => agregate("4")}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          4
        </button>
        <button
          onClick={() => agregate("5")}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          5
        </button>
        <button
          onClick={() => agregate("6")}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          6
        </button>
        <button
          onClick={() => agregate("-")}
          className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded"
        >
          -
        </button>

        <button
          onClick={() => agregate("7")}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          7
        </button>
        <button
          onClick={() => agregate("8")}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          8
        </button>
        <button
          onClick={() => agregate("9")}
          className="bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          9
        </button>
        <button
          onClick={calculate}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded"
        >
          =
        </button>

        <button
          onClick={() => agregate("0")}
          className="col-span-4 bg-gray-200 hover:bg-gray-300 p-3 rounded"
        >
          0
        </button>
      </div>

      <button
        onClick={() => setScreen("home")}
        className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back
      </button>
    </div>
  );
}
