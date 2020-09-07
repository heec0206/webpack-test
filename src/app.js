import {sum} from './math.js';
import './jquery-1.8.3.min.js';
import './jquery-ui-1.8.2.js';
import './app.css';
import webpackImg01 from '../images/webpack_test01.png';
import webpackImg02 from '../images/webpack_test02.png';

var el = $("#app");
el.append( '<h1>1 + 2 = ${sum(1, 2)} </h1>');
el.append('<h1>webpack test</h1>');
el.append('<img src= "${webpackImg01}" alt="webpack01"');
el.append('<img src= "${webpackImg02}" alt="webpack02"');
