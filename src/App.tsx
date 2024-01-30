import NoMobile from './components/NoMobile/NoMobile';
import useIsMobile from './hooks/useIsMobile';
import RouteConfiguration from './routes/RouteConfiguration';
import ReactGA from 'react-ga4';
function App() {
  if (import.meta.env.VITE_APP_ENV === 'production') {
    ReactGA.initialize('G-RM8BX0Z28J');
  }
  const isMobile = useIsMobile();
  if (isMobile) return <NoMobile />;
  return <RouteConfiguration />;
}

export default App;
