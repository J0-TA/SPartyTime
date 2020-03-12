import React, { Component } from "react";
import PartyService from "../../../services/PartyService";
import { Link } from "react-router-dom";
import "./Edit.scss";

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

  updateParty(e, field) {
    let newState = {...this.state};
    newState.party[field] = e.target.value;
    this.setState(newState);
  }
  saveChanges(){
    this.partyService.updateParty(this.state.partyID, this.state.party)
    .then(_ => this.props.history.push("/party/" + this.state.partyID))
  }
  componentDidMount() {
    this.getPartyDetails();
  }
  render() {
    console.log(this.state);
    if (this.state.party && this.state.loggedInUser) {
      if (this.state.loggedInUser._id === this.state.party.user) {
        return (
          <section>
            <nav>
              <button>
                <Link to={"/party/" + this.state.partyID}>Cancel</Link>
              </button>
              <button
                onClick={() => this.props.deleteParty(this.state.partyID)}
              >
                Delete
              </button>
            </nav>

            <label>Sparty</label>
            <input
              type="text"
              placeholder={this.state.party.name}
              onChange={e => this.updateParty(e, "name")}
            />
            <label>Details</label>
            <input
              type="text"
              placeholder={this.state.party.address}
              onChange={e => this.updateParty(e, "address")}
            />
            <input
              type="text"
              placeholder={this.state.party.addressDetails}
              onChange={e => this.updateParty(e, "addressDetails")}
            />
            <button>
                <h1 onClick={()=> this.saveChanges()}>Save changes</h1>
            </button>
          </section>
        );
      }
    } else return <h1>Loading...</h1>;
  }
}
