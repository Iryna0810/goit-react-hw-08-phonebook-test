import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from 'components/redux/store';
import {Provider} from 'react-redux'
import './index.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);