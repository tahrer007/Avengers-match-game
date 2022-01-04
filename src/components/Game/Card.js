import "./card.css";
export default function card({ card ,handleChoice }) {

  const handleClick =()=>{
    handleChoice(card)

  }
 
  return (
    <div className="card">
      <img
        className="front image"
        src={process.env.PUBLIC_URL + `${card.src}`}
        alt="card back"
        onClick={handleClick}
      />

      <img
        className="back image"
        src={process.env.PUBLIC_URL + "/images/cover.jpg"}
        alt="card back"
      />
    </div>
  );
}
