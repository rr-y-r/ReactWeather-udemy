import React from 'react';
import {Link, NavLink} from 'react-router-dom';

var Nav = () => {
  return (
    <div>
      <h2>Nav Components</h2>
      <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
      <NavLink to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</NavLink>
      <NavLink to="/Example" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Example</NavLink>
    </div>
  );
};

export default Nav;
