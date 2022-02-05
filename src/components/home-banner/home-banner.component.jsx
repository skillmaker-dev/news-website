import React, { useState ,useEffect} from "react";
import './home-banner.style.css';
import {getHome} from '../../data';
import HomeCard from "../home-card/home-card.component";
import Title from "../title/title.component";
import { CircularProgress  } from "@mui/material";

const Home = () =>
{


    const [list, setList] = useState([]);
    const [isLoading,setLoading] = useState(false);

    function loadingHandler(boolean){setLoading(boolean)}; 

    useEffect(() => {
        let mounted = true;
        getHome(loadingHandler)
          .then(items => {
            
            if(mounted) {
                
              setList(items)
            }
            
            })
            
            return () => mounted = false;    
        }, [])

    return(
        <>
        {isLoading ? <CircularProgress style={{marginTop: '10px'}} color="inherit" />
      : null
      }
            
                    {
                       list.length > 0 ? (
                                    <div className="home-banner-container">
                                    <HomeCard {...list[0]} size="large"/>                                  
                                    </div>
                        ) :""
                    
                    }
            
            {!isLoading ? <Title text="More Articles" /> : null}
            <div className="home-body-container">
                {
                    list.slice(1).map((card,index) => (<HomeCard size="wide" key={index} {...card}/>))
                }
            
            </div>
        </>
    )
}

export default Home;