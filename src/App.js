import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";


import ArticlesPage from './pages/articles-page/articles-page';
import NavBar from './components/navbar/navbar.component';
import ContactPage from './pages/about-page/about-page';
import PopularPage from './pages/popular-page/popular-page';
import HomePage from './pages/home-page/home-page';
import Footer from './components/footer/footer.component';

function App() {
 

  return (
    <div className="App">
      
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/about" element={<ContactPage />} />
        <Route path="/popular" element={<PopularPage />} />
      </Routes>
        <Footer/>
      
    </div>
  );
}

export default App;
