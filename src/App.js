import "./styles.css";
import { useState } from "react";
import Home from "./Home";
import AppOne from "./SumApp";
import Calculator from "./Calculator";

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <div>
      {screen === "home" && <Home setScreen={setScreen} />}
      {screen === "one" && <AppOne setScreen={setScreen} />}
      {screen === "two" && <Calculator setScreen={setScreen} />}
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [screen, setScreen] = useState("home");
  const [display, setDisplay] = useState("");
  const handleClick = () => {
    const sum = Number(number1) + Number(number2);
    return alert("the result is: " + sum);
  };

  const agregate = (number) => {
    setDisplay(display + number);
  };

  const reset = () => {
    setDisplay("");
  };

  const erase = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    setDisplay(eval(display).toString());
  };

  return (
    <div className="App">
      {screen === "home" && (
        <>
          <button onClick={() => setScreen("one")}>App 1</button>
          <button onClick={() => setScreen("two")}>App 2</button>
        </>
      )}

      {screen === "one" && (
        <>
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
          <button onClick={() => setScreen("home")}>Back</button>
        </>
      )}

      {screen === "two" && (
        <>
          <h1>Calculator</h1>
          <input type="text" value={display}></input>
          <p />
          <div>
            <button onClick={erase}>Erase</button>
            <button onClick={() => agregate("/")}>/</button>
            <button onClick={() => agregate("*")}>*</button>
            <button onClick={reset}>Reset</button>
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
            <button onClick={() => agregate("0")}>0</button>
          </div>
          <button onClick={calculate}>=</button>
          <button onClick={() => setScreen("home")}>Back</button>
        </>
      )}
    </div>
  );
}
