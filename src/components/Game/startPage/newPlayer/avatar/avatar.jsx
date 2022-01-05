import "./avatar.css";

export default function avatar({ avatar, handleChoice }) {
  const handleClick = () => {
    handleChoice(avatar.src);
  };
  return (
    <div className="avatar" onClick={handleClick}>
      <img
        className="avatarImg"
        src={process.env.PUBLIC_URL + `${avatar.src}`}
        alt="avatar"
      />
    </div>
  );
}
