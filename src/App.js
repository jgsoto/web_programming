import "./styles.css";
import { useState } from "react";

function sum(num1, num2) {
  const sum = num1 + num2;
  return alert("the result is:" + sum);
}

export default function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  return (
    <div className="App">
      <h1>number 1</h1>
      <input type="number"></input>
      <h1>number 2</h1>
      <input type="number"></input>
      <p />
      <button onClick={() => sum()}>Result</button>
    </div>
  );
}
