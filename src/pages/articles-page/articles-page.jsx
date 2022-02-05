import React, { useEffect, useState,useRef } from "react";
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
      setPage(1);
  } 
    const pageSetter = () => {
      setPage(page + 1)
    }


    function usePrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    }


    const previousPage = usePrevious(page);
  
    useEffect(() => {
      let mounted = true;
      getArticles(searchValue,page,loadingHandler)
        .then(items => {
          if(mounted) {
            if(previousPage > page)
            {
              setList([...items])  
            }
            else if(page !== previousPage)
            {
              setList(prev => [...prev,...items])  
            }
            
            else 
            {
              setList([...items])
            }
            
          }
          })
          return () => mounted = false;    
      }, [page,searchValue])


    



return(
    <div className="articles-page">
    <Search className="search-bar" searchHandler={searchHandler}/>
    {isLoading ? <CircularProgress style={{marginTop: '10px'}} color="inherit" />
      : null
      }
    <Container cards={list}/>
    
    

    {
      isLoading ? (list.length !== 0 ? <CircularProgress color="inherit" /> : null)
      : ( list.length !== 0 ? <Button style={{
        color: "#191919",
        borderColor: "#191919"
      }} onClick={pageSetter} variant="outlined">Show more</Button> : null)
    }




    
    </div>
)
}
export default ArticlesPage;










