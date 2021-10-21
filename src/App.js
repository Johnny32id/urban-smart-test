import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';

const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
