import "./App.css";
import { useState } from "react";
import Home from "./Home";
import AppOne from "./SumApp";
import Calculator from "./Calculator";
import SearchPage from "./SearchPage";
import DetailPage from "./Details";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-5 text-center bg-gray-100 min-h-screen">
      {screen === "home" && <Home setScreen={setScreen} />}
      {screen === "one" && <AppOne setScreen={setScreen} />}
      {screen === "two" && <Calculator setScreen={setScreen} />}
      {screen === "three" && (
        <SearchPage setScreen={setScreen} setSelected={setSelected} />
      )}
      {screen === "detail" && (
        <DetailPage item={selected} setScreen={setScreen} />
      )}
    </div>
  );
}