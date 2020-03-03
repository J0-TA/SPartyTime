import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import "./styles/App.scss";

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Switch>
          <Route
            extact
            path="/home"
            render={() => {
              return <Home></Home>;
            }}
          />
          <Route
            extact
            path="/login"
            render={() => {
              return <Login></Login>;
            }}
          />
          <Route
            extact
            path="/"
            render={() => {
              return (
                <Link to="/home">
                  <button>Let's Party!</button>
                </Link>
              );
            }}
          />
        </Switch>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
