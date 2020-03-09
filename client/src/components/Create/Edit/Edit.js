import React, { Component } from "react";
import "./Edit.scss";
import PartyService from "../../../services/PartyService";
import { Redirect, Link } from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.user,
      partyID: window.location.href.split("party/")[1].split("/edit")[0]
    };

    this.partyService = new PartyService();
  }

  getPartyDetails() {
    this.partyService
      .getPartyDetails(this.state.partyID)
      .then(foundedParty =>
        this.setState({ ...this.state, party: foundedParty })
      );
  }

  componentDidMount() {
    this.getPartyDetails();
  }
  render() {
    if (this.state.party && this.state.loggedInUser) {
      if (this.state.loggedInUser._id === this.state.party.user) {
        return (
          <section>
            <nav>
              <button>
                <Link to={"/party/" + this.state.partyID}>Cancel</Link>
              </button>
              <button>
                <Link to={"/party/" + this.state.party._id + "edit"}>
                  Save changes
                </Link>
              </button>
              <button>Delete</button>
            </nav>
            <h1>Sparty | {this.state.party.name}</h1>
            <p>
              Details: {this.state.party.address}.{" "}
              {this.state.party.addressDetails}, | Hour: {this.state.party.hour}
            </p>
            <a href={"spotify:playlist:" + this.state.party.playlist}>
              Check the playlist on Spotify
            </a>
            <button>
              <Link to={"/party/" + this.state.party._id + "share"}>
                <h1>Share</h1>
              </Link>
            </button>
          </section>
        );
      }
    } else return <h1>Loading...</h1>;
  }
}
