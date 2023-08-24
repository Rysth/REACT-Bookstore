import React from 'react';
import PropType from 'prop-types';
import Book from '../Book/Book';

function ListItem({ book, applicationID }) {
  return (
    <li className="list-item">
      <Book ID={book.item_id} bookData={book} applicationID={applicationID} />
    </li>
  );
}

ListItem.propTypes = {
  book: PropType.shape({
    item_id: PropType.string.isRequired,
    category: PropType.string.isRequired,
    title: PropType.string.isRequired,
    author: PropType.string.isRequired,
  }).isRequired,
  applicationID: PropType.string.isRequired,
};

export default ListItem;
