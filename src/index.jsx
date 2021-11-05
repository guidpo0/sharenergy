import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlantsAndCustomersProvider from './context/PlantsAndCustomersProvider';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <PlantsAndCustomersProvider>
        <App />
      </PlantsAndCustomersProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
