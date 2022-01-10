import React from "react";
import { Link  } from "react-router-dom";
import "./home.css"
import "../../app.css"
import playAudio from "../../js/playSound";



class Home extends React.Component {
    

  
  render() {

   
    return (
      <div className="home background">
        <h1 className="header"> Avenger’s MATCH</h1>
        <div className="linksBox">
        <Link to="/Thegame" className="buttons" onClick={()=>playAudio("click")}>start </Link> <br/>
        <Link to="/scores" className="buttons" onClick={()=>playAudio("click")}>get top scores </Link><br/>
        <Link to="/about" className="buttons" onClick={()=>playAudio("click")}> about the game  </Link>
      </div>


      </div>
     
    );
  }
}

export default Home;
