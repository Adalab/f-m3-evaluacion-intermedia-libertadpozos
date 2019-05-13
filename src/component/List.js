import React from "react";

class List extends React.Component{
render(){
    const {pokemon}=this.props;
    console.log(pokemon)
    return(
        <div className="App">
    <h1>Pokemon</h1>
    <ul>
      {pokemon.map(item=>{
        return(
        <li>
          <h2>{item.name}</h2>
          <img src={item.url} alt="pokemon"></img>
          <ul>
          {item.types.map(type=>{
            return (
              <li>{type}</li>
            )
          }
            )}
            </ul>
        </li>)
      })}
    </ul>
    </div>
    );
}

}

export default List;