import React from 'react';
import './footer.style.css';

export default function Footer() {
  return <footer className="myFooter">
        <div className="footer-container">
            <ul>
                <li><a href="#">Company Information</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Terms of service</a></li>
            </ul>
        <p className="footer-copyright">© 2016 Copyright Text</p>
        </div>
        <div className="footer-social">
            <a href="#" className="social-icons"><i className="fa fa-github"></i></a>
            <a href="#" className="social-icons"><i className="fa fa-linkedin"></i></a>
            <a href="#" className="social-icons"><i className="fa fa-twitter"></i></a>
        </div>
    </footer>
  ;
}
