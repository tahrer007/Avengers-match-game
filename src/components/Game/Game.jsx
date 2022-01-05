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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [gameScore, setgameScore] = useState(0);
  const [FlipedCardCount, setFlipedCardCount] = useState(0);
  const [gameLives, setLives] = useState(3);
  const [disableClick, setdisableClick] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [level, setLevel] = useState({});
  const [playerData, setPlayerData] = useState({});

  //get and handle player data
  const getPlayerData = (player) => {
    setPlayerData(player);
  };
  //suffles cards
  const suffleCards = () => {
    let cardsNumbers = 6;
    let takenImages = getRandomImages(allImages, cardsNumbers);
    const shuffledCards = [...takenImages, ...takenImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setcards(shuffledCards);
  };

  //handle card choice
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

  //check if win the game
  useEffect(() => {
    if (FlipedCardCount) {
      console.log(FlipedCardCount, cards.length);
      if (FlipedCardCount === cards.length / 2) {
        console.log("you won the game ");
        setIsWin(true);
      }
    }
  }, [FlipedCardCount]);
  //check turn results
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
  //get which level from the child (call back function)
  const toChooseLevel = (level) => {
    setStart(true);
    setLevel(level);
  };

  return (
    <div className="gameBoardContainer">
      {!start && (
        <StartPage
          toChooseLevel={toChooseLevel}
          getPlayerData={getPlayerData}
        />
      )}

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
        player name : {playerData.name}
        last scores : {playerData.lastScore}
        game scores : {gameScore} <br />
        game lives : {gameLives} <br />
        {FlipedCardCount}
        <img
          className=""
          src={process.env.PUBLIC_URL + playerData.avatar}
          alt="avatar"
        />
      </div>

      {(isWin || !gameLives) && (
        <GameResult win={isWin} gameScore={gameScore} player={playerData} />
      )}
    </div>
  );
}

export default Game;
