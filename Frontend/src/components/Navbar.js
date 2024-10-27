import React, { useState } from 'react'; // Import useState for managing toggle state
import logo from './../images/logo.png'; // Adjust the image path if needed
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa'; // Using react-icons for sun and moon icons

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the mobile menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };
  
  const renderLinks = () => (
    <>
      <li><Link to={props.isAuthenticated ? "/merchent/transactions" : "/"}>{props.heading1}</Link></li>
      <li><Link to={props.isAuthenticated ? "/merchent/profile" : "/signup"}>{props.heading2}</Link></li>
      <li><Link to={props.isAuthenticated ? "/merchent/logout" : "/login"}>{props.heading3}</Link></li>
    </>
  );

  return (
    <header>
      <nav>
        <div className='div1'>
          <div className="logo-container">
            <img src={logo} alt="Revenue Mate Logo" className="logo" />
            <span className="brand-name">Revenue Mate</span>
          </div>
          <div className='mobile_btns'>
            <button 
              onClick={props.toggleMode} 
              className="toggle-button" 
              aria-label="Toggle dark/light mode"
            >
              {props.mode === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <button 
              className="menu-toggle" 
              onClick={toggleMenu} 
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>
          </div>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              <button 
                onClick={props.toggleMode} 
                className="toggle-button" 
                aria-label="Toggle dark/light mode"
              >
                {props.mode === 'light' ? <FaMoon /> : <FaSun />}
              </button>
            </li>
            {renderLinks()}
          </ul>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile_menus">
          <ul>
            {renderLinks()}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
