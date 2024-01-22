import React from 'react';
import MainLayout from '@layouts/MainLayout';
const Home = React.lazy(() => import('@pages/Home'));
const Product = React.lazy(() => import('@pages/Product'));
const Article = React.lazy(() => import('@pages/Article'));
const NotFound = React.lazy(() => import('@components/NotFound'));
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
  { path: '*', element: <NotFound /> },
];
