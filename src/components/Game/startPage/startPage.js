import "./startPage.css";
import NewPlayer from "./newPlayer/newPlayer";
import { useState } from "react";
import OldPlayer from "./oldPlayer/oldPlayer";
import GameLevels from "./gameLevel/gameLevels";

const StartPage = ({ toChooseLevel, getPlayerData }) => {
  const [newPlayer, setNewPlayer] = useState(false);
  const [oldplayer, setOldPlayer] = useState(false);
  const [chooseLevel, setchooseLevel] = useState(false);
  const [playerData, setPlayerData] = useState({
    name: "",
    avatar: "",
    LastGameScore: 0,
    isOldPlayer: false,
  });

  const passPlayerData = (
    playerName,
    avatar,
    LastGameScore,
    isOldPlayer,
    id
  ) => {
    setPlayerData({
      name: playerName,
      avatar: avatar,
      LastGameScore: LastGameScore,
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
    playerType === "new" ? setNewPlayer(true) : setOldPlayer(true);
  };
  return (
    <div className="startPage">
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
