import React from 'react';
import PropType from 'prop-types';
import List from '../List/List';
import Form from '../Form/Form';

function Home({ applicationID }) {
  return (
    <div className="home">
      <div className="container">
        <h2 className="home-title">Welcome to Bookstore!</h2>
        <List applicationID={applicationID} />
        <Form applicationID={applicationID} />
      </div>
    </div>
  );
}

Home.propTypes = {
  applicationID: PropType.string.isRequired,
};

export default Home;
