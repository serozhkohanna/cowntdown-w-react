import React from 'react';
import {NavLink} from 'react-router-dom';

const Linked = function () {

  return(
    <div>
    <ul className = 'nav'>
    <li><NavLink  to = './'>newyear</NavLink></li>
    <li><NavLink  to = './Easter'>easter</NavLink></li>
    <li><NavLink  to = './HB'>Birtday</NavLink></li>
    </ul>
    </div>
  )
}
export default Linked;
