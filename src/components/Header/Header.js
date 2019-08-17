import React from 'react';

import './Header.css'

import Logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
      <nav>
          
        <img src={Logo}/>
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;