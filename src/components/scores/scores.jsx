import React from "react";
import axios from "axios";
import "./scores.css";
import "../Game/startPage/oldPlayer/searchResults/sreachResults.css"
const highestScores = 5;

const processScores = (scoresArr) => {
  if (scoresArr.length < highestScores) return scoresArr;
  else return scoresArr.slice(0, 5);
};

class Scores extends React.Component {
  state = {
    highestScoresArr: [],
  };
  getHighestScores = async () => {
    let highest;
    try {
      highest = await axios.get(
        `https://61d3f514b4c10c001712bb68.mockapi.io/playersData?sortBy=lastGameScore&order=desc`
      );
      this.setState({
        highestScoresArr: processScores(highest.data),
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidUpdate() {
    console.log(this.state.highestScoresArr);
  }
  componentDidMount() {
    this.getHighestScores();
  }
  render() {
    return (
      <div className="topScores">
        <h1>player heighest Scores : </h1>
        <div className="scoresList">
          {this.state.highestScoresArr.map((player) => (
            <div className="playerCard" key={player.id}>
              <div className="avatarBox">
                <img
                  className="avatarImg"
                  src={process.env.PUBLIC_URL + `${player.avatar}`}
                  alt="avatar"
                />
              </div>

              <div className="playerName">
                <h1>{player.name}</h1>
                <h1>{player.lastGameScore}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Scores;
