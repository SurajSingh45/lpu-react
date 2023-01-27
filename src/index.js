import React from 'react';
import ReactDOM from 'react-dom/client';
import Class from './components/Class';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Fun from './components/Fun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Fun/>
    <Class/>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
