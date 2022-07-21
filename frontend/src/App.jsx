import { Routes, Route } from "react-router-dom";
import React, { useMemo, useState } from "react";
import Home from "@pages/Home";
import Congrat from "@pages/Congrat";
import Login from "@pages/Login";
import Playing from "@pages/Playing";
import NextPlayer from "@components/NextPlayer";
import LoginContext from "./contexts/LoginContext";
import "./App.css";
import MatchContext from "./contexts/MatchContext";
// import StopWatch from "./Components/StopWatch/StopWatch.js";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [login, setLogin] = useState([]);
  const [game, setGame] = useState("");
  const [gameScore, setGameScore] = useState(0);
  const [round, setRound] = useState(0);
  const [step, setStep] = useState(0);
  const [timeur, setTimeur] = useState(0);
  const [players, setPlayers] = useState([{}, {}]);

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
              step,
              setStep,
              timeur,
              setTimeur,
            }),
            [game, gameScore, round, players, step, timeur]
          )}
        >
          {isConnected ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playing" element={<Playing />} />
              <Route path="/congrat" element={<Congrat />} />
              <Route path="/nextPlayer" element={<NextPlayer />} />
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
