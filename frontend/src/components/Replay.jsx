import Button from "react-bootstrap/Button";
import React from "react";

export default function Replay() {
  return (
    <div className="Rejouez">
      <Button
        size="lg "
        type="submit"
        style={{
          backgroundColor: "#3D3D3D",
          border: "none",
          width: "207px",
          color: "white",
        }}
      >
        Rejouez
      </Button>
    </div>
  );
}
