import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider domain='dev-oa3p5wa3azdbsrfz.us.auth0.com' clientId='6uomjeM9peS5IUh3xOIserpYlAawcIkG' authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <App />
  </Auth0Provider>
  
);


