import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home-Page.component";
import Receipe from "./components/receipe.component"
import Payment from "./components/payment.component";
import Otp from "./components/otp.component";
import Validate_Otp from "./components/validate-otp.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/home" className="navbar-brand">
              Home
            </a>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route path="/receipes/:id" component={Receipe} />
              <Route path="/payment/:id" component={Payment} />
              <Route path="/otp/" component={Otp} />
              <Route path="/validate_otp/" component={Validate_Otp} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;