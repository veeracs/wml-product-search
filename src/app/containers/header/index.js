import React from 'react';

import Search from '../search';
import Logo from '../../components/logo';

import './index.css';

const Header = () => (
  <header>
    <section>
      <Logo />
      <Search />
    </section>
  </header>
);

export default Header;
