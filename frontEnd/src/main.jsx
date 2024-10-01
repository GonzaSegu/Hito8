import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import PizzasProvider from './contexts/PizzasContext';
import UserProvider from "./contexts/UserContext.jsx"; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <PizzasProvider> 
      <App />
    </PizzasProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
