import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-title">Bookstore CMS</h1>
        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-item">
              <Link to="/" className="header-link">
                Books
              </Link>
            </li>
            <li className="header-item">
              <Link to="/categories" className="header-link">
                Categories
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <p>User</p>
      </div>
    </div>
  );
}

export default Navigation;
