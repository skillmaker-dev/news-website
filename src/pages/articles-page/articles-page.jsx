import React, { useEffect, useState } from "react";
import './articles-page.style.css';

import Container from "../../components/container/container.component";
import Search from "../../components/search-bar/search.component";
import {getArticles} from '../../data';
import { Button,CircularProgress  } from "@mui/material";

const ArticlesPage = () => 
{
    

    const [searchValue,setSearchValue] = useState('');
    const [isLoading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [list, setList] = useState([]);

    
    function loadingHandler(boolean){setLoading(boolean)}; 

    const searchHandler = (data) => {
      setSearchValue(data.target.value);
  } 
    const pageSetter = () => {
      
      setPage(page + 1)
    }

    

    useEffect(() => {
        let mounted = true;
        getArticles(searchValue,page,loadingHandler)
          .then(items => {
            if(mounted) {
              setList(prev => [...prev,...items])
            }
            })
            return () => mounted = false;    
        }, [page])

        useEffect(() => 
        {
          let mounted = true;
          getArticles(searchValue,page,loadingHandler)
            .then(items => {
              if(mounted) {
                setList([...items])
              }
              })
              return () => mounted = false;
        },[searchValue])



return(
    <div className="articles-page">
    <Search className="search-bar" searchHandler={searchHandler}/>
    {isLoading ? <CircularProgress style={{marginTop: '10px'}} color="inherit" />
      : null
      }
    <Container cards={list}/>
    

    {
      isLoading ? <CircularProgress color="inherit" />
      : ( list.length !=0 ? <Button style={{
        color: "#191919",
        borderColor: "#191919"
      }} onClick={pageSetter} variant="outlined">Show more</Button> : null)
    }




    
    </div>
)
}
export default ArticlesPage;










