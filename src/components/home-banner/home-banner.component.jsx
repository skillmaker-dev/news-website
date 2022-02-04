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

    return(
        <>
            
                    {
                       list.length > 0 ? (
                                    <div className="home-banner-container">
                                    <HomeCard {...list[0]} size="large"/>                                  
                                    </div>
                        ) :""
                    
                    }
            
            <h2 className="more">More articles</h2>
            <div className="home-body-container">
                {
                    list.slice(1).map((card,index) => (<HomeCard size="wide" key={index} {...card}/>))
                }
            
            </div>
        </>
    )
}

export default Home;