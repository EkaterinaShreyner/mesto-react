import React from 'react';
import logo from '../image/Vector.svg';

function Header() {
  return (
    <header className="header">
        <img 
          src={logo}
          className="header__logo"
          alt="Логотип проекта место" 
        />
      </header>
  );
}

export default Header;