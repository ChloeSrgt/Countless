import "./Home.css";
import Header from "@components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Home() {

  const [players, setPlayers] = useState([""]);

  const handleSubmit = (event) => {};
  const addPlayer = () => {
    // players.push("");
    setPlayers(players.concat(""));
  };

  return (
    <div>
      <Header />
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "column",
          alignItems: "center",
        }}
      >
        <Form.Group size="lg" controlId="shop">
          <br />
          <Form.Control
            autoFocus
            placeholder="Nom du jeu"
            onChange={(e) => setLogin(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <br />
          <Form.Control
            placeholder="Nombre de points"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {players.map((player, index) => (
          <Form.Group size="lg" controlId="shop">
            <br />
            <Form.Control
              autoFocus
              placeholder={"Joueur " + (index + 1)}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Form.Group>
        ))}
        <br />
        <Button
          size="lg "
          style={{
            backgroundColor: "#3D3D3D",
            border: "none",
            width: "207px",
            color: "white",
          }}
          onClick={addPlayer}
        >
          Ajouter un joueur
        </Button>
        <br />
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
          Commencer
        </Button>
      </Form>
    </div>
  );
}

export default Home;
