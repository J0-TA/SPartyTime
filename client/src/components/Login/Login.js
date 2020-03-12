import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import "./Login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.service = new AuthService();
  }

  render() {
    return (
      <section className="Login">
        <div className="LoginBox">
          <a className="spotifyButton"href={`${process.env.REACT_APP_API_URL}/auth/spotify`}>
          <i className="fab fa-spotify"></i> Log In with Spotify
          </a>
          <p>* Remember, you will need a Spotify Premium account to use SPartyTime</p>
        </div>
      </section>
    );
  }
}
