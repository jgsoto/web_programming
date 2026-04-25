import { useState } from "react";

export default function SumApp({ setScreen }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleClick = () => {
    const sum = Number(number1) + Number(number2);
    return alert("The result is: " + sum);
  };

  return (
    <>
      <h3>Number 1</h3>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      ></input>
      <h3>Number 2</h3>
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      ></input>
      <br />
      <button onClick={handleClick}>Result</button>
      <button onClick={() => setScreen("home")}>Back</button>
    </>
  );
}
