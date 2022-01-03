import React from "react";
import "./card.css";
import "./cardImages.css"


const flipTheCard=(id,e,image)=>{

  console.log(image);
  e.target.classList.toggle("covered");
  e.target.classList.toggle(`image${image}`);
    
}

const Card = ({ id, image}) => {
  
  
  return (
    <div className="card backGround covered " onClick={(e)=>flipTheCard(id,e,image) }>
        {image}
      </div>
  );
};

export default Card;

