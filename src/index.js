import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const  title ="Avenger’s MATCH";


ReactDOM.render(
  <React.StrictMode>
    <App title={title}/>
  </React.StrictMode>,
  document.getElementById('root')
);

