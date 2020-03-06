import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import PartyService from "../../services/PartyService";
import { Redirect } from "react-router-dom";
import "./Home.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.user,
      userParties: []
    };
    this.partyService = new PartyService();
    this.authService = new AuthService();
  }
  logout = () => {
    this.authService.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  getAllParties = () => {
    this.partyService.getAllParties().then(allParties => {
      this.setState({
        userParties: allParties.filter(
          party => party.user === this.state.loggedInUser._id
        )
      });
    });
  };

  componentDidMount() {
    this.getAllParties();
  }

  render() {
    if (this.state.loggedInUser && this.state.userParties.length !== 0) {
      return (
        <section className="Home">
          <button className="Logout" onClick={() => this.logout()}>
            Log Out <span>x</span>
          </button>
          <div className="dashboard">
            <div className="userInfo">
              <h2> Welcome {this.state.loggedInUser.spotifyID}</h2>
              <img
                src={this.state.loggedInUser.photo}
                alt={this.state.loggedInUser.username}
              />
            </div>
            <div className="partiesSlider">
              {this.state.userParties.forEach(party => {
                return (
                <div className="partyIcon">
                  <img src={party.photo} alt={party.name} />
                  <h5>{party.name}</h5>
                </div>);
              })}
            </div>
          </div>
        </section>
      );
    } else {
      return <Redirect to="/" />;
    }
  } 
}
