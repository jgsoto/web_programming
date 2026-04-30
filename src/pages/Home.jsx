import Button from "../components/atoms/Button";

export default function Home({ setScreen }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      <Button text="SumApp" onClick={() => setScreen("one")} />
      <Button text="Calculator" onClick={() => setScreen("two")} />
      <Button text="Search" onClick={() => setScreen("three")} />
    </div>
  );
}