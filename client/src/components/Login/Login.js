import React, { Component } from "react";
import "./Login.scss";

export default class Login extends Component {
  handleLogin = () => {};

  render() {
    return (
      <section>
        <div>
          <button onClick={() => this.handleLogin()}>
            Log In with Spotify
          </button>
        </div>
      </section>
    );
  }
}
