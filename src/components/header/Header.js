import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header(){
  return(
    <header className = "App-header" >
      RESTy
      <nav>
        <NavLink activeClassName="selected" to="/" >Home</NavLink>
        <NavLink activeClassName="selected" to="/history" >History</NavLink>
        <NavLink activeClassName="selected" to="/help" >Help</NavLink>
      </nav>
      </header>
  )
}

export default Header;