import "./gameResult.css";
import { useEffect } from "react";
import Create from "../../../api/create";
import UpdateData from "../../../api/update";

export default function GameResult({ win, gameScore, player }) {
  useEffect(() => {
    if (player.isOldPlayer) {
      UpdateData(player.id, gameScore);
    } else {
      Create(player.name, player.avatar, gameScore);
    }
  }, []);

  return (
    <div className="gameResult">
      {"win : " + win}
      {"game score : " + gameScore}
    </div>
  );
}
