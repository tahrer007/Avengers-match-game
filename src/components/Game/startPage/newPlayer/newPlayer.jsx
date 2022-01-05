import avatarsArr from "../../../../data/avatarsArr";
import Avatar from "./avatar/avatar";
import React from "react";
import "./newPlayer.css";
import Create from "../../../../api/create";
import axios from "axios";
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

  addPlayer = async (e, name, avatar) => {
    const chooseLevel = true ; 
    
    e.preventDefault();
    let lastGameScore = 0;
    this.props.sendPlayerData(name,avatar,lastGameScore,false,chooseLevel)

    try {
      await axios.post(
        `https://61d3f514b4c10c001712bb68.mockapi.io/playersData`,
        {
          name,
          avatar,
          lastGameScore,
        }
      );
    } catch (error) {
      console.log("the error is : " + error);
    }

    //
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
              value={this.state.playerName}
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
        <input
          className={(!this.state.playerAvatar || !this.state.playerName)?'disableClick':"clickable"}
          type="submit"
          value="done"
          onClick={(e) =>
            this.addPlayer(e, this.state.playerName, this.state.playerAvatar)
          }
        />
      </div>
    );
  }
}
export default NewPlayer;
