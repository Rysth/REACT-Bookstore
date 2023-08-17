import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header className="header">
      <h1 className="header-title">Bookstore</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-item">
            <Link to="/" className="header-link">
              Home
            </Link>
          </li>
          <li className="header-item">
            <Link to="/categories" className="header-link">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
