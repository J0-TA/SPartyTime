import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <Link to="/">
        <header>
          <h1>SParty</h1>
        </header>
      </Link>
    );
  }
}
