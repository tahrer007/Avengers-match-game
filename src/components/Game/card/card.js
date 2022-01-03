import React from "react";
import "./card.css";
import "./cardImages.css";

class Card extends React.Component {
  flipTheCard(e, id, image) {
    e.target.classList.toggle("covered");
    e.target.classList.toggle(`image${image}`);
  }

  render() {
    return (
      <div
        className="card backGround covered "
        onClick={(e) => this.flipTheCard(e, this.props.id, this.props.image)}
      ></div>
    );
  }
}

export default Card;
