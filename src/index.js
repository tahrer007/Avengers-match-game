import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const  title ="tahrer game";


ReactDOM.render(
  <React.StrictMode>
    <App title={title}/>
  </React.StrictMode>,
  document.getElementById('root')
);

