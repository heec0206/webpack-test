import './jquery-1.8.3.min.js';
import './jquery-ui-1.8.2.js';
import './sdfsdf.css';
//import '../../css/user/wbUser.scss';

//var webpackImg011 = "../images/webpack_test01.png";
//var webpackImg022 = "../images/webpack_test02.png";

var el = $("#app");
//el.append('<img src= "../images/webpack_test01.png"> ');
//el.append('<img src= "../images/webpack_test02.png"> ');
el.append('<h1>webpack bundling</h1>');

$(function(){
  foo();
  console.log("userApp.js !");
});

function foo() {
    let a = 1
    if (true) {
        let a = 2
        console.log(a)  // 2
    }
    console.log(a)  // 1
}
