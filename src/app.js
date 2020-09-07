import {sum} from './math.js';
import './app.css';

var el = document.querySelector("#app");
el.append = '<h1>1 + 2 = ${sum(1, 2)} </h1>';
el.append = '<h1>webpack test</h1>';
