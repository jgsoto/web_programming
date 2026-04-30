export default function Button({ text, onClick, color = "gray", span = "" }) {
  const base = "p-3 rounded";

  const styles = {
    gray: "bg-gray-200 hover:bg-gray-300",
    orange: "bg-orange-400 hover:bg-orange-500 text-white",
    red: "bg-red-500 hover:bg-red-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
  };

  return (
    <button onClick={onClick} className={`${styles[color]} ${base} ${span}`}>
      {text}
    </button>
  );
}