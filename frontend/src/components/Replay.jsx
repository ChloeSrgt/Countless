import Button from "react-bootstrap/Button";
import React from "react";
import "./Replay.css";

export default function Replay() {
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
        }}
      >
        Rejouez
      </Button>
    </div>
  );
}
