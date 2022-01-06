import "./sreachResults.css";
import "../../../../../app.css"
export default function SearchResults({ player ,handleChoice }) { 

    const handleClick =()=>{

        handleChoice(player) ; 
        
        
      }
 
  return (
    
      <div className="playerCard" onClick={handleClick}>
        <div className="avatarBox">
          <img
            className="avatarImg"
            src={process.env.PUBLIC_URL + `${player.avatar}`}
            alt="avatar"
          />
        </div>

        <div className="playerName"><h1>{player.name}</h1></div>
      </div>
    
  );
}
