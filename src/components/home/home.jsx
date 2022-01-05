import React from "react";
import { Link  } from "react-router-dom";
import "./home.css"
import "../../app.css"



class Home extends React.Component {
    

  
  render() {

   
    return (
      <div className="home background">
        <h1 className="header"> AVENGERS MATCH</h1>
        <div className="linksBox">
        <Link to="/Thegame" className="links">start </Link> <br/>
        <Link to="/scores" className="links">get top scores </Link><br/>
        <Link to="/about" className="links"> about the game  </Link>
      </div>


      </div>
     
    );
  }
}

export default Home;
