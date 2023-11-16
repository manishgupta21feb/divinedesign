import React from 'react';
import logo from '../assets/images/logo.svg';

const Header = (props) => {
  return (
    <header className={`header ${props.color && 'black'}`}>
      <div className="container">
        <div className="header-inner">
          <div class="logo-wrapper">
            <a href="#" className="logo">
              <img src={logo} alt="logo"/>
              <span>Alpine</span>
            </a>
          </div>
          <div className="navigation-bar">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Cerfiticate</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>  
          </div>
          <div className="login-signup-btn-wrapper">
            <ul>
              <li>
                <a href="#" className="primary-link-btn">Login</a>
              </li>
              <li>
                <a href="#" className="secondary-link-btn">Sign Up</a>
              </li>
            </ul>
          </div>  
        </div>  
      </div>   
    </header>
  )
}

export default Header;