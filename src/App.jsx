import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute.js/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth/Auth';
import Entries from './views/Users/Entries';



export default function App() {
  return(
    <UserProvider>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Auth />
        </Route>
        <PrivateRoute exact path="/">
          <Entries />
        </PrivateRoute>
      </Switch>
    </UserProvider>
  );
}
