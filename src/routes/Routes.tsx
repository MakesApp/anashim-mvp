import React from 'react';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
const Product = React.lazy(() => import('@pages/Product'));
const Article = React.lazy(() => import('@pages/Article'));
const NotFound = React.lazy(() => import('@components/NotFound'));
const SearchProduct = React.lazy(() => import('@pages/SearchProduct'));
export const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/product',
    element: (
      <MainLayout>
        <Product />
      </MainLayout>
    ),
  },
  {
    path: '/article',
    element: (
      <MainLayout>
        <Article />
      </MainLayout>
    ),
  },
  {
    path: '/search',
    element: (
      <MainLayout>
        <SearchProduct />
      </MainLayout>
    ),
  },
  { path: '*', element: <NotFound /> },
];
