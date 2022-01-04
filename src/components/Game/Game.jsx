import React from "react";
import Card from "./card/Card";
import GameResult from "./gameResult/gameResult";
import UpdateData from "../../api/update";
import StartPage from "./startPage/startPage";
import "./game.css";
import "./card/card.css";
import allImages from "../../data/imagesArr";
import getRandomImages from "./js/gatCards";
import { useState, useEffect } from "react";

/*const easy = 12;
const intermediate = 24;
const hard = 48;*/

/*const cardsINrow = (level) => {
  switch (level) {
    case "easy": {
      return easy / 3;
    }
    case "intermediate": {
      return intermediate / 4;
    }

    case "hard": {
      return hard / 6;
    }
    default: {
      return hard / 6;
    }
  }
};*/


function Game() {
  const [cards, setcards] = useState([]);
  const [start, setStart] = useState(false);
  const [gameScore, setgameScore] = useState(0);
  const [FlipedCardCount, setFlipedCardCount] = useState(0);
  const [gameLives, setLives] = useState(3);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disableClick, setdisableClick] = useState(false);
  const [isWin, setIsWin] = useState(false);

  //suffles cards
  const suffleCards = () => {
    let cardsNumbers = 6;
    let takenImages = getRandomImages(allImages, cardsNumbers);
    const shuffledCards = [...takenImages, ...takenImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setcards(shuffledCards);
  };

  //handle choice
  const handleChoice = (card) => {
    //console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  //start the game
  useEffect(() => {
    suffleCards();
  }, []);
  //end the game and call update
  useEffect(() => {
    if (isWin || !gameLives) {
      UpdateData("1", "3333333333333333", "tahrer!!");
    }
  }, [isWin, gameLives]);

  //win the game
  useEffect(() => {
    if (FlipedCardCount) {
      console.log(FlipedCardCount, cards.length);
      if (FlipedCardCount === cards.length / 2) {
        console.log("you won the game ");
        setIsWin(true);
      }
    }
  }, [FlipedCardCount]);
  //process choice
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setdisableClick(true);

      if (choiceOne.src === choiceTwo.src) {
        setcards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setgameScore((prevScore) => prevScore + 100);
        setFlipedCardCount((prevCount) => prevCount + 1);
        resetChioces();
      } else {
        setLives((prevLives) => prevLives - 1);
        resetChioces();
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices
  const resetChioces = () => {
    setTimeout(() => {
      setdisableClick(false);
      setChoiceOne(null);
      setChoiceTwo(null);
    }, 1000);
  };

  return (
    <div className="gameBoardContainer">
      {  !start && <StartPage />}
      
      <div
        className="cardsBoard"
        style={{
          gridTemplateColumns: `repeat(4, 1fr)`,
          gridTemplateRows: `repeat(6, 1fr)`,
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disableClick}
          />
        ))}
      </div>

      <div className="gameData">
        game scores : {gameScore} <br />
        game lives : {gameLives} <br />
        {FlipedCardCount}
      </div>

      {(isWin || !gameLives) && (
        <GameResult win={isWin} gameScore={gameScore} />
      )}
    </div>
  );
}

export default Game;
