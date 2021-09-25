import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/resets.scss";

import ShowsProvider from './context/shows/ShowsProvider';
import AlertsProvider from './context/alerts/AlertsProvider';

ReactDOM.render(
  <AlertsProvider>
    <ShowsProvider>
      <App />
    </ShowsProvider>
  </AlertsProvider>,
  document.getElementById('root')
);