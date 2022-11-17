import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/scss/main.css'
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

const app = (
  <React.StrictMode>    
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>
  </React.StrictMode>
);

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  app
);


