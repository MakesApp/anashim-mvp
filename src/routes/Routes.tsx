import React from 'react';
const Home = React.lazy(() => import('@pages/Home'));
const Product = React.lazy(() => import('@pages/Product'));
const Article = React.lazy(() => import('@pages/Article'));
const NotFound = React.lazy(() => import('@components/NotFound'));

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/article',
    element: <Article />,
  },
  { path: '*', element: <NotFound /> },
];
