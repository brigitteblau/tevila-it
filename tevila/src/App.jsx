import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Whats from './components/Whats';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Whats />
      <Footer />
    </Router>
  );
}

export default App;
