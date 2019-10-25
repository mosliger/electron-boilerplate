import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Style from './style';

const Navigation = () => {
  const [isOpen, toggerMenu] = useState(false);
  return (
    <Style>
      <button
        className={`togger-menu ${isOpen ? 'active' : ''}`}
        onClick={() => toggerMenu(!isOpen)}
      >
        <i className={`fas fa-${isOpen ? 'times' : 'bars'}`} />
      </button>
      <div className="logo">LOGO</div>
      <nav className={`menu-list ${isOpen ? 'active' : ''}`}>
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
