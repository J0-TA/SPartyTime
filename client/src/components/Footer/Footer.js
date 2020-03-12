import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <p>
          Developed at Ironhack by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jcarlosmateo/"
          >
            Jota
          </a>
        </p>
      </footer>
    );
  }
}
