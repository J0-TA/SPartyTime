import React , { Component } from "react";
import "./CreateName.scss";

export default class CreateName extends Component {
constructor(){
    super()
    this.state = {
        loggedInUser: this.props.user,
        party: this.props.party
    }

}
    render (){
        return (
            <h1>Party Name</h1>
            <h2>{this.props.party.name}</h2>
        )
    }
}