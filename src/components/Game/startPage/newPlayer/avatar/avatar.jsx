import "./avatar.css";
import playAudio from "../../../../../js/playSound";

export default function avatar({ avatar, handleChoice }) {
  const handleClick = () => {
    playAudio("click")
    handleChoice(avatar.src);
  };
  return (
    <div className="avatar" onClick={handleClick}>
      <img
        src={process.env.PUBLIC_URL + `${avatar.src}`}
        alt="avatar"
      />
    </div>
  );
}
