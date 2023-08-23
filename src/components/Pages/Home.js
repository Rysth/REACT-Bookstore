import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/books/booksSlice';
import List from '../List/List';
import Form from '../Form/Form';

function Home() {
  const dispatch = useDispatch();
  const { applicationID } = useSelector((store) => store.apps);

  useEffect(() => {
    dispatch(fetchBooks(applicationID));
  }, [dispatch, applicationID]);

  return (
    <div className="home">
      <h2 className="home-title">Welcome to Bookstore!</h2>
      <List />
      <Form />
    </div>
  );
}

export default Home;
