import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import LoginPage from 'screens/LoginPage';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path "/">
            <LoginPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function LogIn(){
  return LoginPage;
}

export default App;
