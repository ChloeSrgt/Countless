import React, { useState, useContext } from "react";
// import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import LoginContext from "../contexts/LoginContext";
import logo from "../assets/logo.png";

export default function Login() {
  const { login, setLogin } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const { setIsConnected } = useContext(LoginContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (login && password) {
      setIsConnected(true);
    }
  };
  function validateForm() {
    return login?.length > 0;
  }

  return (
    <>
      <div className="Logo">
        <img className="LogoCountLess" src={logo} alt="logo" />
      </div>
      <div className="Login">
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
            <Form.Label>Email</Form.Label>
            <br />
            <Form.Control
              autoFocus
              type="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <br />
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button
            className="Button"
            size="lg "
            type="submit"
            disabled={!validateForm()}
            style={{
              background: "linear-gradient(#32373c, #a1a3a2)",
              border: "none",
              width: "140px",
              color: "white",
              fontSize: "15px",
            }}
          >
            Se connecter
          </Button>
        </Form>
      </div>
    </>
  );
}
