import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';
import "./List.css";

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

List.propTypes = {
  pokemon: PropTypes.array.isRequired,
};


export default List;
