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
    console.log(this.state)
    if (this.state.loggedInUser) {
      return (
        <section className="Home">
          <button className="Logout" onClick={() => this.logout()}>
            Log Out x
          </button>
          <div className="dashboard">
            <div className="userInfo">
              <h2> Welcome, {this.state.loggedInUser.spotifyID.toUpperCase()}</h2>
              <img
                src={this.state.loggedInUser.photo}
                alt={this.state.loggedInUser.username}
              />
            </div>
            {this.state.userParties.length !== 0 ? (
                <p className="parties">Check your Sparties (Total: {this.state.userParties.length})</p>
              ) : (<p className="parties">You haven't active Sparties</p>)}
            <div className="partiesSlider">
              {this.state.userParties.map((party, idx) => {
                return (
                  <Link to={"/party/" + party._id} key={idx}>
                    <div className="partyIcon">
                      <img
                        src={party.image_url}
                        alt={party.name}
                      />
                      <h5>{party.name}</h5>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="newSparty">
            <Link to="/party/name">
              <button>
                <h2>New Sparty</h2>
              </button>
            </Link>
          </div>
        </section>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
