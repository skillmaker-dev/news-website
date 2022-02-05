const getArticles = (query,page,func) =>{ 
    func(true);
return (fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query ? query :'news'}&page=${page}&api-key=d8iyb5MTRJ8sOoIjfAelGlgGzmw7wDCb`)
    .then(data => data.json()).then(data => {
        func(false);
        return data.response.docs} ))}


const getPopular = (func,period) =>{
    func(true);
return (fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=d8iyb5MTRJ8sOoIjfAelGlgGzmw7wDCb`)
    .then(data => data.json()).then(data => { 
        func(false);
        return data.results;
    }))}


const getHome = (func) => {
    func(true);
    return (fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d8iyb5MTRJ8sOoIjfAelGlgGzmw7wDCb')
    .then(data => data.json()).then(data =>{
        func(false);
        return data.results}))}


export  {getArticles,getHome,getPopular}