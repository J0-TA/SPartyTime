import React, { Component } from "react";
import "./CreateEvent.scss";
import { Link } from "react-router-dom";
import Map from "../../Map/Map";

export default class CreateEvent extends Component {
  render() {
    return (
      <section className="CreateEvent">
        {this.props.party ? (
          <h2>{this.props.party.name}</h2>
        ) : (
          <h2>New Party</h2>
        )}
        <label htmlFor="googleAddress">Main address:</label>
        <input type="search" onChange={e => this.props.updateAddress(e)} />
        <label htmlFor="addressDeatails">Address Details:</label>
        <input
          onChange={e => this.props.updateAddressDetails(e)}
          type="text"
          placeholder="Portal, floor, door,..."
        />
        <label htmlFor="hour">Party starts at:</label>
        <input type="time" onChange={e => this.props.updateHour(e)}></input>
        <Map
          google={this.props.google}
          center={{ lat: 40.4164481, lng: -3.7040234 }}
          height="300px"
          zoom={12}
          party={this.props.party}
        />
          <button onClick={() => this.props.handleCreateParty()}>
            <h5 className="nextButton">Create</h5>
          </button>
      </section>
    );
  }
}
