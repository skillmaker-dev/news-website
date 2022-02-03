import React, { useEffect, useState } from "react";
import './popular-page.style.css';
import { getPopular } from "../../data";
import Container from "../../components/container/container.component";
import { CircularProgress  } from "@mui/material";

const PopularPage = () => 
{
  
    const [isLoading,setLoading] = useState(false);
    const [list, setList] = useState([]);

    function loadingHandler(boolean){setLoading(boolean)}; 

    useEffect(() => {
      let mounted = true;
      getPopular(loadingHandler)
        .then(items => {
          if(mounted) {
            setList(items)
          }
          })
          return () => mounted = false;    
      }, [])


    

    return(
      <div className="popular-page">
        <Container cards={list}/>
        {
      isLoading ? <CircularProgress color="inherit" />
      : null
    }
    </div>
    );
}

export default PopularPage;