import React from 'react';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';
import Button from '../Button/Button';

function Book({ ID, bookData, applicationID }) {
  /* prettier-ignore */
  const {
    category,
    title,
    author,
  } = bookData;

  const dispatch = useDispatch();

  /* Event to remove a new Book */
  const handleRemove = () => {
    dispatch(
      removeBook({
        applicationID,
        itemID: ID,
      }),
    );
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
  bookData: PropType.shape({
    category: PropType.string.isRequired,
    title: PropType.string.isRequired,
    author: PropType.string.isRequired,
  }).isRequired,
  applicationID: PropType.string.isRequired,
};

export default Book;
