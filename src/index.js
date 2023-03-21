import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import Js from './pages/javascript';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>Sorry............</h1>
  },
  {
    path: "/html",
    element: <Html/>,
    errorElement: <h1>Sorry............</h1>
  },
  {
    path: "/css",
    element: <Css/>,
    errorElement: <h1>Sorry............</h1>
  },
  {
    path: "/javascript",
    element: <Js/>,
    errorElement: <h1>Sorry............</h1>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);