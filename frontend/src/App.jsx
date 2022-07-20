import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "@pages/Home";
import Congrat from "@pages/Congrat";
import Login from "@pages/Login";
import LoginContext from "./contexts/LoginContext";
import "./App.css";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [login, setLogin] = useState([]);
  return (
    <div className="App">
      <LoginContext.Provider value={{ isConnected, setIsConnected, login, setLogin }}>
        {isConnected ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/congrat" element={<Congrat />} />
          </Routes>
        ) : (
          <Login />
        )}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
