import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthService from "./services/AuthService";
import PartyService from "./services/PartyService";
import Create from "./components/Create/Create";
import "./styles/App.scss";
import Party from "./components/Create/Party/Party";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
    };
    this.authservice = new AuthService();
    this.fetchUser();
  }

  // getUser = userObj => {
  //   this.setState({
  //     loggedInUser: userObj
  //   });
  // };

  fetchUser() {
    return this.authservice
    .loggedin()
    .then(response => {
      this.setState({
        loggedInUser: response
      });
    })
    .catch(err => {
      this.setState({
        loggedInUser: false,
      });
    });
  }

  render() {
    if(this.state.loggedInUser) {
      return (
        <React.Fragment>
          <Header></Header>
          <Switch>
            <Route
              extact
              path="/home"
              render={() => {
                return <Home user={this.state.loggedInUser}></Home>;
              }}
            />
            <Route
              extact
              path="/party"
              render={() => {
                return <Create user={this.state.loggedInUser} history={this.props.history}></Create>;
              }}
            />
            <Route
              extact
              path="/"
              render={() => {
                return (
                  <Link to="/home">
                    <button><h2>Let's Sparty!</h2>
                    </button>
                  </Link>
                );
              }}
            />
          </Switch>
          <Footer></Footer>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header></Header>
          <Switch>
            <Route
              extact
              path="/login"
              render={() => {
                return <Login></Login>;
              }}
            />
            <Route
              extact
              path="/party/:id"
              render={() => {
                return <Party user={this.state.loggedInUser}></Party>;
              }}
            />
            <Route
              extact
              path="/"
              render={() => {
                return (
                  <Link to="/login">
                    <button><h2>Let's Sparty!</h2>
                    </button>
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
}