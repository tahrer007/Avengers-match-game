import React from "react";
import "./oldPlayer.css";
import "../../../../app.css";
import axios from "axios";
import SearchResults from "./searchResults/searchResults";
class OldPlayer extends React.Component {
  state = {
    lastGameScore: 10,
    isPlayerFound: null,
    searchInput: "",
    typingTimeout: 0,
    playersArr: [],
    searchDone: false,
  };
  handleChoice = (player) => {
    const isOldPlayer = true;
    console.log();
    this.props.sendPlayerData(
      player.name,
      player.avatar,
      player.lastGameScore,
      isOldPlayer,
      player.id
    );
  };
  handleTypingChange = (event) => {
    this.setState({ searchInput: event.target.value });
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }
    this.setState({
      typingTimeout: setTimeout(() => {
        this.searchPlayerData(this.state.searchInput);
      }, 500),
    });
  };

  searchPlayerData = async (inputValue) => {
    let searchResults;
    try {
      searchResults = await axios.get(
        `https://61d3f514b4c10c001712bb68.mockapi.io/playersData?name=${inputValue}`
      );
      if (!searchResults.data.length)
        this.setState({ isPlayerFound: false, searchDone: true });
      else {
        this.setState({
          isPlayerFound: true,
          playersArr: searchResults.data,
          searchDone: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="oldPlayer">
        <div className="playerInput">
          <h1> type your name: </h1>

          <input
            type="text"
            name="name"
            value={this.state.searchInput}
            onChange={this.handleTypingChange
            }
            placeholder="type your name"
          />
        </div>
        <div
          className="playerNotFound"
          style={{
            display:
              !this.state.isPlayerFound && this.state.searchDone
                ? "block"
                : "none",
          }}
        >
          <h2>player not found type again !!</h2>
        </div>
        {
          <div className="playersList">
            {this.state.playersArr.map((player) => (
              <SearchResults
                key={player.id}
                player={player}
                handleChoice={this.handleChoice}
              />
            ))}
          </div>
        }
      </div>
    );
  }
}
export default OldPlayer;
