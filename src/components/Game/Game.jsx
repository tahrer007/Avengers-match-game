import React from "react";
import "./game.css";
import fillGameArray from "./intalizeTheGame";
import Card from "./card/Card";
import "./card/card.css";
import { isCorrect } from "./js/gameStatus";

class Game extends React.Component {
  state = {
    level: "",
    score: 0,
    lives: 3,
    rightMoves: 0,
    numberOfCards: 16,
    isWin: false,
    isLose: false,
    cardsArr: [],
    eachRoundArr: [],
    gameOver: false,
    correctCards: [],
    flipBackCards: false,
  };

  // undo function : if the player decide to flipback the first card
  undoflipCard = (cardIndex) => {
    console.log("hi from here !!")
    this.setState({ eachRoundArr: [] });
  };
  // alwaysShowCard : to diable flip correct cards
  alwaysShowCard = (card) => {
    let tempArr = this.state.correctCards;
    tempArr.push(card);
    this.setState({ correctCards: tempArr });
  };
  //isThePlayerWin : to check if the player flip all the cards correctly
  isThePlayerWin = (correctCards, numberOfCards) => {
    if (correctCards.length === numberOfCards / 2) {
      this.setState({ isWin: true });
    }
  };
  //processRoundResults : to check if the player flip right cards

  processRoundResults = (cardsArr, eachRoundArr) => {
    let roundResult = isCorrect(cardsArr, eachRoundArr);
    //console.log(cardsArr[eachRoundArr[0]]);

    if (roundResult) {
      this.alwaysShowCard(cardsArr[eachRoundArr[0]]);
      this.isThePlayerWin(this.state.correctCards, this.state.numberOfCards);
    } else {
      this.setState((prevState) => {
        return { lives: prevState.lives - 1, flipBackCards: true };
      });
    }
  };
  //cardFliped : call back from the child(card)  and call functions
  //to check if  : correct ,wrong ,undo , win , lose live , end the game

  cardFliped = (index, card) => {
    let tempArr = [...this.state.eachRoundArr];
    tempArr.push(index);
    this.setState({ eachRoundArr: tempArr, flipBackCards: false });
    if (tempArr.length === 2) {
      this.processRoundResults(this.state.cardsArr, tempArr, index);
      setTimeout(() => {
        this.setState({ eachRoundArr: [] });
      }, 1000);
     
    } 
  };
  componentDidMount() {
    this.setState({
      cardsArr: fillGameArray(this.state.numberOfCards),
    });
    //console.log(this.props.children[1].props.children);
  }
  componentDidUpdate() {
    /*console.log(this.state.correctCards);
    console.log(this.state.eachRoundArr) ;*/
    //console.log("winner status : "+this.state.isWin) ;
    // console.log("live status : "+this.state.lives) ;
    //console.log("flip status : " + this.state.flipBackCards);
    if (!this.state.lives) {
      console.log("you lose the game !! ");
    } else {
      //return (this.state.currentRound.map)
     
    }
  }

  render() {
    return (
      <div className="gameBoardContainer">
        <div
          className="gameBoard"
          style={{
            gridTemplateColumns: `repeat(4, 1fr)`,
            gridTemplateRows: `repeat(4, 1fr)`,
          }}
        >
          {this.state.cardsArr.map((element, index) => (
            <Card
              key={index}
              image={element}
              id={index}
              flipCard={this.cardFliped}
              alreadyGuesed={this.state.correctCards}
              currentRound={this.state.eachRoundArr}
              flipCardBack={this.undoflipCard}
              flipCardsBack={this.state.flipBackCards}
            />
          ))}
        </div>
        <div className="gameData"> game data</div>
      </div>
    );
  }
}

export default Game;
