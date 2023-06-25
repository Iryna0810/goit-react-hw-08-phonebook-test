import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from 'components/redux/store';
import {Provider} from 'react-redux'
import './index.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook-test">
    <Provider store={store}>
              <App />
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
