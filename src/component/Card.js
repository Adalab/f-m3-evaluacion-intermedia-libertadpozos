import React from 'react';

class Card extends React.Component{
    render(){
        const {item}=this.props;
        return(
          <React.Fragment>
            <h2 className="name" >{item.name}</h2>
            <img className="photo" src={item.url} alt="pokemon"></img>
            <ul className="type__list">
                {item.types.map(type=>{
                    return (
                        <li className="type">{type}</li>
                    )
                }
                )}
            </ul>
        </React.Fragment>  
        )
    }
}

export default Card; 