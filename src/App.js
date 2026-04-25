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
    </div>
  );
}
