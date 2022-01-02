import React from "react";
import GameBoard from "../Game/Game";
import { Link  } from "react-router-dom";
import { useHistory } from 'react-router-dom';


class Home extends React.Component {
    

  
  render() {

   
    return (
      <div >
        <Link to="/Thegame" >start the gameBoard</Link> <br/>
        <Link to="/scores">get scores </Link>
      </div>
    );
  }
}

export default Home;
