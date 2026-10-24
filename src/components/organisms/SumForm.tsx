import SumInputs from "../molecules/SumInputs";
import Button from "../atoms/Button";

type SumFormProps = {
  number1: string;
  number2: string;
  setNumber1: (value: string) => void;
  setNumber2: (value: string) => void;
  onSum: () => void;
  onBack: () => void;
};

export default function SumForm({
  number1,
  number2,
  setNumber1,
  setNumber2,
  onSum,
  onBack,
}: SumFormProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 gap-4">
      <SumInputs
        number1={number1}
        number2={number2}
        setNumber1={setNumber1}
        setNumber2={setNumber2}
      />

      <Button text="Result" onClick={onSum} color="green" />
      <Button text="Back" onClick={onBack} color="blue" />
    </div>
  );
}