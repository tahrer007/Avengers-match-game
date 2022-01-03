
export const isCorrect = (cardsArr, eachRoundArr) => {
    let firstCard = eachRoundArr[0];
    let secondCard = eachRoundArr[1];
    if (cardsArr[firstCard] === cardsArr[secondCard]) {
      return true;
    } else return false;
  };

