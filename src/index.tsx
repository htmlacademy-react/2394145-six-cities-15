import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import { Counts } from './consts.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={Counts.placesCount}/>
  </React.StrictMode>
);
