import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import styles from './styles/Application.scss';
import { BrowserRouter } from 'react-router-dom';
//AppTest is for dev testing the HomePage without routing
import AppTest from './AppTest';

import {store} from './store/store.js';
import { Provider } from 'react-redux';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    {/* <BrowserRouter>
      <App></App>
    </BrowserRouter> */}
    <AppTest></AppTest>
  </Provider>
);
