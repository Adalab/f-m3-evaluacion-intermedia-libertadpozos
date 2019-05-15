import React from "react";
import Card from './Card'

class List extends React.Component{
render(){
    const {pokemon}=this.props;
    console.log(pokemon)
    return(
    
    <ul>
         
      {pokemon.map(item=>{
        return(
        <li>
          <Card item={item}/> 
        </li>)
      })}
    </ul>
  
    );
}

}

export default List;