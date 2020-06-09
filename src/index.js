import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Container from "./components/Container";

Amplify.configure(awsconfig);

const App = () => (
  <Router>
    <div>
      <Header />
      <Container />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));

serviceWorker.unregister();
