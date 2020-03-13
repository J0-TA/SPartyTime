import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import "./Login.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

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
          <a className="spotifyButton"href={`https://spartytime.herokuapp.com/api/auth/spotify`}>
          <FontAwesomeIcon className="icon" icon={ faSpotify } size="2x"/>Log In with Spotify
          </a>
          <p>* Remember, you will need a Spotify Premium account to use SPartyTime</p>
        </div>
      </section>
    );
  }
}
