import React from "react";
import './home-card.style.css';


const HomeCard = (props) => {
    const {size,title,section,url,multimedia} = props;

    return(
        
        <div className={` home-card ${size ?? "large"}`}>
            <a className="card-link" href={url} target="_blank" rel="noreferrer">
                <div className="home-card ">
            <div className="bottom-text">
            <span className="article-type"><h5 >{section?.toUpperCase()}</h5></span>
            <h2 className="article-title">{title}</h2>
            </div>
            <img className="article-image" src={ multimedia !== null && multimedia !== undefined? multimedia[0].url : "https://images.unsplash.com/photo-1544646290-9ec4c8ff8277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}  alt="banner"/>
            </div>
        </a>
        </div>
    )
}

export default HomeCard;