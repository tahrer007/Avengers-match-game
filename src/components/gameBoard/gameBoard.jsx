import React from "react";




class GameBoards extends React.Component {
    state={
        score : 111 ,
    }
    render() {
      
     return (
        <div>hi from gameboard{this.state.score}
        </div>

     )
    }
  }

  export default GameBoards ; 