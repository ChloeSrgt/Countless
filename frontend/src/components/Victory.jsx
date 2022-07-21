import React from "react";
import "./Victory.css";
import victoire from "../assets/victoire.gif";

export default function Victory() {
  return (
    <div className="victoire">
      <img className="yeah" src={victoire} alt="Yeah" />
    </div>
  );
}
