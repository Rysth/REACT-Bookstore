import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions } from '../../redux/books/booksSlice';
import Button from '../Button/Button';

/* eslint-disable */
function Book({ ID, category, title, author }) {
  /* eslint-enable */
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(booksActions.removeBook(ID));
  };

  return (
    <div className="book">
      <header className="book-header">
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <div className="book-actions">
          <Button classList="book-button" text="Comments" />
          <Button classList="book-button" text="Remove" handleData={handleRemove} />
          <Button classList="book-button" text="Edit" />
        </div>
      </header>
    </div>
  );
}

Book.propTypes = {
  ID: PropType.string.isRequired,
  category: PropType.string.isRequired,
  title: PropType.string.isRequired,
  author: PropType.string.isRequired,
};

export default Book;
