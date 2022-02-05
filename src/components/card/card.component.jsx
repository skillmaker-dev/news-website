import React from "react";
import './card.style.css';


const Card = (data) => 
{
    const {type_of_material,web_url,type,multimedia,title,url,abstract,headline,media,pub_date,published_date} = data;
    
    

    let imgUrl ='https://images.unsplash.com/photo-1544646290-9ec4c8ff8277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    if(multimedia !== undefined)
    {
        if(multimedia[21] !== undefined)
        { 
            imgUrl = "https://static01.nyt.com/" + multimedia[21].url;
        }        
    }
    else{
        if(media !== undefined)
        {
            if(media[0] !== undefined) imgUrl =  media[0]["media-metadata"][1].url;
        }   
    }

    function truncate(input,second) {
        if (input !== undefined &&  second !== undefined ) {
            if(input.length > 70  &&  second.length > 60)
                return input.substring(0, 70) + '...';
        }
        return input;
     };
    return(
        <a href={web_url ?? url} target="_blank" rel="noreferrer">
        <div className="card-container">
            <div className="top-half">
                <h2 className="type">{type_of_material?.toUpperCase() ?? type?.toUpperCase()}</h2>
                <img className="banner" src={imgUrl} alt="banner" />
            </div>
            <div className="bottom-half ">
                <h5 className="date">{pub_date?.substring(0,10) ?? published_date}</h5>
                <h2 className="title">{ headline ? headline.main : title}</h2>
                <p className="plot">{truncate(abstract,headline ? headline.main : title)}</p>               
            </div>
        </div>
        </a>
    );
}

export default Card;