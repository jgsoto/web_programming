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
    <>
      <h3>Calculator</h3>
      <input type="text" value={display} readOnly></input>
      <div>
        <button onClick={erase}>Er</button>
        <button onClick={() => agregate("/")}>/</button>
        <button onClick={() => agregate("*")}>*</button>
        <button onClick={reset}>C</button>
      </div>
      <div>
        <button onClick={() => agregate("1")}>1</button>
        <button onClick={() => agregate("2")}>2</button>
        <button onClick={() => agregate("3")}>3</button>
        <button onClick={() => agregate("+")}>+</button>
      </div>
      <div>
        <button onClick={() => agregate("4")}>4</button>
        <button onClick={() => agregate("5")}>5</button>
        <button onClick={() => agregate("6")}>6</button>
        <button onClick={() => agregate("-")}>-</button>
      </div>
      <div>
        <button onClick={() => agregate("7")}>7</button>
        <button onClick={() => agregate("8")}>8</button>
        <button onClick={() => agregate("9")}>9</button>
        <button onClick={calculate}>=</button>
      </div>
      <div>
        <button onClick={() => agregate("0")}>0</button>
      </div>
      <button onClick={() => setScreen("home")}>Back</button>
    </>
  );
}
