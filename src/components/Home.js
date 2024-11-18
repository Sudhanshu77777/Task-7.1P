// Import necessary modules and components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

// Home component
const Home = () => {
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header section containing the title, search bar, and buttons */}
      <header>
        {/* Website or application title */}
        <h1>SUDHANSHU@Deakin</h1>

        {/* Search bar for user input */}
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
        />

        {/* Container for dashboard elements (currently empty) */}
        <div className="dashboard-container">
          {/* Future dashboard components can be added here */}
        </div>

        {/* Container for action buttons */}
        <div className="button-container">
          {/* Button to navigate to the Post page */}
          <button
            className="post-button"
            onClick={() => navigate('/post')}
          >
            Post
          </button>

          {/* Button to navigate to the Login page */}
          <button
            className="login-button"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </header>

      {/* Additional content can be added below the header */}
    </div>
  );
};

export default Home;
