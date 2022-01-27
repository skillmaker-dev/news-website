import React from "react";
import './home-card.style.css';


const HomeCard = ({size}) => {

    return(
        <a href="#" target="_blank" rel="noreferrer">
        <div className={`home-card ${size ?? "wide"}`}>
            <div className="bottom-text">
            <span className="article-type"><h5 >News</h5></span>
            <h2 className="article-title">Top 11 Best 3DS Homebrew Apps in 2020</h2>
            </div>
            <img className="article-image" src='https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'  alt="banner"/>
        </div>
        </a>
    )
}

export default HomeCard;