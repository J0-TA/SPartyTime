import React, { Component } from "react";
import AuthService from "../API/AuthService";
import "./Login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.service = new AuthService();
  }
  handleLogin = () => {
    // this.service.login()
  };

  render() {
    return (
      <section>
        <div>
          {/* <button onClick={() => this.handleLogin()}>
            Log In with Spotify
          </button> */}
          <a href="http://localhost:4000/api/auth/spotify">
            Log In with Spotify
          </a>
        </div>
      </section>
    );
  }
}
