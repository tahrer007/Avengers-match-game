import "./startPage.css";

import NewPlayer from "./newPlayer/newPlayer";
import react from "react";
import { useEffect, useState } from "react";

const StartPage = () => {
  const [newPlayer, setNewPlayer] = useState(false);
  const [oldplayer, setOldPlayer] = useState(false);

  useEffect(() => {
  
  }, [newPlayer, oldplayer]);

  const handleChoice = (avatar) => {
    console.log("hi from main ", avatar);
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
      {newPlayer && <NewPlayer />}
    </div>
  );
};

export default StartPage;
