export default function Home({ setScreen }) {
  return (
    <>
      <button onClick={() => setScreen("one")}>App 1</button>
      <button onClick={() => setScreen("two")}>App 2</button>
    </>
  );
}
