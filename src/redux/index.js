// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';

import {
  createRoot,
} from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './redux/action/store';

// Create a root element for React 18
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create the root

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);