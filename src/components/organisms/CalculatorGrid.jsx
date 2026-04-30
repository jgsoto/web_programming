import Button from "../atoms/Button";

export default function CalculatorGrid({
  agregate,
  erase,
  reset,
  calculate,
}) {
  const buttons = [
    { text: "Er", action: erase, color: "red" },
    { text: "/", action: () => agregate("/"), color: "orange" },
    { text: "*", action: () => agregate("*"), color: "orange" },
    { text: "C", action: reset, color: "red" },

    { text: "1", action: () => agregate("1") },
    { text: "2", action: () => agregate("2") },
    { text: "3", action: () => agregate("3") },
    { text: "+", action: () => agregate("+"), color: "orange" },

    { text: "4", action: () => agregate("4") },
    { text: "5", action: () => agregate("5") },
    { text: "6", action: () => agregate("6") },
    { text: "-", action: () => agregate("-"), color: "orange" },

    { text: "7", action: () => agregate("7") },
    { text: "8", action: () => agregate("8") },
    { text: "9", action: () => agregate("9") },
    { text: "=", action: calculate, color: "green" },

    { text: "0", action: () => agregate("0"), span: "col-span-4" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 max-w-sm">
      {buttons.map((btn, index) => (
        <Button
          key={index}
          text={btn.text}
          onClick={btn.action}
          color={btn.color}
          span={btn.span}
        />
      ))}
    </div>
  );
}