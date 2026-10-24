import { useState } from "react";
import CalculatorDisplay from "../components/molecules/CalculatorDisplay";
import CalculatorGrid from "../components/organisms/CalculatorGrid";
import Button from "../components/atoms/Button";
import type { Screen } from "../types/Screen";

type CalculatorProps = {
  setScreen: (screen: Screen) => void;
};

export default function Calculator({ setScreen }: CalculatorProps) {
  const [display, setDisplay] = useState<string>("");

  const agregate = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  const erase = () => {
    setDisplay((prev) => prev.slice(0, -1));
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

      <div className="w-full max-w-xs">
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