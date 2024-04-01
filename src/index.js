import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import from 'react-redux' not 'react'
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Use Provider from react-redux and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>
);
