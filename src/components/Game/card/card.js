import React from "react";
import "./card.css";
import "./cardImages.css";

class Card extends React.Component {
  /*state = this.getInitialState();

  getInitialState() {
    return {
      id: this.props.id,
      image: this.props.image,
      alreadyGuesed: this.props.alreadyGuesed,
      currentRoundCards: this.props.currentRound,
      flipCardsBack: this.props.flipCardsBack,
    };
  }

  reset = () => {
    this.setState(this.getInitialState());
  };*/

  flipCard(e, id, image, alreadyGuesed, currentRound) {
    if (alreadyGuesed.includes(image)) {
      e.target.classList.add("disableClicks");
    } else if (currentRound.includes(id)) {
      console.log("undo");
      e.target.classList.add("covered");
      e.target.classList.remove(`image${image}`);
      this.props.flipCardBack(id);
    } else {
      e.target.classList.remove("covered");
      e.target.classList.add(`image${image}`);
      this.props.flipCard(id, image);
    }
  }
  componentDidUpdate() {
    //console.log(this.state.currentRoundCards);
    if (this.props.flipCardsBack) {
      //console.log(this.state.currentRoundCards);
    }
  }

  render() {
    return (
      // className={ "card backGround covered" }
      //className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}
      <div
        className={"card backGround covered"}
        //className={"card backGround covered " + ((this.props.flipCardsBack && this.state.currentRoundCards.includes(this.state.id)) ? 'covered' : '')}
        onClick={(e) =>
          this.flipCard(
            e,
            this.props.id,
            this.props.image,
            this.props.alreadyGuesed,
            this.props.currentRound
          )
        }
      >
        { this.props.image}
      </div>
    );
  }
}

export default Card;
