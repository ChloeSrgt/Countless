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
  const { isConnected, setIsConnected } = useContext(LoginContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (login && password) {
      /* axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/shops/login`, {
          login,
          password,
        })
        .then(() => {
          setIsConnected(true);
        })
        .catch(() => {
          swal(
            "Merci d'indiquer votre identifiant et mot de passe.",
            "",
            "error"
          );
        }); */
      setIsConnected(true);
    }
  };
  function validateForm() {
    return login?.length > 0;
  }

  return (
    <>
      <div className="Logo">
        <img className="Logo2bad-login" src={logo} alt="logo" />
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
            size="lg "
            type="submit"
            disabled={!validateForm()}
            style={{
              backgroundColor: "#3D3D3D",
              border: "none",
              width: "207px",
              color: "white",
            }}
          >
            Se connecter
          </Button>
        </Form>
      </div>
    </>
  );
}
