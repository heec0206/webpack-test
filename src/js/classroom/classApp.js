import './jquery-1.8.3.min.js';
import './jquery-ui-1.8.2.js';
//import '../../css/classroom/wbCommon.scss';
//import '../../css/classroom/wbUser.scss';

//var webpackImg011 = "../images/webpack_test01.png";
//var webpackImg022 = "../images/webpack_test02.png";

var el = $("#app");
el.append('<img src= "../images/webpack_test01.png"> ');
el.append('<img src= "../images/webpack_test02.png"> ');
el.append('<img src= "../images/webpack_test01.png"> ');
el.append('<img src= "../images/webpack_test02.png"> ');

$(function(){
  foo();
});

function foo() {
    let a = 1
    if (true) {
        let a = 2
        console.log(a)  // 2
    }
    console.log(a)  // 1
}
