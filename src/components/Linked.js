import React from 'react';
import {NavLink} from 'react-router-dom';

const Linked = function () {
  return(
    <div>
    <ul>
    <li><NavLink  to = './NewYear'>newyear</NavLink></li>
    <li><NavLink  to = './Easter'>waster</NavLink></li>
    <li><NavLink  to = './HB'>HB</NavLink></li>
    </ul>
    </div>
  )
}
export default Linked;
