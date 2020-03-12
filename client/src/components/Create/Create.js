import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import PartyService from "../../services/PartyService";
import CreateName from "./CreateName/CreateName";
import CreateEvent from "./CreateEvent/CreateEvent";
import Party from "./Party/Party";
import SpotifyService from "../../services/SpotifyService";
import Edit from "./Edit/Edit";
import "./Create.scss";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.user,
      party: {
        user: this.props.user._id,
        userToken: this.props.user.token
      },
      playlistDetails: {
        public: false,
        collaborative: true
      },
    };
    this.partyService = new PartyService();
    this.spotifyService = new SpotifyService();
  }

  updateName(e) {
    let newState = {
      ...this.state
    };
    newState.party.name = e.target.value;
    newState.playlistDetails.name = e.target.value;
    newState.playlistDetails.description =
      e.target.value + ". Made with SpartyTime";
    this.setState(newState);
  }
  updateAddress(e) {
    let newState = {
      ...this.state
    };
    newState.party.address = e.target.value;
    this.setState(newState);
  }
  updateAddressDetails(e) {
    let newState = {
      ...this.state
    };
    newState.party.addressDetails = e.target.value;
    this.setState(newState);
  }

  createPlaylist() {
    let newState = {
      ...this.state
    };
    this.spotifyService
      .createPlaylist(
        this.state.playlistDetails,
        this.state.loggedInUser.spotifyID,
        this.state.loggedInUser.token
      )
      .then(createdPlaylist => {
        newState.party.playlist = createdPlaylist.id;
        newState.party.image_url = createdPlaylist.images[0];
      });
    this.setState(newState);
  }
  handleCreateParty() {
    this.partyService.createParty(this.state.party).then(createdParty =>
      this.setState(
        {
          ...this.state,
          party: createdParty,
          partyCreated: true
        },
        () => this.props.history.push("/party/" + createdParty._id)
      )
    );
  }

  deleteParty(id) {
    this.partyService
      .deleteParty(id)
      .then(_ => this.props.history.push("/home"));
    
  }

  render() {
    return (
      <Switch>
        <Route
          extact
          path="/party/name"
          render={() => {
            return (
              <CreateName
                updateName={e => this.updateName(e)}
                handleCreatePlaylist={() => this.createPlaylist()}
                party={this.state.party}
              ></CreateName>
            );
          }}
        />
        <Route
          extact
          path="/party/event"
          render={() => {
            return (
              <CreateEvent
                updateAddress={e => this.updateAddress(e)}
                updateAddressDetails={e => this.updateAddressDetails(e)}
                party={this.state.party}
                handleCreateParty={() => this.handleCreateParty()}
              ></CreateEvent>
            );
          }}
        />
        <Route
          extact
          path="/party/:id/edit"
          render={() => {
            return (
              <Edit
                user={this.state.loggedInUser}
                deleteParty={id => this.deleteParty(id)}
                history={this.props.history}
              ></Edit>
            );
          }}
        />
        <Route
          extact
          path="/party/:id"
          render={() => {
            return (
              <Party
                user={this.state.loggedInUser}
                deleteParty={id => this.deleteParty(id)}
              ></Party>
            );
          }}
        />
      </Switch>
    );
  }
}

export default withRouter(Create);
