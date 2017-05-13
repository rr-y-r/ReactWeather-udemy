import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Nav extends Component {

  onSearch = (e) => {

      e.preventDefault();
      alert('not yet wired up!');

  }

  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li>
              <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/Example" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Example</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="location" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
