import React, { Component } from "react";
import "./Party.scss";
import PartyService from "../../../services/PartyService";
import { Link } from "react-router-dom";

export default class Party extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.user,
      partyID: window.location.href.split("party/")[1]
    };

    this.partyService = new PartyService();
  }

  getPartyDetails() {
    this.partyService
      .getPartyDetails(this.state.partyID)
      .then(foundedParty =>
        this.setState({ ...this.state, party: foundedParty})
      );
  }

  componentDidMount() {
    this.getPartyDetails();
  }
  render() {
    console.log(this.state);
    if (
      this.state.party &&
      this.state.loggedInUser){
        if (this.state.loggedInUser._id === this.state.party.user) {
          return (
            <section>
              <nav>
                <button><Link to="/home">Back</Link></button>
                <button><Link to={"/party/" + this.state.party._id + "/edit"}>Edit</Link></button>
                <button onClick={() => this.props.deleteParty(this.state.partyID)}>Delete</button>
              </nav>
              <h1>Sparty | {this.state.party.name}</h1>
              <p>Details: {this.state.party.address}. {this.state.party.addressDetails}, | Hour: {this.state.party.hour}</p>
              <a href={"spotify:playlist:" + this.state.party.playlist}>
                Check the playlist on Spotify
              </a>
              <button><Link to={"/party/" + this.state.party._id + "/share"}><h1>Share</h1></Link></button>
            </section>
          );
        }
      } else if (this.state.party) {
      return (
        <section>
          <h1>Sparty Name: {this.state.party.name}</h1>
          <p>Main Address: {this.state.party.address}</p>
          <p>Details: {this.state.party.addressDetails}</p>
          <p>Hour: {this.state.party.hour}</p>
          <a href={"spotify:playlist:" + this.state.party.playlist}>
            Check the playlist on Spotify
          </a>
        </section>
      );
    } else return <h1>Loading...</h1>;
  }
}
