import React, { Component } from "react";
import "./Home.scss";
import AuthService from "../../services/AuthService";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.user
    };

    this.service = new AuthService();
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

  handleLogOut() {
    console.log(this.state.loggedInUser)

    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
    });
    console.log(this.state.loggedInUser)
  }

  render() {
    // console.log(this.props.user)
    // console.log("lo de abajo es del estado, lo de arriba de las props.user")
    // console.log(this.props.loggedInUser)
    return (
      <section>
        <button onClick={() => this.handleLogOut()}>
          Log Out <span>x</span>
        </button>
        <div>
          <h1> I 'm the home</h1>
        </div>
      </section>
    );
  }
}
