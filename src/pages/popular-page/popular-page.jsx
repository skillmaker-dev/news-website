import React, { useEffect, useState } from "react";
import './popular-page.style.css';
import { getPopular } from "../../data";
import Container from "../../components/container/container.component";
import { CircularProgress  } from "@mui/material";
import Title from "../../components/title/title.component";


const PopularPage = () => 
{
  
    const [isLoading,setLoading] = useState(false);
    const [lastDay, setLastDay] = useState([]);
    const [lastWeek, setLastWeek] = useState([]);
    const [lastMonth, setLastMonth] = useState([]);
    function loadingHandler(boolean){setLoading(boolean)}; 

    useEffect(() => {
      let mounted = true;
      getPopular(loadingHandler,1)
        .then(items => {
          if(mounted) {
            setLastDay(items)
          }
          })
      getPopular(loadingHandler,7)
          .then(items => {
            if(mounted) {
              setLastWeek(items)
            }
            })
    getPopular(loadingHandler,30)
          .then(items => {
            if(mounted) {
              setLastMonth(items)
            }
            })
          return () => mounted = false;    
      }, [])


    

    return(
      <div className="popular-page">
        {!isLoading ? <Title text="Today" /> : null}
        <Container cards={lastDay}/>
        {!isLoading ? <Title text="Last Week" /> : null}
        <Container cards={lastWeek}/>
        {!isLoading ? <Title text="Last Month" /> : null}
        <Container cards={lastMonth}/>
        
        {
      isLoading ? <CircularProgress color="inherit" />
      : null
        }
    </div>
    );
}

export default PopularPage;