import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlantsAndCustomersProvider from './context/PlantsAndCustomersProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlantsAndCustomersProvider>
        <App />
      </PlantsAndCustomersProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
