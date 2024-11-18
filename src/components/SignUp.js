// Import necessary modules and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../utils/firebase'; // Firebase authentication and Firestore database
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import '../styles/SignUp.css';

// SignUp component
const SignUp = () => {
  // State variables to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  // Function to handle user sign-up
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Validate if the password and confirm password fields match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Create a new user with Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data (name and email) in the Firestore database
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
      });

      console.log('User created successfully');
      navigate('/login'); // Redirect to the login page after successful sign-up
    } catch (error) {
      // Log and display error if sign-up fails
      console.error('Error signing up', error);
      alert(error.message); // Show the error message to the user
    }
  };

  return (
    <div className="signup-page">
      {/* Sign-up form */}
      <form onSubmit={handleSignUp} className="signup-form">
        <h2>Sign Up</h2>

        {/* Input field for Name */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state on input change
            required
          />
        </div>

        {/* Input field for Email */}
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

        {/* Input field for Password */}
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

        {/* Input field for Confirm Password */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state on input change
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="signup-submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
