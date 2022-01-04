import React from "react";
import Card from "./Card";
import "./game.css";
import "./card.css";

import allImages from "../../data/imagesArr";

import { useState, useEffect } from "react";

const easy = 12;
const intermediate = 24;
const hard = 48;

const cardsINrow = (level) => {
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
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

function getRandomImages(allImages, gameCardsNum) {
  let len = allImages.length,
    taken = [];
  let tempArr = [];
  let random;

  while (gameCardsNum--) {
    do {
      random = getRandomInt(0, len - 1);
    } while (tempArr.includes(random));
    taken.push(allImages[random]);
    tempArr.push(random);
  }
  return taken;
}
function Game() {
  const [cards, setcards] = useState([]);
  const [gameScore, setScore] = useState(0);
  const [gameLives, setLives] = useState(3);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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
  //process choice
  useEffect(() => {
    if (choiceOne && choiceTwo) {
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

        setScore((prevScore) => prevScore + 100);
        resetChioces();
      } else {
        setLives((prevLives) => prevLives - 1);
        resetChioces();
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices
  const resetChioces = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  console.log(cards)

  return (
    <div className="gameBoardContainer">
      <div
        className="cardsBoard"
        style={{
          gridTemplateColumns: `repeat(4, 1fr)`,
          gridTemplateRows: `repeat(6, 1fr)`,
        }}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>

      <div className="gameData">
        game scores : {gameScore} <br />
        game lives : {gameLives} <br />
        <button onClick={suffleCards}> hi tahrer !! </button>
      </div>
    </div>
  );
}

export default Game;
