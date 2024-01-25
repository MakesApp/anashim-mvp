import { useRoutes } from 'react-router';
import { routes } from './Routes';
import { Suspense } from 'react';

const RouteConfiguration: React.FC = () => {
  const element = useRoutes(routes);

  return <Suspense>{element}</Suspense>;
};
export default RouteConfiguration;
