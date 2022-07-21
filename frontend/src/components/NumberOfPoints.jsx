import "./NumberOfPoints.css";
import Form from "react-bootstrap/Form";
import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import MatchContext from "../contexts/MatchContext";

export default function NumberOfPoints() {
  const [points, setPoints] = useState("");
  const { gameScore, players, setPlayers, step } = useContext(MatchContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPlayers = players;
    newPlayers[step].score += parseInt(points, 10);

    if (newPlayers[step].score >= gameScore) {
      navigate("/Congrat");
      return;
    }

    setPlayers(newPlayers);

    navigate("/NextPlayer");
  };

  return (
    <div className="points">
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "column",
          alignItems: "center",
        }}
      >
        <Form.Group size="lg" controlId="points">
          <Form.Label>Nombre de point:</Form.Label>
          <Form.Control
            autofocus
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          size="lg "
          style={{
            backgroundColor: "#3D3D3D",
            border: "none",
            width: "100px",
            color: "white",
            marginTop: "20px",
            borderRadius: "border-radius: 25% 10%",
          }}
        >
          Suivant
        </Button>
      </Form>
    </div>
  );
}
