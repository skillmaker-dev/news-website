import React from "react";
import './search.style.css';


const Search = ({searchHandler}) =>
{
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          searchHandler(e);
        }
      }
    return(
        <div className="search-container">
            
        <input className="search-input" type="search" onKeyDown={_handleKeyDown} placeholder="Search..." />
        
</div>
    )
}

export default Search;