import avatarsArr from "../../../../data/avatarsArr";
import Avatar from "./avatar/avatar";
import React from "react";
import { useState, useEffect } from "react";
import "./newPlayer.css";
import Create from "../../../../api/create";
class NewPlayer extends React.Component {
  state = {
    playerName: "",
    playerAvatar: "",
  };
  handleChoice = (avatar) => {
    this.setState({
      playerAvatar: avatar,
    });
  };
  handleNameChange = (event) => {
    this.setState({ playerName: event.target.value });
  };

  addPlayer = () => {
    console.log(this.state.playerAvatar);
    console.log(this.state.playerName);
  };

  render() {
    return (
      <div className="newPlayer">
        <div className="playerInput">
          <label>
            Player name: <br />
            <input
              type="text"
              name="name"
              value={this.playerName}
              onChange={this.handleNameChange}
            />
          </label>
        </div>
        <div className="avatarsBox">
          {avatarsArr.map((avatar, index) => (
            <Avatar
              key={index}
              avatar={avatar}
              handleChoice={this.handleChoice}
            />
          ))}
        </div>
        <input type="submit" value="done" onClick={this.addPlayer} />
      </div>
    );
  }
}
export default NewPlayer;
