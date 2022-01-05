import React from "react";
import axios from "axios";
const highestScores = 5;

const processScores = (scoresArr) => {
  if (scoresArr.length < highestScores) return scoresArr;
  else scoresArr.slice(0, 5);
};

class Scores extends React.Component {

   state={
      highestScoresArr :[],
   }
  getHighestScores = async () => {
    let highest;
    try {
      highest = await axios.get(
        `https://61d3f514b4c10c001712bb68.mockapi.io/playersData?sortBy=lastGameScore&order=desc`
      );
      this.setState({
         highestScoresArr :processScores(highest.data) ,
      })
     

    } catch (error) {
      console.log(error);
    }
  };
 componentDidUpdate(){
    console.log(this.state.highestScoresArr)
 }
  componentDidMount() {
   this.getHighestScores();
   
  }
  render() {
    return (
      <div>
        <h1>player heighest Scores : </h1>
        {

        }
      </div>
    );
  }
}

export default Scores;
