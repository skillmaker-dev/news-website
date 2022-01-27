import React, { useEffect, useState } from "react";
import './popular-page.style.css';
import { getPopular } from "../../data";
import Container from "../../components/container/container.component";

const PopularPage = () => 
{


    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getPopular()
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
    </div>
    );
}

export default PopularPage;