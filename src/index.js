import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//On the following line we are grabbing a div with id of "troy" from index.html file.
//and then we are appending or inserting our App component inside that Div
const root = ReactDOM.createRoot(document.getElementById('troy'));
// root.render is a method available in React Dom
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


