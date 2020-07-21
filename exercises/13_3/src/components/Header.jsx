import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/users">Usuários</Link>
    </nav>
  </header>
);

export default Header;