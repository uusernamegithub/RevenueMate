import React from 'react';
import logo from './../images/logo.png'; // Adjust the image path if needed
import '../styles/header.css';
import { FaSun, FaMoon } from 'react-icons/fa'; // Using react-icons for sun and moon icons

const Navbar_Merchent = (props) => {
  return (
    <header>
      <nav>
        <div className='div1'>
          <div className="logo-container">
            <img src={logo} alt="Revenue Mate Logo" className="logo" />
            <span className="brand-name">Revenue Mate</span>
          </div>
          <ul>
            <li>
              <button onClick={props.toggleMode} className="toggle-button">
                {props.mode === 'light' ? <FaMoon /> : <FaSun />}
              </button>
            </li>
            <li><a href="/merchent/transactions">{props.heading1}</a></li>
            <li><a href="/merchent/profile">{props.heading2}</a></li>
            <li><a href="/merchent/logout">{props.heading3}</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar_Merchent;
