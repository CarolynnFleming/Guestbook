import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Entries from './views/Users/Entries';



export default function App() {
  return(
    <Router>
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
    </Router>
  );
}
