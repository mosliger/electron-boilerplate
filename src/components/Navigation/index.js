import React from 'react';
import { NavLink } from 'react-router-dom';

import Style from './style';

const Navigation = () => {
  return (
    <Style>
      <div className="logo">LOGO</div>
      <nav className="menu-list">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </Style>
  );
};

export default Navigation;
