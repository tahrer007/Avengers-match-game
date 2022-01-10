import "./startPage.css";
import NewPlayer from "./newPlayer/newPlayer";
import { useState } from "react";
import OldPlayer from "./oldPlayer/oldPlayer";
import GameLevels from "./gameLevel/gameLevels";
import playAudio from "../../../js/playSound";

const StartPage = ({ toChooseLevel, getPlayerData }) => {
  const [newPlayer, setNewPlayer] = useState(false);
  const [oldplayer, setOldPlayer] = useState(false);
  const [chooseLevel, setchooseLevel] = useState(false);
  const [playerData, setPlayerData] = useState({});

  const passPlayerData = (
    playerName,
    avatar,
    lastGameScore,
    isOldPlayer,
    id
  ) => {
    setPlayerData({
      name: playerName,
      avatar: avatar,
      lastGameScore: lastGameScore,
      isOldPlayer: isOldPlayer,
      id: id,
    });
    setchooseLevel(true);
  };

  const toPassLevel = (level) => {
    getPlayerData(playerData);
    toChooseLevel(level);
  };
  const handlePlayerType = (playerType) => {
     playAudio("click")
    playerType === "new" ? setNewPlayer(true) : setOldPlayer(true);
  };
  return (
    <div className="startPage">
      <div id="info" className="background"></div>
      <div
        className="choicePlayerType"
        style={{ display: newPlayer || oldplayer ? "none" : "block" }}
      >
        <h1>this is your first time ? </h1>
        <button
          className="buttons choosePlayerBtn"
          id="newplayerBtn"
          onClick={() => handlePlayerType("new")}
        >
          yes
        </button>
        <button
          className="buttons choosePlayerBtn"
          id="oldPlayerBtn"
          onClick={() => handlePlayerType("old")}
        >
          no
        </button>
      </div>
      {newPlayer && !chooseLevel && (
        <NewPlayer sendPlayerData={passPlayerData} />
      )}
      {oldplayer && !chooseLevel && (
        <OldPlayer sendPlayerData={passPlayerData} />
      )}

      {chooseLevel && <GameLevels toChooseLevel={toPassLevel} />}
    </div>
  );
};

export default StartPage;
