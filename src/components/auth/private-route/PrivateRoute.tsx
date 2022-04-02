import React from 'react';
import {Navigate} from 'react-router-dom';

// @ts-ignore
export function PrivateRoute({children}) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login"/>;
}
