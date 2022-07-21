import "./GamerScore.css";
import React, { useContext } from "react";
import MatchContext from "../contexts/MatchContext";

function GamerScore() {
  const { players } = useContext(MatchContext);
  return (
    <div className="inGame">
      {players.map((player) => (
        <p>
          {player.nickname} : {player.score}
        </p>
      ))}
    </div>
  );
}

export default GamerScore;
