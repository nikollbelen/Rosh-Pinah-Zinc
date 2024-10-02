import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Establecer el título de la aplicación
document.title = "Rosh Pinah Zinc";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

