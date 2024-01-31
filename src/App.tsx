import RouteConfiguration from './routes/RouteConfiguration';
import ReactGA from 'react-ga4';
function App() {
  if (import.meta.env.VITE_APP_ENV === 'production') {
    ReactGA.initialize('G-RM8BX0Z28J');
  }
  return <RouteConfiguration />;
}

export default App;
