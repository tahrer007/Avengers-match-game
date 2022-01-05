import "./sreachResults.css";
export default function SearchResults({ player ,handleChoice }) { 

    const handleClick =()=>{

        handleChoice(player) ; 
        
        
      }
 
  return (
    <li onClick={handleClick}>
      <div className="playerCard">
        <div className="avatarBox">
          <img
            className="avatarImg"
            src={process.env.PUBLIC_URL + `${player.avatar}`}
            alt="avatar"
          />
        </div>

        <h3>{player.name}</h3>
      </div>
    </li>
  );
}
