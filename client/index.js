import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import styles from './styles/Application.scss';
import { HashRouter } from 'react-router-dom';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.Fragment>
    <HashRouter>
      <App></App>
    </HashRouter>
  </React.Fragment>
);
