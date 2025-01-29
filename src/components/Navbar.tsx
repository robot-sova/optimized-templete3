import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">AstroSite</a>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/blog" className="nav-link">Blog</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;