import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {BrowserRouter as Router} from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
);
