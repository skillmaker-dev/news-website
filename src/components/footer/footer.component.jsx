import React from 'react';
import './footer.style.css';
import nytimes from '../../assets/images/nytimes.png'

export default function Footer() {
  return <footer className="myFooter">
        <div className="footer-container">
            <ul>
                <li><a href="https://developer.nytimes.com" target="_blank"><img src={nytimes} alt="nytimes logo" /></a></li>
            </ul>
        <p className="footer-copyright">© 2022 By Anas Chahid</p>
        </div>
        <div className="footer-social">
            <a href="https://www.github.com/skillmaker-dev" target="_blank" className="social-icons"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/anas-chahid/" target="_blank" className="social-icons"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.instagram.com/iamanaschahid/" target="_blank" className="social-icons"><i className="fa fa-instagram"></i></a>
        </div>
    </footer>
  ;
}
