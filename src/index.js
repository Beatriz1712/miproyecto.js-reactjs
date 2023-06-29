import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';//para toda la aplicacion

//libreria create dom trae en la variable root del html y lo guarda en const root y renderiza o pmuestra
//root.render muestra en pantalla App(funcion) App() y las ejecutamos <App/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



