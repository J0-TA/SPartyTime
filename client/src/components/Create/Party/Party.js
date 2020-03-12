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

    console.log("added");
  }

  componentDidMount() {
    this.getPartyDetails();
  }

  render() {
    console.log(this.state);
    if (this.state.party && this.state.loggedInUser) {
      if (this.state.loggedInUser._id === this.state.party.user) {
        return (
          <section className="Party">
            <nav>
              <button className="no-bg">
                <Link to="/home">⇦ Back</Link>
              </button>
              <button className="no-bg">
                <Link to={"/party/" + this.state.party._id + "/edit"}>
                  Edit
                </Link>
              </button>
              <button
                className="no-bg delete"
                onClick={() => this.props.deleteParty(this.state.partyID)}
              >
                Delete
              </button>
            </nav>
            <p className="spartyName">
              <h1>Sparty</h1>
              <h2>{this.state.party.name}</h2>
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.google.com/maps/search/" + this.state.party.address
              }
              className="spartyDetails"
            >
              Google Maps:{" "}
              <span>
                {this.state.party.address}. {this.state.party.addressDetails}.
              </span>
            </a>
            <div className="buttonContainer">
              <a
                className="spotifyButton"
                href={"spotify:playlist:" + this.state.party.playlist}
              >
                Check the playlist on Spotify
              </a>
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
                  <i className="fab fa-whatsapp"></i>
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
                  <i className="fab fa-facebook"></i>
                  Share via facebook
                </a>
              </div>
            </div>
            <div className="searchContainer">
              <label htmlFor="search">Add next song:</label>
              <input
                className="spotiSearch"
                type="search"
                placeholder="Search..."
                onChange={e => this.searchSongs(e)}
              />
              <p>Matchs: {this.state.foundedSongs.length}</p>
            </div>
            <div className="searchResults">
              {this.state.foundedSongs.map((song, idx) => {
                return (
                  <div className="resultCard" key={idx}>
                    <div className="songInfo">
                      <img
                        src={song.album.images[1].url}
                        alt={song.album.name}
                      />
                      <div className="songName">
                        <h3>{song.name}</h3>
                        <h4>{song.artists[0].name}</h4>
                      </div>
                    </div>
                    <div className="actions">
                      <audio controls>
                        <source src={song.preview_url}></source>
                      </audio>
                      <button onClick={() => this.addSong(song.uri)}>
                        Add to Sparty
                      </button>
                    </div>
                    {/* <a href={song.preview_url}>Play</a> */}
                  </div>
                );
              })}
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
            {this.state.foundedSongs.map((song, idx) => {
              return (
                <div className="resultCard" key={idx}>
                  <img src={song.album.images[1].url} alt={song.album.name} />
                  <h3>{song.name}</h3>
                  <h4>{song.artists[0].name}</h4>
                  <audio controls>
                    <source src={song.preview_url}></source>
                  </audio>
                  <button onClick={() => this.addSong(song.uri)}>
                    Add to Sparty
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      );
    } else return <h1>Loading...</h1>;
  }
}
