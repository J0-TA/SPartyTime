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
      .post(`users/${user}/playlists`, playlistDetails, {headers: myHeaders})
      .then(response => response.data);
  };
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
