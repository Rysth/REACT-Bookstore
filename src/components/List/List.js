import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks } from '../../redux/books/booksSlice';
import ListItem from './ListItem';
import './List.css';

function List({ applicationID }) {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(applicationID));
  }, [dispatch, applicationID]);

  useEffect(() => {}, [books]);

  return (
    <ul className="list">
      {books.map((book) => (
        <ListItem key={book.item_id} book={book} applicationID={applicationID} />
      ))}
    </ul>
  );
}

List.propTypes = {
  applicationID: PropTypes.string.isRequired,
};

export default List;
