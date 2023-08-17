import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropType from 'prop-types';
import Book from '../Book/Book';

function ListItem({ book }) {
  return (
    <li className="list-item">
      <Book category={book.category} title={book.title} author={book.author} />
    </li>
  );
}

ListItem.propTypes = {
  book: PropType.shape({
    ID: PropType.string.isRequired,
    category: PropType.string.isRequired,
    title: PropType.string.isRequired,
    author: PropType.string.isRequired,
  }).isRequired,
};

export default ListItem;
