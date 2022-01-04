import React from "react";
import "./game.css";
import Card from "./card/Card";
import "./card/card.css";
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
  const [gameScore, setScores] = useState(0);

  //suffles cards
  const suffleCards = () => {
    let cardsNumbers = 12;
    let takenImages = getRandomImages(allImages, cardsNumbers);

    const shuffledCards = [...takenImages, ...takenImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setcards(shuffledCards);
  };

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <div className="gameBoardContainer">
      <div
        className="gameBoard"
        style={{
          gridTemplateColumns: `repeat(4, 1fr)`,
          gridTemplateRows: `repeat(4, 1fr)`,
        }}
      ></div>
      <div className="gameData">
        {" "}
        game data
        <button onClick={() => suffleCards()}> hi tahrer !! </button>
      </div>
    </div>
  );
}

export default Game;
