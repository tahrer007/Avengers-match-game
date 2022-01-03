import React from "react";
import "./game.css";
import fillGameArray from "./intalizeTheGame";
import Card from "./card/Card";
import "./card/card.css"

class Game extends React.Component {
  state = {
    level: "",
    score: "",
    lives: 3,
    numberOfCards: 16,
    isWin: false,
    isLose: false,
    cardsArr: [],
    eachRound :[]
  };

  flipCard=(index,element)=>{

    console.log(index,element) ;
    

  } 
   componentDidMount() {
    this.setState({
      cardsArr: fillGameArray(this.state.numberOfCards),
    });
  }
  componentDidUpdate() {
    console.log(this.state.cardsArr);
  }

  render() {
    return (
      <div className="gameBoardContainer">
        <div className="gameBoard" style={{gridTemplateColumns: `repeat(4, 1fr)`, gridTemplateRows: `repeat(4, 1fr)`}}>
        {this.state.cardsArr.map((element, index) => (
            <Card
              key={index}
              image={element}
              id={index}
              callBack={()=>this.flipCard(index,element)}
            />
          ))}
        </div>
        <div className="gameData"> game data</div>
      </div>
    );
  }
}

export default Game;
