import React from 'react';
import ReactDOM from 'react-dom/client';
import Class from './components/Class';
import Fun from './components/Func';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Func/>
    <Class/>
    </>
  </React.StrictMode>
);

