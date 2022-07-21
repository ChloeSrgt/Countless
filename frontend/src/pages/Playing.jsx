import NumberOfPoints from "@components/NumberOfPoints";
import Header from "@components/Header";
import Next from "@components/Next";
import Joueurs from "@components/Joueurs";

export default function Playing() {
  return (
    <div>
      <Header />
      <Joueurs />
      <NumberOfPoints />
      <Next />
    </div>
  );
}
