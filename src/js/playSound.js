import gameOver from "../assets/sounds/gameOver.mp3";
import click from "../assets/sounds/click.mp3";
import wrong from "../assets/sounds/wrong.mp3";
import correct from "../assets/sounds/correct.mp3";
import flipCard from "../assets/sounds/flipCard.mp3";
import timeEnding from "../assets/sounds/timeEnding.mp3";

const playAudio = (sound) => {
 let audio;
  switch (sound) {
    case "gameOver":
      audio = new Audio(gameOver);
      audio.play();
      break;

    case "click":
       audio = new Audio(click);
        audio.play();
      break;

    case "wrong":
         audio = new Audio(wrong);
        audio.play();
      break;

    case "correct":
      audio = new Audio(correct);
        audio.play();
      break;
      

    case "timeEnding":
      audio = new Audio(timeEnding);
        audio.play();
      break;
      

    default:
       audio = new Audio(flipCard);
      audio.play();
  }

 
};
export default playAudio;
