import React, { useState ,useEffect} from "react";
import './home-banner.style.css';
import {getHome} from '../../data';
import HomeCard from "../home-card/home-card.component";
const Home = () =>
{


    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getHome()
          .then(items => {
            
            if(mounted) {
                
              setList(items)
            }
            
            })
            
            return () => mounted = false;    
        }, [])


        let obj = list[0];
    return(
        <div>
            
                    {
                        list.length > 0 ? (
                                    <div className="home-banner-container">
                                    <div className="area1"><HomeCard {...list[0]} size="large"/></div>
                                    <div className="area2"><HomeCard {...list[1]} size="tall"/></div>
                                    <div className="area3"><HomeCard {...list[2]} size="small"/></div>
                                    <div className="area4"><HomeCard {...list[3]} size="small"/></div> 
                            </div>
                        ) :""
                    
                    }
            
            <h2 className="more">More articles</h2>
            <div className="home-body-container">
                {
                    list.slice(3).map((card,index) => (<HomeCard size="wide" key={index} {...card}/>))
                }
            
            </div>
        </div>
    )
}

export default Home;