import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

function List() {
  const { books } = useSelector((store) => store.books);

  useEffect(() => {}, [books]);

  return (
    <ul className="list">
      {books.map((book) => (
        <ListItem key={book.item_id} book={book} />
      ))}
    </ul>
  );
}

export default List;
