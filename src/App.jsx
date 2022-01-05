import React from "react";
import Home from "./components/home/home";
import Game from "./components/Game/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scores from "./components/scores/scores";
import "./app.css";
import About from "./components/about/about";

class App extends React.Component {
  
  render() {
    return (
      <div className="mainContainer background">
       
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Thegame" element={<Game />} />
            <Route exact path="/scores" element={<Scores />} />
            <Route exact path="/about the game" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
