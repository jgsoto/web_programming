import Input from "../atoms/Input";

type CalculatorDisplayProps = {
  value: string;
};

export default function CalculatorDisplay({ value }: CalculatorDisplayProps) {
  return (
    <Input
      type="text"
      value={value}
      readOnly
      className="border p-3 text-right text-xl w-full mb-4 rounded bg-white"
    />
  );
}