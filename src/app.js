import {sum} from './math.js';
import './jquery-1.8.3.min.js';
import './jquery-ui-1.8.2.js';
import './app.css';

var el = $("#app");
el.append( '<h1>1 + 2 = ${sum(1, 2)} </h1>');
el.append('<h1>webpack test</h1>');
