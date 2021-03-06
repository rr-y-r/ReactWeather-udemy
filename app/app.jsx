import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch, HashRouter} from 'react-router-dom';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Example from 'Example';

//  Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <HashRouter>
    <Main>
      <Route path="/about" component={About}/>
      <Route path="/example" component={Example}/>
      <Route exact path="/" component={Weather}/>
    </Main>
  </HashRouter>,
  document.getElementById('app')
);
