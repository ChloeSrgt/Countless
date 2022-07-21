import "./Home.css";
import Header from "@components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import MatchContext from "../contexts/MatchContext";

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Playing");
  }
  const { game, setGame, gameScore, setGameScore, players, setPlayers } =
    useContext(MatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayers(players.concat(""));
  };
  const startGame = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/match`, {
        players,
        game,
        gameScore,
      })
      .then((res) => {
        console.warn(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Header />
      <Form
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
            onBlur={(e) => setGame(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <br />
          <Form.Control
            placeholder="Nombre de points"
            onBlur={(e) => setGameScore(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "column",
          alignItems: "center",
        }}
      >
        {players.map((player, index) => (
          <Form.Group size="lg" controlId="shop">
            <br />
            <Form.Control
              autoFocus
              name="pseudo"
              placeholder={`Joueur ${index + 1}`}
            />
          </Form.Group>
        ))}
        <br />
        <Button
          type="submit"
          size="lg "
          style={{
            backgroundColor: "#3D3D3D",
            border: "none",
            width: "207px",
            color: "white",
          }}
        >
          Ajouter un joueur
        </Button>
      </Form>
      <br />
      <Button
        size="lg "
        style={{
          backgroundColor: "#3D3D3D",
          border: "none",
          width: "207px",
          color: "white",
        }}
        onClick={(startGame, handleClick)}
      >
        Commencer
      </Button>
    </div>
  );
}

export default Home;
