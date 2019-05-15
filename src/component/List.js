import React from "react";
import Card from './Card'

class List extends React.Component{
render(){
    const {pokemon}=this.props;
    console.log(pokemon)
    return(
    <ul className="wrapper">
      {pokemon.map(item=>{
        return(
        <li className="item__list">
          <Card item={item}/> 
        </li>)
      })}
    </ul>
  
    );
}

}

export default List;