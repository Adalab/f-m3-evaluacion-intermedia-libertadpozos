import React from "react";
import Card from "./Card";

class List extends React.Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon);

    return (
      <ul className="wrapper">
        {pokemon.map(item => {
          return (
            <li key={item.id}>
              <Card item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
