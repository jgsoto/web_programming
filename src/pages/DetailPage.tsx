import DetailCard from "../components/organisms/DetailCard";
import type { Show } from "../types/Show";
import type { Screen } from "../types/Screen";

type DetailPageProps = {
  item: Show | null;
  setScreen: (screen: Screen) => void;
};

export default function DetailPage({
  item,
  setScreen,
}: DetailPageProps) {
  if (!item) return <p className="text-center mt-4">No data</p>;

  return (
    <DetailCard
      item={item}
      onBack={() => setScreen("three")}
    />
  );
}