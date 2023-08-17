import React from 'react';
import Book from '../Book/Book';

function List() {
  return (
    <ul className="list">
      <li className="list-item">
        <Book />
      </li>
      <li className="list-item">
        <Book />
      </li>
    </ul>
  );
}

export default List;
