import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={LoginPage} />
        <Route  path="/profile" component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default App;
