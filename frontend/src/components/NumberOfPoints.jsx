import "./NumberOfPoints.css";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export default function NumberOfPoints() {
  const [points, setPoints] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
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
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
