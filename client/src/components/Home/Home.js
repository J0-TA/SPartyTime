import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import PartyService from "../../services/PartyService";
import { Redirect, Link } from "react-router-dom";
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

  getUserParties = () => {
    this.partyService.getAllParties().then(allParties => {
      this.setState(
        {
          userParties: allParties.filter(
            party => party.user === this.state.loggedInUser._id
          )
        },
        this.updateAccessToken()
      );
    });
  };

  updateAccessToken() {
    let newState = { ...this.state };
    newState.userParties = newState.userParties.map(
      party => (party.userToken = newState.loggedInUser.token)
    );
    this.setState(newState);
  }

  componentDidMount() {
    this.getUserParties();
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <section className="Home">
          <button className="Logout" onClick={() => this.logout()}>
            Log Out x
          </button>
          <div className="user">
            <div className="userInfo">
              <img
                src={this.state.loggedInUser.photo}
                alt={this.state.loggedInUser.username}
              />
              <h2>{this.state.loggedInUser.spotifyID.toUpperCase()}</h2>
            </div>
            <div className="newSparty">
              <Link to="/party/name">
                <button>
                  <h2>New Sparty</h2>
                </button>
              </Link>
            </div>
          </div>
          <div className="parties">
          {this.state.userParties.length !== 0 ? (
              <p>
                Check your Sparties (Total: {this.state.userParties.length})
              </p>
            ) : (
              <p>You haven't active Sparties</p>
            )}
            <div className="partiesSlider">
              {this.state.userParties.reverse().map((party, idx) => {
                return (
                  <Link to={"/party/" + party._id} key={idx}>
                    <div className="partyIcon">
                      <h5>{party.name}</h5>
                      <img src={party.image_url} alt={party.name} />
                    </div>
                  </Link>
                );
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
