import React from "react";
import "./gameBoard.css";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const getSecondIndex = (arr, min, max) => {
  let randomIndex;

  do {
    randomIndex = getRandomInt(min, max);
  } while (arr[randomIndex]);
  return randomIndex;
};
const fillGameArray = (arrLength) => {
  let val = 0,
    randomInt;
  const numberOfImages = 39;
  let arr = [...Array(arrLength)].map((x) => val);
  let pickedImages = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) continue;

    do {
      randomInt = getRandomInt(1, numberOfImages);
    } while (pickedImages.includes(randomInt));

    pickedImages.push(randomInt);
    arr[i] = randomInt;
    let secondIndex = getSecondIndex(arr, i + 1, arrLength - 1);
    arr[secondIndex] = randomInt;
  }
  return arr;
};

class GameBoard extends React.Component {
  state = {
    level: "",
    score: "",
    lives: 3,
    numberOfCards: 12,
    isWin: false,
    isLose: false,
    cardsArr: [],
  };

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
        <div className="gameBoard"> gameBoard</div>
        <div className="gameData"> game data</div>
      </div>
    );
  }
}

export default GameBoard;
