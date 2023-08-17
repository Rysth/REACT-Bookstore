import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropType from 'prop-types';

function Book({ category, title, author }) {
  return (
    <div className="book">
      <header className="book-header">
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <div className="book-actions">
          <button type="button" className="book-button">
            Comments
          </button>
          <button type="button" className="book-button">
            Remove
          </button>
          <button type="button" className="book-button">
            Edit
          </button>
        </div>
      </header>
    </div>
  );
}

Book.propTypes = {
  category: PropType.string.isRequired,
  title: PropType.string.isRequired,
  author: PropType.string.isRequired,
};

export default Book;
