import React, { Component } from "react";
import AuthService from "../../services/AuthService";
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
          <a href={`${process.env.REACT_APP_API_URL}/auth/spotify`}>
            Log In with Spotify
          </a>
        </div>
      </section>
    );
  }
}
