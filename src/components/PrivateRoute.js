import React, { Component } from 'react';
import { navigate } from 'gatsby';

const PrivateRoute = ({ componet: Component, location, ...rest }) => {
  if (isLoggedIn() && location.pathname !== '/app/login') {
    // If the user is not logged in, redirect to the login page.
    navigate('/login');
    return null;
  }

  return <componet {...rest} />;
};

export default PrivateRoute;
