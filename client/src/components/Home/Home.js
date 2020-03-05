import React, { Component } from "react";
import "./Home.scss";
import AuthService from "../../services/AuthService";
import axios from "axios";
import querystring from "querystring";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.service = new AuthService();
  }

  test() {
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        querystring.stringify({
          grant_type: "authorization_code",
          code: window.location.href.split("code=")[1],
          redirect_uri: "http://localhost:3000/home/callback"
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization:
              "Basic YjZiNWExOTRlNmQzNDk2MWIxMjQwZmZjOWQzN2E5MWY6OWQyNzg3M2EwZWEwNGU5NzhjZTRiYTkyZTNjNWI0OTc="
          }
        }
      )
      .then(tokenData => {
        console.log(tokenData);

      });
  }

  render() {
    console.log(this.props.user)
    return (
      <div>
        <h1> I 'm the home</h1>
      </div>
    );
  }
}
