import React from "react";
import Card from './Card'

class List extends React.Component{
constructor(){
  super();
  this.state={
      selected: "item__list"
  };
  this.handleSelectedItem = this.handleSelectedItem.bind(this);
}

handleSelectedItem(){
  this.setState((prevState)=>{
    let nextStyling;
    if (prevState.selected==="item__list"){
      nextStyling="selected-item";
    }
    else if (prevState.selected==="selected-item"){
      nextStyling="item__list";
    }
 return{
   selected:nextStyling
 };
  })
}

render(){
    const {pokemon}=this.props;
    console.log(pokemon)
    const {selected}=this.state;
    return(
    <ul className="wrapper">
      {pokemon.map(item=>{
        return(
        <li className={selected} onClick={this.handleSelectedItem}>
          <Card item={item}/> 
        </li>)
      })}
    </ul>
  
    );
}

}

export default List;