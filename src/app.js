import {sum} from './math.js';
import './jquery-1.8.3.min.js';
import './jquery-ui-1.8.2.js';
import './app.css';
import '../images/webpack_test01.png';
import '../images/webpack_test02.png';

//var webpackImg011 = "../images/webpack_test01.png";
//var webpackImg022 = "../images/webpack_test02.png";

var el = $("#app");
el.append('<img src= "../images/webpack_test01.png"> ');
el.append('<img src= "../images/webpack_test02.png"> ');
//el.append( '<h1>1 + 2 = ${sum(1, 2)} </h1>');
//el.append('<h1>webpack test</h1>');
