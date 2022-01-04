import "./startPage.css";
import NewPlayer from "./newPlayer/newPlayer";
import { useEffect, useState } from "react";

const StartPage = () => {
  const [newPlayer, setNewPlayer] = useState(false);
  const [oldplayer, setOldPlayer] = useState(false);

  useEffect(() => {}, [newPlayer, oldplayer]);

  const passPlayerData = (playerName,avatar,LastGameScore) => {
    console.log( playerName,avatar,LastGameScore);
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
          className=" playerBtn"
          id="newplayerBtn"
          onClick={() => handlePlayerType("new")}
        >
          yes
        </button>
        <button
          className=" playerBtn"
          id="oldPlayerBtn"
          onClick={() => handlePlayerType("old")}
        >
          no
        </button>
      </div>
      {newPlayer && <NewPlayer  sendPlayerData = {passPlayerData}/>}
    </div>
  );
};

export default StartPage;
