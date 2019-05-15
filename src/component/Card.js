import React from 'react';

class Card extends React.Component{
    render(){
        const {item}=this.props;
        return(
          <React.Fragment>
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
        </React.Fragment>  
        )
    }
}

export default Card; 