import React from 'react';
import { NavBar } from './NavBar';
import {  Wrappper } from './Wrapper';

// the layout component

export const Layout = ({ variant, children }) => {
  return (
    <>
      <NavBar />
      <Wrappper variant={variant}>{children}</Wrappper>
    </>
  );
};
