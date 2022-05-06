import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute.js/PrivateRoute';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Entries from './views/Users/Entries';



export default function App() {
  return(
    <Switch>
      <Route exact path="/login">
        <Auth />
      </Route>
      <PrivateRoute exact path="/entries">
        <Entries />
      </PrivateRoute>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
