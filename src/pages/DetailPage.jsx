import DetailCard from "../components/organisms/DetailCard";

export default function DetailPage({ item, setScreen }) {
  if (!item) return <p className="text-center mt-4">No data</p>;

  return (
    <DetailCard
      item={item}
      onBack={() => setScreen("three")}
    />
  );
}