import React, { useEffect, useState } from "react";
import './articles-page.style.css';

import Container from "../../components/container/container.component";
import Search from "../../components/search-bar/search.component";
import {getArticles} from '../../data';
import LoadingIndicator from "../../components/loading/loading.component";


const ArticlesPage = () => 
{
    

    const [searchValue,setSearchValue] = useState('');
    const searchHandler = (data) => {
        setSearchValue(data.target.value);
    } 

    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getArticles(searchValue)
          .then(items => {
            if(mounted) {
              setList(items)
            }
            })
            return () => mounted = false;    
        }, [searchValue])



return(
    <div className="articles-page">
    <Search className="search-bar" searchHandler={searchHandler}/>
    <LoadingIndicator/>
    <Container cards={list}/>
    </div>
)
}
export default ArticlesPage;