import React from 'react';
import Navbar_Merchent from './Navbar_Merchent';
import MerchentOptions from './MerchentOptions';
// import Footer from './components/Footer'; // Uncomment if you wish to add the footer

const MerchentHome = (props) => {
  return (
    <div className='main' style={{ height:'100vh' ,backgroundColor: props.mode=='dark' ? '#000000' : '#fff', color: props.mode=='dark'? '#e0e0e0' : '#000' }}>
      <Navbar_Merchent heading1="Home" heading2="Profile" heading3="Logout" mode={props.mode} 
        toggleMode={props.toggleMode}/>
      <MerchentOptions mode={props.mode}/>
      {/* <Footer /> */}
    </div>
  );
};

export default MerchentHome;
