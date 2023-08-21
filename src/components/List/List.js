import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

function List() {
  const { books } = useSelector((store) => store.books);

  return (
    <ul className="list">
      {books.map((book) => (
        <ListItem key={book.ID} book={book} />
      ))}
    </ul>
  );
}

export default List;
