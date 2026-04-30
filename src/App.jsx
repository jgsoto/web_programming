import { useState } from "react";
import Home from "./pages/Home";
import SumApp from "./pages/SumApp";
import Calculator from "./pages/Calculator";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState(null);

  const renderScreen = () => {
    switch (screen) {
      case "home":
        return <Home setScreen={setScreen} />;

      case "one":
        return <SumApp setScreen={setScreen} />;

      case "two":
        return <Calculator setScreen={setScreen} />;

      case "three":
        return (
          <SearchPage
            setScreen={setScreen}
            setSelected={setSelected}
          />
        );

      case "detail":
        return (
          <DetailPage
            item={selected}
            setScreen={setScreen}
          />
        );

      default:
        return <Home setScreen={setScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {renderScreen()}
    </div>
  );
}