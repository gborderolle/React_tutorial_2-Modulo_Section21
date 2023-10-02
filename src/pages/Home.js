import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <p>
        Ir a <Link to='/products'>Lista de productos</Link>
      </p>
    </>
  );
};

export default Home;
