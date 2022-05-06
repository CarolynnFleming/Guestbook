import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js/PrivateRoute';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Entries from './views/Users/Entries';



export default function App() {
  return(
    <Switch>
      <Route path="/login">
        <Auth />
      </Route>
      <PrivateRoute path="/entries">
        <Entries />
      </PrivateRoute>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
