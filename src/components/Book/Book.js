import React from 'react';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';
import OvalImage from '../../assets/images/oval.png';
import Button from '../Button/Button';
import './Book.css';

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
          <span className="book-separator">|</span>
          <Button classList="book-button" text="Remove" handleData={handleRemove} />
          <span className="book-separator">|</span>
          <Button classList="book-button" text="Edit" />
        </div>
      </header>
      <div className="book-progress">
        <div className="book-left">
          <img className="book-image" src={OvalImage} alt="Oval progress bar" />
          <div className="book-percentage">
            <h3 className="book-percent">64%</h3>
            <p className="book-status">Completed</p>
          </div>
        </div>
        <hr className="book-separator" />
        <div className="book-right">
          <p className="book-part">Current Progress</p>
          <p className="book-chapter">Chapter 17</p>
          <button type="button" className="book-button update">
            Update Progress
          </button>
        </div>
      </div>
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
