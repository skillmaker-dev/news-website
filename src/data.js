const getArticles = (query,page,func) =>{ 
    func(true);
return (fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query ? query :'news'}&page=${page}&api-key=d8iyb5MTRJ8sOoIjfAelGlgGzmw7wDCb`)
    .then(data => data.json()).then(data => {
        func(false);
        return data.response.docs} ))}


const getPopular = () =>
(fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=d8iyb5MTRJ8sOoIjfAelGlgGzmw7wDCb')
    .then(data => data.json()).then(data => data.results))


const getHome = () => 
    (fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d8iyb5MTRJ8sOoIjfAelGlgGzmw7wDCb')
    .then(data => data.json()).then(data => data.results))


export  {getArticles,getHome,getPopular}