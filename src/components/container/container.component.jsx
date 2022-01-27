import React from "react";
import Card from "../card/card.component";
import './container.style.css'

const Container = ({cards}) => 
{
    
    return(
    <div className="container">
           {cards.map((card,index) => (<Card key={index} {...card} />))}
    </div>);
}

export default Container