import React from 'react';
import './Header.css'; // Assume you have some CSS to style the header

const Header = () => {
    return (
        <header className="app-header">
            <div className="logo">
                <img src="path/to/logo.png" alt="Logo" /> {/* Add your logo path */}
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="cta-buttons">
                <button className="cta-signup">Sign Up</button>
                <button className="cta-login">Log In</button>
            </div>
        </header>
    );
};

export default Header;