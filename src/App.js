import './styles/index.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import Profil from './pages/Profil/User';
import './server';

export default function App() {
  return (
    <Router>

      <Header />
      <Switch>
        <Route exact path="/user/:id">
          <Profil />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

