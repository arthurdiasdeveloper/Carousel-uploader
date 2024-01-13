import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/index';
import index from './pages/index';
//render class app

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
