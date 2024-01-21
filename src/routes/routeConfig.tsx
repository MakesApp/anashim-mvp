import { useRoutes } from "react-router";
import { routes } from "./Routes";

const RouteConfig: React.FC = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};
export default RouteConfig;
