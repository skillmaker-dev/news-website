import React, { useState } from "react";
import './navbar.style.css'
import {useNavigate} from 'react-router-dom';

const NavBar = () => 
{
    const [active,setActive] = useState(window.location.pathname);
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();

    return(
    <div className="navbar">

        <div className={`nav-button ${open ? 'clicked' : null}`} onClick={() => setOpen(!open)}/>
        <div className={`buttons-list ${open ? 'checked' : null}`}>
            
        <div
         className={ active === "/" ? `button active` : 'button'}
        onClick={() =>{ setActive('/')
                        navigate("/")
        }}>
            Home
        </div>
 
        <div className={ active === "/articles" ? `button active` : 'button'} onClick={() => { setActive('/articles'); navigate("/articles")}}>
            Articles
        </div>  
        
        <div className={ active === "/popular" ? `button active` : 'button'} onClick={() => {setActive('/popular'); navigate("/popular") }}>
            Popular
        </div>
        
        
        <div className={ active === "/about" ? `button active` : 'button'} onClick={() =>{ setActive('/about'); navigate("/about") }}>
            About
        </div>
        
        </div>
    </div>);
}

export default NavBar;