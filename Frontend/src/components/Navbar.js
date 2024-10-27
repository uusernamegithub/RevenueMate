import React, { useState } from 'react'; // Import useState for managing toggle state
import logo from './../images/logo.png'; // Adjust the image path if needed
import '../styles/header.css';
import { FaSun, FaMoon } from 'react-icons/fa'; // Using react-icons for sun and moon icons

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the mobile menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <header>
      <nav>
        <div className='div1'>
          <div className="logo-container">
            <img src={logo} alt="Revenue Mate Logo" className="logo" />
            <span className="brand-name">Revenue Mate</span>
          </div>
          <div className='mobile_btns'>
            <button onClick={props.toggleMode} className="toggle-button">
                  {props.mode === 'light' ? <FaMoon /> : <FaSun />}
                </button>
            <button className="menu-toggle" onClick={toggleMenu}>
            ☰ {/* Text changes based on the menu state */}
            </button>
          </div>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              <button onClick={props.toggleMode} className="toggle-button">
                {props.mode === 'light' ? <FaMoon /> : <FaSun />}
              </button>
            </li>
            <li><a href="/">{props.heading1}</a></li>
            <li><a href="/signup">{props.heading2}</a></li>
            <li><a href="/login">{props.heading3}</a></li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile_menus">
          <ul>
            <li><a href="/">{props.heading1}</a></li>
            <li><a href="/signup">{props.heading2}</a></li>
            <li><a href="/login">{props.heading3}</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
