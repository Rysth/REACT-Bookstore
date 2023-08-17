import React from 'react';
import List from '../List/List';
import Form from '../Form/Form';

function Home() {
  return (
    <div className="home">
      <h2 className="home-title">Welcome to Bookstore!</h2>
      <List />
      <Form />
    </div>
  );
}

export default Home;
