import { Routes, Route } from "react-router-dom";
import React, { useMemo, useState } from "react";
import Home from "@pages/Home";
import Congrat from "@pages/Congrat";
import Login from "@pages/Login";
import Playing from "@pages/Playing";
import LoginContext from "./contexts/LoginContext";
import "./App.css";
import MatchContext from "./contexts/MatchContext";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [login, setLogin] = useState([]);
  const [game, setGame] = useState("");
  const [gameScore, setGameScore] = useState();
  const [round, setRound] = useState(0);
  const [players, setPlayers] = useState([""]);

  return (
    <div className="App">
      <LoginContext.Provider
        value={useMemo(
          () => ({ isConnected, setIsConnected, login, setLogin }),
          [isConnected, login]
        )}
      >
        <MatchContext.Provider
          value={useMemo(
            () => ({
              game,
              setGame,
              gameScore,
              setGameScore,
              round,
              setRound,
              players,
              setPlayers,
            }),
            [game, round, players]
          )}
        >
          {isConnected ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playing" element={<Playing />} />
              <Route path="/congrat" element={<Congrat />} />
            </Routes>
          ) : (
            <Login />
          )}
        </MatchContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
