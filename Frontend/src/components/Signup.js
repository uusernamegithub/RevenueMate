import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import AlertComp from './AlertComp';
import '../styles/signup.css'; // Make sure to create this CSS file for styling

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (showAlert) {
      // Set a timer to hide the alert after 2 seconds and then navigate
      timer = setTimeout(() => {
        setShowAlert(false); // Hide alert after 2 seconds
        navigate('/merchent'); // Redirect to MerchentHome after the alert is hidden
      }, 1000); // Duration can be adjusted as needed
    }

    // Cleanup function to clear the timer when the component unmounts or showAlert changes
    return () => clearTimeout(timer);
  }, [showAlert, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (username && email && password) {
      try {
        const response = await fetch('http://localhost:5000/revenueMate/v1/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: username,
            email: email,
            password: password,
          }),
          credentials: 'include',
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error if the response is not ok
        }
  
        const data = await response.json(); // Parse the response data
        console.log('Login successful:', data);
        props.setIsAuthenticated(true); // Set authenticated state
        props.setId(data.id); // Set user ID in App component
        localStorage.setItem('userid', data.id); // Store user ID in local storage
        setShowAlert(true); // Show alert on successful login
      } catch (error) {
        console.error('Login failed:', error);
        alert('Signup failed. Please check your credentials and try again.'); // Simple error handling
      }
    } else {
      alert('Invalid credentials'); // Simple error handling
    }
  };

  return (
    <>
      <Navbar heading1="Home" heading2="Signup" heading3="Login"  mode={props.mode} 
        toggleMode={props.toggleMode}  />
      <div className="page" style={{ backgroundColor: props.mode=='dark' ? '#000000' : '#fff', color: props.mode=='dark'? '#e0e0e0' : '#000' }}>
      <div className="register" style={{ backgroundColor: props.mode=='dark' ? '#161a1d' : '#fff', color: props.mode=='dark'? '#e0e0e0' : '#000' }}>
        <div className="registerform">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup} className='formsignup'>
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              style={{ backgroundColor: props.mode=='dark' ? '#000000' : '#fff', color: props.mode=='dark'? '#e0e0e0' : '#000' }} // Capture username input
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: props.mode=='dark' ? '#000000' : '#fff', color: props.mode=='dark'? '#e0e0e0' : '#000' }} // Capture email input
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: props.mode=='dark' ? '#000000' : '#fff', color: props.mode=='dark'? '#e0e0e0' : '#000' }} // Capture password input
            />
            <button type="submit" id="submit">Sign Up</button>
          </form>
          {showAlert && <AlertComp message="Signed Up successfully!" />} {/* Display the alert */}
          {/* Uncomment to enable Google signup */}
          {/* <a href="/auth/google" className="google-signup">
            <img src={googleLogo} alt="Google Logo" />
            Signup with Google
          </a> */}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Signup;
