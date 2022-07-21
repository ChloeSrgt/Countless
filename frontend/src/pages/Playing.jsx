import NumberOfPoints from "@components/NumberOfPoints";
import Header from "@components/Header";
import Joueurs from "@components/Joueurs";
import GamerScore from "@components/GamerScore";
import Timeur from "@components/Timeur";

export default function Playing() {
  return (
    <div>
      <Header />
      <GamerScore />
      <Timeur />
      <Joueurs />
      <NumberOfPoints />
    </div>
  );
}
