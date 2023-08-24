import React from 'react';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import Button from '../Button/Button';
import { sendNewBook } from '../../redux/books/booksSlice';

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
      category: 'Sports',
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
    <form action="#" className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          <input
            type="text"
            name="title"
            id="title"
            className="form-input"
            placeholder="Title.."
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
            placeholder="Author.."
            required
          />
        </label>
      </div>
      <div className="form-group">
        <Button classList="form-button submit" text="Submit" buttonType="submit" />
      </div>
    </form>
  );
}

Form.propTypes = {
  applicationID: PropType.string.isRequired,
};

export default Form;
