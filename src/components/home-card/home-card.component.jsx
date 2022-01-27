import React from "react";
import './home-card.style.css';


const HomeCard = ({size}) => {

    return(
        <a href="#" target="_blank" rel="noreferrer">
        <div className={`home-card ${size ?? "large"}`}>
            <div className="bottom-text">
            <span className="article-type"><h5 >News</h5></span>
            <h2 className="article-title">Top 11 Best 3DS Homebrew Apps in 2020</h2>
            </div>
            <img className="article-image" src='https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'  alt="banner"/>
        </div>
        </a>
    )
}

export default HomeCard;