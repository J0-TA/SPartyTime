import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
        <header className="Header">
      <Link to="/">
          <h1>SPartyTime</h1>
      </Link>
        </header>
    );
  }
}
