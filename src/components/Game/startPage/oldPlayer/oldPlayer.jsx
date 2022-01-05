import React from "react";
import "./oldPlayer.css";
import axios from "axios";
class OldPlayer extends React.Component {
  state = {
    playerName: "tahrer",
    playerAvatar: "/images/avatars/4.PNG",
    lastGameScore: 10,
    isPlayerFound: true,
  };
  handleNameChange = (event) => {
    console.log(this.state.playerName);
    this.setState({ playerName: event.target.value });
  };

  getPlayerData = async (e) => {
    const chooseLevel = true ; 
    e.preventDefault();
    //console.log(this.state.playerName)
    this.props.sendPlayerData(this.state.playerName, this.state.playerAvatar, this.state.lastGameScore,true,chooseLevel);

    try {
    } catch (err) {
      console.log("player not found ,try again");
    }
  };

  render() {
    return (
      <div className="oldPlayer">
        <div
          className="playerInput"
          style={{ display: this.state.isPlayerFound ? "none" : "block" }}
        >
          <label>
            Player name: <br />
            <input
              type="text"
              name="name"
              value={this.state.playerName}
              onChange={this.handleNameChange}
            />
          </label>

          <input
            type="submit"
            value="done"
            onClick={(e) => this.getPlayerData(e)}
          />
        </div>
        <div
          className="playerData"
          style={{ display: this.state.isPlayerFound ? "block" : "none" }}
        >
          <h1>Welcome back {this.state.playerName}</h1>
          <img
            className=""
            src={process.env.PUBLIC_URL + this.state.playerAvatar}
            alt="avatar"
          />
          <h3> you last score is : {this.state.lastGameScore}</h3>
        </div>
      </div>
    );
  }
}
export default OldPlayer;
