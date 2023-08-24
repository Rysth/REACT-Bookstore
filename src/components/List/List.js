import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List({ applicationID }) {
  const { books } = useSelector((store) => store.books);

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
