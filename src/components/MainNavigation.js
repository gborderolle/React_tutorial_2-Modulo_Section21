import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/products'>Productos</Link>
        </li>
      </ul>
    </nav>
    </header>
  );
}

export default MainNavigation;
