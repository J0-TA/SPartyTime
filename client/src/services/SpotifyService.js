import axios from "axios";

export default class SpotifyService {
  constructor() {
    this.service = axios.create({
      baseURL: `https://api.spotify.com/v1/`
    });
  }

  createPlaylist = (playlistDetails, user, accessToken) => {
    const myHeaders = {
      "Authorization": "Bearer " + accessToken
    }
    return this.service
      .post(`users/${user}/playlists`, playlistDetails, {
        headers: myHeaders
      })
      .then(response => response.data);
  };

  searchSongs = (query, accessToken) => {
    const myHeaders = {
      "Authorization": "Bearer " + accessToken
    }
    return this.service
      .get(`search?q=${query}&type=track&limit=20`, {
        headers: myHeaders
      })
      .then(response => response.data)
  }
  addSongToPlaylist = (song, playlist, accessToken, user) => {
    console.log(song)
    console.log(playlist)
    const myHeaders = {
      "Authorization": "Bearer " + accessToken
    }
    const songToAdd = {
      "uris": [song]
    }

    this.service
      .post(`users/${user}/playlists/${playlist}/tracks`, songToAdd, {
        headers: myHeaders
      })
      .then(response => response.data)
  }
  addSongToQueue = (song, accessToken) => {

    const myHeaders = {
      "Authorization": "Bearer " + accessToken
    }

    const body = {}
    this.service
      .post(`me/player/queue?uri=${song}`, {
        body: body
      }, {
        headers: myHeaders
      })
      .then(response => response.data)
  }

}


// Esta es la megapetición a axios que se trabajó con Dani, puede que tenga que usarse para
// refrescar el token y mantener la sesión activa más de una hora

// test() {
//   axios
//     .post(
//       "https://accounts.spotify.com/api/token",
//       querystring.stringify({
//         grant_type: "authorization_code",
//         code: window.location.href.split("code=")[1],
//         redirect_uri: `${process.env.REACT_APP_URL}/home/callback`
//       }),
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           Authorization:
//             "Basic YjZiNWExOTRlNmQzNDk2MWIxMjQwZmZjOWQzN2E5MWY6OWQyNzg3M2EwZWEwNGU5NzhjZTRiYTkyZTNjNWI0OTc="
//         }
//       }
//     )
//     .then(tokenData => {
//       console.log(tokenData);

//     });
// }
// ---------------------------------------------------------