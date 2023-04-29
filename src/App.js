import React from "react";
import GlobalStyle from "./globalStyle";
import { Container } from "./globalStyle";
import { BrowserRouter as Router, Switch } from "react-router-dom"; // Rout

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Router></Router>
      <Switch>
        <Container
          style={{ height: "100vh", display: "grid", "align-items": "center" }}
        >
          <h1
            style={{
              color: "rgb(94, 94, 94)",
              "text-align": "center",
            }}
          >
            Welcome to{" "}
            <span style={{ color: "rgb(76, 227, 160)" }}>TODO WEB APP</span>{" "}
            This app is under construction ..
          </h1>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
