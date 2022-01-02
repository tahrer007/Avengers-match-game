import React from "react";
import Home from "./components/home/home";
import GameBoard from "./components/gameBoard/gameBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scores from "./components/scores/scores";
import "./app.css"


class App extends React.Component {

  state ={
    score : 0 ,
}
    render() {
      
     return (
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home score={this.state.score}/>} />
          <Route exact path="/Thegame" element={<GameBoard />} />
          <Route exact path="/scores" element={<Scores />} />
      </Routes>
    </BrowserRouter>

     )
    }
  }

  export default App ; 