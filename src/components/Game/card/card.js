import React from "react";
import "./card.css";
import "./cardImages.css";

class Card extends React.Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      id: this.props.id,
      image: this.props.image,
      alreadyGuesed: this.props.alreadyGuesed,
      currentRound: this.props.currentRound,
    };
  }

  reset = () => {
    this.setState(this.getInitialState());
  };

  flipCard(e, id, image, alreadyGuesed, currentRound) {

    if (currentRound.includes(id) && currentRound.length===1 ) {
      console.log("undo");
      e.target.classList.toggle("covered");
      e.target.classList.toggle(`image${image}`);
      this.props.flipCardBack(id);
    }
    else if (alreadyGuesed.includes(image)) {
      e.target.classList.add("disableClicks");
    } else {
      e.target.classList.toggle("covered");
      e.target.classList.toggle(`image${image}`);
      this.props.flipCard(id, image);
    }
  }

  render() {
    return (
      // className={ "card backGround covered" }
      //className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}
      <div
        className={"card backGround covered"}
        onClick={(e) =>
          this.flipCard(
            e,
            this.state.id,
            this.state.image,
            this.state.alreadyGuesed,
            this.state.currentRound
          )
        }
      >
        {this.state.image}
      </div>
    );
  }
}

export default Card;
