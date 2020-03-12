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
        <div>
          <a href={`${process.env.REACT_APP_API_URL}/auth/spotify`}>
            Log In with Spotify
          </a>
        </div>
      </section>
    );
  }
}
