import { useState } from "react";
import CalculatorDisplay from "../components/molecules/CalculatorDisplay";
import CalculatorGrid from "../components/organisms/CalculatorGrid";
import Button from "../components/atoms/Button";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Calculator</h2>

      <div className="max-w-xs">
        <CalculatorDisplay value={display} />

        <CalculatorGrid
          agregate={agregate}
          erase={erase}
          reset={reset}
          calculate={calculate}
        />
      </div>

      <Button
        text="Back"
        onClick={() => setScreen("home")}
        color="blue"
      />
    </div>
  );
}