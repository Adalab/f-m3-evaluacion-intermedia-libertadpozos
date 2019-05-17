import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "item__list"
    };
    this.handleSelectedItem = this.handleSelectedItem.bind(this);
  }

  handleSelectedItem() {
    this.setState(prevState => {
      let nextStyling;
      if (prevState.selected === "item__list") {
        nextStyling = "selected-item";
      } else if (prevState.selected === "selected-item") {
        nextStyling = "item__list";
      }
      return {
        selected: nextStyling
      };
    });
  }

  render() {
    const { item } = this.props;
    const { selected } = this.state;

    return (
      <div className={selected} onClick={this.handleSelectedItem}>
        <h2 className="name">{item.name}</h2>
        <img className="photo" src={item.url} alt={item.name} />
        <ul className="type__list">
          {item.types.map((type, index) => {
            return (
              <li key={index} className="type">
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Card;
