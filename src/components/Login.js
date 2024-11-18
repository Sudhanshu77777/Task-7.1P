// Import necessary modules and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import '../styles/Login.css';

// Login component
const Login = () => {
  // State variables to store user email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  // Function to handle the login process
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    try {
      // Attempt to sign in the user with Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully');
      navigate('/'); // Navigate to the homepage after successful login
    } catch (error) {
      // Log and display the error message if login fails
      console.error('Error logging in', error);
      alert(error.message); // Show error message to the user
    }
  };

  return (
    <div className="login-container">
      {/* Login form */}
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        {/* Email input field */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            required
          />
        </div>
        {/* Password input field */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            required
          />
        </div>
        {/* Submit button */}
        <button type="submit">Login</button>

        {/* Link to navigate to the signup page */}
        <span className="sign-up-link" onClick={() => navigate('/signup')}>
          Don't have an account? Sign up
        </span>
      </form>
    </div>
  );
};

export default Login;
