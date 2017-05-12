import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route, Switch, HashRouter} from 'react-router-dom';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Example from 'Example';

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
