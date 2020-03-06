import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import PartyService from "../../services/PartyService"
import "./Create.scss";

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loggedInUser: this.props.user,
          party: {_id: this.props.match.params}
        };
        this.PartyService=new PartyService();
    }

    getPartyDetails = () => {
         this.partyService.getPartyDetails(this.state.party._id)
        .then(party => {
            this.setState({
                ...this.state,
                party: party
            })
        })
    }
    
    componentDidMount(){
        this.getPartyDetails()
        console.log(this.state.party)
    }


    render() {

    return (
      <Switch>
        <Route
          extact
          path="/create/:id/1"
          render={(props) => {
            return <h1>Hola, estoy en create/{props.match.params.id}/1</h1>;
          }}
        />
        <Route
          extact
          path="/create/:id/2"
          render={() => {
            return <h1>Hola, estoy en create/id/2</h1>;
          }}
        />
        <Route
          extact
          path="/create/:id/3"
          render={() => {
            return <h1>Hola, estoy en create/id/3</h1>;
          }}
        />
        <Route
          extact
          path="/create/:id/4"
          render={() => {
            return <h1>Hola, estoy en create/id/4</h1>;
          }}
        />
        <Route
          extact
          path="/create/:id/5"
          render={() => {
            return <h1>Hola, estoy en create/id/5</h1>;
          }}
        />
      </Switch>
    );
  }
}
