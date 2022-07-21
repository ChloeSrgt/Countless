import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import "./NextPlayer.css";
import { useNavigate } from "react-router";
import MatchContext from "../contexts/MatchContext";

export default function NextPlayer() {
  const navigate = useNavigate();
  const { players, step, setStep } = useContext(MatchContext);

  const nextPlayer = () => {
    const newStep = step + 1;

    if (newStep === players.length) {
      setStep(0);
    } else {
      setStep(newStep);
    }

    navigate("/Playing");
  };

  return (
    <div className="bodyNext">
      <p className="prochain">Prochain joueur !</p>
      <div className="rejouer">
        <Form
          onSubmit={nextPlayer}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "column",
            alignItems: "center",
          }}
        >
          <Button
            autofocus
            size="lg "
            type="submit"
            style={{
              backgroundColor: "#3D3D3D",
              border: "none",
              width: "140px",
              color: "white",
              marginTop: "20px",
            }}
          >
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}
