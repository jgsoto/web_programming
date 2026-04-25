export default function Home({ setScreen }) {
  return (
    <>
      <button onClick={() => setScreen("one")}>SumApp</button>
      <button onClick={() => setScreen("two")}>Calculator</button>
      <button onClick={() => setScreen("three")}>Search</button>
    </>
  );
}
