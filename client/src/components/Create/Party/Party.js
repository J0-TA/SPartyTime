import React, { Component } from "react";
import "./Party.scss";
import PartyService from "../../../services/PartyService";
import { Link } from "react-router-dom";
import SpotifyService from "../../../services/SpotifyService";

export default class Party extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.user,
      partyID: window.location.href.split("party/")[1],
      foundedSongs: []
    };

    this.partyService = new PartyService();
    this.spotifyService = new SpotifyService();
  }

  getPartyDetails() {
    this.partyService
      .getPartyDetails(this.state.partyID)
      .then(foundedParty =>
        this.setState({ ...this.state, party: foundedParty })
      );
  }

  searchSongs(e) {
    if (e.target.value === "")
      return this.setState({ ...this.state, foundedSongs: [] });
    this.spotifyService
      .searchSongs(e.target.value, this.state.party.userToken)
      .then(foundedSongs =>
        this.setState({
          ...this.state,
          foundedSongs: foundedSongs.tracks.items
        })
      );
  }
  addSong(song) {
    this.spotifyService.addSongToQueue(song, this.state.party.userToken);

    this.spotifyService.addSongToPlaylist(
      song,
      this.state.party.playlist,
      this.state.party.userToken,
      this.state.party.user
    );


    console.log('added')
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
                <Link to="/home">Back</Link>
              </button>
              <button>
                <Link to={"/party/" + this.state.party._id + "/edit"}>
                  Edit
                </Link>
              </button>
              <button
                onClick={() => this.props.deleteParty(this.state.partyID)}
              >
                Delete
              </button>
            </nav>
            <h1>Sparty | {this.state.party.name}</h1>
            <p>
              Details: {this.state.party.address}.
              {this.state.party.addressDetails}, | Hour: {this.state.party.hour}
            </p>
            <a href={"spotify:playlist:" + this.state.party.playlist}>
              Check the playlist on Spotify
            </a>
            <label htmlFor="search">Search: </label>
            <input
              className="spotiSearch"
              type="search"
              placeholder="Add next song to the queue"
              onChange={e => this.searchSongs(e)}
            />
            <div className="searchResults">
              {this.state.foundedSongs.map((song,idx) => {
                return (
                  <React.Fragment key={idx}>
                    <img src={song.album.images[1].url} alt={song.album.name} />
                    <h3>{song.name}</h3>
                    <h4>{song.artists[0].name}</h4>
                    <audio controls>
                      <source src={song.preview_url}></source>
                    </audio>
                    <button onClick={() => this.addSong(song.uri)}>
                      Add to Sparty
                    </button>
                    {/* <a href={song.preview_url}>Play</a> */}
                  </React.Fragment>
                );
              })}
            </div>
            <div className="socialShare">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp"
                href={
                  "https://web.whatsapp.com/send?text=Click to Sparty! " +
                  encodeURI(window.location.href)
                }
              >
                Share via Whatsapp
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
                href={
                  "https://www.facebook.com/sharer/sharer.php?u=" +
                  window.location.href
                }
              >
                Share via facebook
              </a>
            </div>
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
