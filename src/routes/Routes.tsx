// import React from 'react';
// import MainLayout from '@layouts/MainLayout';
// <<<<<<< HEAD
// import Home from '@pages/Home';
// =======

// const Home = React.lazy(() => import('@pages/Home'));
// >>>>>>> f2029702dec5cafe8dc37a958c822657a1de665d
// const Product = React.lazy(() => import('@pages/Product'));
// const ProductDetails = React.lazy(() => import('@pages/ProductDetails'));
// const Article = React.lazy(() => import('@pages/Article'));
// const NotFound = React.lazy(() => import('@components/NotFound'));
// <<<<<<< HEAD
// const SearchProduct = React.lazy(() => import('@pages/SearchProduct'));
// =======

// >>>>>>> f2029702dec5cafe8dc37a958c822657a1de665d
// export const routes = [
//   {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'product', element: <Product /> },
//       { path: 'product/:productId', element: <ProductDetails /> },
//       { path: 'article', element: <Article /> },
//     ],
//   },
//   {
//     path: '/search',
//     element: (
//       <MainLayout>
//         <SearchProduct />
//       </MainLayout>
//     ),
//   },
//   { path: '*', element: <NotFound /> },
// ];
import React from 'react';
import MainLayout from '@layouts/MainLayout';

const Home = React.lazy(() => import('@pages/Home'));
const Product = React.lazy(() => import('@pages/Product'));
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
      { path: 'product', element: <Product /> },
      { path: 'product/:productId', element: <ProductDetails /> },
      { path: 'article', element: <Article /> },
      { path: 'search', element: <SearchProduct /> },
    ],
  },
  { path: '*', element: <NotFound /> },
];
