import "./Joueurs.css";
import React, { useContext } from "react";
import MatchContext from "../contexts/MatchContext";

export default function Joueurs() {
  const { players } = useContext(MatchContext);
  return (
    <p className="Joueur">
      C'est à {players.map((player) => player.nickname)}
      de jouer !{" "}
    </p>
  );
}
