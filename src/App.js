import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home></Home>
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse></Browse>
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin></Signin>
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup></Signup>
      </Route>
    </Router>
  );
}
