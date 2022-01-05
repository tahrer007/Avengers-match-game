import React from "react";
import "./oldPlayer.css";
import axios from "axios";
class OldPlayer extends React.Component {
  state = {
    lastGameScore: 10,
    isPlayerFound: null,
    searchInput: "",
    typingTimeout: 0,
    playersArr : []
  };
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
      if (!searchResults.data.length) this.setState({ isPlayerFound: false });
      else{
          this.setState({
            isPlayerFound: true , 
            playersArr : searchResults.data , 

          })
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(){
    console.log(this.state.isPlayerFound,this.state.playersArr)
  }

  render() {
    return (
      <div className="oldPlayer">
        <div
          className="playerInput"
          style={{ display: this.state.isPlayerFound ? "none" : "block" }}
        >
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

          <input type="submit" value="done" />
        </div>
        <div className={(!this.state.isPlayerFound)?"playerNotFound":""}> 
        { "player not found type again !!"} </div>
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
