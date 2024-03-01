import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import {offersData} from '../src/mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersData={offersData}/>
  </React.StrictMode>
);
