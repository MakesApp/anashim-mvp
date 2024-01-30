import React from 'react';
import MainLayout from '@layouts/MainLayout';

const Home = React.lazy(() => import('@pages/Home'));
const ProductDetails = React.lazy(() => import('@pages/ProductDetails'));
const Article = React.lazy(() => import('@pages/Article'));
const SearchProduct = React.lazy(() => import('@pages/SearchProduct'));
const NotFound = React.lazy(() => import('@components/NotFound'));

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product/:productId', element: <ProductDetails /> },
      { path: 'article', element: <Article /> },
      { path: 'search', element: <SearchProduct /> },
    ],
  },
  { path: '*', element: <NotFound /> },
];
