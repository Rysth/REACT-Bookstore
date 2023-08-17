import React from 'react';
import ListItem from './ListItem';

const bookData = [
  {
    ID: 'book-1',
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    ID: 'book-2',
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    ID: 'book-3',
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

function List() {
  return (
    <ul className="list">
      {bookData.map((book) => (
        <ListItem key={book.ID} book={book} />
      ))}
    </ul>
  );
}

export default List;
