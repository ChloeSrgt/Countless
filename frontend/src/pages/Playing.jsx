import NumberOfPoints from "@components/NumberOfPoints";
import Header from "@components/Header";
import Next from "@components/Next";
import Joueurs from "@components/Joueurs";
import GamerScore from "@components/GamerScore";

export default function Playing() {
  return (
    <div>
      <Header />
      <GamerScore />
      <Joueurs />
      <NumberOfPoints />
      <Next />
    </div>
  );
}
