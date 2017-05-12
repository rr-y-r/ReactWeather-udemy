import React from 'react';
import Nav from 'Nav';

var Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main Components</h2>
      {props.children}
    </div>
  )
}

export default Main;
