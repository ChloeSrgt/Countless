import Button from "react-bootstrap/Button";
import React from "react";
import "./Replay.css";
import { useNavigate } from "react-router";

export default function Replay() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="Rejouer">
      <Button
        size="lg "
        type="submit"
        style={{
          backgroundColor: "#3D3D3D",
          border: "none",
          width: "130px",
          color: "white",
          marginTop: "20px",
          borderRadius: "border-radius: 25% 10%",
        }}
        onClick={goToHome}
      >
        Rejouez?
      </Button>
    </div>
  );
}
