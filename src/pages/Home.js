import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>All Project using ReactJs</h1>
      <ul>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
        <li>
          <Link to="/filter">Filtering</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/pagination">Pagination</Link>
        </li>
        <li>
          <Link to="/search">Search input</Link>
        </li>
        <li>
          <Link to="/table">Table sorting</Link>
        </li>
        <li>
          <Link to="/text-editor">Text editor</Link>
        </li>
        <li>
          <Link to="/update">Update sorting</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
