import React from "react";
import "./../styles/headerComponent.css";
import { Link } from "react-router-dom";
import PYMLogo from "./../assets/PYM_Logo.jpg";

const Header = ({ isLoggedIn = false, profileImage = null }) => {
  return (
    <header className="header-container">
      <div className="header-box">
        <div className="logo-container">
          <div className="logo-circle">
            <img src={PYMLogo} alt="Play Your Mood Logo" className="logo" />
          </div>
          <h1 className="title">PLAY YOUR MOOD</h1>
        </div>
      </div>
      <nav className="nav-buttons">
        {!isLoggedIn ? (
          <>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Signup</Link>
          </>
        ) : (
          <>
            <input type="text" placeholder="Search..." className="search-bar" />
            <img src={profileImage} alt="Profile" className="profile-img" />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;