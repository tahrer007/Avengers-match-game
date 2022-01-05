import React from "react";
import "./oldPlayer.css";
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
  handleChoice =(player)=>{
    const isOldPlayer = true ; 
    this.props.sendPlayerData(player.name, player.avatar, player.LastGameScore, isOldPlayer);
  }
  handleTypingChange = (event) => {
    this.setState({ searchInput: event.target.value });
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }
    this.setState({
      typingTimeout: setTimeout(() => {
        this.searchPlayerData(this.state.searchInput);
      }, 1000),
    });
  };

  searchPlayerData = async (inputValue) => {
    //const chooseLevel = true;
    console.log(inputValue);
    let searchResults;
    try {
      searchResults = await axios.get(
        `https://61d3f514b4c10c001712bb68.mockapi.io/playersData?name=${inputValue}`
      );
      console.log(searchResults.data);
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

  componentDidUpdate() {
    console.log(this.state.isPlayerFound, this.state.playersArr);
  }

  render() {
    return (
      <div className="oldPlayer">
        <div className="playerInput">
          <label>
            type your name: <br />
            <input
              type="text"
              name="name"
              value={this.state.searchInput}
              onChange={this.handleTypingChange}
              placeholder="type your name"
            />
          </label>
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
          player not found type again !!
        </div>
        {
          <div className="playersList">
            <ul>
              {this.state.playersArr.map((player) => (
                <SearchResults key={player.id} player={player} handleChoice={this.handleChoice} />
              ))}
            </ul>
          </div>
        }
      </div>
    );
  }
}
export default OldPlayer;
