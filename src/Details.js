export default function DetailPage({ item, setScreen }) {
  if (!item) return <p>No data</p>;

  return (
    <>
      <h1>{item.name}</h1>
      {item.image && <img src={item.image.medium} alt={item.name} />}
      <p dangerouslySetInnerHTML={{ __html: item.summary }} />
      <button onClick={() => setScreen("three")}>Back</button>
    </>
  );
}
