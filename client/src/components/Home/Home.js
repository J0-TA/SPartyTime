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
      userParties: [],
      newParty: null
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

  handleCreate(){
    this.partyService.createParty(this.state.loggedInUser._id).then(createdParty => {
      this.setState({newParty: createdParty})
    })
  }

  componentDidMount() {
    this.getAllParties();
  }

  render() {
    if(this.state.newParty)
    return <Redirect to={"/create/"+this.state.newParty._id+"/1"}/>
    if (this.state.loggedInUser) {
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
              {this.state.userParties.map(party => {
                return (
                  <div className="partyIcon">
                    <img src={party.image_url} alt={party.name} height="100"/>
                    <h5>{party.name}</h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="newParty">
          <button onClick={()=> this.handleCreate()}>
              <h2>Create a new Party</h2>
          </button>
          </div>
        </section>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
