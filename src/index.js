import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index_iphone.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

let ul = document.querySelector('.nav');
ul.children[0].style.color = 'red';
ul.children[1].style.color = 'green';
ul.children[2].style.color = 'purple';
