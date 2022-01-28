import React, { useEffect, useState } from "react";
import './articles-page.style.css';

import Container from "../../components/container/container.component";
import Search from "../../components/search-bar/search.component";
import {getArticles} from '../../data';
import LoadingIndicator from "../../components/loading/loading.component";
import BasicPagination from "../../components/pagination/pagination.component";

const ArticlesPage = () => 
{
    

    const [searchValue,setSearchValue] = useState('');
    const searchHandler = (data) => {
        setSearchValue(data.target.value);
    } 

    const [page,setPage] = useState(1);
    const pageSetter = (e,number) => {
      
      setPage(number);
    }

    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getArticles(searchValue,page)
          .then(items => {
            if(mounted) {
              setList(prev => [...prev,...items])
            }
            })
            return () => mounted = false;    
        }, [searchValue,page])



return(
    <div className="articles-page">
    <Search className="search-bar" searchHandler={searchHandler}/>
    <LoadingIndicator />
    <Container cards={list}/>
    <BasicPagination  func={pageSetter} page={page}/>
    </div>
)
}
export default ArticlesPage;










