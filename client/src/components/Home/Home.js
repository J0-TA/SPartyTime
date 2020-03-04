import React, { Component } from "react";
import AuthService from "../API/AuthService";
import axios from "axios";
import querystring from "querystring";
import "./Home.scss";

export default class Home extends Component {
  constructor() {
    super();

    this.service = new AuthService();
  }

  test() {
    // this.service.loggedin()
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
    return (
      <div>
        <h1> I 'm the home</h1>{" "}
        <button onClick={() => this.test()}> Test who I am </button>{" "}
      </div>
    );
  }
}
