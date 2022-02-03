import React, { useState } from "react";
import './navbar.style.css'
import { Link } from 'react-router-dom';

const NavBar = () => 
{
    const [active,setActive] = useState(window.location.pathname);
    const [open,setOpen] = useState(false);


    return(
    <div className="navbar">

        <div className={`nav-button ${open ? 'clicked' : null}`} onClick={() => setOpen(!open)}/>
        <div className={`buttons-list ${open ? 'checked' : null}`}>
            <Link  to="/" style={{textDecoration: 'none' , color: 'inherit',cursor: 'default'}}>
        <div className={ active === "/" ? `button active` : 'button'} onClick={() => setActive('/') }>
            Home
        </div>
        </Link>
        
        <Link  to="/articles" style={{textDecoration: 'none' , color: 'inherit',cursor: 'default'}}>
        <div className={ active === "/articles" ? `button active` : 'button'} onClick={() => setActive('/articles') }>
            Articles
        </div>
        </Link>
        <Link  to="/popular" style={{textDecoration: 'none' , color: 'inherit',cursor: 'default'}}>
        <div className={ active === "/popular" ? `button active` : 'button'} onClick={() => setActive('/popular') }>
            Popular
        </div>
        </Link>
        <Link  to="/about" style={{textDecoration: 'none' , color: 'inherit',cursor: 'default'}}>
        <div className={ active === "/about" ? `button active` : 'button'} onClick={() => setActive('/about') }>
            About
        </div>
        </Link>
        </div>
    </div>);
}

export default NavBar;