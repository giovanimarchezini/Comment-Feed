import React from 'react';
import style from './Header.module.css';
import igniteLogo from '../../Assets/ignite-logo.svg';


const Header = () => {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}

export default Header
