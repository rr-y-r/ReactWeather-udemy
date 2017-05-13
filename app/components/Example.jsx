import React from 'react';
import {Link, NavLink} from 'react-router-dom';

var Example = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example location to try out :</p>
      <ol>
        <li>
          <NavLink to='/?location=BandaAceh'>Banda Aceh, NAD</NavLink>
        </li>
        <li>
          <NavLink to='/?location=Rio'>Rio, Brazil</NavLink>
        </li>
      </ol>
    </div>
  );
};

export default Example;
