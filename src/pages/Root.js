import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      {/* <h1>Navegación</h1> */}
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
