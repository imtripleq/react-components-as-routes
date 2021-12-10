import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-route-dom";
import About from "About";
import Login from "Login";
import Navbar from "Navbar";
import Home from "Home";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </div>
  </Router>,

  document.getElementById("root")
);
