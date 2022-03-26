import avatarsArr from "../../../../data/avatarsArr";
import Avatar from "./avatar/avatar";
import React from "react";
import "./newPlayer.css";
import "../../../../app.css";
import playAudio from "../../../../js/playSound";
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

  addPlayer = (e, name, avatar) => {
    const isOldPlayer = false;
    e.preventDefault();
    let lastGameScore = 0;
    this.props.sendPlayerData(name, avatar, lastGameScore, isOldPlayer);

    //
  };

  render() {
    return (
      <div className="newPlayer">
        <div className="playerInputBox">
          <h1> enter your nickName: </h1>
          <input
            type="text"
            name="name"
            value={this.state.playerName}
            onChange={this.handleNameChange}
            maxLength={10}
          />
        </div>
        <div className="avatarsTEXTbox">
          <h1> choose your avatar </h1>

          <div className="avatarsBox">
            {avatarsArr.map((avatar, index) => (
              <Avatar
                key={index}
                avatar={avatar}
                handleChoice={this.handleChoice}
              />
            ))}
          </div>
        </div>

        <input
          className={
            !this.state.playerAvatar || !this.state.playerName
              ? " buttons disableClick "
              : " buttons clickable"
          }
          type="submit"
          value="done"
          onClick={(e) => {
            playAudio("click");
            this.addPlayer(e, this.state.playerName, this.state.playerAvatar);
          }}
        />
      </div>
    );
  }
}
export default NewPlayer;
