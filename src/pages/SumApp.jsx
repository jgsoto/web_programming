import { useState } from "react";
import SumForm from "../components/organisms/SumForm";

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

      <SumForm
        number1={number1}
        number2={number2}
        setNumber1={setNumber1}
        setNumber2={setNumber2}
        onSum={handleClick}
        onBack={() => setScreen("home")}
      />
    </div>
  );
}