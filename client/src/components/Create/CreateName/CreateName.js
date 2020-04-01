import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CreateName.scss";

export default class CreateName extends Component {
  render() {
    return (
      <section className="CreateName">
        <div className="spartyName">
          {this.props.party.name ? (
            <h2>{this.props.party.name}</h2>
          ) : (
            <h2>New Sparty</h2>
          )}
        </div>
        <label htmlFor="name">Enter name to your Sparty</label>
        <input
          onChange={e => this.props.updateName(e)}
          type="text"
          placeholder="New Sparty"
        />
        <Link to="/party/event">
          <button
            className="nextButton"
            onClick={() => this.props.handleCreatePlaylist()}
          >
            <h5>Next</h5>
          </button>
        </Link>
      </section>
    );
  }
}
