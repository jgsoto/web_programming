import "./styles.css";
import { useState } from "react";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const handleClick = () => {
    const sum = Number(number1) + Number(number2);
    return alert("the result is: " + sum);
  };
  return (
    <div className="App">
      <h1>number 1</h1>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      ></input>
      <h1>number 2</h1>
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      ></input>
      <p />
      <button onClick={handleClick}>Result</button>
    </div>
  );
}
