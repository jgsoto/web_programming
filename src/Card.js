export default function Card({ data, onClick }) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{data.name}</h3>
      {data.image && <img src={data.image.medium} alt={data.name} />}
      <br />
      <p>{data.summary?.replace(/<[^>]+>/g, "").slice(0, 120)}...</p>
      <button onClick={onClick}>View Details</button>
    </div>
  );
}
