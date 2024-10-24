import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';

// import Footer from './components/Footer'; // Uncomment if you wish to add the footer

const Home = (props) => {
  return (
    <div className={props.mode}> {/* Apply the mode class to the outer container */}
      <Navbar 
        heading1="Home" 
        heading2="Signup" 
        heading3="Login" 
        mode={props.mode} 
        toggleMode={props.toggleMode} 
      />
      <MainContent mode={props.mode} />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
