import React from "react";
import './home-banner.style.css';

import HomeCard from "../home-card/home-card.component";
const Home = () =>
{
    return(
        <div>
            <div className="home-banner-container">
                    <div className="area1"><HomeCard size="large"/></div>
                    <div className="area2"><HomeCard size="tall"/></div>
                    <div className="area3"><HomeCard size="small"/></div>
                    <div className="area4"><HomeCard size="small"/></div>
            </div>
            <h2>More articles</h2>
            <div className="home-body-container">
            <HomeCard size="wide"/>
            <HomeCard size="wide"/>
            <HomeCard size="wide"/>
            </div>
        </div>
    )
}

export default Home;