import React from 'react';
import '../assets/css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="header-image" src="../src/assets/img/header.png" alt="Fondo" />
      <div className="header-content">
        <h1>¡Pizzería DL!</h1>
        <p>¡Le tenimos Pizzasss!</p>
      </div>
    </div>
  )
}

export default Header