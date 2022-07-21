import React, { useContext, useState } from "react";
import "./Timeur.css";
import { useNavigate } from "react-router";
import MatchContext from "../contexts/MatchContext";

export default function Timeur() {
  const navigate = useNavigate();
  const { timeur } = useContext(MatchContext);
  const [currentTimeur, setCurrentTimeur] = useState(timeur);

  if (timeur > 0) {
    setTimeout(() => {
      setCurrentTimeur(currentTimeur - 1);

      if (currentTimeur === 0) {
        navigate("/nextplayer");
      }
    }, 1000);
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {timeur > 0 && (
        <div className="timeur">temps restant: {currentTimeur} secondes</div>
      )}
    </>
  );
}
