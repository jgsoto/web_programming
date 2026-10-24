import Input from "../atoms/Input";

type SumInputsProps = {
  number1: string;
  number2: string;
  setNumber1: (value: string) => void;
  setNumber2: (value: string) => void;
};

export default function SumInputs({
  number1,
  number2,
  setNumber1,
  setNumber2,
}: SumInputsProps) {
  return (
    <>
      <Input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Number 1"
      />
      <Input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Number 2"
      />
    </>
  );
}