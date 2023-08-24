import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="header">
      <div className="header-content container">
        <nav className="header-left">
          <h1 className="header-title">Bookstore CMS</h1>
          <ul className="header-list">
            <li className="header-item">
              <Link to="/" className="header-link active">
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
        <div className="header-right">
          <div className="header-user">
            <button className="header-button" type="button">
              <i className="fa-solid fa-user" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
