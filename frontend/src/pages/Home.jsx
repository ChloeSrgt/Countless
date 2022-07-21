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

  const {
    game,
    setGame,
    gameScore,
    setGameScore,
    players,
    setPlayers,
    setTimeur,
  } = useContext(MatchContext);

  const setPlayer = (name, index) => {
    const newPlayers = players;
    newPlayers[index].nickname = name;
    newPlayers[index].score = 0;
    setPlayers(newPlayers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayers(players.concat({}));
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

    navigate("/Playing");
  };

  return (
    <div>
      <Header />
      <p className="intro">Nous comptons vos points pour vous</p>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "column",
          alignItems: "center",
        }}
      >
        <Form.Group size="lg" controlId="Nom">
          <br />
          <Form.Control
            placeholder="Nom du jeu"
            onBlur={(e) => setGame(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="Points">
          <br />
          <Form.Control
            placeholder="Nombre de points"
            onBlur={(e) => setGameScore(parseInt(e.target.value, 10))}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <br />
          <Form.Control
            placeholder="Temps maximum (sec)"
            onBlur={(e) => setTimeur(parseInt(e.target.value, 10))}
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
              onBlur={(e) => setPlayer(e.target.value, index)}
            />
          </Form.Group>
        ))}
        <br />
        <div className="add">
          <Button
            type="submit"
            size="lg "
            style={{
              backgroundColor: "#3D3D3D",
              border: "none",
              width: "140px",
              color: "white",
              fontSize: "15px",
              borderRadius: "border-radius: 25% 10%",
            }}
          >
            Ajouter un joueur
          </Button>
        </div>
      </Form>
      <br />
      <div className="FormButton">
        <Button
          size="lg "
          style={{
            backgroundColor: "#3D3D3D",
            border: "none",
            width: "130px",
            color: "white",
            fontSize: "15px",
            borderRadius: "border-radius: 25% 10%",
          }}
          onClick={startGame}
        >
          Commencer
        </Button>
      </div>
    </div>
  );
}

export default Home;
