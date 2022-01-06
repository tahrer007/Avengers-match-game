import React from "react";
import { Link  } from "react-router-dom";
import "./about.css"
import "../../app.css"



class About extends React.Component {
    

  
  render() {

   
    return (
        <div className="about background">
            <div className="textBox">

            <p>
          <span id="gameName">AVENGERS MATCH </span> is flash card memory game. <br/>
          the game has four levels,
          <span>easy</span>, <span> intermediate</span>, <span>hard</span> and <span id="ninja">Ninja</span>. in the easy, intermediate and hard
          levels you have specific number of cards and four lives. You should try
          to match as you can before the depletion of lives.<br/>
             in the <span id="ninja">Ninja</span> level,
          you have 48 cards and two minutes to match as much as you can. in all of
          the levels every match give you 100 points.
        </p>

            </div>
       
        <Link to="/Thegame" className="buttons aboutLink"> Ready to play </Link> <br/>
        
      </div>
     
    );
  }
}

export default About;




