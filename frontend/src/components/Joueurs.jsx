import "./Joueurs.css";
import React, { useContext } from "react";
import MatchContext from "../contexts/MatchContext";

export default function Joueurs() {
  const { step } = useContext(MatchContext);
  const { players } = useContext(MatchContext);
  return <p className="Joueur">C'est à {players[step].nickname} de jouer !</p>;
}
