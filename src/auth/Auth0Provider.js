import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
    <Auth0Provider
        domain="cliohackgt.us.auth0.com"
        clientId="k1T5OG6ZVOptCH2YqqXlYe8aNhSxkSzD"
        redirectUri="localhost:3000/dashboard"
        >
        <App />
    </Auth0Provider>,

    document.getElementById("root")
);

