import React from 'react';
import SiteLogo from 'svg-react-loader?name=SiteLogo!./Walmart_logo.svg';

import { Link } from 'react-router-dom';

import './index.css';

const Logo = () => (
  <div className="site-logo">
    <Link to="/">
      <SiteLogo />
    </Link>
  </div>
);

export default Logo;
