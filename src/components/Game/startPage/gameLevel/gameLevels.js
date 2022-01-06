import "./gameLevels.css";
const levelsArr = [
  { name: "Easy", text: "12 cards", cardsNum: 12 ,rows :3 ,cols : 4 },
  { name: "Intermediate", text: "24 cards", cardsNum: 24 ,rows :4 ,cols : 6},
  { name: "Hard", text: "36 cards", cardsNum: 36 ,rows :6 ,cols : 6 },
  { name: "Ninja", text: "as much as you can in 2 minutes", cardsNum: 48,rows :6 ,cols : 8 },
];
function GameLevels({toChooseLevel}) {

    const handleClick = (level)=>{
        toChooseLevel(level);
    }
  return (
    <div className="AllLevelBox">
      {levelsArr.map((level, index) => (
          <div key={index} className=" buttons" onClick={()=>handleClick(level)}>
             <h3>{level.name}</h3> 
             <h6>{level.text}</h6>
          </div>
      ))}
    </div>
  );
}

export default GameLevels;
