import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Meu Painel</h1>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="/about">Sobre</a></li>
          <li className="navbar-item"><a href="/contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
