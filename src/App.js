import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import LogInPage from './screens/LogInPage.js';
// import {useAuth0} from '@auth0/auth0-react';

class App extends React.Component{
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={LogInPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}


export default App;
