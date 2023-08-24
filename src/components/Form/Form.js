import React from 'react';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import Button from '../Button/Button';
import { sendNewBook } from '../../redux/books/booksSlice';
import './Form.css';

function Form({ applicationID }) {
  const dispatch = useDispatch();

  /* Event to Add a new Book */
  const handleSubmit = (e) => {
    e.preventDefault();

    const randomID = () => Math.floor(Math.random() * 50) + 1;
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    const bookObject = {
      item_id: randomID().toString(),
      ...formObject,
    };

    dispatch(
      sendNewBook({
        applicationID,
        bookObject,
      }),
    );

    e.target.reset();
  };

  return (
    <>
      <h2 className="form-title">Add new Book</h2>
      <form action="#" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <select className="form-input" name="category" id="category" required>
            <option value="Horror">Horror</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Sports">Sports</option>
            <option value="Comedy">Comedy</option>
            <option value="Economy">Economy</option>
            <option value="Action">Action</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            <input
              type="text"
              name="title"
              id="title"
              className="form-input"
              placeholder="Book title"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label">
            <input
              type="text"
              name="author"
              id="author"
              className="form-input"
              placeholder="Book Author"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <Button classList="form-button submit" text="Add Book" buttonType="submit" />
        </div>
      </form>
    </>
  );
}

Form.propTypes = {
  applicationID: PropType.string.isRequired,
};

export default Form;
