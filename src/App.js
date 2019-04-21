import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Linked from './components/Linked.js';

import NewYear from './components/NewYear.js';
import Easter from  './components/Easter.js';
import HB from './components/HB.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>

      <Linked />
      <Route exact path = '/NewYear' component = {NewYear} />
      <Route  path = '/Easter' component = {Easter} />
      <Route  path = '/HB' component = {HB} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
