/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/user/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/user/app.js":
/*!*************************!*\
  !*** ./src/user/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_jquery_1_8_3_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/jquery-1.8.3.min.js */ "./src/user/js/jquery-1.8.3.min.js");
/* harmony import */ var _js_jquery_1_8_3_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_1_8_3_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_jquery_ui_1_8_2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/jquery-ui-1.8.2.js */ "./src/user/js/jquery-ui-1.8.2.js");
/* harmony import */ var _js_jquery_ui_1_8_2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_ui_1_8_2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_vue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/vue.js */ "./src/user/js/vue.js");
/* harmony import */ var _js_vue_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_vue_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_wbCommon_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/wbCommon.scss */ "./src/user/css/wbCommon.scss");
/* harmony import */ var _css_wbCommon_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_wbCommon_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_wbUser_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/wbUser.scss */ "./src/user/css/wbUser.scss");
/* harmony import */ var _css_wbUser_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_wbUser_scss__WEBPACK_IMPORTED_MODULE_4__);





 //var webpackImg011 = "../images/webpack_test01.png";
//var webpackImg022 = "../images/webpack_test02.png";

var el = $("#app"); //el.append('<img src= "../images/webpack_test01.png"> ');
//el.append('<img src= "../images/webpack_test02.png"> ');

el.append('<h1>webpack bundling + Vue</h1>');
$(function () {
  console.log("userApp.js !");
});

/***/ }),

/***/ "./src/user/css/wbCommon.scss":
/*!************************************!*\
  !*** ./src/user/css/wbCommon.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/user/css/wbUser.scss":
/*!**********************************!*\
  !*** ./src/user/css/wbUser.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/user/js/jquery-1.8.3.min.js":
/*!*****************************************!*\
  !*** ./src/user/js/jquery-1.8.3.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function (e, t) {
  function _(e) {
    var t = M[e] = {};
    return v.each(e.split(y), function (e, n) {
      t[n] = !0;
    }), t;
  }

  function H(e, n, r) {
    if (r === t && e.nodeType === 1) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();
      r = e.getAttribute(i);

      if (typeof r == "string") {
        try {
          r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r;
        } catch (s) {}

        v.data(e, n, r);
      } else r = t;
    }

    return r;
  }

  function B(e) {
    var t;

    for (t in e) {
      if (t === "data" && v.isEmptyObject(e[t])) continue;
      if (t !== "toJSON") return !1;
    }

    return !0;
  }

  function et() {
    return !1;
  }

  function tt() {
    return !0;
  }

  function ut(e) {
    return !e || !e.parentNode || e.parentNode.nodeType === 11;
  }

  function at(e, t) {
    do {
      e = e[t];
    } while (e && e.nodeType !== 1);

    return e;
  }

  function ft(e, t, n) {
    t = t || 0;
    if (v.isFunction(t)) return v.grep(e, function (e, r) {
      var i = !!t.call(e, r, e);
      return i === n;
    });
    if (t.nodeType) return v.grep(e, function (e, r) {
      return e === t === n;
    });

    if (typeof t == "string") {
      var r = v.grep(e, function (e) {
        return e.nodeType === 1;
      });
      if (it.test(t)) return v.filter(t, r, !n);
      t = v.filter(t, r);
    }

    return v.grep(e, function (e, r) {
      return v.inArray(e, t) >= 0 === n;
    });
  }

  function lt(e) {
    var t = ct.split("|"),
        n = e.createDocumentFragment();
    if (n.createElement) while (t.length) {
      n.createElement(t.pop());
    }
    return n;
  }

  function Lt(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
  }

  function At(e, t) {
    if (t.nodeType !== 1 || !v.hasData(e)) return;

    var n,
        r,
        i,
        s = v._data(e),
        o = v._data(t, s),
        u = s.events;

    if (u) {
      delete o.handle, o.events = {};

      for (n in u) {
        for (r = 0, i = u[n].length; r < i; r++) {
          v.event.add(t, n, u[n][r]);
        }
      }
    }

    o.data && (o.data = v.extend({}, o.data));
  }

  function Ot(e, t) {
    var n;
    if (t.nodeType !== 1) return;
    t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando);
  }

  function Mt(e) {
    return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : [];
  }

  function _t(e) {
    Et.test(e.type) && (e.defaultChecked = e.checked);
  }

  function Qt(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = Jt.length;

    while (i--) {
      t = Jt[i] + n;
      if (t in e) return t;
    }

    return r;
  }

  function Gt(e, t) {
    return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e);
  }

  function Yt(e, t) {
    var n,
        r,
        i = [],
        s = 0,
        o = e.length;

    for (; s < o; s++) {
      n = e[s];
      if (!n.style) continue;
      i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r));
    }

    for (s = 0; s < o; s++) {
      n = e[s];
      if (!n.style) continue;
      if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none";
    }

    return e;
  }

  function Zt(e, t, n) {
    var r = Rt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }

  function en(e, t, n, r) {
    var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
        s = 0;

    for (; i < 4; i += 2) {
      n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
    }

    return s;
  }

  function tn(e, t, n) {
    var r = t === "width" ? e.offsetWidth : e.offsetHeight,
        i = !0,
        s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";

    if (r <= 0 || r == null) {
      r = Dt(e, t);
      if (r < 0 || r == null) r = e.style[t];
      if (Ut.test(r)) return r;
      i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0;
    }

    return r + en(e, t, n || (s ? "border" : "content"), i) + "px";
  }

  function nn(e) {
    if (Wt[e]) return Wt[e];
    var t = v("<" + e + ">").appendTo(i.body),
        n = t.css("display");
    t.remove();

    if (n === "none" || n === "") {
      Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      }));
      if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
      t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt);
    }

    return Wt[e] = n, n;
  }

  function fn(e, t, n, r) {
    var i;
    if (v.isArray(t)) v.each(t, function (t, i) {
      n || sn.test(e) ? r(e, i) : fn(e + "[" + (_typeof(i) == "object" ? t : "") + "]", i, n, r);
    });else if (!n && v.type(t) === "object") for (i in t) {
      fn(e + "[" + i + "]", t[i], n, r);
    } else r(e, t);
  }

  function Cn(e) {
    return function (t, n) {
      typeof t != "string" && (n = t, t = "*");
      var r,
          i,
          s,
          o = t.toLowerCase().split(y),
          u = 0,
          a = o.length;
      if (v.isFunction(n)) for (; u < a; u++) {
        r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n);
      }
    };
  }

  function kn(e, n, r, i, s, o) {
    s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
    var u,
        a = e[s],
        f = 0,
        l = a ? a.length : 0,
        c = e === Sn;

    for (; f < l && (c || !u); f++) {
      u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
    }

    return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u;
  }

  function Ln(e, n) {
    var r,
        i,
        s = v.ajaxSettings.flatOptions || {};

    for (r in n) {
      n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
    }

    i && v.extend(!0, e, i);
  }

  function An(e, n, r) {
    var i,
        s,
        o,
        u,
        a = e.contents,
        f = e.dataTypes,
        l = e.responseFields;

    for (s in l) {
      s in r && (n[l[s]] = r[s]);
    }

    while (f[0] === "*") {
      f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
    }

    if (i) for (s in a) {
      if (a[s] && a[s].test(i)) {
        f.unshift(s);
        break;
      }
    }
    if (f[0] in r) o = f[0];else {
      for (s in r) {
        if (!f[0] || e.converters[s + " " + f[0]]) {
          o = s;
          break;
        }

        u || (u = s);
      }

      o = o || u;
    }
    if (o) return o !== f[0] && f.unshift(o), r[o];
  }

  function On(e, t) {
    var n,
        r,
        i,
        s,
        o = e.dataTypes.slice(),
        u = o[0],
        a = {},
        f = 0;
    e.dataFilter && (t = e.dataFilter(t, e.dataType));
    if (o[1]) for (n in e.converters) {
      a[n.toLowerCase()] = e.converters[n];
    }

    for (; i = o[++f];) {
      if (i !== "*") {
        if (u !== "*" && u !== i) {
          n = a[u + " " + i] || a["* " + i];
          if (!n) for (r in a) {
            s = r.split(" ");

            if (s[1] === i) {
              n = a[u + " " + s[0]] || a["* " + s[0]];

              if (n) {
                n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                break;
              }
            }
          }
          if (n !== !0) if (n && e["throws"]) t = n(t);else try {
            t = n(t);
          } catch (l) {
            return {
              state: "parsererror",
              error: n ? l : "No conversion from " + u + " to " + i
            };
          }
        }

        u = i;
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  function Fn() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }

  function In() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }

  function $n() {
    return setTimeout(function () {
      qn = t;
    }, 0), qn = v.now();
  }

  function Jn(e, t) {
    v.each(t, function (t, n) {
      var r = (Vn[t] || []).concat(Vn["*"]),
          i = 0,
          s = r.length;

      for (; i < s; i++) {
        if (r[i].call(e, t, n)) return;
      }
    });
  }

  function Kn(e, t, n) {
    var r,
        i = 0,
        s = 0,
        o = Xn.length,
        u = v.Deferred().always(function () {
      delete a.elem;
    }),
        a = function a() {
      var t = qn || $n(),
          n = Math.max(0, f.startTime + f.duration - t),
          r = n / f.duration || 0,
          i = 1 - r,
          s = 0,
          o = f.tweens.length;

      for (; s < o; s++) {
        f.tweens[s].run(i);
      }

      return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1);
    },
        f = u.promise({
      elem: e,
      props: v.extend({}, t),
      opts: v.extend(!0, {
        specialEasing: {}
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: qn || $n(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n, r) {
        var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
        return f.tweens.push(i), i;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? f.tweens.length : 0;

        for (; n < r; n++) {
          f.tweens[n].run(1);
        }

        return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this;
      }
    }),
        l = f.props;

    Qn(l, f.opts.specialEasing);

    for (; i < o; i++) {
      r = Xn[i].call(f, e, l, f.opts);
      if (r) return r;
    }

    return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
      anim: f,
      queue: f.opts.queue,
      elem: e
    })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always);
  }

  function Qn(e, t) {
    var n, r, i, s, o;

    for (n in e) {
      r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];

      if (o && "expand" in o) {
        s = o.expand(s), delete e[r];

        for (n in s) {
          n in e || (e[n] = s[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function Gn(e, t, n) {
    var r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h = this,
        p = e.style,
        d = {},
        m = [],
        g = e.nodeType && Gt(e);
    n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
      l.unqueued || c();
    }), l.unqueued++, h.always(function () {
      h.always(function () {
        l.unqueued--, v.queue(e, "fx").length || l.empty.fire();
      });
    })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));

    for (r in t) {
      s = t[r];

      if (Un.exec(s)) {
        delete t[r], a = a || s === "toggle";
        if (s === (g ? "hide" : "show")) continue;
        m.push(r);
      }
    }

    o = m.length;

    if (o) {
      u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function () {
        v(e).hide();
      }), h.done(function () {
        var t;
        v.removeData(e, "fxshow", !0);

        for (t in d) {
          v.style(e, t, d[t]);
        }
      });

      for (r = 0; r < o; r++) {
        i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0));
      }
    }
  }

  function Yn(e, t, n, r, i) {
    return new Yn.prototype.init(e, t, n, r, i);
  }

  function Zn(e, t) {
    var n,
        r = {
      height: e
    },
        i = 0;
    t = t ? 1 : 0;

    for (; i < 4; i += 2 - t) {
      n = $t[i], r["margin" + n] = r["padding" + n] = e;
    }

    return t && (r.opacity = r.width = e), r;
  }

  function tr(e) {
    return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
  }

  var n,
      r,
      i = e.document,
      s = e.location,
      o = e.navigator,
      u = e.jQuery,
      a = e.$,
      f = Array.prototype.push,
      l = Array.prototype.slice,
      c = Array.prototype.indexOf,
      h = Object.prototype.toString,
      p = Object.prototype.hasOwnProperty,
      d = String.prototype.trim,
      v = function v(e, t) {
    return new v.fn.init(e, t, n);
  },
      m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
      g = /\S/,
      y = /\s+/,
      b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      S = /^[\],:{}\s]*$/,
      x = /(?:^|:|,)(?:\s*\[)+/g,
      T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
      C = /^-ms-/,
      k = /-([\da-z])/gi,
      L = function L(e, t) {
    return (t + "").toUpperCase();
  },
      A = function A() {
    i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready());
  },
      O = {};

  v.fn = v.prototype = {
    constructor: v,
    init: function init(e, n, r) {
      var s, o, u, a;
      if (!e) return this;
      if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;

      if (typeof e == "string") {
        e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);

        if (s && (s[1] || !n)) {
          if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
          o = i.getElementById(s[2]);

          if (o && o.parentNode) {
            if (o.id !== s[2]) return r.find(e);
            this.length = 1, this[0] = o;
          }

          return this.context = i, this.selector = e, this;
        }

        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
      }

      return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this));
    },
    selector: "",
    jquery: "1.8.3",
    length: 0,
    size: function size() {
      return this.length;
    },
    toArray: function toArray() {
      return l.call(this);
    },
    get: function get(e) {
      return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
    },
    pushStack: function pushStack(e, t, n) {
      var r = v.merge(this.constructor(), e);
      return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r;
    },
    each: function each(e, t) {
      return v.each(this, e, t);
    },
    ready: function ready(e) {
      return v.ready.promise().done(e), this;
    },
    eq: function eq(e) {
      return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1);
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    slice: function slice() {
      return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","));
    },
    map: function map(e) {
      return this.pushStack(v.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: [].sort,
    splice: [].splice
  }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () {
    var e,
        n,
        r,
        i,
        s,
        o,
        u = arguments[0] || {},
        a = 1,
        f = arguments.length,
        l = !1;
    typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), _typeof(u) != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);

    for (; a < f; a++) {
      if ((e = arguments[a]) != null) for (n in e) {
        r = u[n], i = e[n];
        if (u === i) continue;
        l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i);
      }
    }

    return u;
  }, v.extend({
    noConflict: function noConflict(t) {
      return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(e) {
      e ? v.readyWait++ : v.ready(!0);
    },
    ready: function ready(e) {
      if (e === !0 ? --v.readyWait : v.isReady) return;
      if (!i.body) return setTimeout(v.ready, 1);
      v.isReady = !0;
      if (e !== !0 && --v.readyWait > 0) return;
      r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready");
    },
    isFunction: function isFunction(e) {
      return v.type(e) === "function";
    },
    isArray: Array.isArray || function (e) {
      return v.type(e) === "array";
    },
    isWindow: function isWindow(e) {
      return e != null && e == e.window;
    },
    isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function type(e) {
      return e == null ? String(e) : O[h.call(e)] || "object";
    },
    isPlainObject: function isPlainObject(e) {
      if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;

      try {
        if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }

      var r;

      for (r in e) {
        ;
      }

      return r === t || p.call(e, r);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    error: function error(e) {
      throw new Error(e);
    },
    parseHTML: function parseHTML(e, t, n) {
      var r;
      return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)));
    },
    parseJSON: function parseJSON(t) {
      if (!t || typeof t != "string") return null;
      t = v.trim(t);
      if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
      if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return new Function("return " + t)();
      v.error("Invalid JSON: " + t);
    },
    parseXML: function parseXML(n) {
      var r, i;
      if (!n || typeof n != "string") return null;

      try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
      } catch (s) {
        r = t;
      }

      return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r;
    },
    noop: function noop() {},
    globalEval: function globalEval(t) {
      t && g.test(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function camelCase(e) {
      return e.replace(C, "ms-").replace(k, L);
    },
    nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function each(e, n, r) {
      var i,
          s = 0,
          o = e.length,
          u = o === t || v.isFunction(e);

      if (r) {
        if (u) {
          for (i in e) {
            if (n.apply(e[i], r) === !1) break;
          }
        } else for (; s < o;) {
          if (n.apply(e[s++], r) === !1) break;
        }
      } else if (u) {
        for (i in e) {
          if (n.call(e[i], i, e[i]) === !1) break;
        }
      } else for (; s < o;) {
        if (n.call(e[s], s, e[s++]) === !1) break;
      }

      return e;
    },
    trim: d && !d.call("\uFEFF\xA0") ? function (e) {
      return e == null ? "" : d.call(e);
    } : function (e) {
      return e == null ? "" : (e + "").replace(b, "");
    },
    makeArray: function makeArray(e, t) {
      var n,
          r = t || [];
      return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r;
    },
    inArray: function inArray(e, t, n) {
      var r;

      if (t) {
        if (c) return c.call(t, e, n);
        r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;

        for (; n < r; n++) {
          if (n in t && t[n] === e) return n;
        }
      }

      return -1;
    },
    merge: function merge(e, n) {
      var r = n.length,
          i = e.length,
          s = 0;
      if (typeof r == "number") for (; s < r; s++) {
        e[i++] = n[s];
      } else while (n[s] !== t) {
        e[i++] = n[s++];
      }
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      var r,
          i = [],
          s = 0,
          o = e.length;
      n = !!n;

      for (; s < o; s++) {
        r = !!t(e[s], s), n !== r && i.push(e[s]);
      }

      return i;
    },
    map: function map(e, n, r) {
      var i,
          s,
          o = [],
          u = 0,
          a = e.length,
          f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
      if (f) for (; u < a; u++) {
        i = n(e[u], u, r), i != null && (o[o.length] = i);
      } else for (s in e) {
        i = n(e[s], s, r), i != null && (o[o.length] = i);
      }
      return o.concat.apply([], o);
    },
    guid: 1,
    proxy: function proxy(e, n) {
      var r, i, s;
      return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function s() {
        return e.apply(n, i.concat(l.call(arguments)));
      }, s.guid = e.guid = e.guid || v.guid++, s) : t;
    },
    access: function access(e, n, r, i, s, o, u) {
      var a,
          f = r == null,
          l = 0,
          c = e.length;

      if (r && _typeof(r) == "object") {
        for (l in r) {
          v.access(e, n, l, r[l], 1, o, i);
        }

        s = 1;
      } else if (i !== t) {
        a = u === t && v.isFunction(i), f && (a ? (a = n, n = function n(e, t, _n2) {
          return a.call(v(e), _n2);
        }) : (n.call(e, i), n = null));
        if (n) for (; l < c; l++) {
          n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
        }
        s = 1;
      }

      return s ? e : f ? n.call(e) : c ? n(e[0], r) : o;
    },
    now: function now() {
      return new Date().getTime();
    }
  }), v.ready.promise = function (t) {
    if (!r) {
      r = v.Deferred();
      if (i.readyState === "complete") setTimeout(v.ready, 1);else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);else {
        i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
        var n = !1;

        try {
          n = e.frameElement == null && i.documentElement;
        } catch (s) {}

        n && n.doScroll && function o() {
          if (!v.isReady) {
            try {
              n.doScroll("left");
            } catch (e) {
              return setTimeout(o, 50);
            }

            v.ready();
          }
        }();
      }
    }

    return r.promise(t);
  }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
    O["[object " + t + "]"] = t.toLowerCase();
  }), n = v(i);
  var M = {};
  v.Callbacks = function (e) {
    e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);

    var n,
        r,
        i,
        s,
        o,
        u,
        a = [],
        f = !e.once && [],
        l = function l(t) {
      n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;

      for (; a && u < o; u++) {
        if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          n = !1;
          break;
        }
      }

      i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable());
    },
        c = {
      add: function add() {
        if (a) {
          var t = a.length;
          (function r(t) {
            v.each(t, function (t, n) {
              var i = v.type(n);
              i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n);
            });
          })(arguments), i ? o = a.length : n && (s = t, l(n));
        }

        return this;
      },
      remove: function remove() {
        return a && v.each(arguments, function (e, t) {
          var n;

          while ((n = v.inArray(t, a, n)) > -1) {
            a.splice(n, 1), i && (n <= o && o--, n <= u && u--);
          }
        }), this;
      },
      has: function has(e) {
        return v.inArray(e, a) > -1;
      },
      empty: function empty() {
        return a = [], this;
      },
      disable: function disable() {
        return a = f = n = t, this;
      },
      disabled: function disabled() {
        return !a;
      },
      lock: function lock() {
        return f = t, n || c.disable(), this;
      },
      locked: function locked() {
        return !f;
      },
      fireWith: function fireWith(e, t) {
        return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this;
      },
      fire: function fire() {
        return c.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return c;
  }, v.extend({
    Deferred: function Deferred(e) {
      var t = [["resolve", "done", v.Callbacks("once memory"), "resolved"], ["reject", "fail", v.Callbacks("once memory"), "rejected"], ["notify", "progress", v.Callbacks("memory")]],
          n = "pending",
          r = {
        state: function state() {
          return n;
        },
        always: function always() {
          return i.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var e = arguments;
          return v.Deferred(function (n) {
            v.each(t, function (t, r) {
              var s = r[0],
                  o = e[t];
              i[r[1]](v.isFunction(o) ? function () {
                var e = o.apply(this, arguments);
                e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e]);
              } : n[s]);
            }), e = null;
          }).promise();
        },
        promise: function promise(e) {
          return e != null ? v.extend(e, r) : r;
        }
      },
          i = {};
      return r.pipe = r.then, v.each(t, function (e, s) {
        var o = s[2],
            u = s[3];
        r[s[1]] = o.add, u && o.add(function () {
          n = u;
        }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function when(e) {
      var t = 0,
          n = l.call(arguments),
          r = n.length,
          i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
          s = i === 1 ? e : v.Deferred(),
          o = function o(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n);
        };
      },
          u,
          a,
          f;

      if (r > 1) {
        u = new Array(r), a = new Array(r), f = new Array(r);

        for (; t < r; t++) {
          n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
        }
      }

      return i || s.resolveWith(f, n), s.promise();
    }
  }), v.support = function () {
    var t,
        n,
        r,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p = i.createElement("div");
    p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
    if (!n || !r || !n.length) return {};
    s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
      leadingWhitespace: p.firstChild.nodeType === 3,
      tbody: !p.getElementsByTagName("tbody").length,
      htmlSerialize: !!p.getElementsByTagName("link").length,
      style: /top/.test(r.getAttribute("style")),
      hrefNormalized: r.getAttribute("href") === "/a",
      opacity: /^0.5/.test(r.style.opacity),
      cssFloat: !!r.style.cssFloat,
      checkOn: u.value === "on",
      optSelected: o.selected,
      getSetAttribute: p.className !== "t",
      enctype: !!i.createElement("form").enctype,
      html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
      boxModel: i.compatMode === "CSS1Compat",
      submitBubbles: !0,
      changeBubbles: !0,
      focusinBubbles: !1,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;

    try {
      delete p.test;
    } catch (d) {
      t.deleteExpando = !1;
    }

    !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function h() {
      t.noCloneEvent = !1;
    }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
    if (p.attachEvent) for (l in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
    }
    return v(function () {
      var n,
          r,
          s,
          o,
          u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
          a = i.getElementsByTagName("body")[0];
      if (!a) return;
      n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
        width: "4px"
      }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null;
    }), a.removeChild(p), n = r = s = o = u = a = p = null, t;
  }();
  var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      P = /([A-Z])/g;
  v.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function hasData(e) {
      return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e);
    },
    data: function data(e, n, r, i) {
      if (!v.acceptData(e)) return;
      var s,
          o,
          u = v.expando,
          a = typeof n == "string",
          f = e.nodeType,
          l = f ? v.cache : e,
          c = f ? e[u] : e[u] && u;
      if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
      c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
      if (_typeof(n) == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
      return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o;
    },
    removeData: function removeData(e, t, n) {
      if (!v.acceptData(e)) return;
      var r,
          i,
          s,
          o = e.nodeType,
          u = o ? v.cache : e,
          a = o ? e[v.expando] : v.expando;
      if (!u[a]) return;

      if (t) {
        r = n ? u[a] : u[a].data;

        if (r) {
          v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));

          for (i = 0, s = t.length; i < s; i++) {
            delete r[t[i]];
          }

          if (!(n ? B : v.isEmptyObject)(r)) return;
        }
      }

      if (!n) {
        delete u[a].data;
        if (!B(u[a])) return;
      }

      o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null;
    },
    _data: function _data(e, t, n) {
      return v.data(e, t, n, !0);
    },
    acceptData: function acceptData(e) {
      var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t;
    }
  }), v.fn.extend({
    data: function data(e, n) {
      var r,
          i,
          s,
          o,
          u,
          a = this[0],
          f = 0,
          l = null;

      if (e === t) {
        if (this.length) {
          l = v.data(a);

          if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
            s = a.attributes;

            for (u = s.length; f < u; f++) {
              o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
            }

            v._data(a, "parsedAttrs", !0);
          }
        }

        return l;
      }

      return _typeof(e) == "object" ? this.each(function () {
        v.data(this, e);
      }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function (n) {
        if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
        r[1] = n, this.each(function () {
          var t = v(this);
          t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r);
        });
      }, null, n, arguments.length > 1, null, !1));
    },
    removeData: function removeData(e) {
      return this.each(function () {
        v.removeData(this, e);
      });
    }
  }), v.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = v.queue(e, t),
          r = n.length,
          i = n.shift(),
          s = v._queueHooks(e, t),
          o = function o() {
        v.dequeue(e, t);
      };

      i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return v._data(e, n) || v._data(e, n, {
        empty: v.Callbacks("once memory").add(function () {
          v.removeData(e, t + "queue", !0), v.removeData(e, n, !0);
        })
      });
    }
  }), v.fn.extend({
    queue: function queue(e, n) {
      var r = 2;
      return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = v.queue(this, e, n);
        v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        v.dequeue(this, e);
      });
    },
    delay: function delay(e, t) {
      return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);

        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, n) {
      var r,
          i = 1,
          s = v.Deferred(),
          o = this,
          u = this.length,
          a = function a() {
        --i || s.resolveWith(o, [o]);
      };

      typeof e != "string" && (n = e, e = t), e = e || "fx";

      while (u--) {
        r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
      }

      return a(), s.promise(n);
    }
  });
  var j,
      F,
      I,
      q = /[\t\r\n]/g,
      R = /\r/g,
      U = /^(?:button|input)$/i,
      z = /^(?:button|input|object|select|textarea)$/i,
      W = /^a(?:rea|)$/i,
      X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      V = v.support.getSetAttribute;
  v.fn.extend({
    attr: function attr(e, t) {
      return v.access(this, v.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        v.removeAttr(this, e);
      });
    },
    prop: function prop(e, t) {
      return v.access(this, v.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return e = v.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    },
    addClass: function addClass(e) {
      var t, n, r, i, s, o, u;
      if (v.isFunction(e)) return this.each(function (t) {
        v(this).addClass(e.call(this, t, this.className));
      });

      if (e && typeof e == "string") {
        t = e.split(y);

        for (n = 0, r = this.length; n < r; n++) {
          i = this[n];
          if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;else {
            s = " " + i.className + " ";

            for (o = 0, u = t.length; o < u; o++) {
              s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
            }

            i.className = v.trim(s);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(e) {
      var n, r, i, s, o, u, a;
      if (v.isFunction(e)) return this.each(function (t) {
        v(this).removeClass(e.call(this, t, this.className));
      });

      if (e && typeof e == "string" || e === t) {
        n = (e || "").split(y);

        for (u = 0, a = this.length; u < a; u++) {
          i = this[u];

          if (i.nodeType === 1 && i.className) {
            r = (" " + i.className + " ").replace(q, " ");

            for (s = 0, o = n.length; s < o; s++) {
              while (r.indexOf(" " + n[s] + " ") >= 0) {
                r = r.replace(" " + n[s] + " ", " ");
              }
            }

            i.className = e ? v.trim(r) : "";
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          r = typeof t == "boolean";

      return v.isFunction(e) ? this.each(function (n) {
        v(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if (n === "string") {
          var i,
              s = 0,
              o = v(this),
              u = t,
              a = e.split(y);

          while (i = a[s++]) {
            u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i);
          }
        } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || "";
      });
    },
    hasClass: function hasClass(e) {
      var t = " " + e + " ",
          n = 0,
          r = this.length;

      for (; n < r; n++) {
        if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
      }

      return !1;
    },
    val: function val(e) {
      var n,
          r,
          i,
          s = this[0];

      if (!arguments.length) {
        if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
        return;
      }

      return i = v.isFunction(e), this.each(function (r) {
        var s,
            o = v(this);
        if (this.nodeType !== 1) return;
        i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {
          return e == null ? "" : e + "";
        })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
        if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s;
      });
    }
  }), v.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text;
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              s = e.type === "select-one" || i < 0,
              o = s ? null : [],
              u = s ? i + 1 : r.length,
              a = i < 0 ? u : s ? i : 0;

          for (; a < u; a++) {
            n = r[a];

            if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
              t = v(n).val();
              if (s) return t;
              o.push(t);
            }
          }

          return o;
        },
        set: function set(e, t) {
          var n = v.makeArray(t);
          return v(e).find("option").each(function () {
            this.selected = v.inArray(v(this).val(), n) >= 0;
          }), n.length || (e.selectedIndex = -1), n;
        }
      }
    },
    attrFn: {},
    attr: function attr(e, n, r, i) {
      var s,
          o,
          u,
          a = e.nodeType;
      if (!e || a === 3 || a === 8 || a === 2) return;
      if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
      if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
      u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));

      if (r !== t) {
        if (r === null) {
          v.removeAttr(e, n);
          return;
        }

        return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r);
      }

      return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s);
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i,
          s,
          o = 0;

      if (t && e.nodeType === 1) {
        r = t.split(y);

        for (; o < r.length; o++) {
          i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1));
        }
      }
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      },
      value: {
        get: function get(e, t) {
          return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null;
        },
        set: function set(e, t, n) {
          if (j && v.nodeName(e, "button")) return j.set(e, t, n);
          e.value = t;
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function prop(e, n, r) {
      var i,
          s,
          o,
          u = e.nodeType;
      if (!e || u === 3 || u === 8 || u === 2) return;
      return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var n = e.getAttributeNode("tabindex");
          return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t;
        }
      }
    }
  }), F = {
    get: function get(e, n) {
      var r,
          i = v.prop(e, n);
      return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t;
    },
    set: function set(e, t, n) {
      var r;
      return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n;
    }
  }, V || (I = {
    name: !0,
    id: !0,
    coords: !0
  }, j = v.valHooks.button = {
    get: function get(e, n) {
      var r;
      return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t;
    },
    set: function set(e, t, n) {
      var r = e.getAttributeNode(n);
      return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + "";
    }
  }, v.each(["width", "height"], function (e, t) {
    v.attrHooks[t] = v.extend(v.attrHooks[t], {
      set: function set(e, n) {
        if (n === "") return e.setAttribute(t, "auto"), n;
      }
    });
  }), v.attrHooks.contenteditable = {
    get: j.get,
    set: function set(e, t, n) {
      t === "" && (t = "false"), j.set(e, t, n);
    }
  }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function (e, n) {
    v.attrHooks[n] = v.extend(v.attrHooks[n], {
      get: function get(e) {
        var r = e.getAttribute(n, 2);
        return r === null ? t : r;
      }
    });
  }), v.support.style || (v.attrHooks.style = {
    get: function get(e) {
      return e.style.cssText.toLowerCase() || t;
    },
    set: function set(e, t) {
      return e.style.cssText = t + "";
    }
  }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
    get: function get(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () {
    v.valHooks[this] = {
      get: function get(e) {
        return e.getAttribute("value") === null ? "on" : e.value;
      }
    };
  }), v.each(["radio", "checkbox"], function () {
    v.valHooks[this] = v.extend(v.valHooks[this], {
      set: function set(e, t) {
        if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0;
      }
    });
  });

  var $ = /^(?:textarea|input|select)$/i,
      J = /^([^\.]*|)(?:\.(.+)|)$/,
      K = /(?:^|\s)hover(\.\S+|)\b/,
      Q = /^key/,
      G = /^(?:mouse|contextmenu)|click/,
      Y = /^(?:focusinfocus|focusoutblur)$/,
      Z = function Z(e) {
    return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1");
  };

  v.event = {
    add: function add(e, n, r, i, s) {
      var o, _u, a, f, l, c, h, p, d, m, g;

      if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
      r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), _u = o.handle, _u || (o.handle = _u = function u(e) {
        return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(_u.elem, arguments);
      }, _u.elem = e), n = v.trim(Z(n)).split(" ");

      for (f = 0; f < n.length; f++) {
        l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
          type: c,
          origType: l[1],
          data: i,
          handler: r,
          guid: r.guid,
          selector: s,
          needsContext: s && v.expr.match.needsContext.test(s),
          namespace: h.join(".")
        }, d), m = a[c];

        if (!m) {
          m = a[c] = [], m.delegateCount = 0;
          if (!g.setup || g.setup.call(e, i, h, _u) === !1) e.addEventListener ? e.addEventListener(c, _u, !1) : e.attachEvent && e.attachEvent("on" + c, _u);
        }

        g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0;
      }

      e = null;
    },
    global: {},
    remove: function remove(e, t, n, r, i) {
      var s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          m,
          g = v.hasData(e) && v._data(e);

      if (!g || !(h = g.events)) return;
      t = v.trim(Z(t || "")).split(" ");

      for (s = 0; s < t.length; s++) {
        o = J.exec(t[s]) || [], u = a = o[1], f = o[2];

        if (!u) {
          for (u in h) {
            v.event.remove(e, u + t[s], n, r, !0);
          }

          continue;
        }

        p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

        for (c = 0; c < d.length; c++) {
          m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
        }

        d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u]);
      }

      v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0));
    },
    customEvent: {
      getData: !0,
      setData: !0,
      changeData: !0
    },
    trigger: function trigger(n, r, s, o) {
      if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
        var u,
            a,
            f,
            l,
            c,
            h,
            p,
            d,
            m,
            g,
            y = n.type || n,
            b = [];
        if (Y.test(y + v.event.triggered)) return;
        y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
        if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
        n = _typeof(n) == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";

        if (!s) {
          u = v.cache;

          for (f in u) {
            u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
          }

          return;
        }

        n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
        if (p.trigger && p.trigger.apply(s, r) === !1) return;
        m = [[s, p.bindType || y]];

        if (!o && !p.noBubble && !v.isWindow(s)) {
          g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;

          for (c = s; l; l = l.parentNode) {
            m.push([l, g]), c = l;
          }

          c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g]);
        }

        for (f = 0; f < m.length && !n.isPropagationStopped(); f++) {
          l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
        }

        return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result;
      }

      return;
    },
    dispatch: function dispatch(n) {
      n = v.event.fix(n || e.event);
      var r,
          i,
          s,
          o,
          u,
          a,
          f,
          c,
          h,
          p,
          d = (v._data(this, "events") || {})[n.type] || [],
          m = d.delegateCount,
          g = l.call(arguments),
          y = !n.exclusive && !n.namespace,
          b = v.event.special[n.type] || {},
          w = [];
      g[0] = n, n.delegateTarget = this;
      if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
      if (m && (!n.button || n.type !== "click")) for (s = n.target; s != this; s = s.parentNode || this) {
        if (s.disabled !== !0 || n.type !== "click") {
          u = {}, f = [];

          for (r = 0; r < m; r++) {
            c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
          }

          f.length && w.push({
            elem: s,
            matches: f
          });
        }
      }
      d.length > m && w.push({
        elem: this,
        matches: d.slice(m)
      });

      for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
        a = w[r], n.currentTarget = a.elem;

        for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
          c = a.matches[i];
          if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()));
        }
      }

      return b.postDispatch && b.postDispatch.call(this, n), n.result;
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(e, t) {
        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(e, n) {
        var r,
            s,
            o,
            u = n.button,
            a = n.fromElement;
        return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e;
      }
    },
    fix: function fix(e) {
      if (e[v.expando]) return e;
      var t,
          n,
          r = e,
          s = v.event.fixHooks[e.type] || {},
          o = s.props ? this.props.concat(s.props) : this.props;
      e = v.Event(r);

      for (t = o.length; t;) {
        n = o[--t], e[n] = r[n];
      }

      return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        delegateType: "focusin"
      },
      blur: {
        delegateType: "focusout"
      },
      beforeunload: {
        setup: function setup(e, t, n) {
          v.isWindow(this) && (this.onbeforeunload = n);
        },
        teardown: function teardown(e, t) {
          this.onbeforeunload === t && (this.onbeforeunload = null);
        }
      }
    },
    simulate: function simulate(e, t, n, r) {
      var i = v.extend(new v.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n));
  }, v.Event = function (e, t) {
    if (!(this instanceof v.Event)) return new v.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0;
  }, v.Event.prototype = {
    preventDefault: function preventDefault() {
      this.isDefaultPrevented = tt;
      var e = this.originalEvent;
      if (!e) return;
      e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    },
    stopPropagation: function stopPropagation() {
      this.isPropagationStopped = tt;
      var e = this.originalEvent;
      if (!e) return;
      e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0;
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = tt, this.stopPropagation();
    },
    isDefaultPrevented: et,
    isPropagationStopped: et,
    isImmediatePropagationStopped: et
  }, v.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (e, t) {
    v.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            s = e.handleObj,
            o = s.selector;
        if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
        return n;
      }
    };
  }), v.support.submitBubbles || (v.event.special.submit = {
    setup: function setup() {
      if (v.nodeName(this, "form")) return !1;
      v.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target,
            r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
        r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0;
        }), v._data(r, "_submit_attached", !0));
      });
    },
    postDispatch: function postDispatch(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0));
    },
    teardown: function teardown() {
      if (v.nodeName(this, "form")) return !1;
      v.event.remove(this, "._submit");
    }
  }), v.support.changeBubbles || (v.event.special.change = {
    setup: function setup() {
      if ($.test(this.nodeName)) {
        if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function (e) {
          e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
        }), v.event.add(this, "click._change", function (e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0);
        });
        return !1;
      }

      v.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;
        $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function (e) {
          this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0);
        }), v._data(t, "_change_attached", !0));
      });
    },
    handle: function handle(e) {
      var t = e.target;
      if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments);
    },
    teardown: function teardown() {
      return v.event.remove(this, "._change"), !$.test(this.nodeName);
    }
  }), v.support.focusinBubbles || v.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = 0,
        r = function r(e) {
      v.event.simulate(t, e.target, v.event.fix(e), !0);
    };

    v.event.special[t] = {
      setup: function setup() {
        n++ === 0 && i.addEventListener(e, r, !0);
      },
      teardown: function teardown() {
        --n === 0 && i.removeEventListener(e, r, !0);
      }
    };
  }), v.fn.extend({
    on: function on(e, n, r, i, s) {
      var o, u;

      if (_typeof(e) == "object") {
        typeof n != "string" && (r = r || n, n = t);

        for (u in e) {
          this.on(u, n, r, e[u], s);
        }

        return this;
      }

      r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
      if (i === !1) i = et;else if (!i) return this;
      return s === 1 && (o = i, i = function i(e) {
        return v().off(e), o.apply(this, arguments);
      }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function () {
        v.event.add(this, e, i, r, n);
      });
    },
    one: function one(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function off(e, n, r) {
      var i, s;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

      if (_typeof(e) == "object") {
        for (s in e) {
          this.off(s, n, e[s]);
        }

        return this;
      }

      if (n === !1 || typeof n == "function") r = n, n = t;
      return r === !1 && (r = et), this.each(function () {
        v.event.remove(this, e, r, n);
      });
    },
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    live: function live(e, t, n) {
      return v(this.context).on(e, this.selector, t, n), this;
    },
    die: function die(e, t) {
      return v(this.context).off(e, this.selector || "**", t), this;
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    trigger: function trigger(e, t) {
      return this.each(function () {
        v.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      if (this[0]) return v.event.trigger(e, t, this[0], !0);
    },
    toggle: function toggle(e) {
      var t = arguments,
          n = e.guid || v.guid++,
          r = 0,
          i = function i(n) {
        var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
        return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1;
      };

      i.guid = n;

      while (r < t.length) {
        t[r++].guid = n;
      }

      return this.click(i);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    v.fn[t] = function (e, n) {
      return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks);
  }), function (e, t) {
    function nt(e, t, n, r) {
      n = n || [], t = t || g;
      var i,
          s,
          a,
          f,
          l = t.nodeType;
      if (!e || typeof e != "string") return n;
      if (l !== 1 && l !== 9) return [];
      a = o(t);
      if (!a && !r) if (i = R.exec(e)) if (f = i[1]) {
        if (l === 9) {
          s = t.getElementById(f);
          if (!s || !s.parentNode) return n;
          if (s.id === f) return n.push(s), n;
        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n;
      } else {
        if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
        if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n;
      }
      return vt(e.replace(j, "$1"), t, n, r, a);
    }

    function rt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return n === "input" && t.type === e;
      };
    }

    function it(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return (n === "input" || n === "button") && t.type === e;
      };
    }

    function st(e) {
      return N(function (t) {
        return t = +t, N(function (n, r) {
          var i,
              s = e([], n.length, t),
              o = s.length;

          while (o--) {
            n[i = s[o]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function ot(e, t, n) {
      if (e === t) return n;
      var r = e.nextSibling;

      while (r) {
        if (r === t) return -1;
        r = r.nextSibling;
      }

      return 1;
    }

    function ut(e, t) {
      var n,
          r,
          s,
          o,
          u,
          a,
          f,
          l = L[d][e + " "];
      if (l) return t ? 0 : l.slice(0);
      u = e, a = [], f = i.preFilter;

      while (u) {
        if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
        n = !1;
        if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");

        for (o in i.filter) {
          (r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
        }

        if (!n) break;
      }

      return t ? u.length : u ? nt.error(e) : L(e, a).slice(0);
    }

    function at(e, t, r) {
      var i = t.dir,
          s = r && t.dir === "parentNode",
          o = w++;
      return t.first ? function (t, n, r) {
        while (t = t[i]) {
          if (s || t.nodeType === 1) return e(t, n, r);
        }
      } : function (t, r, u) {
        if (!u) {
          var a,
              f = b + " " + o + " ",
              l = f + n;

          while (t = t[i]) {
            if (s || t.nodeType === 1) {
              if ((a = t[d]) === l) return t.sizset;

              if (typeof a == "string" && a.indexOf(f) === 0) {
                if (t.sizset) return t;
              } else {
                t[d] = l;
                if (e(t, r, u)) return t.sizset = !0, t;
                t.sizset = !1;
              }
            }
          }
        } else while (t = t[i]) {
          if (s || t.nodeType === 1) if (e(t, r, u)) return t;
        }
      };
    }

    function ft(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function lt(e, t, n, r, i) {
      var s,
          o = [],
          u = 0,
          a = e.length,
          f = t != null;

      for (; u < a; u++) {
        if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
      }

      return o;
    }

    function ct(e, t, n, r, i, s) {
      return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function (s, o, u, a) {
        var f,
            l,
            c,
            h = [],
            p = [],
            d = o.length,
            v = s || dt(t || "*", u.nodeType ? [u] : u, []),
            m = e && (s || !t) ? lt(v, h, e, u, a) : v,
            g = n ? i || (s ? e : d || r) ? [] : o : m;
        n && n(m, g, u, a);

        if (r) {
          f = lt(g, p), r(f, [], u, a), l = f.length;

          while (l--) {
            if (c = f[l]) g[p[l]] = !(m[p[l]] = c);
          }
        }

        if (s) {
          if (i || e) {
            if (i) {
              f = [], l = g.length;

              while (l--) {
                (c = g[l]) && f.push(m[l] = c);
              }

              i(null, g = [], f, a);
            }

            l = g.length;

            while (l--) {
              (c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c));
            }
          }
        } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g);
      });
    }

    function ht(e) {
      var t,
          n,
          r,
          s = e.length,
          o = i.relative[e[0].type],
          u = o || i.relative[" "],
          a = o ? 1 : 0,
          f = at(function (e) {
        return e === t;
      }, u, !0),
          l = at(function (e) {
        return T.call(t, e) > -1;
      }, u, !0),
          h = [function (e, n, r) {
        return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r));
      }];

      for (; a < s; a++) {
        if (n = i.relative[e[a].type]) h = [at(ft(h), n)];else {
          n = i.filter[e[a].type].apply(null, e[a].matches);

          if (n[d]) {
            r = ++a;

            for (; r < s; r++) {
              if (i.relative[e[r].type]) break;
            }

            return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""));
          }

          h.push(n);
        }
      }

      return ft(h);
    }

    function pt(e, t) {
      var r = t.length > 0,
          s = e.length > 0,
          o = function o(u, a, f, l, h) {
        var p,
            d,
            v,
            m = [],
            y = 0,
            w = "0",
            x = u && [],
            T = h != null,
            N = c,
            C = u || s && i.find.TAG("*", h && a.parentNode || a),
            k = b += N == null ? 1 : Math.E;
        T && (c = a !== g && a, n = o.el);

        for (; (p = C[w]) != null; w++) {
          if (s && p) {
            for (d = 0; v = e[d]; d++) {
              if (v(p, a, f)) {
                l.push(p);
                break;
              }
            }

            T && (b = k, n = ++o.el);
          }

          r && ((p = !v && p) && y--, u && x.push(p));
        }

        y += w;

        if (r && w !== y) {
          for (d = 0; v = t[d]; d++) {
            v(x, m, a, f);
          }

          if (u) {
            if (y > 0) while (w--) {
              !x[w] && !m[w] && (m[w] = E.call(l));
            }
            m = lt(m);
          }

          S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l);
        }

        return T && (b = k, c = N), x;
      };

      return o.el = 0, r ? N(o) : o;
    }

    function dt(e, t, n) {
      var r = 0,
          i = t.length;

      for (; r < i; r++) {
        nt(e, t[r], n);
      }

      return n;
    }

    function vt(e, t, n, r, s) {
      var o,
          u,
          f,
          l,
          c,
          h = ut(e),
          p = h.length;

      if (!r && h.length === 1) {
        u = h[0] = h[0].slice(0);

        if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
          t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
          if (!t) return n;
          e = e.slice(u.shift().length);
        }

        for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
          f = u[o];
          if (i.relative[l = f.type]) break;
          if (c = i.find[l]) if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
            u.splice(o, 1), e = r.length && u.join("");
            if (!e) return S.apply(n, x.call(r, 0)), n;
            break;
          }
        }
      }

      return a(e, h)(r, t, s, n, z.test(e)), n;
    }

    function mt() {}

    var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h = !0,
        p = "undefined",
        d = ("sizcache" + Math.random()).replace(".", ""),
        m = String,
        g = e.document,
        y = g.documentElement,
        b = 0,
        w = 0,
        E = [].pop,
        S = [].push,
        x = [].slice,
        T = [].indexOf || function (e) {
      var t = 0,
          n = this.length;

      for (; t < n; t++) {
        if (this[t] === e) return t;
      }

      return -1;
    },
        N = function N(e, t) {
      return e[d] = t == null || t, e;
    },
        C = function C() {
      var e = {},
          t = [];
      return N(function (n, r) {
        return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r;
      }, e);
    },
        k = C(),
        L = C(),
        A = C(),
        O = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        _ = M.replace("w", "w#"),
        D = "([*^$|!~]?=)",
        P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
        H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
        B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
        j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
        F = new RegExp("^" + O + "*," + O + "*"),
        I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
        q = new RegExp(H),
        R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        U = /^:not/,
        z = /[\x20\t\r\n\f]*[+~]/,
        W = /:not\($/,
        X = /h\d/i,
        V = /input|select|textarea|button/i,
        $ = /\\(?!\\)/g,
        J = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
      TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + P),
      PSEUDO: new RegExp("^" + H),
      POS: new RegExp(B, "i"),
      CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
      needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
    },
        K = function K(e) {
      var t = g.createElement("div");

      try {
        return e(t);
      } catch (n) {
        return !1;
      } finally {
        t = null;
      }
    },
        Q = K(function (e) {
      return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length;
    }),
        G = K(function (e) {
      return e.innerHTML = "<a href='#'></a>", e.firstChild && _typeof(e.firstChild.getAttribute) !== p && e.firstChild.getAttribute("href") === "#";
    }),
        Y = K(function (e) {
      e.innerHTML = "<select></select>";

      var t = _typeof(e.lastChild.getAttribute("multiple"));

      return t !== "boolean" && t !== "string";
    }),
        Z = K(function (e) {
      return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2);
    }),
        et = K(function (e) {
      e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
      var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
      return r = !g.getElementById(d), y.removeChild(e), t;
    });

    try {
      x.call(y.childNodes, 0)[0].nodeType;
    } catch (tt) {
      x = function x(e) {
        var t,
            n = [];

        for (; t = this[e]; e++) {
          n.push(t);
        }

        return n;
      };
    }

    nt.matches = function (e, t) {
      return nt(e, null, null, t);
    }, nt.matchesSelector = function (e, t) {
      return nt(t, null, null, [e]).length > 0;
    }, s = nt.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (i === 1 || i === 9 || i === 11) {
          if (typeof e.textContent == "string") return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += s(e);
          }
        } else if (i === 3 || i === 4) return e.nodeValue;
      } else for (; t = e[r]; r++) {
        n += s(t);
      }

      return n;
    }, o = nt.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? t.nodeName !== "HTML" : !1;
    }, u = nt.contains = y.contains ? function (e, t) {
      var n = e.nodeType === 9 ? e.documentElement : e,
          r = t && t.parentNode;
      return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r));
    } : y.compareDocumentPosition ? function (e, t) {
      return t && !!(e.compareDocumentPosition(t) & 16);
    } : function (e, t) {
      while (t = t.parentNode) {
        if (t === e) return !0;
      }

      return !1;
    }, nt.attr = function (e, t) {
      var n,
          r = o(e);
      return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null);
    }, i = nt.selectors = {
      cacheLength: 50,
      createPseudo: N,
      match: J,
      attrHandle: G ? {} : {
        href: function href(e) {
          return e.getAttribute("href", 2);
        },
        type: function type(e) {
          return e.getAttribute("type");
        }
      },
      find: {
        ID: r ? function (e, t, n) {
          if (_typeof(t.getElementById) !== p && !n) {
            var r = t.getElementById(e);
            return r && r.parentNode ? [r] : [];
          }
        } : function (e, n, r) {
          if (_typeof(n.getElementById) !== p && !r) {
            var i = n.getElementById(e);
            return i ? i.id === e || _typeof(i.getAttributeNode) !== p && i.getAttributeNode("id").value === e ? [i] : t : [];
          }
        },
        TAG: Q ? function (e, t) {
          if (_typeof(t.getElementsByTagName) !== p) return t.getElementsByTagName(e);
        } : function (e, t) {
          var n = t.getElementsByTagName(e);

          if (e === "*") {
            var r,
                i = [],
                s = 0;

            for (; r = n[s]; s++) {
              r.nodeType === 1 && i.push(r);
            }

            return i;
          }

          return n;
        },
        NAME: et && function (e, t) {
          if (_typeof(t.getElementsByName) !== p) return t.getElementsByName(name);
        },
        CLASS: Z && function (e, t, n) {
          if (_typeof(t.getElementsByClassName) !== p && !n) return t.getElementsByClassName(e);
        }
      },
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t, n;
          if (J.CHILD.test(e[0])) return null;
          if (e[3]) e[2] = e[3];else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
          return e.slice(0, 3);
        }
      },
      filter: {
        ID: r ? function (e) {
          return e = e.replace($, ""), function (t) {
            return t.getAttribute("id") === e;
          };
        } : function (e) {
          return e = e.replace($, ""), function (t) {
            var n = _typeof(t.getAttributeNode) !== p && t.getAttributeNode("id");
            return n && n.value === e;
          };
        },
        TAG: function TAG(e) {
          return e === "*" ? function () {
            return !0;
          } : (e = e.replace($, "").toLowerCase(), function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          });
        },
        CLASS: function CLASS(e) {
          var t = k[d][e + " "];
          return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function (e) {
            return t.test(e.className || _typeof(e.getAttribute) !== p && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r, i) {
            var s = nt.attr(r, e);
            return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(e, t, n, r) {
          return e === "nth" ? function (e) {
            var t,
                i,
                s = e.parentNode;
            if (n === 1 && r === 0) return !0;

            if (s) {
              i = 0;

              for (t = s.firstChild; t; t = t.nextSibling) {
                if (t.nodeType === 1) {
                  i++;
                  if (e === t) break;
                }
              }
            }

            return i -= r, i === n || i % n === 0 && i / n >= 0;
          } : function (t) {
            var n = t;

            switch (e) {
              case "only":
              case "first":
                while (n = n.previousSibling) {
                  if (n.nodeType === 1) return !1;
                }

                if (e === "first") return !0;
                n = t;

              case "last":
                while (n = n.nextSibling) {
                  if (n.nodeType === 1) return !1;
                }

                return !0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
          return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function (e, n) {
            var i,
                s = r(e, t),
                o = s.length;

            while (o--) {
              i = T.call(e, s[o]), e[i] = !(n[i] = s[o]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: N(function (e) {
          var t = [],
              n = [],
              r = a(e.replace(j, "$1"));
          return r[d] ? N(function (e, t, n, i) {
            var s,
                o = r(e, null, i, []),
                u = e.length;

            while (u--) {
              if (s = o[u]) e[u] = !(t[u] = s);
            }
          }) : function (e, i, s) {
            return t[0] = e, r(t, null, s, n), !n.pop();
          };
        }),
        has: N(function (e) {
          return function (t) {
            return nt(e, t).length > 0;
          };
        }),
        contains: N(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1;
          };
        }),
        enabled: function enabled(e) {
          return e.disabled === !1;
        },
        disabled: function disabled(e) {
          return e.disabled === !0;
        },
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return t === "input" && !!e.checked || t === "option" && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        parent: function parent(e) {
          return !i.pseudos.empty(e);
        },
        empty: function empty(e) {
          var t;
          e = e.firstChild;

          while (e) {
            if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
            e = e.nextSibling;
          }

          return !0;
        },
        header: function header(e) {
          return X.test(e.nodeName);
        },
        text: function text(e) {
          var t, n;
          return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t);
        },
        radio: rt("radio"),
        checkbox: rt("checkbox"),
        file: rt("file"),
        password: rt("password"),
        image: rt("image"),
        submit: it("submit"),
        reset: it("reset"),
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return t === "input" && e.type === "button" || t === "button";
        },
        input: function input(e) {
          return V.test(e.nodeName);
        },
        focus: function focus(e) {
          var t = e.ownerDocument;
          return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        active: function active(e) {
          return e === e.ownerDocument.activeElement;
        },
        first: st(function () {
          return [0];
        }),
        last: st(function (e, t) {
          return [t - 1];
        }),
        eq: st(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: st(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: st(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: st(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: st(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }, f = y.compareDocumentPosition ? function (e, t) {
      return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1;
    } : function (e, t) {
      if (e === t) return l = !0, 0;
      if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
      var n,
          r,
          i = [],
          s = [],
          o = e.parentNode,
          u = t.parentNode,
          a = o;
      if (o === u) return ot(e, t);
      if (!o) return -1;
      if (!u) return 1;

      while (a) {
        i.unshift(a), a = a.parentNode;
      }

      a = u;

      while (a) {
        s.unshift(a), a = a.parentNode;
      }

      n = i.length, r = s.length;

      for (var f = 0; f < n && f < r; f++) {
        if (i[f] !== s[f]) return ot(i[f], s[f]);
      }

      return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1);
    }, [0, 0].sort(f), h = !l, nt.uniqueSort = function (e) {
      var t,
          n = [],
          r = 1,
          i = 0;
      l = h, e.sort(f);

      if (l) {
        for (; t = e[r]; r++) {
          t === e[r - 1] && (i = n.push(r));
        }

        while (i--) {
          e.splice(n[i], 1);
        }
      }

      return e;
    }, nt.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, a = nt.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          s = A[d][e + " "];

      if (!s) {
        t || (t = ut(e)), n = t.length;

        while (n--) {
          s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
        }

        s = A(e, pt(i, r));
      }

      return s;
    }, g.querySelectorAll && function () {
      var e,
          t = vt,
          n = /'|\\/g,
          r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
          i = [":focus"],
          s = [":active"],
          u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
      K(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked");
      }), K(function (e) {
        e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled");
      }), i = new RegExp(i.join("|")), vt = function vt(e, r, s, o, u) {
        if (!o && !u && !i.test(e)) {
          var a,
              f,
              l = !0,
              c = d,
              h = r,
              p = r.nodeType === 9 && e;

          if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
            a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;

            while (f--) {
              a[f] = c + a[f].join("");
            }

            h = z.test(e) && r.parentNode || r, p = a.join(",");
          }

          if (p) try {
            return S.apply(s, x.call(h.querySelectorAll(p), 0)), s;
          } catch (v) {} finally {
            l || r.removeAttribute("id");
          }
        }

        return t(e, r, s, o, u);
      }, u && (K(function (t) {
        e = u.call(t, "div");

        try {
          u.call(t, "[test!='']:sizzle"), s.push("!=", H);
        } catch (n) {}
      }), s = new RegExp(s.join("|")), nt.matchesSelector = function (t, n) {
        n = n.replace(r, "='$1']");
        if (!o(t) && !s.test(n) && !i.test(n)) try {
          var a = u.call(t, n);
          if (a || e || t.document && t.document.nodeType !== 11) return a;
        } catch (f) {}
        return nt(n, null, null, [t]).length > 0;
      });
    }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt(), nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains;
  }(e);
  var nt = /Until$/,
      rt = /^(?:parents|prev(?:Until|All))/,
      it = /^.[^:#\[\.,]*$/,
      st = v.expr.match.needsContext,
      ot = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  v.fn.extend({
    find: function find(e) {
      var t,
          n,
          r,
          i,
          s,
          o,
          u = this;
      if (typeof e != "string") return v(e).filter(function () {
        for (t = 0, n = u.length; t < n; t++) {
          if (v.contains(u[t], this)) return !0;
        }
      });
      o = this.pushStack("", "find", e);

      for (t = 0, n = this.length; t < n; t++) {
        r = o.length, v.find(e, this[t], o);
        if (t > 0) for (i = r; i < o.length; i++) {
          for (s = 0; s < r; s++) {
            if (o[s] === o[i]) {
              o.splice(i--, 1);
              break;
            }
          }
        }
      }

      return o;
    },
    has: function has(e) {
      var t,
          n = v(e, this),
          r = n.length;
      return this.filter(function () {
        for (t = 0; t < r; t++) {
          if (v.contains(this, n[t])) return !0;
        }
      });
    },
    not: function not(e) {
      return this.pushStack(ft(this, e, !1), "not", e);
    },
    filter: function filter(e) {
      return this.pushStack(ft(this, e, !0), "filter", e);
    },
    is: function is(e) {
      return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0);
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          s = [],
          o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;

      for (; r < i; r++) {
        n = this[r];

        while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
          if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
            s.push(n);
            break;
          }

          n = n.parentNode;
        }
      }

      return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e);
    },
    index: function index(e) {
      return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
    },
    add: function add(e, t) {
      var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
          r = v.merge(this.get(), n);
      return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r));
    },
    addBack: function addBack(e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
    }
  }), v.fn.andSelf = v.fn.addBack, v.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && t.nodeType !== 11 ? t : null;
    },
    parents: function parents(e) {
      return v.dir(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return v.dir(e, "parentNode", n);
    },
    next: function next(e) {
      return at(e, "nextSibling");
    },
    prev: function prev(e) {
      return at(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return v.dir(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return v.dir(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return v.dir(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return v.dir(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return v.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return v.sibling(e.firstChild);
    },
    contents: function contents(e) {
      return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes);
    }
  }, function (e, t) {
    v.fn[e] = function (n, r) {
      var i = v.map(this, t, n);
      return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","));
    };
  }), v.extend({
    filter: function filter(e, t, n) {
      return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t);
    },
    dir: function dir(e, n, r) {
      var i = [],
          s = e[n];

      while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) {
        s.nodeType === 1 && i.push(s), s = s[n];
      }

      return i;
    },
    sibling: function sibling(e, t) {
      var n = [];

      for (; e; e = e.nextSibling) {
        e.nodeType === 1 && e !== t && n.push(e);
      }

      return n;
    }
  });
  var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      ht = / jQuery\d+="(?:null|\d+)"/g,
      pt = /^\s+/,
      dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      vt = /<([\w:]+)/,
      mt = /<tbody/i,
      gt = /<|&#?\w+;/,
      yt = /<(?:script|style|link)/i,
      bt = /<(?:script|object|embed|option|style)/i,
      wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
      Et = /^(?:checkbox|radio)$/,
      St = /checked\s*(?:[^=]|=\s*.checked.)/i,
      xt = /\/(java|ecma)script/i,
      Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
      Nt = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    area: [1, "<map>", "</map>"],
    _default: [0, "", ""]
  },
      Ct = lt(i),
      kt = Ct.appendChild(i.createElement("div"));
  Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
    text: function text(e) {
      return v.access(this, function (e) {
        return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e));
      }, null, e, arguments.length);
    },
    wrapAll: function wrapAll(e) {
      if (v.isFunction(e)) return this.each(function (t) {
        v(this).wrapAll(e.call(this, t));
      });

      if (this[0]) {
        var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;

          while (e.firstChild && e.firstChild.nodeType === 1) {
            e = e.firstChild;
          }

          return e;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(e) {
      return v.isFunction(e) ? this.each(function (t) {
        v(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = v(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = v.isFunction(e);
      return this.each(function (n) {
        v(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        v.nodeName(this, "body") || v(this).replaceWith(this.childNodes);
      }).end();
    },
    append: function append() {
      return this.domManip(arguments, !0, function (e) {
        (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e);
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, !0, function (e) {
        (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild);
      });
    },
    before: function before() {
      if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
        this.parentNode.insertBefore(e, this);
      });

      if (arguments.length) {
        var e = v.clean(arguments);
        return this.pushStack(v.merge(e, this), "before", this.selector);
      }
    },
    after: function after() {
      if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
        this.parentNode.insertBefore(e, this.nextSibling);
      });

      if (arguments.length) {
        var e = v.clean(arguments);
        return this.pushStack(v.merge(this, e), "after", this.selector);
      }
    },
    remove: function remove(e, t) {
      var n,
          r = 0;

      for (; (n = this[r]) != null; r++) {
        if (!e || v.filter(e, [n]).length) !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
      }

      return this;
    },
    empty: function empty() {
      var e,
          t = 0;

      for (; (e = this[t]) != null; t++) {
        e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));

        while (e.firstChild) {
          e.removeChild(e.firstChild);
        }
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
        return v.clone(this, e, t);
      });
    },
    html: function html(e) {
      return v.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;
        if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;

        if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(dt, "<$1></$2>");

          try {
            for (; r < i; r++) {
              n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
            }

            n = 0;
          } catch (s) {}
        }

        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith(e) {
      return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function (t) {
        var n = v(this),
            r = n.html();
        n.replaceWith(e.call(this, t, r));
      }) : (typeof e != "string" && (e = v(e).detach()), this.each(function () {
        var t = this.nextSibling,
            n = this.parentNode;
        v(this).remove(), t ? v(t).before(e) : v(n).append(e);
      }));
    },
    detach: function detach(e) {
      return this.remove(e, !0);
    },
    domManip: function domManip(e, n, r) {
      e = [].concat.apply([], e);
      var i,
          s,
          o,
          u,
          a = 0,
          f = e[0],
          l = [],
          c = this.length;
      if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function () {
        v(this).domManip(e, n, r);
      });
      if (v.isFunction(f)) return this.each(function (i) {
        var s = v(this);
        e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r);
      });

      if (this[0]) {
        i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);

        if (s) {
          n = n && v.nodeName(s, "tr");

          for (u = i.cacheable || c - 1; a < c; a++) {
            r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0));
          }
        }

        o = s = null, l.length && v.each(l, function (e, t) {
          t.src ? v.ajax ? v.ajax({
            url: t.src,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
          }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t);
        });
      }

      return this;
    }
  }), v.buildFragment = function (e, n, r) {
    var s,
        o,
        u,
        a = e[0];
    return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
      fragment: s,
      cacheable: o
    };
  }, v.fragments = {}, v.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    v.fn[e] = function (n) {
      var r,
          i = 0,
          s = [],
          o = v(n),
          u = o.length,
          a = this.length === 1 && this[0].parentNode;
      if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;

      for (; i < u; i++) {
        r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
      }

      return this.pushStack(s, e, o.selector);
    };
  }), v.extend({
    clone: function clone(e, t, n) {
      var r, i, s, o;
      v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));

      if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
        Ot(e, o), r = Mt(e), i = Mt(o);

        for (s = 0; r[s]; ++s) {
          i[s] && Ot(r[s], i[s]);
        }
      }

      if (t) {
        At(e, o);

        if (n) {
          r = Mt(e), i = Mt(o);

          for (s = 0; r[s]; ++s) {
            At(r[s], i[s]);
          }
        }
      }

      return r = i = null, o;
    },
    clean: function clean(e, t, n, r) {
      var s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          m,
          g,
          y = t === i && Ct,
          b = [];
      if (!t || typeof t.createDocumentFragment == "undefined") t = i;

      for (s = 0; (u = e[s]) != null; s++) {
        typeof u == "number" && (u += "");
        if (!u) continue;
        if (typeof u == "string") if (!gt.test(u)) u = t.createTextNode(u);else {
          y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];

          while (l--) {
            c = c.lastChild;
          }

          if (!v.support.tbody) {
            h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];

            for (o = p.length - 1; o >= 0; --o) {
              v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
            }
          }

          !v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c);
        }
        u.nodeType ? b.push(u) : v.merge(b, u);
      }

      c && (u = c = y = null);
      if (!v.support.appendChecked) for (s = 0; (u = b[s]) != null; s++) {
        v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
      }

      if (n) {
        m = function m(e) {
          if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e);
        };

        for (s = 0; (u = b[s]) != null; s++) {
          if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length);
        }
      }

      return b;
    },
    cleanData: function cleanData(e, t) {
      var n,
          r,
          i,
          s,
          o = 0,
          u = v.expando,
          a = v.cache,
          f = v.support.deleteExpando,
          l = v.event.special;

      for (; (i = e[o]) != null; o++) {
        if (t || v.acceptData(i)) {
          r = i[u], n = r && a[r];

          if (n) {
            if (n.events) for (s in n.events) {
              l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
            }
            a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r));
          }
        }
      }
    }
  }), function () {
    var e, t;
    v.uaMatch = function (e) {
      e = e.toLowerCase();
      var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
      return {
        browser: t[1] || "",
        version: t[2] || "0"
      };
    }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function () {
      function e(t, n) {
        return new e.fn.init(t, n);
      }

      v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, i) {
        return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t);
      }, e.fn.init.prototype = e.fn;
      var t = e(i);
      return e;
    };
  }();
  var Dt,
      Pt,
      Ht,
      Bt = /alpha\([^)]*\)/i,
      jt = /opacity=([^)]*)/,
      Ft = /^(top|right|bottom|left)$/,
      It = /^(none|table(?!-c[ea]).+)/,
      qt = /^margin/,
      Rt = new RegExp("^(" + m + ")(.*)$", "i"),
      Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
      zt = new RegExp("^([-+])=(" + m + ")", "i"),
      Wt = {
    BODY: "block"
  },
      Xt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Vt = {
    letterSpacing: 0,
    fontWeight: 400
  },
      $t = ["Top", "Right", "Bottom", "Left"],
      Jt = ["Webkit", "O", "Moz", "ms"],
      Kt = v.fn.toggle;
  v.fn.extend({
    css: function css(e, n) {
      return v.access(this, function (e, n, r) {
        return r !== t ? v.style(e, n, r) : v.css(e, n);
      }, e, n, arguments.length > 1);
    },
    show: function show() {
      return Yt(this, !0);
    },
    hide: function hide() {
      return Yt(this);
    },
    toggle: function toggle(e, t) {
      var n = typeof e == "boolean";
      return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function () {
        (n ? e : Gt(this)) ? v(this).show() : v(this).hide();
      });
    }
  }), v.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Dt(e, "opacity");
            return n === "" ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(e, n, r, i) {
      if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
      var s,
          o,
          u,
          a = v.camelCase(n),
          f = e.style;
      n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
      if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
      o = _typeof(r), o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
      if (r == null || o === "number" && isNaN(r)) return;
      o === "number" && !v.cssNumber[a] && (r += "px");
      if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
        f[n] = r;
      } catch (l) {}
    },
    css: function css(e, n, r, i) {
      var s,
          o,
          u,
          a = v.camelCase(n);
      return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s;
    },
    swap: function swap(e, t, n) {
      var r,
          i,
          s = {};

      for (i in t) {
        s[i] = e.style[i], e.style[i] = t[i];
      }

      r = n.call(e);

      for (i in t) {
        e.style[i] = s[i];
      }

      return r;
    }
  }), e.getComputedStyle ? Dt = function Dt(t, n) {
    var r,
        i,
        s,
        o,
        u = e.getComputedStyle(t, null),
        a = t.style;
    return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r;
  } : i.documentElement.currentStyle && (Dt = function Dt(e, t) {
    var n,
        r,
        i = e.currentStyle && e.currentStyle[t],
        s = e.style;
    return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i;
  }), v.each(["height", "width"], function (e, t) {
    v.cssHooks[t] = {
      get: function get(e, n, r) {
        if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function () {
          return tn(e, t, r);
        }) : tn(e, t, r);
      },
      set: function set(e, n, r) {
        return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0);
      }
    };
  }), v.support.opacity || (v.cssHooks.opacity = {
    get: function get(e, t) {
      return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function set(e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
          s = r && r.filter || n.filter || "";
      n.zoom = 1;

      if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
        n.removeAttribute("filter");
        if (r && !r.filter) return;
      }

      n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i;
    }
  }), v(function () {
    v.support.reliableMarginRight || (v.cssHooks.marginRight = {
      get: function get(e, t) {
        return v.swap(e, {
          display: "inline-block"
        }, function () {
          if (t) return Dt(e, "marginRight");
        });
      }
    }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) {
      v.cssHooks[t] = {
        get: function get(e, n) {
          if (n) {
            var r = Dt(e, t);
            return Ut.test(r) ? v(e).position()[t] + "px" : r;
          }
        }
      };
    });
  }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) {
    return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none";
  }, v.expr.filters.visible = function (e) {
    return !v.expr.filters.hidden(e);
  }), v.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    v.cssHooks[e + t] = {
      expand: function expand(n) {
        var r,
            i = typeof n == "string" ? n.split(" ") : [n],
            s = {};

        for (r = 0; r < 4; r++) {
          s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
        }

        return s;
      }
    }, qt.test(e) || (v.cssHooks[e + t].set = Zt);
  });
  var rn = /%20/g,
      sn = /\[\]$/,
      on = /\r?\n/g,
      un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      an = /^(?:select|textarea)/i;
  v.fn.extend({
    serialize: function serialize() {
      return v.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        return this.elements ? v.makeArray(this.elements) : this;
      }).filter(function () {
        return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type));
      }).map(function (e, t) {
        var n = v(this).val();
        return n == null ? null : v.isArray(n) ? v.map(n, function (e, n) {
          return {
            name: t.name,
            value: e.replace(on, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(on, "\r\n")
        };
      }).get();
    }
  }), v.param = function (e, n) {
    var r,
        i = [],
        s = function s(e, t) {
      t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };

    n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
    if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
      s(this.name, this.value);
    });else for (r in e) {
      fn(r, e[r], n, s);
    }
    return i.join("&").replace(rn, "+");
  };
  var ln,
      cn,
      hn = /#.*$/,
      pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
      dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
      vn = /^(?:GET|HEAD)$/,
      mn = /^\/\//,
      gn = /\?/,
      yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      bn = /([?&])_=[^&]*/,
      wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      En = v.fn.load,
      Sn = {},
      xn = {},
      Tn = ["*/"] + ["*"];

  try {
    cn = s.href;
  } catch (Nn) {
    cn = i.createElement("a"), cn.href = "", cn = cn.href;
  }

  ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function (e, n, r) {
    if (typeof e != "string" && En) return En.apply(this, arguments);
    if (!this.length) return this;
    var i,
        s,
        o,
        u = this,
        a = e.indexOf(" ");
    return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && _typeof(n) == "object" && (s = "POST"), v.ajax({
      url: e,
      type: s,
      dataType: "html",
      data: n,
      complete: function complete(e, t) {
        r && u.each(r, o || [e.responseText, t, e]);
      }
    }).done(function (e) {
      o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e);
    }), this;
  }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
    v.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), v.each(["get", "post"], function (e, n) {
    v[n] = function (e, r, i, s) {
      return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
        type: n,
        url: e,
        data: r,
        success: i,
        dataType: s
      });
    };
  }), v.extend({
    getScript: function getScript(e, n) {
      return v.get(e, t, n, "script");
    },
    getJSON: function getJSON(e, t, n) {
      return v.get(e, t, n, "json");
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e;
    },
    ajaxSettings: {
      url: cn,
      isLocal: dn.test(ln[1]),
      global: !0,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      processData: !0,
      async: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": Tn
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": e.String,
        "text html": !0,
        "text json": v.parseJSON,
        "text xml": v.parseXML
      },
      flatOptions: {
        context: !0,
        url: !0
      }
    },
    ajaxPrefilter: Cn(Sn),
    ajaxTransport: Cn(xn),
    ajax: function ajax(e, n) {
      function T(e, n, s, a) {
        var l,
            y,
            b,
            w,
            S,
            T = n;
        if (E === 2) return;
        E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
        if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);else {
          b = T;
          if (!T || e) T = "error", e < 0 && (e = 0);
        }
        x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"));
      }

      _typeof(e) == "object" && (n = e, e = t), n = n || {};
      var r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c = v.ajaxSetup({}, n),
          h = c.context || c,
          p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
          d = v.Deferred(),
          m = v.Callbacks("once memory"),
          g = c.statusCode || {},
          b = {},
          w = {},
          E = 0,
          S = "canceled",
          x = {
        readyState: 0,
        setRequestHeader: function setRequestHeader(e, t) {
          if (!E) {
            var n = e.toLowerCase();
            e = w[n] = w[n] || e, b[e] = t;
          }

          return this;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return E === 2 ? i : null;
        },
        getResponseHeader: function getResponseHeader(e) {
          var n;

          if (E === 2) {
            if (!s) {
              s = {};

              while (n = pn.exec(i)) {
                s[n[1].toLowerCase()] = n[2];
              }
            }

            n = s[e.toLowerCase()];
          }

          return n === t ? null : n;
        },
        overrideMimeType: function overrideMimeType(e) {
          return E || (c.mimeType = e), this;
        },
        abort: function abort(e) {
          return e = e || S, o && o.abort(e), T(0, e), this;
        }
      };
      d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
        if (e) {
          var t;
          if (E < 2) for (t in e) {
            g[t] = [g[t], e[t]];
          } else t = e[x.status], x.always(t);
        }

        return this;
      }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
      if (E === 2) return x;
      f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");

      if (!c.hasContent) {
        c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;

        if (c.cache === !1) {
          var N = v.now(),
              C = c.url.replace(bn, "$1_=" + N);
          c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "");
        }
      }

      (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);

      for (l in c.headers) {
        x.setRequestHeader(l, c.headers[l]);
      }

      if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
        S = "abort";

        for (l in {
          success: 1,
          error: 1,
          complete: 1
        }) {
          x[l](c[l]);
        }

        o = kn(xn, c, n, x);
        if (!o) T(-1, "No Transport");else {
          x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
            x.abort("timeout");
          }, c.timeout));

          try {
            E = 1, o.send(b, T);
          } catch (k) {
            if (!(E < 2)) throw k;
            T(-1, k);
          }
        }
        return x;
      }

      return x.abort();
    },
    active: 0,
    lastModified: {},
    etag: {}
  });
  var Mn = [],
      _n = /\?/,
      Dn = /(=)\?(?=&|$)|\?\?/,
      Pn = v.now();
  v.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Mn.pop() || v.expando + "_" + Pn++;
      return this[e] = !0, e;
    }
  }), v.ajaxPrefilter("json jsonp", function (n, r, i) {
    var s,
        o,
        u,
        a = n.data,
        f = n.url,
        l = n.jsonp !== !1,
        c = l && Dn.test(f),
        h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
    if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
      return u || v.error(s + " was not called"), u[0];
    }, n.dataTypes[0] = "json", e[s] = function () {
      u = arguments;
    }, i.always(function () {
      e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t;
    }), "script";
  }), v.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /javascript|ecmascript/
    },
    converters: {
      "text script": function textScript(e) {
        return v.globalEval(e), e;
      }
    }
  }), v.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), v.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
          r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
      return {
        send: function send(s, o) {
          n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
            if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success");
          }, r.insertBefore(n, r.firstChild);
        },
        abort: function abort() {
          n && n.onload(0, 1);
        }
      };
    }
  });
  var Hn,
      Bn = e.ActiveXObject ? function () {
    for (var e in Hn) {
      Hn[e](0, 1);
    }
  } : !1,
      jn = 0;
  v.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && Fn() || In();
  } : Fn, function (e) {
    v.extend(v.support, {
      ajax: !!e,
      cors: !!e && "withCredentials" in e
    });
  }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function (n) {
    if (!n.crossDomain || v.support.cors) {
      var _r;

      return {
        send: function send(i, s) {
          var o,
              u,
              a = n.xhr();
          n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
          if (n.xhrFields) for (u in n.xhrFields) {
            a[u] = n.xhrFields[u];
          }
          n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");

          try {
            for (u in i) {
              a.setRequestHeader(u, i[u]);
            }
          } catch (f) {}

          a.send(n.hasContent && n.data || null), _r = function r(e, i) {
            var u, f, l, c, h;

            try {
              if (_r && (i || a.readyState === 4)) {
                _r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                if (i) a.readyState !== 4 && a.abort();else {
                  u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);

                  try {
                    c.text = a.responseText;
                  } catch (p) {}

                  try {
                    f = a.statusText;
                  } catch (p) {
                    f = "";
                  }

                  !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204);
                }
              }
            } catch (d) {
              i || s(-1, d);
            }

            c && s(u, f, c, l);
          }, n.async ? a.readyState === 4 ? setTimeout(_r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = _r), a.onreadystatechange = _r) : _r();
        },
        abort: function abort() {
          _r && _r(0, 1);
        }
      };
    }
  });
  var qn,
      Rn,
      Un = /^(?:toggle|show|hide)$/,
      zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
      Wn = /queueHooks$/,
      Xn = [Gn],
      Vn = {
    "*": [function (e, t) {
      var n,
          r,
          i = this.createTween(e, t),
          s = zn.exec(t),
          o = i.cur(),
          u = +o || 0,
          a = 1,
          f = 20;

      if (s) {
        n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");

        if (r !== "px" && u) {
          u = v.css(i.elem, e, !0) || n || 1;

          do {
            a = a || ".5", u /= a, v.style(i.elem, e, u + r);
          } while (a !== (a = i.cur() / o) && a !== 1 && --f);
        }

        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n;
      }

      return i;
    }]
  };
  v.Animation = v.extend(Kn, {
    tweener: function tweener(e, t) {
      v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      var n,
          r = 0,
          i = e.length;

      for (; r < i; r++) {
        n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t);
      }
    },
    prefilter: function prefilter(e, t) {
      t ? Xn.unshift(e) : Xn.push(e);
    }
  }), v.Tween = Yn, Yn.prototype = {
    constructor: Yn,
    init: function init(e, t, n, r, i, s) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Yn.propHooks[this.prop];
      return e && e.get ? e.get(this) : Yn.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = Yn.propHooks[this.prop];
      return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this;
    }
  }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop];
      },
      set: function set(e) {
        v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, v.each(["toggle", "show", "hide"], function (e, t) {
    var n = v.fn[t];

    v.fn[t] = function (r, i, s) {
      return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s);
    };
  }), v.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(Gt).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = v.isEmptyObject(e),
          s = v.speed(t, n, r),
          o = function o() {
        var t = Kn(this, v.extend({}, e), s);
        i && t.stop(!0);
      };

      return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o);
    },
    stop: function stop(e, n, r) {
      var i = function i(e) {
        var t = e.stop;
        delete e.stop, t(r);
      };

      return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            n = e != null && e + "queueHooks",
            s = v.timers,
            o = v._data(this);

        if (n) o[n] && o[n].stop && i(o[n]);else for (n in o) {
          o[n] && o[n].stop && Wn.test(n) && i(o[n]);
        }

        for (n = s.length; n--;) {
          s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
        }

        (t || !r) && v.dequeue(this, e);
      });
    }
  }), v.each({
    slideDown: Zn("show"),
    slideUp: Zn("hide"),
    slideToggle: Zn("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    v.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), v.speed = function (e, t, n) {
    var r = e && _typeof(e) == "object" ? v.extend({}, e) : {
      complete: n || !n && t || v.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !v.isFunction(t) && t
    };
    r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
    if (r.queue == null || r.queue === !0) r.queue = "fx";
    return r.old = r.complete, r.complete = function () {
      v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue);
    }, r;
  }, v.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function () {
    var e,
        n = v.timers,
        r = 0;
    qn = v.now();

    for (; r < n.length; r++) {
      e = n[r], !e() && n[r] === e && n.splice(r--, 1);
    }

    n.length || v.fx.stop(), qn = t;
  }, v.fx.timer = function (e) {
    e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval));
  }, v.fx.interval = 13, v.fx.stop = function () {
    clearInterval(Rn), Rn = null;
  }, v.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) {
    return v.grep(v.timers, function (t) {
      return e === t.elem;
    }).length;
  });
  var er = /^(?:body|html)$/i;
  v.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      v.offset.setOffset(this, e, t);
    });
    var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f = {
      top: 0,
      left: 0
    },
        l = this[0],
        c = l && l.ownerDocument;
    if (!c) return;
    return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
      top: f.top + u - s,
      left: f.left + a - o
    }) : f);
  }, v.offset = {
    bodyOffset: function bodyOffset(e) {
      var t = e.offsetTop,
          n = e.offsetLeft;
      return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
        top: t,
        left: n
      };
    },
    setOffset: function setOffset(e, t, n) {
      var r = v.css(e, "position");
      r === "static" && (e.style.position = "relative");
      var i = v(e),
          s = i.offset(),
          o = v.css(e, "top"),
          u = v.css(e, "left"),
          a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
          f = {},
          l = {},
          c,
          h;
      a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f);
    }
  }, v.fn.extend({
    position: function position() {
      if (!this[0]) return;
      var e = this[0],
          t = this.offsetParent(),
          n = this.offset(),
          r = er.test(t[0].nodeName) ? {
        top: 0,
        left: 0
      } : t.offset();
      return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
        top: n.top - r.top,
        left: n.left - r.left
      };
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent || i.body;

        while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") {
          e = e.offsetParent;
        }

        return e || i.body;
      });
    }
  }), v.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, n) {
    var r = /Y/.test(n);

    v.fn[e] = function (i) {
      return v.access(this, function (e, i, s) {
        var o = tr(e);
        if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
        o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s;
      }, e, i, arguments.length, null);
    };
  }), v.each({
    Height: "height",
    Width: "width"
  }, function (e, n) {
    v.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function (r, i) {
      v.fn[i] = function (i, s) {
        var o = arguments.length && (r || typeof i != "boolean"),
            u = r || (i === !0 || s === !0 ? "margin" : "border");
        return v.access(this, function (n, r, i) {
          var s;
          return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u);
        }, n, o ? i : t, o, null);
      };
    });
  }), e.jQuery = e.$ = v,  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return v;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(window);

/***/ }),

/***/ "./src/user/js/jquery-ui-1.8.2.js":
/*!****************************************!*\
  !*** ./src/user/js/jquery-ui-1.8.2.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
  function c(b, c) {
    var e = b.nodeName.toLowerCase();

    if ("area" === e) {
      var f = b.parentNode,
          g = f.name,
          h;
      return !b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : (h = a("img[usemap=#" + g + "]")[0], !!h && d(h));
    }

    return (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b);
  }

  function d(b) {
    return !a(b).parents().andSelf().filter(function () {
      return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this);
    }).length;
  }

  a.ui = a.ui || {};
  if (a.ui.version) return;
  a.extend(a.ui, {
    version: "1.8.23",
    keyCode: {
      ALT: 18,
      BACKSPACE: 8,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91
    }
  }), a.fn.extend({
    propAttr: a.fn.prop || a.fn.attr,
    _focus: a.fn.focus,
    focus: function focus(b, c) {
      return typeof b == "number" ? this.each(function () {
        var d = this;
        setTimeout(function () {
          a(d).focus(), c && c.call(d);
        }, b);
      }) : this._focus.apply(this, arguments);
    },
    scrollParent: function scrollParent() {
      var b;
      return a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function () {
        return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1));
      }).eq(0) : b = this.parents().filter(function () {
        return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1));
      }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b;
    },
    zIndex: function zIndex(c) {
      if (c !== b) return this.css("zIndex", c);

      if (this.length) {
        var d = a(this[0]),
            e,
            f;

        while (d.length && d[0] !== document) {
          e = d.css("position");

          if (e === "absolute" || e === "relative" || e === "fixed") {
            f = parseInt(d.css("zIndex"), 10);
            if (!isNaN(f) && f !== 0) return f;
          }

          d = d.parent();
        }
      }

      return 0;
    },
    disableSelection: function disableSelection() {
      return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
        a.preventDefault();
      });
    },
    enableSelection: function enableSelection() {
      return this.unbind(".ui-disableSelection");
    }
  }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
    function h(b, c, d, f) {
      return a.each(e, function () {
        c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0);
      }), c;
    }

    var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
        f = d.toLowerCase(),
        g = {
      innerWidth: a.fn.innerWidth,
      innerHeight: a.fn.innerHeight,
      outerWidth: a.fn.outerWidth,
      outerHeight: a.fn.outerHeight
    };
    a.fn["inner" + d] = function (c) {
      return c === b ? g["inner" + d].call(this) : this.each(function () {
        a(this).css(f, h(this, c) + "px");
      });
    }, a.fn["outer" + d] = function (b, c) {
      return typeof b != "number" ? g["outer" + d].call(this, b) : this.each(function () {
        a(this).css(f, h(this, b, !0, c) + "px");
      });
    };
  }), a.extend(a.expr[":"], {
    data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
      return function (c) {
        return !!a.data(c, b);
      };
    }) : function (b, c, d) {
      return !!a.data(b, d[3]);
    },
    focusable: function focusable(b) {
      return c(b, !isNaN(a.attr(b, "tabindex")));
    },
    tabbable: function tabbable(b) {
      var d = a.attr(b, "tabindex"),
          e = isNaN(d);
      return (e || d >= 0) && c(b, !e);
    }
  }), a(function () {
    var b = document.body,
        c = b.appendChild(c = document.createElement("div"));
    c.offsetHeight, a.extend(c.style, {
      minHeight: "100px",
      height: "auto",
      padding: 0,
      borderWidth: 0
    }), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none";
  }), a.curCSS || (a.curCSS = a.css), a.extend(a.ui, {
    plugin: {
      add: function add(b, c, d) {
        var e = a.ui[b].prototype;

        for (var f in d) {
          e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]]);
        }
      },
      call: function call(a, b, c) {
        var d = a.plugins[b];
        if (!d || !a.element[0].parentNode) return;

        for (var e = 0; e < d.length; e++) {
          a.options[d[e][0]] && d[e][1].apply(a.element, c);
        }
      }
    },
    contains: function contains(a, b) {
      return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b);
    },
    hasScroll: function hasScroll(b, c) {
      if (a(b).css("overflow") === "hidden") return !1;
      var d = c && c === "left" ? "scrollLeft" : "scrollTop",
          e = !1;
      return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e);
    },
    isOverAxis: function isOverAxis(a, b, c) {
      return a > b && a < b + c;
    },
    isOver: function isOver(b, c, d, e, f, g) {
      return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g);
    }
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.widget.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  if (a.cleanData) {
    var c = a.cleanData;

    a.cleanData = function (b) {
      for (var d = 0, e; (e = b[d]) != null; d++) {
        try {
          a(e).triggerHandler("remove");
        } catch (f) {}
      }

      c(b);
    };
  } else {
    var d = a.fn.remove;

    a.fn.remove = function (b, c) {
      return this.each(function () {
        return c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function () {
          try {
            a(this).triggerHandler("remove");
          } catch (b) {}
        }), d.call(a(this), b, c);
      });
    };
  }

  a.widget = function (b, c, d) {
    var e = b.split(".")[0],
        f;
    b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function (c) {
      return !!a.data(c, b);
    }, a[e] = a[e] || {}, a[e][b] = function (a, b) {
      arguments.length && this._createWidget(a, b);
    };
    var g = new c();
    g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, {
      namespace: e,
      widgetName: b,
      widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
      widgetBaseClass: f
    }, d), a.widget.bridge(b, a[e][b]);
  }, a.widget.bridge = function (c, d) {
    a.fn[c] = function (e) {
      var f = typeof e == "string",
          g = Array.prototype.slice.call(arguments, 1),
          h = this;
      return e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e, f && e.charAt(0) === "_" ? h : (f ? this.each(function () {
        var d = a.data(this, c),
            f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
        if (f !== d && f !== b) return h = f, !1;
      }) : this.each(function () {
        var b = a.data(this, c);
        b ? b.option(e || {})._init() : a.data(this, c, new d(e, this));
      }), h);
    };
  }, a.Widget = function (a, b) {
    arguments.length && this._createWidget(a, b);
  }, a.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    options: {
      disabled: !1
    },
    _createWidget: function _createWidget(b, c) {
      a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
      var d = this;
      this.element.bind("remove." + this.widgetName, function () {
        d.destroy();
      }), this._create(), this._trigger("create"), this._init();
    },
    _getCreateOptions: function _getCreateOptions() {
      return a.metadata && a.metadata.get(this.element[0])[this.widgetName];
    },
    _create: function _create() {},
    _init: function _init() {},
    destroy: function destroy() {
      this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled");
    },
    widget: function widget() {
      return this.element;
    },
    option: function option(c, d) {
      var e = c;
      if (arguments.length === 0) return a.extend({}, this.options);

      if (typeof c == "string") {
        if (d === b) return this.options[c];
        e = {}, e[c] = d;
      }

      return this._setOptions(e), this;
    },
    _setOptions: function _setOptions(b) {
      var c = this;
      return a.each(b, function (a, b) {
        c._setOption(a, b);
      }), this;
    },
    _setOption: function _setOption(a, b) {
      return this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b), this;
    },
    enable: function enable() {
      return this._setOption("disabled", !1);
    },
    disable: function disable() {
      return this._setOption("disabled", !0);
    },
    _trigger: function _trigger(b, c, d) {
      var e,
          f,
          g = this.options[b];
      d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent;
      if (f) for (e in f) {
        e in c || (c[e] = f[e]);
      }
      return this.element.trigger(c, d), !(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented());
    }
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.mouse.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  var c = !1;
  a(document).mouseup(function (a) {
    c = !1;
  }), a.widget("ui.mouse", {
    options: {
      cancel: ":input,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var b = this;
      this.element.bind("mousedown." + this.widgetName, function (a) {
        return b._mouseDown(a);
      }).bind("click." + this.widgetName, function (c) {
        if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1;
      }), this.started = !1;
    },
    _mouseDestroy: function _mouseDestroy() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function _mouseDown(b) {
      if (c) return;
      this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
      var d = this,
          e = b.which == 1,
          f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
      if (!e || f || !this._mouseCapture(b)) return !0;
      this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
        d.mouseDelayMet = !0;
      }, this.options.delay));

      if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
        this._mouseStarted = this._mouseStart(b) !== !1;
        if (!this._mouseStarted) return b.preventDefault(), !0;
      }

      return !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
        return d._mouseMove(a);
      }, this._mouseUpDelegate = function (a) {
        return d._mouseUp(a);
      }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0, !0;
    },
    _mouseMove: function _mouseMove(b) {
      return !a.browser.msie || document.documentMode >= 9 || !!b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b);
    },
    _mouseUp: function _mouseUp(b) {
      return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1;
    },
    _mouseDistanceMet: function _mouseDistanceMet(a) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet(a) {
      return this.mouseDelayMet;
    },
    _mouseStart: function _mouseStart(a) {},
    _mouseDrag: function _mouseDrag(a) {},
    _mouseStop: function _mouseStop(a) {},
    _mouseCapture: function _mouseCapture(a) {
      return !0;
    }
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.position.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.ui = a.ui || {};
  var c = /left|center|right/,
      d = /top|center|bottom/,
      e = "center",
      f = {},
      g = a.fn.position,
      h = a.fn.offset;
  a.fn.position = function (b) {
    if (!b || !b.of) return g.apply(this, arguments);
    b = a.extend({}, b);
    var h = a(b.of),
        i = h[0],
        j = (b.collision || "flip").split(" "),
        k = b.offset ? b.offset.split(" ") : [0, 0],
        l,
        m,
        n;
    return i.nodeType === 9 ? (l = h.width(), m = h.height(), n = {
      top: 0,
      left: 0
    }) : i.setTimeout ? (l = h.width(), m = h.height(), n = {
      top: h.scrollTop(),
      left: h.scrollLeft()
    }) : i.preventDefault ? (b.at = "left top", l = m = 0, n = {
      top: b.of.pageY,
      left: b.of.pageX
    }) : (l = h.outerWidth(), m = h.outerHeight(), n = h.offset()), a.each(["my", "at"], function () {
      var a = (b[this] || "").split(" ");
      a.length === 1 && (a = c.test(a[0]) ? a.concat([e]) : d.test(a[0]) ? [e].concat(a) : [e, e]), a[0] = c.test(a[0]) ? a[0] : e, a[1] = d.test(a[1]) ? a[1] : e, b[this] = a;
    }), j.length === 1 && (j[1] = j[0]), k[0] = parseInt(k[0], 10) || 0, k.length === 1 && (k[1] = k[0]), k[1] = parseInt(k[1], 10) || 0, b.at[0] === "right" ? n.left += l : b.at[0] === e && (n.left += l / 2), b.at[1] === "bottom" ? n.top += m : b.at[1] === e && (n.top += m / 2), n.left += k[0], n.top += k[1], this.each(function () {
      var c = a(this),
          d = c.outerWidth(),
          g = c.outerHeight(),
          h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
          i = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
          o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
          p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0),
          q = a.extend({}, n),
          r;
      b.my[0] === "right" ? q.left -= d : b.my[0] === e && (q.left -= d / 2), b.my[1] === "bottom" ? q.top -= g : b.my[1] === e && (q.top -= g / 2), f.fractions || (q.left = Math.round(q.left), q.top = Math.round(q.top)), r = {
        left: q.left - h,
        top: q.top - i
      }, a.each(["left", "top"], function (c, e) {
        a.ui.position[j[c]] && a.ui.position[j[c]][e](q, {
          targetWidth: l,
          targetHeight: m,
          elemWidth: d,
          elemHeight: g,
          collisionPosition: r,
          collisionWidth: o,
          collisionHeight: p,
          offset: k,
          my: b.my,
          at: b.at
        });
      }), a.fn.bgiframe && c.bgiframe(), c.offset(a.extend(q, {
        using: b.using
      }));
    });
  }, a.ui.position = {
    fit: {
      left: function left(b, c) {
        var d = a(window),
            e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
        b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left);
      },
      top: function top(b, c) {
        var d = a(window),
            e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
        b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top);
      }
    },
    flip: {
      left: function left(b, c) {
        if (c.at[0] === e) return;
        var d = a(window),
            f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(),
            g = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0,
            h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth,
            i = -2 * c.offset[0];
        b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0;
      },
      top: function top(b, c) {
        if (c.at[1] === e) return;
        var d = a(window),
            f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(),
            g = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0,
            h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight,
            i = -2 * c.offset[1];
        b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0;
      }
    }
  }, a.offset.setOffset || (a.offset.setOffset = function (b, c) {
    /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative");
    var d = a(b),
        e = d.offset(),
        f = parseInt(a.curCSS(b, "top", !0), 10) || 0,
        g = parseInt(a.curCSS(b, "left", !0), 10) || 0,
        h = {
      top: c.top - e.top + f,
      left: c.left - e.left + g
    };
    "using" in c ? c.using.call(b, h) : d.css(h);
  }, a.fn.offset = function (b) {
    var c = this[0];
    return !c || !c.ownerDocument ? null : b ? a.isFunction(b) ? this.each(function (c) {
      a(this).offset(b.call(this, c, a(this).offset()));
    }) : this.each(function () {
      a.offset.setOffset(this, b);
    }) : h.call(this);
  }), a.curCSS || (a.curCSS = a.css), function () {
    var b = document.getElementsByTagName("body")[0],
        c = document.createElement("div"),
        d,
        e,
        g,
        h,
        i;
    d = document.createElement(b ? "div" : "body"), g = {
      visibility: "hidden",
      width: 0,
      height: 0,
      border: 0,
      margin: 0,
      background: "none"
    }, b && a.extend(g, {
      position: "absolute",
      left: "-1000px",
      top: "-1000px"
    });

    for (var j in g) {
      d.style[j] = g[j];
    }

    d.appendChild(c), e = b || document.documentElement, e.insertBefore(d, e.firstChild), c.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h = a(c).offset(function (a, b) {
      return b;
    }).offset(), d.innerHTML = "", e.removeChild(d), i = h.top + h.left + (b ? 2e3 : 0), f.fractions = i > 21 && i < 22;
  }();
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.draggable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.widget("ui.draggable", a.ui.mouse, {
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1
    },
    _create: function _create() {
      this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit();
    },
    destroy: function destroy() {
      if (!this.element.data("draggable")) return;
      return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this;
    },
    _mouseCapture: function _mouseCapture(b) {
      var c = this.options;
      return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(b), this.handle ? (c.iframeFix && a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
        a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
          width: this.offsetWidth + "px",
          height: this.offsetHeight + "px",
          position: "absolute",
          opacity: "0.001",
          zIndex: 1e3
        }).css(a(this).offset()).appendTo("body");
      }), !0) : !1);
    },
    _mouseStart: function _mouseStart(b) {
      var c = this.options;
      return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, a.extend(this.offset, {
        click: {
          left: b.pageX - this.offset.left,
          top: b.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0);
    },
    _mouseDrag: function _mouseDrag(b, c) {
      this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute");

      if (!c) {
        var d = this._uiHash();

        if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
        this.position = d.position;
      }

      if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
      return a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
    },
    _mouseStop: function _mouseStop(b) {
      var c = !1;
      a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1);
      var d = this.element[0],
          e = !1;

      while (d && (d = d.parentNode)) {
        d == document && (e = !0);
      }

      if (!e && this.options.helper === "original") return !1;

      if (this.options.revert == "invalid" && !c || this.options.revert == "valid" && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
        var f = this;
        a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
          f._trigger("stop", b) !== !1 && f._clear();
        });
      } else this._trigger("stop", b) !== !1 && this._clear();

      return !1;
    },
    _mouseUp: function _mouseUp(b) {
      return this.options.iframeFix === !0 && a("div.ui-draggable-iframeFix").each(function () {
        this.parentNode.removeChild(this);
      }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b);
    },
    cancel: function cancel() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
    },
    _getHandle: function _getHandle(b) {
      var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1;
      return a(this.options.handle, this.element).find("*").andSelf().each(function () {
        this == b.target && (c = !0);
      }), c;
    },
    _createHelper: function _createHelper(b) {
      var c = this.options,
          d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
      return d.parents("body").length || d.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute"), d;
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(b) {
      typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {
        left: +b[0],
        top: +b[1] || 0
      }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
    },
    _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();
      var b = this.offsetParent.offset();
      this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
      if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) b = {
        top: 0,
        left: 0
      };
      return {
        top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if (this.cssPosition == "relative") {
        var a = this.element.position();
        return {
          top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }

      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var b = this.options;
      b.containment == "parent" && (b.containment = this.helper[0].parentNode);
      if (b.containment == "document" || b.containment == "window") this.containment = [b.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (b.containment == "document" ? 0 : a(window).scrollLeft()) + a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b.containment == "document" ? 0 : a(window).scrollTop()) + (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];

      if (!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) {
        var c = a(b.containment),
            d = c[0];
        if (!d) return;
        var e = c.offset(),
            f = a(d).css("overflow") != "hidden";
        this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c;
      } else b.containment.constructor == Array && (this.containment = b.containment);
    },
    _convertPositionTo: function _convertPositionTo(b, c) {
      c || (c = this.position);
      var d = b == "absolute" ? 1 : -1,
          e = this.options,
          f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
          g = /(html|body)/i.test(f[0].tagName);
      return {
        top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d),
        left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d)
      };
    },
    _generatePosition: function _generatePosition(b) {
      var c = this.options,
          d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
          e = /(html|body)/i.test(d[0].tagName),
          f = b.pageX,
          g = b.pageY;

      if (this.originalPosition) {
        var h;

        if (this.containment) {
          if (this.relative_container) {
            var i = this.relative_container.offset();
            h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top];
          } else h = this.containment;

          b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left), b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top), b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left), b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top);
        }

        if (c.grid) {
          var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY;
          g = h ? j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3] ? j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1] : j : j;
          var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX;
          f = h ? k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2] ? k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0] : k : k;
        }
      }

      return {
        top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
        left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
      };
    },
    _clear: function _clear() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1;
    },
    _trigger: function _trigger(b, c, d) {
      return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), b == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d);
    },
    plugins: {},
    _uiHash: function _uiHash(a) {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), a.extend(a.ui.draggable, {
    version: "1.8.23"
  }), a.ui.plugin.add("draggable", "connectToSortable", {
    start: function start(b, c) {
      var d = a(this).data("draggable"),
          e = d.options,
          f = a.extend({}, c, {
        item: d.element
      });
      d.sortables = [], a(e.connectToSortable).each(function () {
        var c = a.data(this, "sortable");
        c && !c.options.disabled && (d.sortables.push({
          instance: c,
          shouldRevert: c.options.revert
        }), c.refreshPositions(), c._trigger("activate", b, f));
      });
    },
    stop: function stop(b, c) {
      var d = a(this).data("draggable"),
          e = a.extend({}, c, {
        item: d.element
      });
      a.each(d.sortables, function () {
        this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, d.options.helper == "original" && this.instance.currentItem.css({
          top: "auto",
          left: "auto"
        })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e));
      });
    },
    drag: function drag(b, c) {
      var d = a(this).data("draggable"),
          e = this,
          f = function f(b) {
        var c = this.offset.click.top,
            d = this.offset.click.left,
            e = this.positionAbs.top,
            f = this.positionAbs.left,
            g = b.height,
            h = b.width,
            i = b.top,
            j = b.left;
        return a.ui.isOver(e + c, f + d, i, j, g, h);
      };

      a.each(d.sortables, function (f) {
        this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
          return c.helper[0];
        }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1);
      });
    }
  }), a.ui.plugin.add("draggable", "cursor", {
    start: function start(b, c) {
      var d = a("body"),
          e = a(this).data("draggable").options;
      d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor);
    },
    stop: function stop(b, c) {
      var d = a(this).data("draggable").options;
      d._cursor && a("body").css("cursor", d._cursor);
    }
  }), a.ui.plugin.add("draggable", "opacity", {
    start: function start(b, c) {
      var d = a(c.helper),
          e = a(this).data("draggable").options;
      d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity);
    },
    stop: function stop(b, c) {
      var d = a(this).data("draggable").options;
      d._opacity && a(c.helper).css("opacity", d._opacity);
    }
  }), a.ui.plugin.add("draggable", "scroll", {
    start: function start(b, c) {
      var d = a(this).data("draggable");
      d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset());
    },
    drag: function drag(b, c) {
      var d = a(this).data("draggable"),
          e = d.options,
          f = !1;

      if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
        if (!e.axis || e.axis != "x") d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed);
        if (!e.axis || e.axis != "y") d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed);
      } else {
        if (!e.axis || e.axis != "x") b.pageY - a(document).scrollTop() < e.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed));
        if (!e.axis || e.axis != "y") b.pageX - a(document).scrollLeft() < e.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed));
      }

      f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b);
    }
  }), a.ui.plugin.add("draggable", "snap", {
    start: function start(b, c) {
      var d = a(this).data("draggable"),
          e = d.options;
      d.snapElements = [], a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function () {
        var b = a(this),
            c = b.offset();
        this != d.element[0] && d.snapElements.push({
          item: this,
          width: b.outerWidth(),
          height: b.outerHeight(),
          top: c.top,
          left: c.left
        });
      });
    },
    drag: function drag(b, c) {
      var d = a(this).data("draggable"),
          e = d.options,
          f = e.snapTolerance,
          g = c.offset.left,
          h = g + d.helperProportions.width,
          i = c.offset.top,
          j = i + d.helperProportions.height;

      for (var k = d.snapElements.length - 1; k >= 0; k--) {
        var l = d.snapElements[k].left,
            m = l + d.snapElements[k].width,
            n = d.snapElements[k].top,
            o = n + d.snapElements[k].height;

        if (!(l - f < g && g < m + f && n - f < i && i < o + f || l - f < g && g < m + f && n - f < j && j < o + f || l - f < h && h < m + f && n - f < i && i < o + f || l - f < h && h < m + f && n - f < j && j < o + f)) {
          d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
            snapItem: d.snapElements[k].item
          })), d.snapElements[k].snapping = !1;
          continue;
        }

        if (e.snapMode != "inner") {
          var p = Math.abs(n - j) <= f,
              q = Math.abs(o - i) <= f,
              r = Math.abs(l - h) <= f,
              s = Math.abs(m - g) <= f;
          p && (c.position.top = d._convertPositionTo("relative", {
            top: n - d.helperProportions.height,
            left: 0
          }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
            top: o,
            left: 0
          }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
            top: 0,
            left: l - d.helperProportions.width
          }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
            top: 0,
            left: m
          }).left - d.margins.left);
        }

        var t = p || q || r || s;

        if (e.snapMode != "outer") {
          var p = Math.abs(n - i) <= f,
              q = Math.abs(o - j) <= f,
              r = Math.abs(l - g) <= f,
              s = Math.abs(m - h) <= f;
          p && (c.position.top = d._convertPositionTo("relative", {
            top: n,
            left: 0
          }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
            top: o - d.helperProportions.height,
            left: 0
          }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
            top: 0,
            left: l
          }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
            top: 0,
            left: m - d.helperProportions.width
          }).left - d.margins.left);
        }

        !d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
          snapItem: d.snapElements[k].item
        })), d.snapElements[k].snapping = p || q || r || s || t;
      }
    }
  }), a.ui.plugin.add("draggable", "stack", {
    start: function start(b, c) {
      var d = a(this).data("draggable").options,
          e = a.makeArray(a(d.stack)).sort(function (b, c) {
        return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
      });
      if (!e.length) return;
      var f = parseInt(e[0].style.zIndex) || 0;
      a(e).each(function (a) {
        this.style.zIndex = f + a;
      }), this[0].style.zIndex = f + e.length;
    }
  }), a.ui.plugin.add("draggable", "zIndex", {
    start: function start(b, c) {
      var d = a(c.helper),
          e = a(this).data("draggable").options;
      d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex);
    },
    stop: function stop(b, c) {
      var d = a(this).data("draggable").options;
      d._zIndex && a(c.helper).css("zIndex", d._zIndex);
    }
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.droppable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.widget("ui.droppable", {
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: "default",
      tolerance: "intersect"
    },
    _create: function _create() {
      var b = this.options,
          c = b.accept;
      this.isover = 0, this.isout = 1, this.accept = a.isFunction(c) ? c : function (a) {
        return a.is(c);
      }, this.proportions = {
        width: this.element[0].offsetWidth,
        height: this.element[0].offsetHeight
      }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable");
    },
    destroy: function destroy() {
      var b = a.ui.ddmanager.droppables[this.options.scope];

      for (var c = 0; c < b.length; c++) {
        b[c] == this && b.splice(c, 1);
      }

      return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this;
    },
    _setOption: function _setOption(b, c) {
      b == "accept" && (this.accept = a.isFunction(c) ? c : function (a) {
        return a.is(c);
      }), a.Widget.prototype._setOption.apply(this, arguments);
    },
    _activate: function _activate(b) {
      var c = a.ui.ddmanager.current;
      this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c));
    },
    _deactivate: function _deactivate(b) {
      var c = a.ui.ddmanager.current;
      this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c));
    },
    _over: function _over(b) {
      var c = a.ui.ddmanager.current;
      if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
      this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)));
    },
    _out: function _out(b) {
      var c = a.ui.ddmanager.current;
      if (!c || (c.currentItem || c.element)[0] == this.element[0]) return;
      this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)));
    },
    _drop: function _drop(b, c) {
      var d = c || a.ui.ddmanager.current;
      if (!d || (d.currentItem || d.element)[0] == this.element[0]) return !1;
      var e = !1;
      return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
        var b = a.data(this, "droppable");
        if (b.options.greedy && !b.options.disabled && b.options.scope == d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
          offset: b.element.offset()
        }), b.options.tolerance)) return e = !0, !1;
      }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1;
    },
    ui: function ui(a) {
      return {
        draggable: a.currentItem || a.element,
        helper: a.helper,
        position: a.position,
        offset: a.positionAbs
      };
    }
  }), a.extend(a.ui.droppable, {
    version: "1.8.23"
  }), a.ui.intersect = function (b, c, d) {
    if (!c.offset) return !1;
    var e = (b.positionAbs || b.position.absolute).left,
        f = e + b.helperProportions.width,
        g = (b.positionAbs || b.position.absolute).top,
        h = g + b.helperProportions.height,
        i = c.offset.left,
        j = i + c.proportions.width,
        k = c.offset.top,
        l = k + c.proportions.height;

    switch (d) {
      case "fit":
        return i <= e && f <= j && k <= g && h <= l;

      case "intersect":
        return i < e + b.helperProportions.width / 2 && f - b.helperProportions.width / 2 < j && k < g + b.helperProportions.height / 2 && h - b.helperProportions.height / 2 < l;

      case "pointer":
        var m = (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left,
            n = (b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top,
            o = a.ui.isOver(n, m, k, i, c.proportions.height, c.proportions.width);
        return o;

      case "touch":
        return (g >= k && g <= l || h >= k && h <= l || g < k && h > l) && (e >= i && e <= j || f >= i && f <= j || e < i && f > j);

      default:
        return !1;
    }
  }, a.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function prepareOffsets(b, c) {
      var d = a.ui.ddmanager.droppables[b.options.scope] || [],
          e = c ? c.type : null,
          f = (b.currentItem || b.element).find(":data(droppable)").andSelf();

      g: for (var h = 0; h < d.length; h++) {
        if (d[h].options.disabled || b && !d[h].accept.call(d[h].element[0], b.currentItem || b.element)) continue;

        for (var i = 0; i < f.length; i++) {
          if (f[i] == d[h].element[0]) {
            d[h].proportions.height = 0;
            continue g;
          }
        }

        d[h].visible = d[h].element.css("display") != "none";
        if (!d[h].visible) continue;
        e == "mousedown" && d[h]._activate.call(d[h], c), d[h].offset = d[h].element.offset(), d[h].proportions = {
          width: d[h].element[0].offsetWidth,
          height: d[h].element[0].offsetHeight
        };
      }
    },
    drop: function drop(b, c) {
      var d = !1;
      return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
        if (!this.options) return;
        !this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, c));
      }), d;
    },
    dragStart: function dragStart(b, c) {
      b.element.parents(":not(body,html)").bind("scroll.droppable", function () {
        b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
      });
    },
    drag: function drag(b, c) {
      b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
        if (this.options.disabled || this.greedyChild || !this.visible) return;
        var d = a.ui.intersect(b, this, this.options.tolerance),
            e = !d && this.isover == 1 ? "isout" : d && this.isover == 0 ? "isover" : null;
        if (!e) return;
        var f;

        if (this.options.greedy) {
          var g = this.element.parents(":data(droppable):eq(0)");
          g.length && (f = a.data(g[0], "droppable"), f.greedyChild = e == "isover" ? 1 : 0);
        }

        f && e == "isover" && (f.isover = 0, f.isout = 1, f._out.call(f, c)), this[e] = 1, this[e == "isout" ? "isover" : "isout"] = 0, this[e == "isover" ? "_over" : "_out"].call(this, c), f && e == "isout" && (f.isout = 0, f.isover = 1, f._over.call(f, c));
      });
    },
    dragStop: function dragStop(b, c) {
      b.element.parents(":not(body,html)").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
    }
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.resizable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.widget("ui.resizable", a.ui.mouse, {
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 1e3
    },
    _create: function _create() {
      var b = this,
          c = this.options;
      this.element.addClass("ui-resizable"), a.extend(this, {
        _aspectRatio: !!c.aspectRatio,
        aspectRatio: c.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
        marginLeft: this.originalElement.css("marginLeft"),
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom")
      }), this.originalElement.css({
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0
      }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css({
        margin: this.originalElement.css("margin")
      }), this._proportionallyResize()), this.handles = c.handles || (a(".ui-resizable-handle", this.element).length ? {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      } : "e,s,se");

      if (this.handles.constructor == String) {
        this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
        var d = this.handles.split(",");
        this.handles = {};

        for (var e = 0; e < d.length; e++) {
          var f = a.trim(d[e]),
              g = "ui-resizable-" + f,
              h = a('<div class="ui-resizable-handle ' + g + '"></div>');
          h.css({
            zIndex: c.zIndex
          }), "se" == f && h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[f] = ".ui-resizable-" + f, this.element.append(h);
        }
      }

      this._renderAxis = function (b) {
        b = b || this.element;

        for (var c in this.handles) {
          this.handles[c].constructor == String && (this.handles[c] = a(this.handles[c], this.element).show());

          if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
            var d = a(this.handles[c], this.element),
                e = 0;
            e = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth();
            var f = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join("");
            b.css(f, e), this._proportionallyResize();
          }

          if (!a(this.handles[c]).length) continue;
        }
      }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
        if (!b.resizing) {
          if (this.className) var a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
          b.axis = a && a[1] ? a[1] : "se";
        }
      }), c.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").hover(function () {
        if (c.disabled) return;
        a(this).removeClass("ui-resizable-autohide"), b._handles.show();
      }, function () {
        if (c.disabled) return;
        b.resizing || (a(this).addClass("ui-resizable-autohide"), b._handles.hide());
      })), this._mouseInit();
    },
    destroy: function destroy() {
      this._mouseDestroy();

      var b = function b(_b) {
        a(_b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
      };

      if (this.elementIsWrapper) {
        b(this.element);
        var c = this.element;
        c.after(this.originalElement.css({
          position: c.css("position"),
          width: c.outerWidth(),
          height: c.outerHeight(),
          top: c.css("top"),
          left: c.css("left")
        })).remove();
      }

      return this.originalElement.css("resize", this.originalResizeStyle), b(this.originalElement), this;
    },
    _mouseCapture: function _mouseCapture(b) {
      var c = !1;

      for (var d in this.handles) {
        a(this.handles[d])[0] == b.target && (c = !0);
      }

      return !this.options.disabled && c;
    },
    _mouseStart: function _mouseStart(b) {
      var d = this.options,
          e = this.element.position(),
          f = this.element;
      this.resizing = !0, this.documentScroll = {
        top: a(document).scrollTop(),
        left: a(document).scrollLeft()
      }, (f.is(".ui-draggable") || /absolute/.test(f.css("position"))) && f.css({
        position: "absolute",
        top: e.top,
        left: e.left
      }), this._renderProxy();
      var g = c(this.helper.css("left")),
          h = c(this.helper.css("top"));
      d.containment && (g += a(d.containment).scrollLeft() || 0, h += a(d.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: g,
        top: h
      }, this.size = this._helper ? {
        width: f.outerWidth(),
        height: f.outerHeight()
      } : {
        width: f.width(),
        height: f.height()
      }, this.originalSize = this._helper ? {
        width: f.outerWidth(),
        height: f.outerHeight()
      } : {
        width: f.width(),
        height: f.height()
      }, this.originalPosition = {
        left: g,
        top: h
      }, this.sizeDiff = {
        width: f.outerWidth() - f.width(),
        height: f.outerHeight() - f.height()
      }, this.originalMousePosition = {
        left: b.pageX,
        top: b.pageY
      }, this.aspectRatio = typeof d.aspectRatio == "number" ? d.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
      var i = a(".ui-resizable-" + this.axis).css("cursor");
      return a("body").css("cursor", i == "auto" ? this.axis + "-resize" : i), f.addClass("ui-resizable-resizing"), this._propagate("start", b), !0;
    },
    _mouseDrag: function _mouseDrag(b) {
      var c = this.helper,
          d = this.options,
          e = {},
          f = this,
          g = this.originalMousePosition,
          h = this.axis,
          i = b.pageX - g.left || 0,
          j = b.pageY - g.top || 0,
          k = this._change[h];
      if (!k) return !1;
      var l = k.apply(this, [b, i, j]),
          m = a.browser.msie && a.browser.version < 7,
          n = this.sizeDiff;

      this._updateVirtualBoundaries(b.shiftKey);

      if (this._aspectRatio || b.shiftKey) l = this._updateRatio(l, b);
      return l = this._respectSize(l, b), this._propagate("resize", b), c.css({
        top: this.position.top + "px",
        left: this.position.left + "px",
        width: this.size.width + "px",
        height: this.size.height + "px"
      }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", b, this.ui()), !1;
    },
    _mouseStop: function _mouseStop(b) {
      this.resizing = !1;
      var c = this.options,
          d = this;

      if (this._helper) {
        var e = this._proportionallyResizeElements,
            f = e.length && /textarea/i.test(e[0].nodeName),
            g = f && a.ui.hasScroll(e[0], "left") ? 0 : d.sizeDiff.height,
            h = f ? 0 : d.sizeDiff.width,
            i = {
          width: d.helper.width() - h,
          height: d.helper.height() - g
        },
            j = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null,
            k = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
        c.animate || this.element.css(a.extend(i, {
          top: k,
          left: j
        })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !c.animate && this._proportionallyResize();
      }

      return a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1;
    },
    _updateVirtualBoundaries: function _updateVirtualBoundaries(a) {
      var b = this.options,
          c,
          e,
          f,
          g,
          h;
      h = {
        minWidth: d(b.minWidth) ? b.minWidth : 0,
        maxWidth: d(b.maxWidth) ? b.maxWidth : Infinity,
        minHeight: d(b.minHeight) ? b.minHeight : 0,
        maxHeight: d(b.maxHeight) ? b.maxHeight : Infinity
      };
      if (this._aspectRatio || a) c = h.minHeight * this.aspectRatio, f = h.minWidth / this.aspectRatio, e = h.maxHeight * this.aspectRatio, g = h.maxWidth / this.aspectRatio, c > h.minWidth && (h.minWidth = c), f > h.minHeight && (h.minHeight = f), e < h.maxWidth && (h.maxWidth = e), g < h.maxHeight && (h.maxHeight = g);
      this._vBoundaries = h;
    },
    _updateCache: function _updateCache(a) {
      var b = this.options;
      this.offset = this.helper.offset(), d(a.left) && (this.position.left = a.left), d(a.top) && (this.position.top = a.top), d(a.height) && (this.size.height = a.height), d(a.width) && (this.size.width = a.width);
    },
    _updateRatio: function _updateRatio(a, b) {
      var c = this.options,
          e = this.position,
          f = this.size,
          g = this.axis;
      return d(a.height) ? a.width = a.height * this.aspectRatio : d(a.width) && (a.height = a.width / this.aspectRatio), g == "sw" && (a.left = e.left + (f.width - a.width), a.top = null), g == "nw" && (a.top = e.top + (f.height - a.height), a.left = e.left + (f.width - a.width)), a;
    },
    _respectSize: function _respectSize(a, b) {
      var c = this.helper,
          e = this._vBoundaries,
          f = this._aspectRatio || b.shiftKey,
          g = this.axis,
          h = d(a.width) && e.maxWidth && e.maxWidth < a.width,
          i = d(a.height) && e.maxHeight && e.maxHeight < a.height,
          j = d(a.width) && e.minWidth && e.minWidth > a.width,
          k = d(a.height) && e.minHeight && e.minHeight > a.height;
      j && (a.width = e.minWidth), k && (a.height = e.minHeight), h && (a.width = e.maxWidth), i && (a.height = e.maxHeight);
      var l = this.originalPosition.left + this.originalSize.width,
          m = this.position.top + this.size.height,
          n = /sw|nw|w/.test(g),
          o = /nw|ne|n/.test(g);
      j && n && (a.left = l - e.minWidth), h && n && (a.left = l - e.maxWidth), k && o && (a.top = m - e.minHeight), i && o && (a.top = m - e.maxHeight);
      var p = !a.width && !a.height;
      return p && !a.left && a.top ? a.top = null : p && !a.top && a.left && (a.left = null), a;
    },
    _proportionallyResize: function _proportionallyResize() {
      var b = this.options;
      if (!this._proportionallyResizeElements.length) return;
      var c = this.helper || this.element;

      for (var d = 0; d < this._proportionallyResizeElements.length; d++) {
        var e = this._proportionallyResizeElements[d];

        if (!this.borderDif) {
          var f = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")],
              g = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")];
          this.borderDif = a.map(f, function (a, b) {
            var c = parseInt(a, 10) || 0,
                d = parseInt(g[b], 10) || 0;
            return c + d;
          });
        }

        if (!a.browser.msie || !a(c).is(":hidden") && !a(c).parents(":hidden").length) e.css({
          height: c.height() - this.borderDif[0] - this.borderDif[2] || 0,
          width: c.width() - this.borderDif[1] - this.borderDif[3] || 0
        });else continue;
      }
    },
    _renderProxy: function _renderProxy() {
      var b = this.element,
          c = this.options;
      this.elementOffset = b.offset();

      if (this._helper) {
        this.helper = this.helper || a('<div style="overflow:hidden;"></div>');
        var d = a.browser.msie && a.browser.version < 7,
            e = d ? 1 : 0,
            f = d ? 2 : -1;
        this.helper.addClass(this._helper).css({
          width: this.element.outerWidth() + f,
          height: this.element.outerHeight() + f,
          position: "absolute",
          left: this.elementOffset.left - e + "px",
          top: this.elementOffset.top - e + "px",
          zIndex: ++c.zIndex
        }), this.helper.appendTo("body").disableSelection();
      } else this.helper = this.element;
    },
    _change: {
      e: function e(a, b, c) {
        return {
          width: this.originalSize.width + b
        };
      },
      w: function w(a, b, c) {
        var d = this.options,
            e = this.originalSize,
            f = this.originalPosition;
        return {
          left: f.left + b,
          width: e.width - b
        };
      },
      n: function n(a, b, c) {
        var d = this.options,
            e = this.originalSize,
            f = this.originalPosition;
        return {
          top: f.top + c,
          height: e.height - c
        };
      },
      s: function s(a, b, c) {
        return {
          height: this.originalSize.height + c
        };
      },
      se: function se(b, c, d) {
        return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]));
      },
      sw: function sw(b, c, d) {
        return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]));
      },
      ne: function ne(b, c, d) {
        return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]));
      },
      nw: function nw(b, c, d) {
        return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]));
      }
    },
    _propagate: function _propagate(b, c) {
      a.ui.plugin.call(this, b, [c, this.ui()]), b != "resize" && this._trigger(b, c, this.ui());
    },
    plugins: {},
    ui: function ui() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  }), a.extend(a.ui.resizable, {
    version: "1.8.23"
  }), a.ui.plugin.add("resizable", "alsoResize", {
    start: function start(b, c) {
      var d = a(this).data("resizable"),
          e = d.options,
          f = function f(b) {
        a(b).each(function () {
          var b = a(this);
          b.data("resizable-alsoresize", {
            width: parseInt(b.width(), 10),
            height: parseInt(b.height(), 10),
            left: parseInt(b.css("left"), 10),
            top: parseInt(b.css("top"), 10)
          });
        });
      };

      _typeof(e.alsoResize) == "object" && !e.alsoResize.parentNode ? e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], f(e.alsoResize)) : a.each(e.alsoResize, function (a) {
        f(a);
      }) : f(e.alsoResize);
    },
    resize: function resize(b, c) {
      var d = a(this).data("resizable"),
          e = d.options,
          f = d.originalSize,
          g = d.originalPosition,
          h = {
        height: d.size.height - f.height || 0,
        width: d.size.width - f.width || 0,
        top: d.position.top - g.top || 0,
        left: d.position.left - g.left || 0
      },
          i = function i(b, d) {
        a(b).each(function () {
          var b = a(this),
              e = a(this).data("resizable-alsoresize"),
              f = {},
              g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
          a.each(g, function (a, b) {
            var c = (e[b] || 0) + (h[b] || 0);
            c && c >= 0 && (f[b] = c || null);
          }), b.css(f);
        });
      };

      _typeof(e.alsoResize) == "object" && !e.alsoResize.nodeType ? a.each(e.alsoResize, function (a, b) {
        i(a, b);
      }) : i(e.alsoResize);
    },
    stop: function stop(b, c) {
      a(this).removeData("resizable-alsoresize");
    }
  }), a.ui.plugin.add("resizable", "animate", {
    stop: function stop(b, c) {
      var d = a(this).data("resizable"),
          e = d.options,
          f = d._proportionallyResizeElements,
          g = f.length && /textarea/i.test(f[0].nodeName),
          h = g && a.ui.hasScroll(f[0], "left") ? 0 : d.sizeDiff.height,
          i = g ? 0 : d.sizeDiff.width,
          j = {
        width: d.size.width - i,
        height: d.size.height - h
      },
          k = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null,
          l = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
      d.element.animate(a.extend(j, l && k ? {
        top: l,
        left: k
      } : {}), {
        duration: e.animateDuration,
        easing: e.animateEasing,
        step: function step() {
          var c = {
            width: parseInt(d.element.css("width"), 10),
            height: parseInt(d.element.css("height"), 10),
            top: parseInt(d.element.css("top"), 10),
            left: parseInt(d.element.css("left"), 10)
          };
          f && f.length && a(f[0]).css({
            width: c.width,
            height: c.height
          }), d._updateCache(c), d._propagate("resize", b);
        }
      });
    }
  }), a.ui.plugin.add("resizable", "containment", {
    start: function start(b, d) {
      var e = a(this).data("resizable"),
          f = e.options,
          g = e.element,
          h = f.containment,
          i = h instanceof a ? h.get(0) : /parent/.test(h) ? g.parent().get(0) : h;
      if (!i) return;
      e.containerElement = a(i);
      if (/document/.test(h) || h == document) e.containerOffset = {
        left: 0,
        top: 0
      }, e.containerPosition = {
        left: 0,
        top: 0
      }, e.parentData = {
        element: a(document),
        left: 0,
        top: 0,
        width: a(document).width(),
        height: a(document).height() || document.body.parentNode.scrollHeight
      };else {
        var j = a(i),
            k = [];
        a(["Top", "Right", "Left", "Bottom"]).each(function (a, b) {
          k[a] = c(j.css("padding" + b));
        }), e.containerOffset = j.offset(), e.containerPosition = j.position(), e.containerSize = {
          height: j.innerHeight() - k[3],
          width: j.innerWidth() - k[1]
        };
        var l = e.containerOffset,
            m = e.containerSize.height,
            n = e.containerSize.width,
            o = a.ui.hasScroll(i, "left") ? i.scrollWidth : n,
            p = a.ui.hasScroll(i) ? i.scrollHeight : m;
        e.parentData = {
          element: i,
          left: l.left,
          top: l.top,
          width: o,
          height: p
        };
      }
    },
    resize: function resize(b, c) {
      var d = a(this).data("resizable"),
          e = d.options,
          f = d.containerSize,
          g = d.containerOffset,
          h = d.size,
          i = d.position,
          j = d._aspectRatio || b.shiftKey,
          k = {
        top: 0,
        left: 0
      },
          l = d.containerElement;
      l[0] != document && /static/.test(l.css("position")) && (k = g), i.left < (d._helper ? g.left : 0) && (d.size.width = d.size.width + (d._helper ? d.position.left - g.left : d.position.left - k.left), j && (d.size.height = d.size.width / d.aspectRatio), d.position.left = e.helper ? g.left : 0), i.top < (d._helper ? g.top : 0) && (d.size.height = d.size.height + (d._helper ? d.position.top - g.top : d.position.top), j && (d.size.width = d.size.height * d.aspectRatio), d.position.top = d._helper ? g.top : 0), d.offset.left = d.parentData.left + d.position.left, d.offset.top = d.parentData.top + d.position.top;
      var m = Math.abs((d._helper ? d.offset.left - k.left : d.offset.left - k.left) + d.sizeDiff.width),
          n = Math.abs((d._helper ? d.offset.top - k.top : d.offset.top - g.top) + d.sizeDiff.height),
          o = d.containerElement.get(0) == d.element.parent().get(0),
          p = /relative|absolute/.test(d.containerElement.css("position"));
      o && p && (m -= d.parentData.left), m + d.size.width >= d.parentData.width && (d.size.width = d.parentData.width - m, j && (d.size.height = d.size.width / d.aspectRatio)), n + d.size.height >= d.parentData.height && (d.size.height = d.parentData.height - n, j && (d.size.width = d.size.height * d.aspectRatio));
    },
    stop: function stop(b, c) {
      var d = a(this).data("resizable"),
          e = d.options,
          f = d.position,
          g = d.containerOffset,
          h = d.containerPosition,
          i = d.containerElement,
          j = a(d.helper),
          k = j.offset(),
          l = j.outerWidth() - d.sizeDiff.width,
          m = j.outerHeight() - d.sizeDiff.height;
      d._helper && !e.animate && /relative/.test(i.css("position")) && a(this).css({
        left: k.left - h.left - g.left,
        width: l,
        height: m
      }), d._helper && !e.animate && /static/.test(i.css("position")) && a(this).css({
        left: k.left - h.left - g.left,
        width: l,
        height: m
      });
    }
  }), a.ui.plugin.add("resizable", "ghost", {
    start: function start(b, c) {
      var d = a(this).data("resizable"),
          e = d.options,
          f = d.size;
      d.ghost = d.originalElement.clone(), d.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: f.height,
        width: f.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass(typeof e.ghost == "string" ? e.ghost : ""), d.ghost.appendTo(d.helper);
    },
    resize: function resize(b, c) {
      var d = a(this).data("resizable"),
          e = d.options;
      d.ghost && d.ghost.css({
        position: "relative",
        height: d.size.height,
        width: d.size.width
      });
    },
    stop: function stop(b, c) {
      var d = a(this).data("resizable"),
          e = d.options;
      d.ghost && d.helper && d.helper.get(0).removeChild(d.ghost.get(0));
    }
  }), a.ui.plugin.add("resizable", "grid", {
    resize: function resize(b, c) {
      var d = a(this).data("resizable"),
          e = d.options,
          f = d.size,
          g = d.originalSize,
          h = d.originalPosition,
          i = d.axis,
          j = e._aspectRatio || b.shiftKey;
      e.grid = typeof e.grid == "number" ? [e.grid, e.grid] : e.grid;
      var k = Math.round((f.width - g.width) / (e.grid[0] || 1)) * (e.grid[0] || 1),
          l = Math.round((f.height - g.height) / (e.grid[1] || 1)) * (e.grid[1] || 1);
      /^(se|s|e)$/.test(i) ? (d.size.width = g.width + k, d.size.height = g.height + l) : /^(ne)$/.test(i) ? (d.size.width = g.width + k, d.size.height = g.height + l, d.position.top = h.top - l) : /^(sw)$/.test(i) ? (d.size.width = g.width + k, d.size.height = g.height + l, d.position.left = h.left - k) : (d.size.width = g.width + k, d.size.height = g.height + l, d.position.top = h.top - l, d.position.left = h.left - k);
    }
  });

  var c = function c(a) {
    return parseInt(a, 10) || 0;
  },
      d = function d(a) {
    return !isNaN(parseInt(a, 10));
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.selectable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.widget("ui.selectable", a.ui.mouse, {
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch"
    },
    _create: function _create() {
      var b = this;
      this.element.addClass("ui-selectable"), this.dragged = !1;
      var c;
      this.refresh = function () {
        c = a(b.options.filter, b.element[0]), c.addClass("ui-selectee"), c.each(function () {
          var b = a(this),
              c = b.offset();
          a.data(this, "selectable-item", {
            element: this,
            $element: b,
            left: c.left,
            top: c.top,
            right: c.left + b.outerWidth(),
            bottom: c.top + b.outerHeight(),
            startselected: !1,
            selected: b.hasClass("ui-selected"),
            selecting: b.hasClass("ui-selecting"),
            unselecting: b.hasClass("ui-unselecting")
          });
        });
      }, this.refresh(), this.selectees = c.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>");
    },
    destroy: function destroy() {
      return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this;
    },
    _mouseStart: function _mouseStart(b) {
      var c = this;
      this.opos = [b.pageX, b.pageY];
      if (this.options.disabled) return;
      var d = this.options;
      this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
        left: b.clientX,
        top: b.clientY,
        width: 0,
        height: 0
      }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var d = a.data(this, "selectable-item");
        d.startselected = !0, !b.metaKey && !b.ctrlKey && (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
          unselecting: d.element
        }));
      }), a(b.target).parents().andSelf().each(function () {
        var d = a.data(this, "selectable-item");

        if (d) {
          var e = !b.metaKey && !b.ctrlKey || !d.$element.hasClass("ui-selected");
          return d.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), d.unselecting = !e, d.selecting = e, d.selected = e, e ? c._trigger("selecting", b, {
            selecting: d.element
          }) : c._trigger("unselecting", b, {
            unselecting: d.element
          }), !1;
        }
      });
    },
    _mouseDrag: function _mouseDrag(b) {
      var c = this;
      this.dragged = !0;
      if (this.options.disabled) return;
      var d = this.options,
          e = this.opos[0],
          f = this.opos[1],
          g = b.pageX,
          h = b.pageY;

      if (e > g) {
        var i = g;
        g = e, e = i;
      }

      if (f > h) {
        var i = h;
        h = f, f = i;
      }

      return this.helper.css({
        left: e,
        top: f,
        width: g - e,
        height: h - f
      }), this.selectees.each(function () {
        var i = a.data(this, "selectable-item");
        if (!i || i.element == c.element[0]) return;
        var j = !1;
        d.tolerance == "touch" ? j = !(i.left > g || i.right < e || i.top > h || i.bottom < f) : d.tolerance == "fit" && (j = i.left > e && i.right < g && i.top > f && i.bottom < h), j ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, c._trigger("selecting", b, {
          selecting: i.element
        }))) : (i.selecting && ((b.metaKey || b.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), c._trigger("unselecting", b, {
          unselecting: i.element
        }))), i.selected && !b.metaKey && !b.ctrlKey && !i.startselected && (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, c._trigger("unselecting", b, {
          unselecting: i.element
        })));
      }), !1;
    },
    _mouseStop: function _mouseStop(b) {
      var c = this;
      this.dragged = !1;
      var d = this.options;
      return a(".ui-unselecting", this.element[0]).each(function () {
        var d = a.data(this, "selectable-item");
        d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
          unselected: d.element
        });
      }), a(".ui-selecting", this.element[0]).each(function () {
        var d = a.data(this, "selectable-item");
        d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
          selected: d.element
        });
      }), this._trigger("stop", b), this.helper.remove(), !1;
    }
  }), a.extend(a.ui.selectable, {
    version: "1.8.23"
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.sortable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.widget("ui.sortable", a.ui.mouse, {
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3
    },
    _create: function _create() {
      var a = this.options;
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? a.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
    },
    destroy: function destroy() {
      a.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();

      for (var b = this.items.length - 1; b >= 0; b--) {
        this.items[b].item.removeData(this.widgetName + "-item");
      }

      return this;
    },
    _setOption: function _setOption(b, c) {
      b === "disabled" ? (this.options[b] = c, this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled")) : a.Widget.prototype._setOption.apply(this, arguments);
    },
    _mouseCapture: function _mouseCapture(b, c) {
      var d = this;
      if (this.reverting) return !1;
      if (this.options.disabled || this.options.type == "static") return !1;

      this._refreshItems(b);

      var e = null,
          f = this,
          g = a(b.target).parents().each(function () {
        if (a.data(this, d.widgetName + "-item") == f) return e = a(this), !1;
      });
      a.data(b.target, d.widgetName + "-item") == f && (e = a(b.target));
      if (!e) return !1;

      if (this.options.handle && !c) {
        var h = !1;
        a(this.options.handle, e).find("*").andSelf().each(function () {
          this == b.target && (h = !0);
        });
        if (!h) return !1;
      }

      return this.currentItem = e, this._removeCurrentsFromItems(), !0;
    },
    _mouseStart: function _mouseStart(b, c, d) {
      var e = this.options,
          f = this;
      this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, a.extend(this.offset, {
        click: {
          left: b.pageX - this.offset.left,
          top: b.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), e.containment && this._setContainment(), e.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", e.cursor)), e.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", e.opacity)), e.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", e.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
      if (!d) for (var g = this.containers.length - 1; g >= 0; g--) {
        this.containers[g]._trigger("activate", b, f._uiHash(this));
      }
      return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0;
    },
    _mouseDrag: function _mouseDrag(b) {
      this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);

      if (this.options.scroll) {
        var c = this.options,
            d = !1;
        this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - a(document).scrollTop() < c.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)), b.pageX - a(document).scrollLeft() < c.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), d !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b);
      }

      this.positionAbs = this._convertPositionTo("absolute");
      if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";

      for (var e = this.items.length - 1; e >= 0; e--) {
        var f = this.items[e],
            g = f.item[0],
            h = this._intersectsWithPointer(f);

        if (!h) continue;

        if (g != this.currentItem[0] && this.placeholder[h == 1 ? "next" : "prev"]()[0] != g && !a.ui.contains(this.placeholder[0], g) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0], g) : !0)) {
          this.direction = h == 1 ? "down" : "up";
          if (this.options.tolerance == "pointer" || this._intersectsWithSides(f)) this._rearrange(b, f);else break;

          this._trigger("change", b, this._uiHash());

          break;
        }
      }

      return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function _mouseStop(b, c) {
      if (!b) return;
      a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b);

      if (this.options.revert) {
        var d = this,
            e = d.placeholder.offset();
        d.reverting = !0, a(this.helper).animate({
          left: e.left - this.offset.parent.left - d.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
          top: e.top - this.offset.parent.top - d.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
        }, parseInt(this.options.revert, 10) || 500, function () {
          d._clear(b);
        });
      } else this._clear(b, c);

      return !1;
    },
    cancel: function cancel() {
      var b = this;

      if (this.dragging) {
        this._mouseUp({
          target: null
        }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();

        for (var c = this.containers.length - 1; c >= 0; c--) {
          this.containers[c]._trigger("deactivate", null, b._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, b._uiHash(this)), this.containers[c].containerCache.over = 0);
        }
      }

      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this;
    },
    serialize: function serialize(b) {
      var c = this._getItemsAsjQuery(b && b.connected),
          d = [];

      return b = b || {}, a(c).each(function () {
        var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/);
        c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]));
      }), !d.length && b.key && d.push(b.key + "="), d.join("&");
    },
    toArray: function toArray(b) {
      var c = this._getItemsAsjQuery(b && b.connected),
          d = [];

      return b = b || {}, c.each(function () {
        d.push(a(b.item || this).attr(b.attribute || "id") || "");
      }), d;
    },
    _intersectsWith: function _intersectsWith(a) {
      var b = this.positionAbs.left,
          c = b + this.helperProportions.width,
          d = this.positionAbs.top,
          e = d + this.helperProportions.height,
          f = a.left,
          g = f + a.width,
          h = a.top,
          i = h + a.height,
          j = this.offset.click.top,
          k = this.offset.click.left,
          l = d + j > h && d + j < i && b + k > f && b + k < g;
      return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i;
    },
    _intersectsWithPointer: function _intersectsWithPointer(b) {
      var c = this.options.axis === "x" || a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height),
          d = this.options.axis === "y" || a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width),
          e = c && d,
          f = this._getDragVerticalDirection(),
          g = this._getDragHorizontalDirection();

      return e ? this.floating ? g && g == "right" || f == "down" ? 2 : 1 : f && (f == "down" ? 2 : 1) : !1;
    },
    _intersectsWithSides: function _intersectsWithSides(b) {
      var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height),
          d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width),
          e = this._getDragVerticalDirection(),
          f = this._getDragHorizontalDirection();

      return this.floating && f ? f == "right" && d || f == "left" && !d : e && (e == "down" && c || e == "up" && !c);
    },
    _getDragVerticalDirection: function _getDragVerticalDirection() {
      var a = this.positionAbs.top - this.lastPositionAbs.top;
      return a != 0 && (a > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var a = this.positionAbs.left - this.lastPositionAbs.left;
      return a != 0 && (a > 0 ? "right" : "left");
    },
    refresh: function refresh(a) {
      return this._refreshItems(a), this.refreshPositions(), this;
    },
    _connectWith: function _connectWith() {
      var a = this.options;
      return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith;
    },
    _getItemsAsjQuery: function _getItemsAsjQuery(b) {
      var c = this,
          d = [],
          e = [],
          f = this._connectWith();

      if (f && b) for (var g = f.length - 1; g >= 0; g--) {
        var h = a(f[g]);

        for (var i = h.length - 1; i >= 0; i--) {
          var j = a.data(h[i], this.widgetName);
          j && j != this && !j.options.disabled && e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element) : a(j.options.items, j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), j]);
        }
      }
      e.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

      for (var g = e.length - 1; g >= 0; g--) {
        e[g][0].each(function () {
          d.push(this);
        });
      }

      return a(d);
    },
    _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var a = this.currentItem.find(":data(" + this.widgetName + "-item)");

      for (var b = 0; b < this.items.length; b++) {
        for (var c = 0; c < a.length; c++) {
          a[c] == this.items[b].item[0] && this.items.splice(b, 1);
        }
      }
    },
    _refreshItems: function _refreshItems(b) {
      this.items = [], this.containers = [this];

      var c = this.items,
          d = this,
          e = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
        item: this.currentItem
      }) : a(this.options.items, this.element), this]],
          f = this._connectWith();

      if (f && this.ready) for (var g = f.length - 1; g >= 0; g--) {
        var h = a(f[g]);

        for (var i = h.length - 1; i >= 0; i--) {
          var j = a.data(h[i], this.widgetName);
          j && j != this && !j.options.disabled && (e.push([a.isFunction(j.options.items) ? j.options.items.call(j.element[0], b, {
            item: this.currentItem
          }) : a(j.options.items, j.element), j]), this.containers.push(j));
        }
      }

      for (var g = e.length - 1; g >= 0; g--) {
        var k = e[g][1],
            l = e[g][0];

        for (var i = 0, m = l.length; i < m; i++) {
          var n = a(l[i]);
          n.data(this.widgetName + "-item", k), c.push({
            item: n,
            instance: k,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
        }
      }
    },
    refreshPositions: function refreshPositions(b) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());

      for (var c = this.items.length - 1; c >= 0; c--) {
        var d = this.items[c];
        if (d.instance != this.currentContainer && this.currentContainer && d.item[0] != this.currentItem[0]) continue;
        var e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item;
        b || (d.width = e.outerWidth(), d.height = e.outerHeight());
        var f = e.offset();
        d.left = f.left, d.top = f.top;
      }

      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (var c = this.containers.length - 1; c >= 0; c--) {
        var f = this.containers[c].element.offset();
        this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
      }
      return this;
    },
    _createPlaceholder: function _createPlaceholder(b) {
      var c = b || this,
          d = c.options;

      if (!d.placeholder || d.placeholder.constructor == String) {
        var e = d.placeholder;
        d.placeholder = {
          element: function element() {
            var b = a(document.createElement(c.currentItem[0].nodeName)).addClass(e || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
            return e || (b.style.visibility = "hidden"), b;
          },
          update: function update(a, b) {
            if (e && !d.forcePlaceholderSize) return;
            b.height() || b.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), b.width() || b.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10));
          }
        };
      }

      c.placeholder = a(d.placeholder.element.call(c.element, c.currentItem)), c.currentItem.after(c.placeholder), d.placeholder.update(c, c.placeholder);
    },
    _contactContainers: function _contactContainers(b) {
      var c = null,
          d = null;

      for (var e = this.containers.length - 1; e >= 0; e--) {
        if (a.ui.contains(this.currentItem[0], this.containers[e].element[0])) continue;

        if (this._intersectsWith(this.containers[e].containerCache)) {
          if (c && a.ui.contains(this.containers[e].element[0], c.element[0])) continue;
          c = this.containers[e], d = e;
        } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), this.containers[e].containerCache.over = 0);
      }

      if (!c) return;
      if (this.containers.length === 1) this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1;else if (this.currentContainer != this.containers[d]) {
        var f = 1e4,
            g = null,
            h = this.positionAbs[this.containers[d].floating ? "left" : "top"];

        for (var i = this.items.length - 1; i >= 0; i--) {
          if (!a.ui.contains(this.containers[d].element[0], this.items[i].item[0])) continue;
          var j = this.containers[d].floating ? this.items[i].item.offset().left : this.items[i].item.offset().top;
          Math.abs(j - h) < f && (f = Math.abs(j - h), g = this.items[i], this.direction = j - h > 0 ? "down" : "up");
        }

        if (!g && !this.options.dropOnEmpty) return;
        this.currentContainer = this.containers[d], g ? this._rearrange(b, g, null, !0) : this._rearrange(b, null, this.containers[d].element, !0), this._trigger("change", b, this._uiHash()), this.containers[d]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1;
      }
    },
    _createHelper: function _createHelper(b) {
      var c = this.options,
          d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : c.helper == "clone" ? this.currentItem.clone() : this.currentItem;
      return d.parents("body").length || a(c.appendTo != "parent" ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] == this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (d[0].style.width == "" || c.forceHelperSize) && d.width(this.currentItem.width()), (d[0].style.height == "" || c.forceHelperSize) && d.height(this.currentItem.height()), d;
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(b) {
      typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = {
        left: +b[0],
        top: +b[1] || 0
      }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
    },
    _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();
      var b = this.offsetParent.offset();
      this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
      if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) b = {
        top: 0,
        left: 0
      };
      return {
        top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if (this.cssPosition == "relative") {
        var a = this.currentItem.position();
        return {
          top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }

      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var b = this.options;
      b.containment == "parent" && (b.containment = this.helper[0].parentNode);
      if (b.containment == "document" || b.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];

      if (!/^(document|window|parent)$/.test(b.containment)) {
        var c = a(b.containment)[0],
            d = a(b.containment).offset(),
            e = a(c).css("overflow") != "hidden";
        this.containment = [d.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, d.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top];
      }
    },
    _convertPositionTo: function _convertPositionTo(b, c) {
      c || (c = this.position);
      var d = b == "absolute" ? 1 : -1,
          e = this.options,
          f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
          g = /(html|body)/i.test(f[0].tagName);
      return {
        top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d),
        left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d)
      };
    },
    _generatePosition: function _generatePosition(b) {
      var c = this.options,
          d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
          e = /(html|body)/i.test(d[0].tagName);
      this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
      var f = b.pageX,
          g = b.pageY;

      if (this.originalPosition) {
        this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top));

        if (c.grid) {
          var h = this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1];
          g = this.containment ? h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3] ? h - this.offset.click.top < this.containment[1] ? h + c.grid[1] : h - c.grid[1] : h : h;
          var i = this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0];
          f = this.containment ? i - this.offset.click.left < this.containment[0] || i - this.offset.click.left > this.containment[2] ? i - this.offset.click.left < this.containment[0] ? i + c.grid[0] : i - c.grid[0] : i : i;
        }
      }

      return {
        top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
        left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
      };
    },
    _rearrange: function _rearrange(a, b, c, d) {
      c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var e = this,
          f = this.counter;
      window.setTimeout(function () {
        f == e.counter && e.refreshPositions(!d);
      }, 0);
    },
    _clear: function _clear(b, c) {
      this.reverting = !1;
      var d = [],
          e = this;
      !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;

      if (this.helper[0] == this.currentItem[0]) {
        for (var f in this._storedCSS) {
          if (this._storedCSS[f] == "auto" || this._storedCSS[f] == "static") this._storedCSS[f] = "";
        }

        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();

      this.fromOutside && !c && d.push(function (a) {
        this._trigger("receive", a, this._uiHash(this.fromOutside));
      }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !c && d.push(function (a) {
        this._trigger("update", a, this._uiHash());
      });

      if (!a.ui.contains(this.element[0], this.currentItem[0])) {
        c || d.push(function (a) {
          this._trigger("remove", a, this._uiHash());
        });

        for (var f = this.containers.length - 1; f >= 0; f--) {
          a.ui.contains(this.containers[f].element[0], this.currentItem[0]) && !c && (d.push(function (a) {
            return function (b) {
              a._trigger("receive", b, this._uiHash(this));
            };
          }.call(this, this.containers[f])), d.push(function (a) {
            return function (b) {
              a._trigger("update", b, this._uiHash(this));
            };
          }.call(this, this.containers[f])));
        }
      }

      for (var f = this.containers.length - 1; f >= 0; f--) {
        c || d.push(function (a) {
          return function (b) {
            a._trigger("deactivate", b, this._uiHash(this));
          };
        }.call(this, this.containers[f])), this.containers[f].containerCache.over && (d.push(function (a) {
          return function (b) {
            a._trigger("out", b, this._uiHash(this));
          };
        }.call(this, this.containers[f])), this.containers[f].containerCache.over = 0);
      }

      this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;

      if (this.cancelHelperRemoval) {
        if (!c) {
          this._trigger("beforeStop", b, this._uiHash());

          for (var f = 0; f < d.length; f++) {
            d[f].call(this, b);
          }

          this._trigger("stop", b, this._uiHash());
        }

        return this.fromOutside = !1, !1;
      }

      c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;

      if (!c) {
        for (var f = 0; f < d.length; f++) {
          d[f].call(this, b);
        }

        this._trigger("stop", b, this._uiHash());
      }

      return this.fromOutside = !1, !0;
    },
    _trigger: function _trigger() {
      a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    },
    _uiHash: function _uiHash(b) {
      var c = b || this;
      return {
        helper: c.helper,
        placeholder: c.placeholder || a([]),
        position: c.position,
        originalPosition: c.originalPosition,
        offset: c.positionAbs,
        item: c.currentItem,
        sender: b ? b.element : null
      };
    }
  }), a.extend(a.ui.sortable, {
    version: "1.8.23"
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.accordion.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.widget("ui.accordion", {
    options: {
      active: 0,
      animated: "slide",
      autoHeight: !0,
      clearStyle: !1,
      collapsible: !1,
      event: "click",
      fillSpace: !1,
      header: "> li > :first-child,> :not(li):even",
      icons: {
        header: "ui-icon-triangle-1-e",
        headerSelected: "ui-icon-triangle-1-s"
      },
      navigation: !1,
      navigationFilter: function navigationFilter() {
        return this.href.toLowerCase() === location.href.toLowerCase();
      }
    },
    _create: function _create() {
      var b = this,
          c = b.options;
      b.running = 0, b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), b.headers = b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () {
        if (c.disabled) return;
        a(this).addClass("ui-state-hover");
      }).bind("mouseleave.accordion", function () {
        if (c.disabled) return;
        a(this).removeClass("ui-state-hover");
      }).bind("focus.accordion", function () {
        if (c.disabled) return;
        a(this).addClass("ui-state-focus");
      }).bind("blur.accordion", function () {
        if (c.disabled) return;
        a(this).removeClass("ui-state-focus");
      }), b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");

      if (c.navigation) {
        var d = b.element.find("a").filter(c.navigationFilter).eq(0);

        if (d.length) {
          var e = d.closest(".ui-accordion-header");
          e.length ? b.active = e : b.active = d.closest(".ui-accordion-content").prev();
        }
      }

      b.active = b._findActive(b.active || c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), b.active.next().addClass("ui-accordion-content-active"), b._createIcons(), b.resize(), b.element.attr("role", "tablist"), b.headers.attr("role", "tab").bind("keydown.accordion", function (a) {
        return b._keydown(a);
      }).next().attr("role", "tabpanel"), b.headers.not(b.active || "").attr({
        "aria-expanded": "false",
        "aria-selected": "false",
        tabIndex: -1
      }).next().hide(), b.active.length ? b.active.attr({
        "aria-expanded": "true",
        "aria-selected": "true",
        tabIndex: 0
      }) : b.headers.eq(0).attr("tabIndex", 0), a.browser.safari || b.headers.find("a").attr("tabIndex", -1), c.event && b.headers.bind(c.event.split(" ").join(".accordion ") + ".accordion", function (a) {
        b._clickHandler.call(b, a, this), a.preventDefault();
      });
    },
    _createIcons: function _createIcons() {
      var b = this.options;
      b.icons && (a("<span></span>").addClass("ui-icon " + b.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected), this.element.addClass("ui-accordion-icons"));
    },
    _destroyIcons: function _destroyIcons() {
      this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons");
    },
    destroy: function destroy() {
      var b = this.options;
      this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
      var c = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
      return (b.autoHeight || b.fillHeight) && c.css("height", ""), a.Widget.prototype.destroy.call(this);
    },
    _setOption: function _setOption(b, c) {
      a.Widget.prototype._setOption.apply(this, arguments), b == "active" && this.activate(c), b == "icons" && (this._destroyIcons(), c && this._createIcons()), b == "disabled" && this.headers.add(this.headers.next())[c ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled");
    },
    _keydown: function _keydown(b) {
      if (this.options.disabled || b.altKey || b.ctrlKey) return;
      var c = a.ui.keyCode,
          d = this.headers.length,
          e = this.headers.index(b.target),
          f = !1;

      switch (b.keyCode) {
        case c.RIGHT:
        case c.DOWN:
          f = this.headers[(e + 1) % d];
          break;

        case c.LEFT:
        case c.UP:
          f = this.headers[(e - 1 + d) % d];
          break;

        case c.SPACE:
        case c.ENTER:
          this._clickHandler({
            target: b.target
          }, b.target), b.preventDefault();
      }

      return f ? (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), !1) : !0;
    },
    resize: function resize() {
      var b = this.options,
          c;

      if (b.fillSpace) {
        if (a.browser.msie) {
          var d = this.element.parent().css("overflow");
          this.element.parent().css("overflow", "hidden");
        }

        c = this.element.parent().height(), a.browser.msie && this.element.parent().css("overflow", d), this.headers.each(function () {
          c -= a(this).outerHeight(!0);
        }), this.headers.next().each(function () {
          a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()));
        }).css("overflow", "auto");
      } else b.autoHeight && (c = 0, this.headers.next().each(function () {
        c = Math.max(c, a(this).height("").height());
      }).height(c));

      return this;
    },
    activate: function activate(a) {
      this.options.active = a;

      var b = this._findActive(a)[0];

      return this._clickHandler({
        target: b
      }, b), this;
    },
    _findActive: function _findActive(b) {
      return b ? typeof b == "number" ? this.headers.filter(":eq(" + b + ")") : this.headers.not(this.headers.not(b)) : b === !1 ? a([]) : this.headers.filter(":eq(0)");
    },
    _clickHandler: function _clickHandler(b, c) {
      var d = this.options;
      if (d.disabled) return;

      if (!b.target) {
        if (!d.collapsible) return;
        this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header), this.active.next().addClass("ui-accordion-content-active");
        var e = this.active.next(),
            f = {
          options: d,
          newHeader: a([]),
          oldHeader: d.active,
          newContent: a([]),
          oldContent: e
        },
            g = this.active = a([]);

        this._toggle(g, e, f);

        return;
      }

      var h = a(b.currentTarget || c),
          i = h[0] === this.active[0];
      d.active = d.collapsible && i ? !1 : this.headers.index(h);
      if (this.running || !d.collapsible && i) return;
      var j = this.active,
          g = h.next(),
          e = this.active.next(),
          f = {
        options: d,
        newHeader: i && d.collapsible ? a([]) : h,
        oldHeader: this.active,
        newContent: i && d.collapsible ? a([]) : g,
        oldContent: e
      },
          k = this.headers.index(this.active[0]) > this.headers.index(h[0]);
      this.active = i ? a([]) : h, this._toggle(g, e, f, i, k), j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header), i || (h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected), h.next().addClass("ui-accordion-content-active"));
      return;
    },
    _toggle: function _toggle(b, c, d, e, f) {
      var g = this,
          h = g.options;
      g.toShow = b, g.toHide = c, g.data = d;

      var i = function i() {
        if (!g) return;
        return g._completed.apply(g, arguments);
      };

      g._trigger("changestart", null, g.data), g.running = c.size() === 0 ? b.size() : c.size();

      if (h.animated) {
        var j = {};
        h.collapsible && e ? j = {
          toShow: a([]),
          toHide: c,
          complete: i,
          down: f,
          autoHeight: h.autoHeight || h.fillSpace
        } : j = {
          toShow: b,
          toHide: c,
          complete: i,
          down: f,
          autoHeight: h.autoHeight || h.fillSpace
        }, h.proxied || (h.proxied = h.animated), h.proxiedDuration || (h.proxiedDuration = h.duration), h.animated = a.isFunction(h.proxied) ? h.proxied(j) : h.proxied, h.duration = a.isFunction(h.proxiedDuration) ? h.proxiedDuration(j) : h.proxiedDuration;
        var k = a.ui.accordion.animations,
            l = h.duration,
            m = h.animated;
        m && !k[m] && !a.easing[m] && (m = "slide"), k[m] || (k[m] = function (a) {
          this.slide(a, {
            easing: m,
            duration: l || 700
          });
        }), k[m](j);
      } else h.collapsible && e ? b.toggle() : (c.hide(), b.show()), i(!0);

      c.prev().attr({
        "aria-expanded": "false",
        "aria-selected": "false",
        tabIndex: -1
      }).blur(), b.prev().attr({
        "aria-expanded": "true",
        "aria-selected": "true",
        tabIndex: 0
      }).focus();
    },
    _completed: function _completed(a) {
      this.running = a ? 0 : --this.running;
      if (this.running) return;
      this.options.clearStyle && this.toShow.add(this.toHide).css({
        height: "",
        overflow: ""
      }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data);
    }
  }), a.extend(a.ui.accordion, {
    version: "1.8.23",
    animations: {
      slide: function slide(b, c) {
        b = a.extend({
          easing: "swing",
          duration: 300
        }, b, c);

        if (!b.toHide.size()) {
          b.toShow.animate({
            height: "show",
            paddingTop: "show",
            paddingBottom: "show"
          }, b);
          return;
        }

        if (!b.toShow.size()) {
          b.toHide.animate({
            height: "hide",
            paddingTop: "hide",
            paddingBottom: "hide"
          }, b);
          return;
        }

        var d = b.toShow.css("overflow"),
            e = 0,
            f = {},
            g = {},
            h = ["height", "paddingTop", "paddingBottom"],
            i,
            j = b.toShow;
        i = j[0].style.width, j.width(j.parent().width() - parseFloat(j.css("paddingLeft")) - parseFloat(j.css("paddingRight")) - (parseFloat(j.css("borderLeftWidth")) || 0) - (parseFloat(j.css("borderRightWidth")) || 0)), a.each(h, function (c, d) {
          g[d] = "hide";
          var e = ("" + a.css(b.toShow[0], d)).match(/^([\d+-.]+)(.*)$/);
          f[d] = {
            value: e[1],
            unit: e[2] || "px"
          };
        }), b.toShow.css({
          height: 0,
          overflow: "hidden"
        }).show(), b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g, {
          step: function step(a, c) {
            c.prop == "height" && (e = c.end - c.start === 0 ? 0 : (c.now - c.start) / (c.end - c.start)), b.toShow[0].style[c.prop] = e * f[c.prop].value + f[c.prop].unit;
          },
          duration: b.duration,
          easing: b.easing,
          complete: function complete() {
            b.autoHeight || b.toShow.css("height", ""), b.toShow.css({
              width: i,
              overflow: d
            }), b.complete();
          }
        });
      },
      bounceslide: function bounceslide(a) {
        this.slide(a, {
          easing: a.down ? "easeOutBounce" : "swing",
          duration: a.down ? 1e3 : 200
        });
      }
    }
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.autocomplete.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  var c = 0;
  a.widget("ui.autocomplete", {
    options: {
      appendTo: "body",
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null
    },
    pending: 0,
    _create: function _create() {
      var b = this,
          c = this.element[0].ownerDocument,
          d;
      this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
        role: "textbox",
        "aria-autocomplete": "list",
        "aria-haspopup": "true"
      }).bind("keydown.autocomplete", function (c) {
        if (b.options.disabled || b.element.propAttr("readOnly")) return;
        d = !1;
        var e = a.ui.keyCode;

        switch (c.keyCode) {
          case e.PAGE_UP:
            b._move("previousPage", c);

            break;

          case e.PAGE_DOWN:
            b._move("nextPage", c);

            break;

          case e.UP:
            b._keyEvent("previous", c);

            break;

          case e.DOWN:
            b._keyEvent("next", c);

            break;

          case e.ENTER:
          case e.NUMPAD_ENTER:
            b.menu.active && (d = !0, c.preventDefault());

          case e.TAB:
            if (!b.menu.active) return;
            b.menu.select(c);
            break;

          case e.ESCAPE:
            b.element.val(b.term), b.close(c);
            break;

          default:
            clearTimeout(b.searching), b.searching = setTimeout(function () {
              b.term != b.element.val() && (b.selectedItem = null, b.search(null, c));
            }, b.options.delay);
        }
      }).bind("keypress.autocomplete", function (a) {
        d && (d = !1, a.preventDefault());
      }).bind("focus.autocomplete", function () {
        if (b.options.disabled) return;
        b.selectedItem = null, b.previous = b.element.val();
      }).bind("blur.autocomplete", function (a) {
        if (b.options.disabled) return;
        clearTimeout(b.searching), b.closing = setTimeout(function () {
          b.close(a), b._change(a);
        }, 150);
      }), this._initSource(), this.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo || "body", c)[0]).mousedown(function (c) {
        var d = b.menu.element[0];
        a(c.target).closest(".ui-menu-item").length || setTimeout(function () {
          a(document).one("mousedown", function (c) {
            c.target !== b.element[0] && c.target !== d && !a.ui.contains(d, c.target) && b.close();
          });
        }, 1), setTimeout(function () {
          clearTimeout(b.closing);
        }, 13);
      }).menu({
        focus: function focus(a, c) {
          var d = c.item.data("item.autocomplete");
          !1 !== b._trigger("focus", a, {
            item: d
          }) && /^key/.test(a.originalEvent.type) && b.element.val(d.value);
        },
        selected: function selected(a, d) {
          var e = d.item.data("item.autocomplete"),
              f = b.previous;
          b.element[0] !== c.activeElement && (b.element.focus(), b.previous = f, setTimeout(function () {
            b.previous = f, b.selectedItem = e;
          }, 1)), !1 !== b._trigger("select", a, {
            item: e
          }) && b.element.val(e.value), b.term = b.element.val(), b.close(a), b.selectedItem = e;
        },
        blur: function blur(a, c) {
          b.menu.element.is(":visible") && b.element.val() !== b.term && b.element.val(b.term);
        }
      }).zIndex(this.element.zIndex() + 1).css({
        top: 0,
        left: 0
      }).hide().data("menu"), a.fn.bgiframe && this.menu.element.bgiframe(), b.beforeunloadHandler = function () {
        b.element.removeAttr("autocomplete");
      }, a(window).bind("beforeunload", b.beforeunloadHandler);
    },
    destroy: function destroy() {
      this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), a(window).unbind("beforeunload", this.beforeunloadHandler), a.Widget.prototype.destroy.call(this);
    },
    _setOption: function _setOption(b, c) {
      a.Widget.prototype._setOption.apply(this, arguments), b === "source" && this._initSource(), b === "appendTo" && this.menu.element.appendTo(a(c || "body", this.element[0].ownerDocument)[0]), b === "disabled" && c && this.xhr && this.xhr.abort();
    },
    _initSource: function _initSource() {
      var b = this,
          c,
          d;
      a.isArray(this.options.source) ? (c = this.options.source, this.source = function (b, d) {
        d(a.ui.autocomplete.filter(c, b.term));
      }) : typeof this.options.source == "string" ? (d = this.options.source, this.source = function (c, e) {
        b.xhr && b.xhr.abort(), b.xhr = a.ajax({
          url: d,
          data: c,
          dataType: "json",
          success: function success(a, b) {
            e(a);
          },
          error: function error() {
            e([]);
          }
        });
      }) : this.source = this.options.source;
    },
    search: function search(a, b) {
      a = a != null ? a : this.element.val(), this.term = this.element.val();
      if (a.length < this.options.minLength) return this.close(b);
      clearTimeout(this.closing);
      if (this._trigger("search", b) === !1) return;
      return this._search(a);
    },
    _search: function _search(a) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
        term: a
      }, this._response());
    },
    _response: function _response() {
      var a = this,
          b = ++c;
      return function (d) {
        b === c && a.__response(d), a.pending--, a.pending || a.element.removeClass("ui-autocomplete-loading");
      };
    },
    __response: function __response(a) {
      !this.options.disabled && a && a.length ? (a = this._normalize(a), this._suggest(a), this._trigger("open")) : this.close();
    },
    close: function close(a) {
      clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", a));
    },
    _change: function _change(a) {
      this.previous !== this.element.val() && this._trigger("change", a, {
        item: this.selectedItem
      });
    },
    _normalize: function _normalize(b) {
      return b.length && b[0].label && b[0].value ? b : a.map(b, function (b) {
        return typeof b == "string" ? {
          label: b,
          value: b
        } : a.extend({
          label: b.label || b.value,
          value: b.value || b.label
        }, b);
      });
    },
    _suggest: function _suggest(b) {
      var c = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
      this._renderMenu(c, b), this.menu.deactivate(), this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(new a.Event("mouseover"));
    },
    _resizeMenu: function _resizeMenu() {
      var a = this.menu.element;
      a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function _renderMenu(b, c) {
      var d = this;
      a.each(c, function (a, c) {
        d._renderItem(b, c);
      });
    },
    _renderItem: function _renderItem(b, c) {
      return a("<li></li>").data("item.autocomplete", c).append(a("<a></a>").text(c.label)).appendTo(b);
    },
    _move: function _move(a, b) {
      if (!this.menu.element.is(":visible")) {
        this.search(null, b);
        return;
      }

      if (this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a)) {
        this.element.val(this.term), this.menu.deactivate();
        return;
      }

      this.menu[a](b);
    },
    widget: function widget() {
      return this.menu.element;
    },
    _keyEvent: function _keyEvent(a, b) {
      if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(a, b), b.preventDefault();
    }
  }), a.extend(a.ui.autocomplete, {
    escapeRegex: function escapeRegex(a) {
      return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    },
    filter: function filter(b, c) {
      var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
      return a.grep(b, function (a) {
        return d.test(a.label || a.value || a);
      });
    }
  });
})(jQuery), function (a) {
  a.widget("ui.menu", {
    _create: function _create() {
      var b = this;
      this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
        role: "listbox",
        "aria-activedescendant": "ui-active-menuitem"
      }).click(function (c) {
        if (!a(c.target).closest(".ui-menu-item a").length) return;
        c.preventDefault(), b.select(c);
      }), this.refresh();
    },
    refresh: function refresh() {
      var b = this,
          c = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
      c.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (c) {
        b.activate(c, a(this).parent());
      }).mouseleave(function () {
        b.deactivate();
      });
    },
    activate: function activate(a, b) {
      this.deactivate();

      if (this.hasScroll()) {
        var c = b.offset().top - this.element.offset().top,
            d = this.element.scrollTop(),
            e = this.element.height();
        c < 0 ? this.element.scrollTop(d + c) : c >= e && this.element.scrollTop(d + c - e + b.height());
      }

      this.active = b.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", a, {
        item: b
      });
    },
    deactivate: function deactivate() {
      if (!this.active) return;
      this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null;
    },
    next: function next(a) {
      this.move("next", ".ui-menu-item:first", a);
    },
    previous: function previous(a) {
      this.move("prev", ".ui-menu-item:last", a);
    },
    first: function first() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    last: function last() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    move: function move(a, b, c) {
      if (!this.active) {
        this.activate(c, this.element.children(b));
        return;
      }

      var d = this.active[a + "All"](".ui-menu-item").eq(0);
      d.length ? this.activate(c, d) : this.activate(c, this.element.children(b));
    },
    nextPage: function nextPage(b) {
      if (this.hasScroll()) {
        if (!this.active || this.last()) {
          this.activate(b, this.element.children(".ui-menu-item:first"));
          return;
        }

        var c = this.active.offset().top,
            d = this.element.height(),
            e = this.element.children(".ui-menu-item").filter(function () {
          var b = a(this).offset().top - c - d + a(this).height();
          return b < 10 && b > -10;
        });
        e.length || (e = this.element.children(".ui-menu-item:last")), this.activate(b, e);
      } else this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"));
    },
    previousPage: function previousPage(b) {
      if (this.hasScroll()) {
        if (!this.active || this.first()) {
          this.activate(b, this.element.children(".ui-menu-item:last"));
          return;
        }

        var c = this.active.offset().top,
            d = this.element.height(),
            e = this.element.children(".ui-menu-item").filter(function () {
          var b = a(this).offset().top - c + d - a(this).height();
          return b < 10 && b > -10;
        });
        e.length || (e = this.element.children(".ui-menu-item:first")), this.activate(b, e);
      } else this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"));
    },
    hasScroll: function hasScroll() {
      return this.element.height() < this.element[a.fn.prop ? "prop" : "attr"]("scrollHeight");
    },
    select: function select(a) {
      this._trigger("selected", a, {
        item: this.active
      });
    }
  });
}(jQuery);
;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.button.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  var c,
      d,
      e,
      f,
      g = "ui-button ui-widget ui-state-default ui-corner-all",
      h = "ui-state-hover ui-state-active ",
      i = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      j = function j() {
    var b = a(this).find(":ui-button");
    setTimeout(function () {
      b.button("refresh");
    }, 1);
  },
      k = function k(b) {
    var c = b.name,
        d = b.form,
        e = a([]);
    return c && (d ? e = a(d).find("[name='" + c + "']") : e = a("[name='" + c + "']", b.ownerDocument).filter(function () {
      return !this.form;
    })), e;
  };

  a.widget("ui.button", {
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function _create() {
      this.element.closest("form").unbind("reset.button").bind("reset.button", j), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
      var b = this,
          h = this.options,
          i = this.type === "checkbox" || this.type === "radio",
          l = "ui-state-hover" + (i ? "" : " ui-state-active"),
          m = "ui-state-focus";
      h.label === null && (h.label = this.buttonElement.html()), this.buttonElement.addClass(g).attr("role", "button").bind("mouseenter.button", function () {
        if (h.disabled) return;
        a(this).addClass("ui-state-hover"), this === c && a(this).addClass("ui-state-active");
      }).bind("mouseleave.button", function () {
        if (h.disabled) return;
        a(this).removeClass(l);
      }).bind("click.button", function (a) {
        h.disabled && (a.preventDefault(), a.stopImmediatePropagation());
      }), this.element.bind("focus.button", function () {
        b.buttonElement.addClass(m);
      }).bind("blur.button", function () {
        b.buttonElement.removeClass(m);
      }), i && (this.element.bind("change.button", function () {
        if (f) return;
        b.refresh();
      }), this.buttonElement.bind("mousedown.button", function (a) {
        if (h.disabled) return;
        f = !1, d = a.pageX, e = a.pageY;
      }).bind("mouseup.button", function (a) {
        if (h.disabled) return;
        if (d !== a.pageX || e !== a.pageY) f = !0;
      })), this.type === "checkbox" ? this.buttonElement.bind("click.button", function () {
        if (h.disabled || f) return !1;
        a(this).toggleClass("ui-state-active"), b.buttonElement.attr("aria-pressed", b.element[0].checked);
      }) : this.type === "radio" ? this.buttonElement.bind("click.button", function () {
        if (h.disabled || f) return !1;
        a(this).addClass("ui-state-active"), b.buttonElement.attr("aria-pressed", "true");
        var c = b.element[0];
        k(c).not(c).map(function () {
          return a(this).button("widget")[0];
        }).removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : (this.buttonElement.bind("mousedown.button", function () {
        if (h.disabled) return !1;
        a(this).addClass("ui-state-active"), c = this, a(document).one("mouseup", function () {
          c = null;
        });
      }).bind("mouseup.button", function () {
        if (h.disabled) return !1;
        a(this).removeClass("ui-state-active");
      }).bind("keydown.button", function (b) {
        if (h.disabled) return !1;
        (b.keyCode == a.ui.keyCode.SPACE || b.keyCode == a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active");
      }).bind("keyup.button", function () {
        a(this).removeClass("ui-state-active");
      }), this.buttonElement.is("a") && this.buttonElement.keyup(function (b) {
        b.keyCode === a.ui.keyCode.SPACE && a(this).click();
      })), this._setOption("disabled", h.disabled), this._resetButton();
    },
    _determineButtonType: function _determineButtonType() {
      this.element.is(":checkbox") ? this.type = "checkbox" : this.element.is(":radio") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button";

      if (this.type === "checkbox" || this.type === "radio") {
        var a = this.element.parents().filter(":last"),
            b = "label[for='" + this.element.attr("id") + "']";
        this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible");
        var c = this.element.is(":checked");
        c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", c);
      } else this.buttonElement = this.element;
    },
    widget: function widget() {
      return this.buttonElement;
    },
    destroy: function destroy() {
      this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(g + " " + h + " " + i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), a.Widget.prototype.destroy.call(this);
    },
    _setOption: function _setOption(b, c) {
      a.Widget.prototype._setOption.apply(this, arguments);

      if (b === "disabled") {
        c ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
        return;
      }

      this._resetButton();
    },
    refresh: function refresh() {
      var b = this.element.is(":disabled");
      b !== this.options.disabled && this._setOption("disabled", b), this.type === "radio" ? k(this.element[0]).each(function () {
        a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
    },
    _resetButton: function _resetButton() {
      if (this.type === "input") {
        this.options.label && this.element.val(this.options.label);
        return;
      }

      var b = this.buttonElement.removeClass(i),
          c = a("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
          d = this.options.icons,
          e = d.primary && d.secondary,
          f = [];
      d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", c))) : f.push("ui-button-text-only"), b.addClass(f.join(" "));
    }
  }), a.widget("ui.buttonset", {
    options: {
      items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
    },
    _create: function _create() {
      this.element.addClass("ui-buttonset");
    },
    _init: function _init() {
      this.refresh();
    },
    _setOption: function _setOption(b, c) {
      b === "disabled" && this.buttons.button("option", b, c), a.Widget.prototype._setOption.apply(this, arguments);
    },
    refresh: function refresh() {
      var b = this.element.css("direction") === "rtl";
      this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
        return a(this).button("widget")[0];
      }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end();
    },
    destroy: function destroy() {
      this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
        return a(this).button("widget")[0];
      }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), a.Widget.prototype.destroy.call(this);
    }
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.dialog.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  var c = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
      d = {
    buttons: !0,
    height: !0,
    maxHeight: !0,
    maxWidth: !0,
    minHeight: !0,
    minWidth: !0,
    width: !0
  },
      e = {
    maxHeight: !0,
    maxWidth: !0,
    minHeight: !0,
    minWidth: !0
  };
  a.widget("ui.dialog", {
    options: {
      autoOpen: !0,
      buttons: {},
      closeOnEscape: !0,
      closeText: "close",
      dialogClass: "",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: !1,
      maxWidth: !1,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        collision: "fit",
        using: function using(b) {
          var c = a(this).css(b).offset().top;
          c < 0 && a(this).css("top", b.top - c);
        }
      },
      resizable: !0,
      show: null,
      stack: !0,
      title: "",
      width: 300,
      zIndex: 1e3
    },
    _create: function _create() {
      this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
      var b = this,
          d = b.options,
          e = d.title || "&#160;",
          f = a.ui.dialog.getTitleId(b.element),
          g = (b.uiDialog = a("<div></div>")).appendTo(document.body).hide().addClass(c + d.dialogClass).css({
        zIndex: d.zIndex
      }).attr("tabIndex", -1).css("outline", 0).keydown(function (c) {
        d.closeOnEscape && !c.isDefaultPrevented() && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault());
      }).attr({
        role: "dialog",
        "aria-labelledby": f
      }).mousedown(function (a) {
        b.moveToTop(!1, a);
      }),
          h = b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),
          i = (b.uiDialogTitlebar = a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
          j = a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
        j.addClass("ui-state-hover");
      }, function () {
        j.removeClass("ui-state-hover");
      }).focus(function () {
        j.addClass("ui-state-focus");
      }).blur(function () {
        j.removeClass("ui-state-focus");
      }).click(function (a) {
        return b.close(a), !1;
      }).appendTo(i),
          k = (b.uiDialogTitlebarCloseText = a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),
          l = a("<span></span>").addClass("ui-dialog-title").attr("id", f).html(e).prependTo(i);
      a.isFunction(d.beforeclose) && !a.isFunction(d.beforeClose) && (d.beforeClose = d.beforeclose), i.find("*").add(i).disableSelection(), d.draggable && a.fn.draggable && b._makeDraggable(), d.resizable && a.fn.resizable && b._makeResizable(), b._createButtons(d.buttons), b._isOpen = !1, a.fn.bgiframe && g.bgiframe();
    },
    _init: function _init() {
      this.options.autoOpen && this.open();
    },
    destroy: function destroy() {
      var a = this;
      return a.overlay && a.overlay.destroy(), a.uiDialog.hide(), a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), a.uiDialog.remove(), a.originalTitle && a.element.attr("title", a.originalTitle), a;
    },
    widget: function widget() {
      return this.uiDialog;
    },
    close: function close(b) {
      var c = this,
          d,
          e;
      if (!1 === c._trigger("beforeClose", b)) return;
      return c.overlay && c.overlay.destroy(), c.uiDialog.unbind("keypress.ui-dialog"), c._isOpen = !1, c.options.hide ? c.uiDialog.hide(c.options.hide, function () {
        c._trigger("close", b);
      }) : (c.uiDialog.hide(), c._trigger("close", b)), a.ui.dialog.overlay.resize(), c.options.modal && (d = 0, a(".ui-dialog").each(function () {
        this !== c.uiDialog[0] && (e = a(this).css("z-index"), isNaN(e) || (d = Math.max(d, e)));
      }), a.ui.dialog.maxZ = d), c;
    },
    isOpen: function isOpen() {
      return this._isOpen;
    },
    moveToTop: function moveToTop(b, c) {
      var d = this,
          e = d.options,
          f;
      return e.modal && !b || !e.stack && !e.modal ? d._trigger("focus", c) : (e.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = e.zIndex), d.overlay && (a.ui.dialog.maxZ += 1, d.overlay.$el.css("z-index", a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ)), f = {
        scrollTop: d.element.scrollTop(),
        scrollLeft: d.element.scrollLeft()
      }, a.ui.dialog.maxZ += 1, d.uiDialog.css("z-index", a.ui.dialog.maxZ), d.element.attr(f), d._trigger("focus", c), d);
    },
    open: function open() {
      if (this._isOpen) return;
      var b = this,
          c = b.options,
          d = b.uiDialog;
      return b.overlay = c.modal ? new a.ui.dialog.overlay(b) : null, b._size(), b._position(c.position), d.show(c.show), b.moveToTop(!0), c.modal && d.bind("keydown.ui-dialog", function (b) {
        if (b.keyCode !== a.ui.keyCode.TAB) return;
        var c = a(":tabbable", this),
            d = c.filter(":first"),
            e = c.filter(":last");
        if (b.target === e[0] && !b.shiftKey) return d.focus(1), !1;
        if (b.target === d[0] && b.shiftKey) return e.focus(1), !1;
      }), a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(), b._isOpen = !0, b._trigger("open"), b;
    },
    _createButtons: function _createButtons(b) {
      var c = this,
          d = !1,
          e = a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
          f = a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
      c.uiDialog.find(".ui-dialog-buttonpane").remove(), _typeof(b) == "object" && b !== null && a.each(b, function () {
        return !(d = !0);
      }), d && (a.each(b, function (b, d) {
        d = a.isFunction(d) ? {
          click: d,
          text: b
        } : d;
        var e = a('<button type="button"></button>').click(function () {
          d.click.apply(c.element[0], arguments);
        }).appendTo(f);
        a.each(d, function (a, b) {
          if (a === "click") return;
          a in e ? e[a](b) : e.attr(a, b);
        }), a.fn.button && e.button();
      }), e.appendTo(c.uiDialog));
    },
    _makeDraggable: function _makeDraggable() {
      function f(a) {
        return {
          position: a.position,
          offset: a.offset
        };
      }

      var b = this,
          c = b.options,
          d = a(document),
          e;
      b.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function start(d, g) {
          e = c.height === "auto" ? "auto" : a(this).height(), a(this).height(a(this).height()).addClass("ui-dialog-dragging"), b._trigger("dragStart", d, f(g));
        },
        drag: function drag(a, c) {
          b._trigger("drag", a, f(c));
        },
        stop: function stop(g, h) {
          c.position = [h.position.left - d.scrollLeft(), h.position.top - d.scrollTop()], a(this).removeClass("ui-dialog-dragging").height(e), b._trigger("dragStop", g, f(h)), a.ui.dialog.overlay.resize();
        }
      });
    },
    _makeResizable: function _makeResizable(c) {
      function h(a) {
        return {
          originalPosition: a.originalPosition,
          originalSize: a.originalSize,
          position: a.position,
          size: a.size
        };
      }

      c = c === b ? this.options.resizable : c;
      var d = this,
          e = d.options,
          f = d.uiDialog.css("position"),
          g = typeof c == "string" ? c : "n,e,s,w,se,sw,ne,nw";
      d.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: d.element,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        minWidth: e.minWidth,
        minHeight: d._minHeight(),
        handles: g,
        start: function start(b, c) {
          a(this).addClass("ui-dialog-resizing"), d._trigger("resizeStart", b, h(c));
        },
        resize: function resize(a, b) {
          d._trigger("resize", a, h(b));
        },
        stop: function stop(b, c) {
          a(this).removeClass("ui-dialog-resizing"), e.height = a(this).height(), e.width = a(this).width(), d._trigger("resizeStop", b, h(c)), a.ui.dialog.overlay.resize();
        }
      }).css("position", f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
    },
    _minHeight: function _minHeight() {
      var a = this.options;
      return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height);
    },
    _position: function _position(b) {
      var c = [],
          d = [0, 0],
          e;

      if (b) {
        if (typeof b == "string" || _typeof(b) == "object" && "0" in b) c = b.split ? b.split(" ") : [b[0], b[1]], c.length === 1 && (c[1] = c[0]), a.each(["left", "top"], function (a, b) {
          +c[a] === c[a] && (d[a] = c[a], c[a] = b);
        }), b = {
          my: c.join(" "),
          at: c.join(" "),
          offset: d.join(" ")
        };
        b = a.extend({}, a.ui.dialog.prototype.options.position, b);
      } else b = a.ui.dialog.prototype.options.position;

      e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.css({
        top: 0,
        left: 0
      }).position(a.extend({
        of: window
      }, b)), e || this.uiDialog.hide();
    },
    _setOptions: function _setOptions(b) {
      var c = this,
          f = {},
          g = !1;
      a.each(b, function (a, b) {
        c._setOption(a, b), a in d && (g = !0), a in e && (f[a] = b);
      }), g && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", f);
    },
    _setOption: function _setOption(b, d) {
      var e = this,
          f = e.uiDialog;

      switch (b) {
        case "beforeclose":
          b = "beforeClose";
          break;

        case "buttons":
          e._createButtons(d);

          break;

        case "closeText":
          e.uiDialogTitlebarCloseText.text("" + d);
          break;

        case "dialogClass":
          f.removeClass(e.options.dialogClass).addClass(c + d);
          break;

        case "disabled":
          d ? f.addClass("ui-dialog-disabled") : f.removeClass("ui-dialog-disabled");
          break;

        case "draggable":
          var g = f.is(":data(draggable)");
          g && !d && f.draggable("destroy"), !g && d && e._makeDraggable();
          break;

        case "position":
          e._position(d);

          break;

        case "resizable":
          var h = f.is(":data(resizable)");
          h && !d && f.resizable("destroy"), h && typeof d == "string" && f.resizable("option", "handles", d), !h && d !== !1 && e._makeResizable(d);
          break;

        case "title":
          a(".ui-dialog-title", e.uiDialogTitlebar).html("" + (d || "&#160;"));
      }

      a.Widget.prototype._setOption.apply(e, arguments);
    },
    _size: function _size() {
      var b = this.options,
          c,
          d,
          e = this.uiDialog.is(":visible");
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        height: 0
      }), b.minWidth > b.width && (b.width = b.minWidth), c = this.uiDialog.css({
        height: "auto",
        width: b.width
      }).height(), d = Math.max(0, b.minHeight - c);
      if (b.height === "auto") {
        if (a.support.minHeight) this.element.css({
          minHeight: d,
          height: "auto"
        });else {
          this.uiDialog.show();
          var f = this.element.css("height", "auto").height();
          e || this.uiDialog.hide(), this.element.height(Math.max(f, d));
        }
      } else this.element.height(Math.max(b.height - c, 0));
      this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    }
  }), a.extend(a.ui.dialog, {
    version: "1.8.23",
    uuid: 0,
    maxZ: 0,
    getTitleId: function getTitleId(a) {
      var b = a.attr("id");
      return b || (this.uuid += 1, b = this.uuid), "ui-dialog-title-" + b;
    },
    overlay: function overlay(b) {
      this.$el = a.ui.dialog.overlay.create(b);
    }
  }), a.extend(a.ui.dialog.overlay, {
    instances: [],
    oldInstances: [],
    maxZ: 0,
    events: a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (a) {
      return a + ".dialog-overlay";
    }).join(" "),
    create: function create(b) {
      this.instances.length === 0 && (setTimeout(function () {
        a.ui.dialog.overlay.instances.length && a(document).bind(a.ui.dialog.overlay.events, function (b) {
          if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ) return !1;
        });
      }, 1), a(document).bind("keydown.dialog-overlay", function (c) {
        b.options.closeOnEscape && !c.isDefaultPrevented() && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault());
      }), a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize));
      var c = (this.oldInstances.pop() || a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
        width: this.width(),
        height: this.height()
      });
      return a.fn.bgiframe && c.bgiframe(), this.instances.push(c), c;
    },
    destroy: function destroy(b) {
      var c = a.inArray(b, this.instances);
      c != -1 && this.oldInstances.push(this.instances.splice(c, 1)[0]), this.instances.length === 0 && a([document, window]).unbind(".dialog-overlay"), b.remove();
      var d = 0;
      a.each(this.instances, function () {
        d = Math.max(d, this.css("z-index"));
      }), this.maxZ = d;
    },
    height: function height() {
      var b, c;
      return a.browser.msie && a.browser.version < 7 ? (b = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), c = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), b < c ? a(window).height() + "px" : b + "px") : a(document).height() + "px";
    },
    width: function width() {
      var b, c;
      return a.browser.msie ? (b = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), c = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), b < c ? a(window).width() + "px" : b + "px") : a(document).width() + "px";
    },
    resize: function resize() {
      var b = a([]);
      a.each(a.ui.dialog.overlay.instances, function () {
        b = b.add(this);
      }), b.css({
        width: 0,
        height: 0
      }).css({
        width: a.ui.dialog.overlay.width(),
        height: a.ui.dialog.overlay.height()
      });
    }
  }), a.extend(a.ui.dialog.overlay.prototype, {
    destroy: function destroy() {
      a.ui.dialog.overlay.destroy(this.$el);
    }
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.slider.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  var c = 5;
  a.widget("ui.slider", a.ui.mouse, {
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null
    },
    _create: function _create() {
      var b = this,
          d = this.options,
          e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
          f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
          g = d.values && d.values.length || 1,
          h = [];
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (d.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = a([]), d.range && (d.range === !0 && (d.values || (d.values = [this._valueMin(), this._valueMin()]), d.values.length && d.values.length !== 2 && (d.values = [d.values[0], d.values[0]])), this.range = a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (d.range === "min" || d.range === "max" ? " ui-slider-range-" + d.range : "")));

      for (var i = e.length; i < g; i += 1) {
        h.push(f);
      }

      this.handles = e.add(a(h.join("")).appendTo(b.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (a) {
        a.preventDefault();
      }).hover(function () {
        d.disabled || a(this).addClass("ui-state-hover");
      }, function () {
        a(this).removeClass("ui-state-hover");
      }).focus(function () {
        d.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus"));
      }).blur(function () {
        a(this).removeClass("ui-state-focus");
      }), this.handles.each(function (b) {
        a(this).data("index.ui-slider-handle", b);
      }), this.handles.keydown(function (d) {
        var e = a(this).data("index.ui-slider-handle"),
            f,
            g,
            h,
            i;
        if (b.options.disabled) return;

        switch (d.keyCode) {
          case a.ui.keyCode.HOME:
          case a.ui.keyCode.END:
          case a.ui.keyCode.PAGE_UP:
          case a.ui.keyCode.PAGE_DOWN:
          case a.ui.keyCode.UP:
          case a.ui.keyCode.RIGHT:
          case a.ui.keyCode.DOWN:
          case a.ui.keyCode.LEFT:
            d.preventDefault();

            if (!b._keySliding) {
              b._keySliding = !0, a(this).addClass("ui-state-active"), f = b._start(d, e);
              if (f === !1) return;
            }

        }

        i = b.options.step, b.options.values && b.options.values.length ? g = h = b.values(e) : g = h = b.value();

        switch (d.keyCode) {
          case a.ui.keyCode.HOME:
            h = b._valueMin();
            break;

          case a.ui.keyCode.END:
            h = b._valueMax();
            break;

          case a.ui.keyCode.PAGE_UP:
            h = b._trimAlignValue(g + (b._valueMax() - b._valueMin()) / c);
            break;

          case a.ui.keyCode.PAGE_DOWN:
            h = b._trimAlignValue(g - (b._valueMax() - b._valueMin()) / c);
            break;

          case a.ui.keyCode.UP:
          case a.ui.keyCode.RIGHT:
            if (g === b._valueMax()) return;
            h = b._trimAlignValue(g + i);
            break;

          case a.ui.keyCode.DOWN:
          case a.ui.keyCode.LEFT:
            if (g === b._valueMin()) return;
            h = b._trimAlignValue(g - i);
        }

        b._slide(d, e, h);
      }).keyup(function (c) {
        var d = a(this).data("index.ui-slider-handle");
        b._keySliding && (b._keySliding = !1, b._stop(c, d), b._change(c, d), a(this).removeClass("ui-state-active"));
      }), this._refreshValue(), this._animateOff = !1;
    },
    destroy: function destroy() {
      return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this;
    },
    _mouseCapture: function _mouseCapture(b) {
      var c = this.options,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l;
      return c.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), d = {
        x: b.pageX,
        y: b.pageY
      }, e = this._normValueFromMouse(d), f = this._valueMax() - this._valueMin() + 1, h = this, this.handles.each(function (b) {
        var c = Math.abs(e - h.values(b));
        f > c && (f = c, g = a(this), i = b);
      }), c.range === !0 && this.values(1) === c.min && (i += 1, g = a(this.handles[i])), j = this._start(b, i), j === !1 ? !1 : (this._mouseSliding = !0, h._handleIndex = i, g.addClass("ui-state-active").focus(), k = g.offset(), l = !a(b.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? {
        left: 0,
        top: 0
      } : {
        left: b.pageX - k.left - g.width() / 2,
        top: b.pageY - k.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(b, i, e), this._animateOff = !0, !0));
    },
    _mouseStart: function _mouseStart(a) {
      return !0;
    },
    _mouseDrag: function _mouseDrag(a) {
      var b = {
        x: a.pageX,
        y: a.pageY
      },
          c = this._normValueFromMouse(b);

      return this._slide(a, this._handleIndex, c), !1;
    },
    _mouseStop: function _mouseStop(a) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    },
    _detectOrientation: function _detectOrientation() {
      this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function _normValueFromMouse(a) {
      var b, c, d, e, f;
      return this.orientation === "horizontal" ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), d < 0 && (d = 0), this.orientation === "vertical" && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f);
    },
    _start: function _start(a, b) {
      var c = {
        handle: this.handles[b],
        value: this.value()
      };
      return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c);
    },
    _slide: function _slide(a, b, c) {
      var d, e, f;
      this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (b === 0 && c > d || b === 1 && c < d) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
        handle: this.handles[b],
        value: c,
        values: e
      }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
        handle: this.handles[b],
        value: c
      }), f !== !1 && this.value(c));
    },
    _stop: function _stop(a, b) {
      var c = {
        handle: this.handles[b],
        value: this.value()
      };
      this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c);
    },
    _change: function _change(a, b) {
      if (!this._keySliding && !this._mouseSliding) {
        var c = {
          handle: this.handles[b],
          value: this.value()
        };
        this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("change", a, c);
      }
    },
    value: function value(a) {
      if (arguments.length) {
        this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0);
        return;
      }

      return this._value();
    },
    values: function values(b, c) {
      var d, e, f;

      if (arguments.length > 1) {
        this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b);
        return;
      }

      if (!arguments.length) return this._values();
      if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
      d = this.options.values, e = arguments[0];

      for (f = 0; f < d.length; f += 1) {
        d[f] = this._trimAlignValue(e[f]), this._change(null, f);
      }

      this._refreshValue();
    },
    _setOption: function _setOption(b, c) {
      var d,
          e = 0;
      a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments);

      switch (b) {
        case "disabled":
          c ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
          break;

        case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
          break;

        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;

        case "values":
          this._animateOff = !0, this._refreshValue();

          for (d = 0; d < e; d += 1) {
            this._change(null, d);
          }

          this._animateOff = !1;
      }
    },
    _value: function _value() {
      var a = this.options.value;
      return a = this._trimAlignValue(a), a;
    },
    _values: function _values(a) {
      var b, c, d;
      if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b), b;
      c = this.options.values.slice();

      for (d = 0; d < c.length; d += 1) {
        c[d] = this._trimAlignValue(c[d]);
      }

      return c;
    },
    _trimAlignValue: function _trimAlignValue(a) {
      if (a <= this._valueMin()) return this._valueMin();
      if (a >= this._valueMax()) return this._valueMax();
      var b = this.options.step > 0 ? this.options.step : 1,
          c = (a - this._valueMin()) % b,
          d = a - c;
      return Math.abs(c) * 2 >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5));
    },
    _valueMin: function _valueMin() {
      return this.options.min;
    },
    _valueMax: function _valueMax() {
      return this.options.max;
    },
    _refreshValue: function _refreshValue() {
      var b = this.options.range,
          c = this.options,
          d = this,
          e = this._animateOff ? !1 : c.animate,
          f,
          g = {},
          h,
          i,
          j,
          k;
      this.options.values && this.options.values.length ? this.handles.each(function (b, i) {
        f = (d.values(b) - d._valueMin()) / (d._valueMax() - d._valueMin()) * 100, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", a(this).stop(1, 1)[e ? "animate" : "css"](g, c.animate), d.options.range === !0 && (d.orientation === "horizontal" ? (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({
          left: f + "%"
        }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({
          width: f - h + "%"
        }, {
          queue: !1,
          duration: c.animate
        })) : (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({
          bottom: f + "%"
        }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({
          height: f - h + "%"
        }, {
          queue: !1,
          duration: c.animate
        }))), h = f;
      }) : (i = this.value(), j = this._valueMin(), k = this._valueMax(), f = k !== j ? (i - j) / (k - j) * 100 : 0, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", this.handle.stop(1, 1)[e ? "animate" : "css"](g, c.animate), b === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[e ? "animate" : "css"]({
        width: f + "%"
      }, c.animate), b === "max" && this.orientation === "horizontal" && this.range[e ? "animate" : "css"]({
        width: 100 - f + "%"
      }, {
        queue: !1,
        duration: c.animate
      }), b === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[e ? "animate" : "css"]({
        height: f + "%"
      }, c.animate), b === "max" && this.orientation === "vertical" && this.range[e ? "animate" : "css"]({
        height: 100 - f + "%"
      }, {
        queue: !1,
        duration: c.animate
      }));
    }
  }), a.extend(a.ui.slider, {
    version: "1.8.23"
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.tabs.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  function e() {
    return ++c;
  }

  function f() {
    return ++d;
  }

  var c = 0,
      d = 0;
  a.widget("ui.tabs", {
    options: {
      add: null,
      ajaxOptions: null,
      cache: !1,
      cookie: null,
      collapsible: !1,
      disable: null,
      disabled: [],
      enable: null,
      event: "click",
      fx: null,
      idPrefix: "ui-tabs-",
      load: null,
      panelTemplate: "<div></div>",
      remove: null,
      select: null,
      show: null,
      spinner: "<em>Loading&#8230;</em>",
      tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
    },
    _create: function _create() {
      this._tabify(!0);
    },
    _setOption: function _setOption(a, b) {
      if (a == "selected") {
        if (this.options.collapsible && b == this.options.selected) return;
        this.select(b);
      } else this.options[a] = b, this._tabify();
    },
    _tabId: function _tabId(a) {
      return a.title && a.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + e();
    },
    _sanitizeSelector: function _sanitizeSelector(a) {
      return a.replace(/:/g, "\\:");
    },
    _cookie: function _cookie() {
      var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + f());
      return a.cookie.apply(null, [b].concat(a.makeArray(arguments)));
    },
    _ui: function _ui(a, b) {
      return {
        tab: a,
        panel: b,
        index: this.anchors.index(a)
      };
    },
    _cleanup: function _cleanup() {
      this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
        var b = a(this);
        b.html(b.data("label.tabs")).removeData("label.tabs");
      });
    },
    _tabify: function _tabify(c) {
      function m(b, c) {
        b.css("display", ""), !a.support.opacity && c.opacity && b[0].style.removeAttribute("filter");
      }

      var d = this,
          e = this.options,
          f = /^#.+/;
      this.list = this.element.find("ol,ul").eq(0), this.lis = a(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function () {
        return a("a", this)[0];
      }), this.panels = a([]), this.anchors.each(function (b, c) {
        var g = a(c).attr("href"),
            h = g.split("#")[0],
            i;
        h && (h === location.toString().split("#")[0] || (i = a("base")[0]) && h === i.href) && (g = c.hash, c.href = g);
        if (f.test(g)) d.panels = d.panels.add(d.element.find(d._sanitizeSelector(g)));else if (g && g !== "#") {
          a.data(c, "href.tabs", g), a.data(c, "load.tabs", g.replace(/#.*$/, ""));

          var j = d._tabId(c);

          c.href = "#" + j;
          var k = d.element.find("#" + j);
          k.length || (k = a(e.panelTemplate).attr("id", j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b - 1] || d.list), k.data("destroy.tabs", !0)), d.panels = d.panels.add(k);
        } else e.disabled.push(b);
      }), c ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), e.selected === b ? (location.hash && this.anchors.each(function (a, b) {
        if (b.hash == location.hash) return e.selected = a, !1;
      }), typeof e.selected != "number" && e.cookie && (e.selected = parseInt(d._cookie(), 10)), typeof e.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (e.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), e.selected = e.selected || (this.lis.length ? 0 : -1)) : e.selected === null && (e.selected = -1), e.selected = e.selected >= 0 && this.anchors[e.selected] || e.selected < 0 ? e.selected : 0, e.disabled = a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"), function (a, b) {
        return d.lis.index(a);
      }))).sort(), a.inArray(e.selected, e.disabled) != -1 && e.disabled.splice(a.inArray(e.selected, e.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), e.selected >= 0 && this.anchors.length && (d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"), d.element.queue("tabs", function () {
        d._trigger("show", null, d._ui(d.anchors[e.selected], d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]));
      }), this.load(e.selected)), a(window).bind("unload", function () {
        d.lis.add(d.anchors).unbind(".tabs"), d.lis = d.anchors = d.panels = null;
      })) : e.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[e.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), e.cookie && this._cookie(e.selected, e.cookie);

      for (var g = 0, h; h = this.lis[g]; g++) {
        a(h)[a.inArray(g, e.disabled) != -1 && !a(h).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
      }

      e.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");

      if (e.event !== "mouseover") {
        var i = function i(a, b) {
          b.is(":not(.ui-state-disabled)") && b.addClass("ui-state-" + a);
        },
            j = function j(a, b) {
          b.removeClass("ui-state-" + a);
        };

        this.lis.bind("mouseover.tabs", function () {
          i("hover", a(this));
        }), this.lis.bind("mouseout.tabs", function () {
          j("hover", a(this));
        }), this.anchors.bind("focus.tabs", function () {
          i("focus", a(this).closest("li"));
        }), this.anchors.bind("blur.tabs", function () {
          j("focus", a(this).closest("li"));
        });
      }

      var k, l;
      e.fx && (a.isArray(e.fx) ? (k = e.fx[0], l = e.fx[1]) : k = l = e.fx);
      var n = l ? function (b, c) {
        a(b).closest("li").addClass("ui-tabs-selected ui-state-active"), c.hide().removeClass("ui-tabs-hide").animate(l, l.duration || "normal", function () {
          m(c, l), d._trigger("show", null, d._ui(b, c[0]));
        });
      } : function (b, c) {
        a(b).closest("li").addClass("ui-tabs-selected ui-state-active"), c.removeClass("ui-tabs-hide"), d._trigger("show", null, d._ui(b, c[0]));
      },
          o = k ? function (a, b) {
        b.animate(k, k.duration || "normal", function () {
          d.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), m(b, k), d.element.dequeue("tabs");
        });
      } : function (a, b, c) {
        d.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), d.element.dequeue("tabs");
      };
      this.anchors.bind(e.event + ".tabs", function () {
        var b = this,
            c = a(b).closest("li"),
            f = d.panels.filter(":not(.ui-tabs-hide)"),
            g = d.element.find(d._sanitizeSelector(b.hash));
        if (c.hasClass("ui-tabs-selected") && !e.collapsible || c.hasClass("ui-state-disabled") || c.hasClass("ui-state-processing") || d.panels.filter(":animated").length || d._trigger("select", null, d._ui(this, g[0])) === !1) return this.blur(), !1;
        e.selected = d.anchors.index(this), d.abort();

        if (e.collapsible) {
          if (c.hasClass("ui-tabs-selected")) return e.selected = -1, e.cookie && d._cookie(e.selected, e.cookie), d.element.queue("tabs", function () {
            o(b, f);
          }).dequeue("tabs"), this.blur(), !1;
          if (!f.length) return e.cookie && d._cookie(e.selected, e.cookie), d.element.queue("tabs", function () {
            n(b, g);
          }), d.load(d.anchors.index(this)), this.blur(), !1;
        }

        e.cookie && d._cookie(e.selected, e.cookie);
        if (g.length) f.length && d.element.queue("tabs", function () {
          o(b, f);
        }), d.element.queue("tabs", function () {
          n(b, g);
        }), d.load(d.anchors.index(this));else throw "jQuery UI Tabs: Mismatching fragment identifier.";
        a.browser.msie && this.blur();
      }), this.anchors.bind("click.tabs", function () {
        return !1;
      });
    },
    _getIndex: function _getIndex(a) {
      return typeof a == "string" && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a;
    },
    destroy: function destroy() {
      var b = this.options;
      return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function () {
        var b = a.data(this, "href.tabs");
        b && (this.href = b);
        var c = a(this).unbind(".tabs");
        a.each(["href", "load", "cache"], function (a, b) {
          c.removeData(b + ".tabs");
        });
      }), this.lis.unbind(".tabs").add(this.panels).each(function () {
        a.data(this, "destroy.tabs") ? a(this).remove() : a(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "));
      }), b.cookie && this._cookie(null, b.cookie), this;
    },
    add: function add(c, d, e) {
      e === b && (e = this.anchors.length);
      var f = this,
          g = this.options,
          h = a(g.tabTemplate.replace(/#\{href\}/g, c).replace(/#\{label\}/g, d)),
          i = c.indexOf("#") ? this._tabId(a("a", h)[0]) : c.replace("#", "");
      h.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
      var j = f.element.find("#" + i);
      return j.length || (j = a(g.panelTemplate).attr("id", i).data("destroy.tabs", !0)), j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), e >= this.lis.length ? (h.appendTo(this.list), j.appendTo(this.list[0].parentNode)) : (h.insertBefore(this.lis[e]), j.insertBefore(this.panels[e])), g.disabled = a.map(g.disabled, function (a, b) {
        return a >= e ? ++a : a;
      }), this._tabify(), this.anchors.length == 1 && (g.selected = 0, h.addClass("ui-tabs-selected ui-state-active"), j.removeClass("ui-tabs-hide"), this.element.queue("tabs", function () {
        f._trigger("show", null, f._ui(f.anchors[0], f.panels[0]));
      }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[e], this.panels[e])), this;
    },
    remove: function remove(b) {
      b = this._getIndex(b);
      var c = this.options,
          d = this.lis.eq(b).remove(),
          e = this.panels.eq(b).remove();
      return d.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(b + (b + 1 < this.anchors.length ? 1 : -1)), c.disabled = a.map(a.grep(c.disabled, function (a, c) {
        return a != b;
      }), function (a, c) {
        return a >= b ? --a : a;
      }), this._tabify(), this._trigger("remove", null, this._ui(d.find("a")[0], e[0])), this;
    },
    enable: function enable(b) {
      b = this._getIndex(b);
      var c = this.options;
      if (a.inArray(b, c.disabled) == -1) return;
      return this.lis.eq(b).removeClass("ui-state-disabled"), c.disabled = a.grep(c.disabled, function (a, c) {
        return a != b;
      }), this._trigger("enable", null, this._ui(this.anchors[b], this.panels[b])), this;
    },
    disable: function disable(a) {
      a = this._getIndex(a);
      var b = this,
          c = this.options;
      return a != c.selected && (this.lis.eq(a).addClass("ui-state-disabled"), c.disabled.push(a), c.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[a], this.panels[a]))), this;
    },
    select: function select(a) {
      a = this._getIndex(a);
      if (a == -1) if (this.options.collapsible && this.options.selected != -1) a = this.options.selected;else return this;
      return this.anchors.eq(a).trigger(this.options.event + ".tabs"), this;
    },
    load: function load(b) {
      b = this._getIndex(b);
      var c = this,
          d = this.options,
          e = this.anchors.eq(b)[0],
          f = a.data(e, "load.tabs");
      this.abort();

      if (!f || this.element.queue("tabs").length !== 0 && a.data(e, "cache.tabs")) {
        this.element.dequeue("tabs");
        return;
      }

      this.lis.eq(b).addClass("ui-state-processing");

      if (d.spinner) {
        var g = a("span", e);
        g.data("label.tabs", g.html()).html(d.spinner);
      }

      return this.xhr = a.ajax(a.extend({}, d.ajaxOptions, {
        url: f,
        success: function success(f, g) {
          c.element.find(c._sanitizeSelector(e.hash)).html(f), c._cleanup(), d.cache && a.data(e, "cache.tabs", !0), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));

          try {
            d.ajaxOptions.success(f, g);
          } catch (h) {}
        },
        error: function error(a, f, g) {
          c._cleanup(), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));

          try {
            d.ajaxOptions.error(a, f, b, e);
          } catch (g) {}
        }
      })), c.element.dequeue("tabs"), this;
    },
    abort: function abort() {
      return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this;
    },
    url: function url(a, b) {
      return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs", b), this;
    },
    length: function length() {
      return this.anchors.length;
    }
  }), a.extend(a.ui.tabs, {
    version: "1.8.23"
  }), a.extend(a.ui.tabs.prototype, {
    rotation: null,
    rotate: function rotate(a, b) {
      var c = this,
          d = this.options,
          e = c._rotate || (c._rotate = function (b) {
        clearTimeout(c.rotation), c.rotation = setTimeout(function () {
          var a = d.selected;
          c.select(++a < c.anchors.length ? a : 0);
        }, a), b && b.stopPropagation();
      }),
          f = c._unrotate || (c._unrotate = b ? function (a) {
        e();
      } : function (a) {
        a.clientX && c.rotate(null);
      });

      return a ? (this.element.bind("tabsshow", e), this.anchors.bind(d.event + ".tabs", f), e()) : (clearTimeout(c.rotation), this.element.unbind("tabsshow", e), this.anchors.unbind(d.event + ".tabs", f), delete this._rotate, delete this._unrotate), this;
    }
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.datepicker.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function ($, undefined) {
  function Datepicker() {
    this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
  }

  function bindHover(a) {
    var b = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return a.bind("mouseout", function (a) {
      var c = $(a.target).closest(b);
      if (!c.length) return;
      c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
    }).bind("mouseover", function (c) {
      var d = $(c.target).closest(b);
      if ($.datepicker._isDisabledDatepicker(instActive.inline ? a.parent()[0] : instActive.input[0]) || !d.length) return;
      d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d.addClass("ui-state-hover"), d.hasClass("ui-datepicker-prev") && d.addClass("ui-datepicker-prev-hover"), d.hasClass("ui-datepicker-next") && d.addClass("ui-datepicker-next-hover");
    });
  }

  function extendRemove(a, b) {
    $.extend(a, b);

    for (var c in b) {
      if (b[c] == null || b[c] == undefined) a[c] = b[c];
    }

    return a;
  }

  function isArray(a) {
    return a && ($.browser.safari && _typeof(a) == "object" && a.length || a.constructor && a.constructor.toString().match(/\Array\(\)/));
  }

  $.extend($.ui, {
    datepicker: {
      version: "1.8.23"
    }
  });
  var PROP_NAME = "datepicker",
      dpuuid = new Date().getTime(),
      instActive;
  $.extend(Datepicker.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    log: function log() {
      this.debug && console.log.apply("", arguments);
    },
    _widgetDatepicker: function _widgetDatepicker() {
      return this.dpDiv;
    },
    setDefaults: function setDefaults(a) {
      return extendRemove(this._defaults, a || {}), this;
    },
    _attachDatepicker: function _attachDatepicker(target, settings) {
      var inlineSettings = null;

      for (var attrName in this._defaults) {
        var attrValue = target.getAttribute("date:" + attrName);

        if (attrValue) {
          inlineSettings = inlineSettings || {};

          try {
            inlineSettings[attrName] = eval(attrValue);
          } catch (err) {
            inlineSettings[attrName] = attrValue;
          }
        }
      }

      var nodeName = target.nodeName.toLowerCase(),
          inline = nodeName == "div" || nodeName == "span";
      target.id || (this.uuid += 1, target.id = "dp" + this.uuid);

      var inst = this._newInst($(target), inline);

      inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst);
    },
    _newInst: function _newInst(a, b) {
      var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
      return {
        id: c,
        input: a,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: b,
        dpDiv: b ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
      };
    },
    _connectDatepicker: function _connectDatepicker(a, b) {
      var c = $(a);
      b.append = $([]), b.trigger = $([]);
      if (c.hasClass(this.markerClassName)) return;
      this._attachments(c, b), c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (a, c, d) {
        b.settings[c] = d;
      }).bind("getData.datepicker", function (a, c) {
        return this._get(b, c);
      }), this._autoSize(b), $.data(a, PROP_NAME, b), b.settings.disabled && this._disableDatepicker(a);
    },
    _attachments: function _attachments(a, b) {
      var c = this._get(b, "appendText"),
          d = this._get(b, "isRTL");

      b.append && b.append.remove(), c && (b.append = $('<span class="' + this._appendClass + '">' + c + "</span>"), a[d ? "before" : "after"](b.append)), a.unbind("focus", this._showDatepicker), b.trigger && b.trigger.remove();

      var e = this._get(b, "showOn");

      (e == "focus" || e == "both") && a.focus(this._showDatepicker);

      if (e == "button" || e == "both") {
        var f = this._get(b, "buttonText"),
            g = this._get(b, "buttonImage");

        b.trigger = $(this._get(b, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
          src: g,
          alt: f,
          title: f
        }) : $('<button type="button"></button>').addClass(this._triggerClass).html(g == "" ? f : $("<img/>").attr({
          src: g,
          alt: f,
          title: f
        }))), a[d ? "before" : "after"](b.trigger), b.trigger.click(function () {
          return $.datepicker._datepickerShowing && $.datepicker._lastInput == a[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != a[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(a[0])) : $.datepicker._showDatepicker(a[0]), !1;
        });
      }
    },
    _autoSize: function _autoSize(a) {
      if (this._get(a, "autoSize") && !a.inline) {
        var b = new Date(2009, 11, 20),
            c = this._get(a, "dateFormat");

        if (c.match(/[DM]/)) {
          var d = function d(a) {
            var b = 0,
                c = 0;

            for (var d = 0; d < a.length; d++) {
              a[d].length > b && (b = a[d].length, c = d);
            }

            return c;
          };

          b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))), b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay());
        }

        a.input.attr("size", this._formatDate(a, b).length);
      }
    },
    _inlineDatepicker: function _inlineDatepicker(a, b) {
      var c = $(a);
      if (c.hasClass(this.markerClassName)) return;
      c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function (a, c, d) {
        b.settings[c] = d;
      }).bind("getData.datepicker", function (a, c) {
        return this._get(b, c);
      }), $.data(a, PROP_NAME, b), this._setDate(b, this._getDefaultDate(b), !0), this._updateDatepicker(b), this._updateAlternate(b), b.settings.disabled && this._disableDatepicker(a), b.dpDiv.css("display", "block");
    },
    _dialogDatepicker: function _dialogDatepicker(a, b, c, d, e) {
      var f = this._dialogInst;

      if (!f) {
        this.uuid += 1;
        var g = "dp" + this.uuid;
        this._dialogInput = $('<input type="text" id="' + g + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, $.data(this._dialogInput[0], PROP_NAME, f);
      }

      extendRemove(f.settings, d || {}), b = b && b.constructor == Date ? this._formatDate(f, b) : b, this._dialogInput.val(b), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null;

      if (!this._pos) {
        var h = document.documentElement.clientWidth,
            i = document.documentElement.clientHeight,
            j = document.documentElement.scrollLeft || document.body.scrollLeft,
            k = document.documentElement.scrollTop || document.body.scrollTop;
        this._pos = [h / 2 - 100 + j, i / 2 - 150 + k];
      }

      return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = c, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, f), this;
    },
    _destroyDatepicker: function _destroyDatepicker(a) {
      var b = $(a),
          c = $.data(a, PROP_NAME);
      if (!b.hasClass(this.markerClassName)) return;
      var d = a.nodeName.toLowerCase();
      $.removeData(a, PROP_NAME), d == "input" ? (c.append.remove(), c.trigger.remove(), b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (d == "div" || d == "span") && b.removeClass(this.markerClassName).empty();
    },
    _enableDatepicker: function _enableDatepicker(a) {
      var b = $(a),
          c = $.data(a, PROP_NAME);
      if (!b.hasClass(this.markerClassName)) return;
      var d = a.nodeName.toLowerCase();
      if (d == "input") a.disabled = !1, c.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      });else if (d == "div" || d == "span") {
        var e = b.children("." + this._inlineClass);
        e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
      }
      this._disabledInputs = $.map(this._disabledInputs, function (b) {
        return b == a ? null : b;
      });
    },
    _disableDatepicker: function _disableDatepicker(a) {
      var b = $(a),
          c = $.data(a, PROP_NAME);
      if (!b.hasClass(this.markerClassName)) return;
      var d = a.nodeName.toLowerCase();
      if (d == "input") a.disabled = !0, c.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      });else if (d == "div" || d == "span") {
        var e = b.children("." + this._inlineClass);
        e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
      }
      this._disabledInputs = $.map(this._disabledInputs, function (b) {
        return b == a ? null : b;
      }), this._disabledInputs[this._disabledInputs.length] = a;
    },
    _isDisabledDatepicker: function _isDisabledDatepicker(a) {
      if (!a) return !1;

      for (var b = 0; b < this._disabledInputs.length; b++) {
        if (this._disabledInputs[b] == a) return !0;
      }

      return !1;
    },
    _getInst: function _getInst(a) {
      try {
        return $.data(a, PROP_NAME);
      } catch (b) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function _optionDatepicker(a, b, c) {
      var d = this._getInst(a);

      if (arguments.length == 2 && typeof b == "string") return b == "defaults" ? $.extend({}, $.datepicker._defaults) : d ? b == "all" ? $.extend({}, d.settings) : this._get(d, b) : null;
      var e = b || {};
      typeof b == "string" && (e = {}, e[b] = c);

      if (d) {
        this._curInst == d && this._hideDatepicker();

        var f = this._getDateDatepicker(a, !0),
            g = this._getMinMaxDate(d, "min"),
            h = this._getMinMaxDate(d, "max");

        extendRemove(d.settings, e), g !== null && e.dateFormat !== undefined && e.minDate === undefined && (d.settings.minDate = this._formatDate(d, g)), h !== null && e.dateFormat !== undefined && e.maxDate === undefined && (d.settings.maxDate = this._formatDate(d, h)), this._attachments($(a), d), this._autoSize(d), this._setDate(d, f), this._updateAlternate(d), this._updateDatepicker(d);
      }
    },
    _changeDatepicker: function _changeDatepicker(a, b, c) {
      this._optionDatepicker(a, b, c);
    },
    _refreshDatepicker: function _refreshDatepicker(a) {
      var b = this._getInst(a);

      b && this._updateDatepicker(b);
    },
    _setDateDatepicker: function _setDateDatepicker(a, b) {
      var c = this._getInst(a);

      c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c));
    },
    _getDateDatepicker: function _getDateDatepicker(a, b) {
      var c = this._getInst(a);

      return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null;
    },
    _doKeyDown: function _doKeyDown(a) {
      var b = $.datepicker._getInst(a.target),
          c = !0,
          d = b.dpDiv.is(".ui-datepicker-rtl");

      b._keyEvent = !0;
      if ($.datepicker._datepickerShowing) switch (a.keyCode) {
        case 9:
          $.datepicker._hideDatepicker(), c = !1;
          break;

        case 13:
          var e = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", b.dpDiv);
          e[0] && $.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, e[0]);

          var f = $.datepicker._get(b, "onSelect");

          if (f) {
            var g = $.datepicker._formatDate(b);

            f.apply(b.input ? b.input[0] : null, [g, b]);
          } else $.datepicker._hideDatepicker();

          return !1;

        case 27:
          $.datepicker._hideDatepicker();

          break;

        case 33:
          $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");

          break;

        case 34:
          $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");

          break;

        case 35:
          (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target), c = a.ctrlKey || a.metaKey;
          break;

        case 36:
          (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target), c = a.ctrlKey || a.metaKey;
          break;

        case 37:
          (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? 1 : -1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
          break;

        case 38:
          (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, -7, "D"), c = a.ctrlKey || a.metaKey;
          break;

        case 39:
          (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? -1 : 1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
          break;

        case 40:
          (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, 7, "D"), c = a.ctrlKey || a.metaKey;
          break;

        default:
          c = !1;
      } else a.keyCode == 36 && a.ctrlKey ? $.datepicker._showDatepicker(this) : c = !1;
      c && (a.preventDefault(), a.stopPropagation());
    },
    _doKeyPress: function _doKeyPress(a) {
      var b = $.datepicker._getInst(a.target);

      if ($.datepicker._get(b, "constrainInput")) {
        var c = $.datepicker._possibleChars($.datepicker._get(b, "dateFormat")),
            d = String.fromCharCode(a.charCode == undefined ? a.keyCode : a.charCode);

        return a.ctrlKey || a.metaKey || d < " " || !c || c.indexOf(d) > -1;
      }
    },
    _doKeyUp: function _doKeyUp(a) {
      var b = $.datepicker._getInst(a.target);

      if (b.input.val() != b.lastVal) try {
        var c = $.datepicker.parseDate($.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, $.datepicker._getFormatConfig(b));
        c && ($.datepicker._setDateFromField(b), $.datepicker._updateAlternate(b), $.datepicker._updateDatepicker(b));
      } catch (d) {
        $.datepicker.log(d);
      }
      return !0;
    },
    _showDatepicker: function _showDatepicker(a) {
      a = a.target || a, a.nodeName.toLowerCase() != "input" && (a = $("input", a.parentNode)[0]);
      if ($.datepicker._isDisabledDatepicker(a) || $.datepicker._lastInput == a) return;

      var b = $.datepicker._getInst(a);

      $.datepicker._curInst && $.datepicker._curInst != b && ($.datepicker._curInst.dpDiv.stop(!0, !0), b && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));

      var c = $.datepicker._get(b, "beforeShow"),
          d = c ? c.apply(a, [a, b]) : {};

      if (d === !1) return;
      extendRemove(b.settings, d), b.lastVal = null, $.datepicker._lastInput = a, $.datepicker._setDateFromField(b), $.datepicker._inDialog && (a.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(a), $.datepicker._pos[1] += a.offsetHeight);
      var e = !1;
      $(a).parents().each(function () {
        return e |= $(this).css("position") == "fixed", !e;
      }), e && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
      var f = {
        left: $.datepicker._pos[0],
        top: $.datepicker._pos[1]
      };
      $.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({
        position: "absolute",
        display: "block",
        top: "-1000px"
      }), $.datepicker._updateDatepicker(b), f = $.datepicker._checkOffset(b, f, e), b.dpDiv.css({
        position: $.datepicker._inDialog && $.blockUI ? "static" : e ? "fixed" : "absolute",
        display: "none",
        left: f.left + "px",
        top: f.top + "px"
      });

      if (!b.inline) {
        var g = $.datepicker._get(b, "showAnim"),
            h = $.datepicker._get(b, "duration"),
            i = function i() {
          var a = b.dpDiv.find("iframe.ui-datepicker-cover");

          if (!!a.length) {
            var c = $.datepicker._getBorders(b.dpDiv);

            a.css({
              left: -c[0],
              top: -c[1],
              width: b.dpDiv.outerWidth(),
              height: b.dpDiv.outerHeight()
            });
          }
        };

        b.dpDiv.zIndex($(a).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[g] ? b.dpDiv.show(g, $.datepicker._get(b, "showOptions"), h, i) : b.dpDiv[g || "show"](g ? h : null, i), (!g || !h) && i(), b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(), $.datepicker._curInst = b;
      }
    },
    _updateDatepicker: function _updateDatepicker(a) {
      var b = this;
      b.maxRows = 4;

      var c = $.datepicker._getBorders(a.dpDiv);

      instActive = a, a.dpDiv.empty().append(this._generateHTML(a)), this._attachHandlers(a);
      var d = a.dpDiv.find("iframe.ui-datepicker-cover");
      !d.length || d.css({
        left: -c[0],
        top: -c[1],
        width: a.dpDiv.outerWidth(),
        height: a.dpDiv.outerHeight()
      }), a.dpDiv.find("." + this._dayOverClass + " a").mouseover();

      var e = this._getNumberOfMonths(a),
          f = e[1],
          g = 17;

      a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", g * f + "em"), a.dpDiv[(e[0] != 1 || e[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a == $.datepicker._curInst && $.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus();

      if (a.yearshtml) {
        var h = a.yearshtml;
        setTimeout(function () {
          h === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), h = a.yearshtml = null;
        }, 0);
      }
    },
    _getBorders: function _getBorders(a) {
      var b = function b(a) {
        return {
          thin: 1,
          medium: 2,
          thick: 3
        }[a] || a;
      };

      return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))];
    },
    _checkOffset: function _checkOffset(a, b, c) {
      var d = a.dpDiv.outerWidth(),
          e = a.dpDiv.outerHeight(),
          f = a.input ? a.input.outerWidth() : 0,
          g = a.input ? a.input.outerHeight() : 0,
          h = document.documentElement.clientWidth + (c ? 0 : $(document).scrollLeft()),
          i = document.documentElement.clientHeight + (c ? 0 : $(document).scrollTop());
      return b.left -= this._get(a, "isRTL") ? d - f : 0, b.left -= c && b.left == a.input.offset().left ? $(document).scrollLeft() : 0, b.top -= c && b.top == a.input.offset().top + g ? $(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0), b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + g) : 0), b;
    },
    _findPos: function _findPos(a) {
      var b = this._getInst(a),
          c = this._get(b, "isRTL");

      while (a && (a.type == "hidden" || a.nodeType != 1 || $.expr.filters.hidden(a))) {
        a = a[c ? "previousSibling" : "nextSibling"];
      }

      var d = $(a).offset();
      return [d.left, d.top];
    },
    _hideDatepicker: function _hideDatepicker(a) {
      var b = this._curInst;
      if (!b || a && b != $.data(a, PROP_NAME)) return;

      if (this._datepickerShowing) {
        var c = this._get(b, "showAnim"),
            d = this._get(b, "duration"),
            e = function e() {
          $.datepicker._tidyDialog(b);
        };

        $.effects && $.effects[c] ? b.dpDiv.hide(c, $.datepicker._get(b, "showOptions"), d, e) : b.dpDiv[c == "slideDown" ? "slideUp" : c == "fadeIn" ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1;

        var f = this._get(b, "onClose");

        f && f.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
          position: "absolute",
          left: "0",
          top: "-100px"
        }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1;
      }
    },
    _tidyDialog: function _tidyDialog(a) {
      a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    },
    _checkExternalClick: function _checkExternalClick(a) {
      if (!$.datepicker._curInst) return;

      var b = $(a.target),
          c = $.datepicker._getInst(b[0]);

      (b[0].id != $.datepicker._mainDivId && b.parents("#" + $.datepicker._mainDivId).length == 0 && !b.hasClass($.datepicker.markerClassName) && !b.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || b.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != c) && $.datepicker._hideDatepicker();
    },
    _adjustDate: function _adjustDate(a, b, c) {
      var d = $(a),
          e = this._getInst(d[0]);

      if (this._isDisabledDatepicker(d[0])) return;
      this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e);
    },
    _gotoToday: function _gotoToday(a) {
      var b = $(a),
          c = this._getInst(b[0]);

      if (this._get(c, "gotoCurrent") && c.currentDay) c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear;else {
        var d = new Date();
        c.selectedDay = d.getDate(), c.drawMonth = c.selectedMonth = d.getMonth(), c.drawYear = c.selectedYear = d.getFullYear();
      }
      this._notifyChange(c), this._adjustDate(b);
    },
    _selectMonthYear: function _selectMonthYear(a, b, c) {
      var d = $(a),
          e = this._getInst(d[0]);

      e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(d);
    },
    _selectDay: function _selectDay(a, b, c, d) {
      var e = $(a);
      if ($(d).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0])) return;

      var f = this._getInst(e[0]);

      f.selectedDay = f.currentDay = $("a", d).html(), f.selectedMonth = f.currentMonth = b, f.selectedYear = f.currentYear = c, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear));
    },
    _clearDate: function _clearDate(a) {
      var b = $(a),
          c = this._getInst(b[0]);

      this._selectDate(b, "");
    },
    _selectDate: function _selectDate(a, b) {
      var c = $(a),
          d = this._getInst(c[0]);

      b = b != null ? b : this._formatDate(d), d.input && d.input.val(b), this._updateAlternate(d);

      var e = this._get(d, "onSelect");

      e ? e.apply(d.input ? d.input[0] : null, [b, d]) : d.input && d.input.trigger("change"), d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), this._lastInput = d.input[0], _typeof(d.input[0]) != "object" && d.input.focus(), this._lastInput = null);
    },
    _updateAlternate: function _updateAlternate(a) {
      var b = this._get(a, "altField");

      if (b) {
        var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
            d = this._getDate(a),
            e = this.formatDate(c, d, this._getFormatConfig(a));

        $(b).each(function () {
          $(this).val(e);
        });
      }
    },
    noWeekends: function noWeekends(a) {
      var b = a.getDay();
      return [b > 0 && b < 6, ""];
    },
    iso8601Week: function iso8601Week(a) {
      var b = new Date(a.getTime());
      b.setDate(b.getDate() + 4 - (b.getDay() || 7));
      var c = b.getTime();
      return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1;
    },
    parseDate: function parseDate(a, b, c) {
      if (a == null || b == null) throw "Invalid arguments";
      b = _typeof(b) == "object" ? b.toString() : b + "";
      if (b == "") return null;
      var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
      d = typeof d != "string" ? d : new Date().getFullYear() % 100 + parseInt(d, 10);

      var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
          f = (c ? c.dayNames : null) || this._defaults.dayNames,
          g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
          h = (c ? c.monthNames : null) || this._defaults.monthNames,
          i = -1,
          j = -1,
          k = -1,
          l = -1,
          m = !1,
          n = function n(b) {
        var c = s + 1 < a.length && a.charAt(s + 1) == b;
        return c && s++, c;
      },
          o = function o(a) {
        var c = n(a),
            d = a == "@" ? 14 : a == "!" ? 20 : a == "y" && c ? 4 : a == "o" ? 3 : 2,
            e = new RegExp("^\\d{1," + d + "}"),
            f = b.substring(r).match(e);
        if (!f) throw "Missing number at position " + r;
        return r += f[0].length, parseInt(f[0], 10);
      },
          p = function p(a, c, d) {
        var e = $.map(n(a) ? d : c, function (a, b) {
          return [[b, a]];
        }).sort(function (a, b) {
          return -(a[1].length - b[1].length);
        }),
            f = -1;
        $.each(e, function (a, c) {
          var d = c[1];
          if (b.substr(r, d.length).toLowerCase() == d.toLowerCase()) return f = c[0], r += d.length, !1;
        });
        if (f != -1) return f + 1;
        throw "Unknown name at position " + r;
      },
          q = function q() {
        if (b.charAt(r) != a.charAt(s)) throw "Unexpected literal at position " + r;
        r++;
      },
          r = 0;

      for (var s = 0; s < a.length; s++) {
        if (m) a.charAt(s) == "'" && !n("'") ? m = !1 : q();else switch (a.charAt(s)) {
          case "d":
            k = o("d");
            break;

          case "D":
            p("D", e, f);
            break;

          case "o":
            l = o("o");
            break;

          case "m":
            j = o("m");
            break;

          case "M":
            j = p("M", g, h);
            break;

          case "y":
            i = o("y");
            break;

          case "@":
            var t = new Date(o("@"));
            i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
            break;

          case "!":
            var t = new Date((o("!") - this._ticksTo1970) / 1e4);
            i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
            break;

          case "'":
            n("'") ? q() : m = !0;
            break;

          default:
            q();
        }
      }

      if (r < b.length) throw "Extra/unparsed characters found in date: " + b.substring(r);
      i == -1 ? i = new Date().getFullYear() : i < 100 && (i += new Date().getFullYear() - new Date().getFullYear() % 100 + (i <= d ? 0 : -100));

      if (l > -1) {
        j = 1, k = l;

        do {
          var u = this._getDaysInMonth(i, j - 1);

          if (k <= u) break;
          j++, k -= u;
        } while (!0);
      }

      var t = this._daylightSavingAdjust(new Date(i, j - 1, k));

      if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k) throw "Invalid date";
      return t;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
    formatDate: function formatDate(a, b, c) {
      if (!b) return "";

      var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
          e = (c ? c.dayNames : null) || this._defaults.dayNames,
          f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
          g = (c ? c.monthNames : null) || this._defaults.monthNames,
          h = function h(b) {
        var c = m + 1 < a.length && a.charAt(m + 1) == b;
        return c && m++, c;
      },
          i = function i(a, b, c) {
        var d = "" + b;
        if (h(a)) while (d.length < c) {
          d = "0" + d;
        }
        return d;
      },
          j = function j(a, b, c, d) {
        return h(a) ? d[b] : c[b];
      },
          k = "",
          l = !1;

      if (b) for (var m = 0; m < a.length; m++) {
        if (l) a.charAt(m) == "'" && !h("'") ? l = !1 : k += a.charAt(m);else switch (a.charAt(m)) {
          case "d":
            k += i("d", b.getDate(), 2);
            break;

          case "D":
            k += j("D", b.getDay(), d, e);
            break;

          case "o":
            k += i("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
            break;

          case "m":
            k += i("m", b.getMonth() + 1, 2);
            break;

          case "M":
            k += j("M", b.getMonth(), f, g);
            break;

          case "y":
            k += h("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
            break;

          case "@":
            k += b.getTime();
            break;

          case "!":
            k += b.getTime() * 1e4 + this._ticksTo1970;
            break;

          case "'":
            h("'") ? k += "'" : l = !0;
            break;

          default:
            k += a.charAt(m);
        }
      }
      return k;
    },
    _possibleChars: function _possibleChars(a) {
      var b = "",
          c = !1,
          d = function d(b) {
        var c = e + 1 < a.length && a.charAt(e + 1) == b;
        return c && e++, c;
      };

      for (var e = 0; e < a.length; e++) {
        if (c) a.charAt(e) == "'" && !d("'") ? c = !1 : b += a.charAt(e);else switch (a.charAt(e)) {
          case "d":
          case "m":
          case "y":
          case "@":
            b += "0123456789";
            break;

          case "D":
          case "M":
            return null;

          case "'":
            d("'") ? b += "'" : c = !0;
            break;

          default:
            b += a.charAt(e);
        }
      }

      return b;
    },
    _get: function _get(a, b) {
      return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b];
    },
    _setDateFromField: function _setDateFromField(a, b) {
      if (a.input.val() == a.lastVal) return;

      var c = this._get(a, "dateFormat"),
          d = a.lastVal = a.input ? a.input.val() : null,
          e,
          f;

      e = f = this._getDefaultDate(a);

      var g = this._getFormatConfig(a);

      try {
        e = this.parseDate(c, d, g) || f;
      } catch (h) {
        this.log(h), d = b ? "" : d;
      }

      a.selectedDay = e.getDate(), a.drawMonth = a.selectedMonth = e.getMonth(), a.drawYear = a.selectedYear = e.getFullYear(), a.currentDay = d ? e.getDate() : 0, a.currentMonth = d ? e.getMonth() : 0, a.currentYear = d ? e.getFullYear() : 0, this._adjustInstDate(a);
    },
    _getDefaultDate: function _getDefaultDate(a) {
      return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date()));
    },
    _determineDate: function _determineDate(a, b, c) {
      var d = function d(a) {
        var b = new Date();
        return b.setDate(b.getDate() + a), b;
      },
          e = function e(b) {
        try {
          return $.datepicker.parseDate($.datepicker._get(a, "dateFormat"), b, $.datepicker._getFormatConfig(a));
        } catch (c) {}

        var d = (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) || new Date(),
            e = d.getFullYear(),
            f = d.getMonth(),
            g = d.getDate(),
            h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
            i = h.exec(b);

        while (i) {
          switch (i[2] || "d") {
            case "d":
            case "D":
              g += parseInt(i[1], 10);
              break;

            case "w":
            case "W":
              g += parseInt(i[1], 10) * 7;
              break;

            case "m":
            case "M":
              f += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f));
              break;

            case "y":
            case "Y":
              e += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f));
          }

          i = h.exec(b);
        }

        return new Date(e, f, g);
      },
          f = b == null || b === "" ? c : typeof b == "string" ? e(b) : typeof b == "number" ? isNaN(b) ? c : d(b) : new Date(b.getTime());

      return f = f && f.toString() == "Invalid Date" ? c : f, f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0)), this._daylightSavingAdjust(f);
    },
    _daylightSavingAdjust: function _daylightSavingAdjust(a) {
      return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null;
    },
    _setDate: function _setDate(a, b, c) {
      var d = !b,
          e = a.selectedMonth,
          f = a.selectedYear,
          g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));

      a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), (e != a.selectedMonth || f != a.selectedYear) && !c && this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a));
    },
    _getDate: function _getDate(a) {
      var b = !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
      return b;
    },
    _attachHandlers: function _attachHandlers(a) {
      var b = this._get(a, "stepMonths"),
          c = "#" + a.id.replace(/\\\\/g, "\\");

      a.dpDiv.find("[data-handler]").map(function () {
        var a = {
          prev: function prev() {
            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, -b, "M");
          },
          next: function next() {
            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, +b, "M");
          },
          hide: function hide() {
            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker();
          },
          today: function today() {
            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(c);
          },
          selectDay: function selectDay() {
            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(c, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
          },
          selectMonth: function selectMonth() {
            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "M"), !1;
          },
          selectYear: function selectYear() {
            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "Y"), !1;
          }
        };
        $(this).bind(this.getAttribute("data-event"), a[this.getAttribute("data-handler")]);
      });
    },
    _generateHTML: function _generateHTML(a) {
      var b = new Date();
      b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate()));

      var c = this._get(a, "isRTL"),
          d = this._get(a, "showButtonPanel"),
          e = this._get(a, "hideIfNoPrevNext"),
          f = this._get(a, "navigationAsDateFormat"),
          g = this._getNumberOfMonths(a),
          h = this._get(a, "showCurrentAtPos"),
          i = this._get(a, "stepMonths"),
          j = g[0] != 1 || g[1] != 1,
          k = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
          l = this._getMinMaxDate(a, "min"),
          m = this._getMinMaxDate(a, "max"),
          n = a.drawMonth - h,
          o = a.drawYear;

      n < 0 && (n += 12, o--);

      if (m) {
        var p = this._daylightSavingAdjust(new Date(m.getFullYear(), m.getMonth() - g[0] * g[1] + 1, m.getDate()));

        p = l && p < l ? l : p;

        while (this._daylightSavingAdjust(new Date(o, n, 1)) > p) {
          n--, n < 0 && (n = 11, o--);
        }
      }

      a.drawMonth = n, a.drawYear = o;

      var q = this._get(a, "prevText");

      q = f ? this.formatDate(q, this._daylightSavingAdjust(new Date(o, n - i, 1)), this._getFormatConfig(a)) : q;

      var r = this._canAdjustMonth(a, -1, o, n) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>" : e ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>",
          s = this._get(a, "nextText");

      s = f ? this.formatDate(s, this._daylightSavingAdjust(new Date(o, n + i, 1)), this._getFormatConfig(a)) : s;

      var t = this._canAdjustMonth(a, 1, o, n) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : e ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>",
          u = this._get(a, "currentText"),
          v = this._get(a, "gotoCurrent") && a.currentDay ? k : b;

      u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u;
      var w = a.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(a, "closeText") + "</button>",
          x = d ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? w : "") + (this._isInRange(a, v) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + u + "</button>" : "") + (c ? "" : w) + "</div>" : "",
          y = parseInt(this._get(a, "firstDay"), 10);
      y = isNaN(y) ? 0 : y;

      var z = this._get(a, "showWeek"),
          A = this._get(a, "dayNames"),
          B = this._get(a, "dayNamesShort"),
          C = this._get(a, "dayNamesMin"),
          D = this._get(a, "monthNames"),
          E = this._get(a, "monthNamesShort"),
          F = this._get(a, "beforeShowDay"),
          G = this._get(a, "showOtherMonths"),
          H = this._get(a, "selectOtherMonths"),
          I = this._get(a, "calculateWeek") || this.iso8601Week,
          J = this._getDefaultDate(a),
          K = "";

      for (var L = 0; L < g[0]; L++) {
        var M = "";
        this.maxRows = 4;

        for (var N = 0; N < g[1]; N++) {
          var O = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)),
              P = " ui-corner-all",
              Q = "";

          if (j) {
            Q += '<div class="ui-datepicker-group';
            if (g[1] > 1) switch (N) {
              case 0:
                Q += " ui-datepicker-group-first", P = " ui-corner-" + (c ? "right" : "left");
                break;

              case g[1] - 1:
                Q += " ui-datepicker-group-last", P = " ui-corner-" + (c ? "left" : "right");
                break;

              default:
                Q += " ui-datepicker-group-middle", P = "";
            }
            Q += '">';
          }

          Q += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + P + '">' + (/all|left/.test(P) && L == 0 ? c ? t : r : "") + (/all|right/.test(P) && L == 0 ? c ? r : t : "") + this._generateMonthYearHeader(a, n, o, l, m, L > 0 || N > 0, D, E) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
          var R = z ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "";

          for (var S = 0; S < 7; S++) {
            var T = (S + y) % 7;
            R += "<th" + ((S + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + A[T] + '">' + C[T] + "</span></th>";
          }

          Q += R + "</tr></thead><tbody>";

          var U = this._getDaysInMonth(o, n);

          o == a.selectedYear && n == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, U));
          var V = (this._getFirstDayOfMonth(o, n) - y + 7) % 7,
              W = Math.ceil((V + U) / 7),
              X = j ? this.maxRows > W ? this.maxRows : W : W;
          this.maxRows = X;

          var Y = this._daylightSavingAdjust(new Date(o, n, 1 - V));

          for (var Z = 0; Z < X; Z++) {
            Q += "<tr>";

            var _ = z ? '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(Y) + "</td>" : "";

            for (var S = 0; S < 7; S++) {
              var ba = F ? F.apply(a.input ? a.input[0] : null, [Y]) : [!0, ""],
                  bb = Y.getMonth() != n,
                  bc = bb && !H || !ba[0] || l && Y < l || m && Y > m;
              _ += '<td class="' + ((S + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (bb ? " ui-datepicker-other-month" : "") + (Y.getTime() == O.getTime() && n == a.selectedMonth && a._keyEvent || J.getTime() == Y.getTime() && J.getTime() == O.getTime() ? " " + this._dayOverClass : "") + (bc ? " " + this._unselectableClass + " ui-state-disabled" : "") + (bb && !G ? "" : " " + ba[1] + (Y.getTime() == k.getTime() ? " " + this._currentClass : "") + (Y.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!bb || G) && ba[2] ? ' title="' + ba[2] + '"' : "") + (bc ? "" : ' data-handler="selectDay" data-event="click" data-month="' + Y.getMonth() + '" data-year="' + Y.getFullYear() + '"') + ">" + (bb && !G ? "&#xa0;" : bc ? '<span class="ui-state-default">' + Y.getDate() + "</span>" : '<a class="ui-state-default' + (Y.getTime() == b.getTime() ? " ui-state-highlight" : "") + (Y.getTime() == k.getTime() ? " ui-state-active" : "") + (bb ? " ui-priority-secondary" : "") + '" href="#">' + Y.getDate() + "</a>") + "</td>", Y.setDate(Y.getDate() + 1), Y = this._daylightSavingAdjust(Y);
            }

            Q += _ + "</tr>";
          }

          n++, n > 11 && (n = 0, o++), Q += "</tbody></table>" + (j ? "</div>" + (g[0] > 0 && N == g[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), M += Q;
        }

        K += M;
      }

      return K += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), a._keyEvent = !1, K;
    },
    _generateMonthYearHeader: function _generateMonthYearHeader(a, b, c, d, e, f, g, h) {
      var i = this._get(a, "changeMonth"),
          j = this._get(a, "changeYear"),
          k = this._get(a, "showMonthAfterYear"),
          l = '<div class="ui-datepicker-title">',
          m = "";

      if (f || !i) m += '<span class="ui-datepicker-month">' + g[b] + "</span>";else {
        var n = d && d.getFullYear() == c,
            o = e && e.getFullYear() == c;
        m += '<div class="date_select month"><label for="datepicker-month"><span>' + g[b] + '</span></label><select id="datepicker-month" class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';

        for (var p = 0; p < 12; p++) {
          (!n || p >= d.getMonth()) && (!o || p <= e.getMonth()) && (m += '<option value="' + p + '"' + (p == b ? ' selected="selected"' : "") + ">" + h[p] + "</option>");
        }

        m += "</select></div>";
      }
      k || (l += m + (f || !i || !j ? "&#xa0;" : ""));

      if (!a.yearshtml) {
        a.yearshtml = "";
        if (f || !j) l += '<span class="ui-datepicker-year">' + c + "</span>";else {
          var q = this._get(a, "yearRange").split(":"),
              r = new Date().getFullYear(),
              s = function s(a) {
            var b = a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? r + parseInt(a, 10) : parseInt(a, 10);
            return isNaN(b) ? r : b;
          },
              t = s(q[0]),
              u = Math.max(t, s(q[1] || ""));

          t = d ? Math.max(t, d.getFullYear()) : t, u = e ? Math.min(u, e.getFullYear()) : u, a.yearshtml += '<div class="date_select"><label for="datepicker-year"><span>' + c + "ë…„" + '</span></label><select id="datepicker-year" class="ui-datepicker-year" data-handler="selectYear" data-event="change">';

          for (; t <= u; t++) {
            a.yearshtml += '<option value="' + t + '"' + (t == c ? ' selected="selected"' : "") + ">" + t + "</option>";
          }

          a.yearshtml += "</select></div>", l += a.yearshtml, a.yearshtml = null;
        }
      }

      return l += this._get(a, "yearSuffix"), k && (l += (f || !i || !j ? "&#xa0;" : "") + m), l += "</div>", l;
    },
    _adjustInstDate: function _adjustInstDate(a, b, c) {
      var d = a.drawYear + (c == "Y" ? b : 0),
          e = a.drawMonth + (c == "M" ? b : 0),
          f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + (c == "D" ? b : 0),
          g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));

      a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), (c == "M" || c == "Y") && this._notifyChange(a);
    },
    _restrictMinMax: function _restrictMinMax(a, b) {
      var c = this._getMinMaxDate(a, "min"),
          d = this._getMinMaxDate(a, "max"),
          e = c && b < c ? c : b;

      return e = d && e > d ? d : e, e;
    },
    _notifyChange: function _notifyChange(a) {
      var b = this._get(a, "onChangeMonthYear");

      b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a]);
    },
    _getNumberOfMonths: function _getNumberOfMonths(a) {
      var b = this._get(a, "numberOfMonths");

      return b == null ? [1, 1] : typeof b == "number" ? [1, b] : b;
    },
    _getMinMaxDate: function _getMinMaxDate(a, b) {
      return this._determineDate(a, this._get(a, b + "Date"), null);
    },
    _getDaysInMonth: function _getDaysInMonth(a, b) {
      return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
    },
    _getFirstDayOfMonth: function _getFirstDayOfMonth(a, b) {
      return new Date(a, b, 1).getDay();
    },
    _canAdjustMonth: function _canAdjustMonth(a, b, c, d) {
      var e = this._getNumberOfMonths(a),
          f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1));

      return b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f);
    },
    _isInRange: function _isInRange(a, b) {
      var c = this._getMinMaxDate(a, "min"),
          d = this._getMinMaxDate(a, "max");

      return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime());
    },
    _getFormatConfig: function _getFormatConfig(a) {
      var b = this._get(a, "shortYearCutoff");

      return b = typeof b != "string" ? b : new Date().getFullYear() % 100 + parseInt(b, 10), {
        shortYearCutoff: b,
        dayNamesShort: this._get(a, "dayNamesShort"),
        dayNames: this._get(a, "dayNames"),
        monthNamesShort: this._get(a, "monthNamesShort"),
        monthNames: this._get(a, "monthNames")
      };
    },
    _formatDate: function _formatDate(a, b, c, d) {
      b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
      var e = b ? _typeof(b) == "object" ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
      return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a));
    }
  }), $.fn.datepicker = function (a) {
    if (!this.length) return this;
    $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
    var b = Array.prototype.slice.call(arguments, 1);
    return typeof a != "string" || a != "isDisabled" && a != "getDate" && a != "widget" ? a == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b)) : this.each(function () {
      typeof a == "string" ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this].concat(b)) : $.datepicker._attachDatepicker(this, a);
    }) : $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b));
  }, $.datepicker = new Datepicker(), $.datepicker.initialized = !1, $.datepicker.uuid = new Date().getTime(), $.datepicker.version = "1.8.23", window["DP_jQuery_" + dpuuid] = $;
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.progressbar.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.widget("ui.progressbar", {
    options: {
      value: 0,
      max: 100
    },
    min: 0,
    _create: function _create() {
      this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
        role: "progressbar",
        "aria-valuemin": this.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._value()
      }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue();
    },
    destroy: function destroy() {
      this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), a.Widget.prototype.destroy.apply(this, arguments);
    },
    value: function value(a) {
      return a === b ? this._value() : (this._setOption("value", a), this);
    },
    _setOption: function _setOption(b, c) {
      b === "value" && (this.options.value = c, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), a.Widget.prototype._setOption.apply(this, arguments);
    },
    _value: function _value() {
      var a = this.options.value;
      return typeof a != "number" && (a = 0), Math.min(this.options.max, Math.max(this.min, a));
    },
    _percentage: function _percentage() {
      return 100 * this._value() / this.options.max;
    },
    _refreshValue: function _refreshValue() {
      var a = this.value(),
          b = this._percentage();

      this.oldValue !== a && (this.oldValue = a, this._trigger("change")), this.valueDiv.toggle(a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(b.toFixed(0) + "%"), this.element.attr("aria-valuenow", a);
    }
  }), a.extend(a.ui.progressbar, {
    version: "1.8.23"
  });
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

jQuery.effects || function (a, b) {
  function c(b) {
    var c;
    return b && b.constructor == Array && b.length == 3 ? b : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)] : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) ? [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)] : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)] : (c = /rgba\(0, 0, 0, 0\)/.exec(b)) ? e.transparent : e[a.trim(b).toLowerCase()];
  }

  function d(b, d) {
    var e;

    do {
      e = (a.curCSS || a.css)(b, d);
      if (e != "" && e != "transparent" || a.nodeName(b, "body")) break;
      d = "backgroundColor";
    } while (b = b.parentNode);

    return c(e);
  }

  function h() {
    var a = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
        b = {},
        c,
        d;

    if (a && a.length && a[0] && a[a[0]]) {
      var e = a.length;

      while (e--) {
        c = a[e], typeof a[c] == "string" && (d = c.replace(/\-(\w)/g, function (a, b) {
          return b.toUpperCase();
        }), b[d] = a[c]);
      }
    } else for (c in a) {
      typeof a[c] == "string" && (b[c] = a[c]);
    }

    return b;
  }

  function i(b) {
    var c, d;

    for (c in b) {
      d = b[c], (d == null || a.isFunction(d) || c in g || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(d))) && delete b[c];
    }

    return b;
  }

  function j(a, b) {
    var c = {
      _: 0
    },
        d;

    for (d in b) {
      a[d] != b[d] && (c[d] = b[d]);
    }

    return c;
  }

  function k(b, c, d, e) {
    _typeof(b) == "object" && (e = c, d = null, c = b, b = c.effect), a.isFunction(c) && (e = c, d = null, c = {});
    if (typeof c == "number" || a.fx.speeds[c]) e = d, d = c, c = {};
    return a.isFunction(d) && (e = d, d = null), c = c || {}, d = d || c.duration, d = a.fx.off ? 0 : typeof d == "number" ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, e = e || c.complete, [b, c, d, e];
  }

  function l(b) {
    return !b || typeof b == "number" || a.fx.speeds[b] ? !0 : typeof b == "string" && !a.effects[b] ? !0 : !1;
  }

  a.effects = {}, a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (b, e) {
    a.fx.step[e] = function (a) {
      a.colorInit || (a.start = d(a.elem, e), a.end = c(a.end), a.colorInit = !0), a.elem.style[e] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) + ")";
    };
  });
  var e = {
    aqua: [0, 255, 255],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    black: [0, 0, 0],
    blue: [0, 0, 255],
    brown: [165, 42, 42],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgrey: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkviolet: [148, 0, 211],
    fuchsia: [255, 0, 255],
    gold: [255, 215, 0],
    green: [0, 128, 0],
    indigo: [75, 0, 130],
    khaki: [240, 230, 140],
    lightblue: [173, 216, 230],
    lightcyan: [224, 255, 255],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    navy: [0, 0, 128],
    olive: [128, 128, 0],
    orange: [255, 165, 0],
    pink: [255, 192, 203],
    purple: [128, 0, 128],
    violet: [128, 0, 128],
    red: [255, 0, 0],
    silver: [192, 192, 192],
    white: [255, 255, 255],
    yellow: [255, 255, 0],
    transparent: [255, 255, 255]
  },
      f = ["add", "remove", "toggle"],
      g = {
    border: 1,
    borderBottom: 1,
    borderColor: 1,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,
    borderWidth: 1,
    margin: 1,
    padding: 1
  };
  a.effects.animateClass = function (b, c, d, e) {
    return a.isFunction(d) && (e = d, d = null), this.queue(function () {
      var g = a(this),
          k = g.attr("style") || " ",
          l = i(h.call(this)),
          m,
          n = g.attr("class") || "";
      a.each(f, function (a, c) {
        b[c] && g[c + "Class"](b[c]);
      }), m = i(h.call(this)), g.attr("class", n), g.animate(j(l, m), {
        queue: !1,
        duration: c,
        easing: d,
        complete: function complete() {
          a.each(f, function (a, c) {
            b[c] && g[c + "Class"](b[c]);
          }), _typeof(g.attr("style")) == "object" ? (g.attr("style").cssText = "", g.attr("style").cssText = k) : g.attr("style", k), e && e.apply(this, arguments), a.dequeue(this);
        }
      });
    });
  }, a.fn.extend({
    _addClass: a.fn.addClass,
    addClass: function addClass(b, c, d, e) {
      return c ? a.effects.animateClass.apply(this, [{
        add: b
      }, c, d, e]) : this._addClass(b);
    },
    _removeClass: a.fn.removeClass,
    removeClass: function removeClass(b, c, d, e) {
      return c ? a.effects.animateClass.apply(this, [{
        remove: b
      }, c, d, e]) : this._removeClass(b);
    },
    _toggleClass: a.fn.toggleClass,
    toggleClass: function toggleClass(c, d, e, f, g) {
      return typeof d == "boolean" || d === b ? e ? a.effects.animateClass.apply(this, [d ? {
        add: c
      } : {
        remove: c
      }, e, f, g]) : this._toggleClass(c, d) : a.effects.animateClass.apply(this, [{
        toggle: c
      }, d, e, f]);
    },
    switchClass: function switchClass(b, c, d, e, f) {
      return a.effects.animateClass.apply(this, [{
        add: c,
        remove: b
      }, d, e, f]);
    }
  }), a.extend(a.effects, {
    version: "1.8.23",
    save: function save(a, b) {
      for (var c = 0; c < b.length; c++) {
        b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]]);
      }
    },
    restore: function restore(a, b) {
      for (var c = 0; c < b.length; c++) {
        b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c]));
      }
    },
    setMode: function setMode(a, b) {
      return b == "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b;
    },
    getBaseline: function getBaseline(a, b) {
      var c, d;

      switch (a[0]) {
        case "top":
          c = 0;
          break;

        case "middle":
          c = .5;
          break;

        case "bottom":
          c = 1;
          break;

        default:
          c = a[0] / b.height;
      }

      switch (a[1]) {
        case "left":
          d = 0;
          break;

        case "center":
          d = .5;
          break;

        case "right":
          d = 1;
          break;

        default:
          d = a[1] / b.width;
      }

      return {
        x: d,
        y: c
      };
    },
    createWrapper: function createWrapper(b) {
      if (b.parent().is(".ui-effects-wrapper")) return b.parent();
      var c = {
        width: b.outerWidth(!0),
        height: b.outerHeight(!0),
        "float": b.css("float")
      },
          d = a("<div></div>").addClass("ui-effects-wrapper").css({
        fontSize: "100%",
        background: "transparent",
        border: "none",
        margin: 0,
        padding: 0
      }),
          e = document.activeElement;

      try {
        e.id;
      } catch (f) {
        e = document.body;
      }

      return b.wrap(d), (b[0] === e || a.contains(b[0], e)) && a(e).focus(), d = b.parent(), b.css("position") == "static" ? (d.css({
        position: "relative"
      }), b.css({
        position: "relative"
      })) : (a.extend(c, {
        position: b.css("position"),
        zIndex: b.css("z-index")
      }), a.each(["top", "left", "bottom", "right"], function (a, d) {
        c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto");
      }), b.css({
        position: "relative",
        top: 0,
        left: 0,
        right: "auto",
        bottom: "auto"
      })), d.css(c).show();
    },
    removeWrapper: function removeWrapper(b) {
      var c,
          d = document.activeElement;
      return b.parent().is(".ui-effects-wrapper") ? (c = b.parent().replaceWith(b), (b[0] === d || a.contains(b[0], d)) && a(d).focus(), c) : b;
    },
    setTransition: function setTransition(b, c, d, e) {
      return e = e || {}, a.each(c, function (a, c) {
        var f = b.cssUnit(c);
        f[0] > 0 && (e[c] = f[0] * d + f[1]);
      }), e;
    }
  }), a.fn.extend({
    effect: function effect(b, c, d, e) {
      var f = k.apply(this, arguments),
          g = {
        options: f[1],
        duration: f[2],
        callback: f[3]
      },
          h = g.options.mode,
          i = a.effects[b];
      return a.fx.off || !i ? h ? this[h](g.duration, g.callback) : this.each(function () {
        g.callback && g.callback.call(this);
      }) : i.call(this, g);
    },
    _show: a.fn.show,
    show: function show(a) {
      if (l(a)) return this._show.apply(this, arguments);
      var b = k.apply(this, arguments);
      return b[1].mode = "show", this.effect.apply(this, b);
    },
    _hide: a.fn.hide,
    hide: function hide(a) {
      if (l(a)) return this._hide.apply(this, arguments);
      var b = k.apply(this, arguments);
      return b[1].mode = "hide", this.effect.apply(this, b);
    },
    __toggle: a.fn.toggle,
    toggle: function toggle(b) {
      if (l(b) || typeof b == "boolean" || a.isFunction(b)) return this.__toggle.apply(this, arguments);
      var c = k.apply(this, arguments);
      return c[1].mode = "toggle", this.effect.apply(this, c);
    },
    cssUnit: function cssUnit(b) {
      var c = this.css(b),
          d = [];
      return a.each(["em", "px", "%", "pt"], function (a, b) {
        c.indexOf(b) > 0 && (d = [parseFloat(c), b]);
      }), d;
    }
  });
  var m = {};
  a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (a, b) {
    m[b] = function (b) {
      return Math.pow(b, a + 2);
    };
  }), a.extend(m, {
    Sine: function Sine(a) {
      return 1 - Math.cos(a * Math.PI / 2);
    },
    Circ: function Circ(a) {
      return 1 - Math.sqrt(1 - a * a);
    },
    Elastic: function Elastic(a) {
      return a === 0 || a === 1 ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin(((a - 1) * 80 - 7.5) * Math.PI / 15);
    },
    Back: function Back(a) {
      return a * a * (3 * a - 2);
    },
    Bounce: function Bounce(a) {
      var b,
          c = 4;

      while (a < ((b = Math.pow(2, --c)) - 1) / 11) {
        ;
      }

      return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((b * 3 - 2) / 22 - a, 2);
    }
  }), a.each(m, function (b, c) {
    a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function (a) {
      return 1 - c(1 - a);
    }, a.easing["easeInOut" + b] = function (a) {
      return a < .5 ? c(a * 2) / 2 : c(a * -2 + 2) / -2 + 1;
    };
  });
}(jQuery);
;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.blind.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.blind = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.direction || "vertical";
      a.effects.save(c, d), c.show();
      var g = a.effects.createWrapper(c).css({
        overflow: "hidden"
      }),
          h = f == "vertical" ? "height" : "width",
          i = f == "vertical" ? g.height() : g.width();
      e == "show" && g.css(h, 0);
      var j = {};
      j[h] = e == "show" ? i : 0, g.animate(j, b.duration, b.options.easing, function () {
        e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue();
      });
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.bounce.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.bounce = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "effect"),
          f = b.options.direction || "up",
          g = b.options.distance || 20,
          h = b.options.times || 5,
          i = b.duration || 250;
      /show|hide/.test(e) && d.push("opacity"), a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
      var j = f == "up" || f == "down" ? "top" : "left",
          k = f == "up" || f == "left" ? "pos" : "neg",
          g = b.options.distance || (j == "top" ? c.outerHeight(!0) / 3 : c.outerWidth(!0) / 3);
      e == "show" && c.css("opacity", 0).css(j, k == "pos" ? -g : g), e == "hide" && (g = g / (h * 2)), e != "hide" && h--;

      if (e == "show") {
        var l = {
          opacity: 1
        };
        l[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(l, i / 2, b.options.easing), g = g / 2, h--;
      }

      for (var m = 0; m < h; m++) {
        var n = {},
            p = {};
        n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing), g = e == "hide" ? g * 2 : g / 2;
      }

      if (e == "hide") {
        var l = {
          opacity: 0
        };
        l[j] = (k == "pos" ? "-=" : "+=") + g, c.animate(l, i / 2, b.options.easing, function () {
          c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments);
        });
      } else {
        var n = {},
            p = {};
        n[j] = (k == "pos" ? "-=" : "+=") + g, p[j] = (k == "pos" ? "+=" : "-=") + g, c.animate(n, i / 2, b.options.easing).animate(p, i / 2, b.options.easing, function () {
          a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments);
        });
      }

      c.queue("fx", function () {
        c.dequeue();
      }), c.dequeue();
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.clip.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.clip = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = ["position", "top", "bottom", "left", "right", "height", "width"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.direction || "vertical";
      a.effects.save(c, d), c.show();
      var g = a.effects.createWrapper(c).css({
        overflow: "hidden"
      }),
          h = c[0].tagName == "IMG" ? g : c,
          i = {
        size: f == "vertical" ? "height" : "width",
        position: f == "vertical" ? "top" : "left"
      },
          j = f == "vertical" ? h.height() : h.width();
      e == "show" && (h.css(i.size, 0), h.css(i.position, j / 2));
      var k = {};
      k[i.size] = e == "show" ? j : 0, k[i.position] = e == "show" ? 0 : j / 2, h.animate(k, {
        queue: !1,
        duration: b.duration,
        easing: b.options.easing,
        complete: function complete() {
          e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue();
        }
      });
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.drop.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.drop = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = ["position", "top", "bottom", "left", "right", "opacity"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.direction || "left";
      a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
      var g = f == "up" || f == "down" ? "top" : "left",
          h = f == "up" || f == "left" ? "pos" : "neg",
          i = b.options.distance || (g == "top" ? c.outerHeight(!0) / 2 : c.outerWidth(!0) / 2);
      e == "show" && c.css("opacity", 0).css(g, h == "pos" ? -i : i);
      var j = {
        opacity: e == "show" ? 1 : 0
      };
      j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, {
        queue: !1,
        duration: b.duration,
        easing: b.options.easing,
        complete: function complete() {
          e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue();
        }
      });
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.explode.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.explode = function (b) {
    return this.queue(function () {
      var c = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3,
          d = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3;
      b.options.mode = b.options.mode == "toggle" ? a(this).is(":visible") ? "hide" : "show" : b.options.mode;
      var e = a(this).show().css("visibility", "hidden"),
          f = e.offset();
      f.top -= parseInt(e.css("marginTop"), 10) || 0, f.left -= parseInt(e.css("marginLeft"), 10) || 0;
      var g = e.outerWidth(!0),
          h = e.outerHeight(!0);

      for (var i = 0; i < c; i++) {
        for (var j = 0; j < d; j++) {
          e.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -j * (g / d),
            top: -i * (h / c)
          }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: g / d,
            height: h / c,
            left: f.left + j * (g / d) + (b.options.mode == "show" ? (j - Math.floor(d / 2)) * (g / d) : 0),
            top: f.top + i * (h / c) + (b.options.mode == "show" ? (i - Math.floor(c / 2)) * (h / c) : 0),
            opacity: b.options.mode == "show" ? 0 : 1
          }).animate({
            left: f.left + j * (g / d) + (b.options.mode == "show" ? 0 : (j - Math.floor(d / 2)) * (g / d)),
            top: f.top + i * (h / c) + (b.options.mode == "show" ? 0 : (i - Math.floor(c / 2)) * (h / c)),
            opacity: b.options.mode == "show" ? 1 : 0
          }, b.duration || 500);
        }
      }

      setTimeout(function () {
        b.options.mode == "show" ? e.css({
          visibility: "visible"
        }) : e.css({
          visibility: "visible"
        }).hide(), b.callback && b.callback.apply(e[0]), e.dequeue(), a("div.ui-effects-explode").remove();
      }, b.duration || 500);
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.fade.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.fade = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = a.effects.setMode(c, b.options.mode || "hide");
      c.animate({
        opacity: d
      }, {
        queue: !1,
        duration: b.duration,
        easing: b.options.easing,
        complete: function complete() {
          b.callback && b.callback.apply(this, arguments), c.dequeue();
        }
      });
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.fold.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.fold = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "hide"),
          f = b.options.size || 15,
          g = !!b.options.horizFirst,
          h = b.duration ? b.duration / 2 : a.fx.speeds._default / 2;
      a.effects.save(c, d), c.show();
      var i = a.effects.createWrapper(c).css({
        overflow: "hidden"
      }),
          j = e == "show" != g,
          k = j ? ["width", "height"] : ["height", "width"],
          l = j ? [i.width(), i.height()] : [i.height(), i.width()],
          m = /([0-9]+)%/.exec(f);
      m && (f = parseInt(m[1], 10) / 100 * l[e == "hide" ? 0 : 1]), e == "show" && i.css(g ? {
        height: 0,
        width: f
      } : {
        height: f,
        width: 0
      });
      var n = {},
          p = {};
      n[k[0]] = e == "show" ? l[0] : f, p[k[1]] = e == "show" ? l[1] : 0, i.animate(n, h, b.options.easing).animate(p, h, b.options.easing, function () {
        e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue();
      });
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.highlight.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.highlight = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = ["backgroundImage", "backgroundColor", "opacity"],
          e = a.effects.setMode(c, b.options.mode || "show"),
          f = {
        backgroundColor: c.css("backgroundColor")
      };
      e == "hide" && (f.opacity = 0), a.effects.save(c, d), c.show().css({
        backgroundImage: "none",
        backgroundColor: b.options.color || "#ffff99"
      }).animate(f, {
        queue: !1,
        duration: b.duration,
        easing: b.options.easing,
        complete: function complete() {
          e == "hide" && c.hide(), a.effects.restore(c, d), e == "show" && !a.support.opacity && this.style.removeAttribute("filter"), b.callback && b.callback.apply(this, arguments), c.dequeue();
        }
      });
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.pulsate.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.pulsate = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = a.effects.setMode(c, b.options.mode || "show"),
          e = (b.options.times || 5) * 2 - 1,
          f = b.duration ? b.duration / 2 : a.fx.speeds._default / 2,
          g = c.is(":visible"),
          h = 0;
      g || (c.css("opacity", 0).show(), h = 1), (d == "hide" && g || d == "show" && !g) && e--;

      for (var i = 0; i < e; i++) {
        c.animate({
          opacity: h
        }, f, b.options.easing), h = (h + 1) % 2;
      }

      c.animate({
        opacity: h
      }, f, b.options.easing, function () {
        h == 0 && c.hide(), b.callback && b.callback.apply(this, arguments);
      }), c.queue("fx", function () {
        c.dequeue();
      }).dequeue();
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.scale.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.puff = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = a.effects.setMode(c, b.options.mode || "hide"),
          e = parseInt(b.options.percent, 10) || 150,
          f = e / 100,
          g = {
        height: c.height(),
        width: c.width()
      };
      a.extend(b.options, {
        fade: !0,
        mode: d,
        percent: d == "hide" ? e : 100,
        from: d == "hide" ? g : {
          height: g.height * f,
          width: g.width * f
        }
      }), c.effect("scale", b.options, b.duration, b.callback), c.dequeue();
    });
  }, a.effects.scale = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = a.extend(!0, {}, b.options),
          e = a.effects.setMode(c, b.options.mode || "effect"),
          f = parseInt(b.options.percent, 10) || (parseInt(b.options.percent, 10) == 0 ? 0 : e == "hide" ? 0 : 100),
          g = b.options.direction || "both",
          h = b.options.origin;
      e != "effect" && (d.origin = h || ["middle", "center"], d.restore = !0);
      var i = {
        height: c.height(),
        width: c.width()
      };
      c.from = b.options.from || (e == "show" ? {
        height: 0,
        width: 0
      } : i);
      var j = {
        y: g != "horizontal" ? f / 100 : 1,
        x: g != "vertical" ? f / 100 : 1
      };
      c.to = {
        height: i.height * j.y,
        width: i.width * j.x
      }, b.options.fade && (e == "show" && (c.from.opacity = 0, c.to.opacity = 1), e == "hide" && (c.from.opacity = 1, c.to.opacity = 0)), d.from = c.from, d.to = c.to, d.mode = e, c.effect("size", d, b.duration, b.callback), c.dequeue();
    });
  }, a.effects.size = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
          e = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
          f = ["width", "height", "overflow"],
          g = ["fontSize"],
          h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
          i = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
          j = a.effects.setMode(c, b.options.mode || "effect"),
          k = b.options.restore || !1,
          l = b.options.scale || "both",
          m = b.options.origin,
          n = {
        height: c.height(),
        width: c.width()
      };
      c.from = b.options.from || n, c.to = b.options.to || n;

      if (m) {
        var p = a.effects.getBaseline(m, n);
        c.from.top = (n.height - c.from.height) * p.y, c.from.left = (n.width - c.from.width) * p.x, c.to.top = (n.height - c.to.height) * p.y, c.to.left = (n.width - c.to.width) * p.x;
      }

      var q = {
        from: {
          y: c.from.height / n.height,
          x: c.from.width / n.width
        },
        to: {
          y: c.to.height / n.height,
          x: c.to.width / n.width
        }
      };
      if (l == "box" || l == "both") q.from.y != q.to.y && (d = d.concat(h), c.from = a.effects.setTransition(c, h, q.from.y, c.from), c.to = a.effects.setTransition(c, h, q.to.y, c.to)), q.from.x != q.to.x && (d = d.concat(i), c.from = a.effects.setTransition(c, i, q.from.x, c.from), c.to = a.effects.setTransition(c, i, q.to.x, c.to));
      (l == "content" || l == "both") && q.from.y != q.to.y && (d = d.concat(g), c.from = a.effects.setTransition(c, g, q.from.y, c.from), c.to = a.effects.setTransition(c, g, q.to.y, c.to)), a.effects.save(c, k ? d : e), c.show(), a.effects.createWrapper(c), c.css("overflow", "hidden").css(c.from);
      if (l == "content" || l == "both") h = h.concat(["marginTop", "marginBottom"]).concat(g), i = i.concat(["marginLeft", "marginRight"]), f = d.concat(h).concat(i), c.find("*[width]").each(function () {
        var c = a(this);
        k && a.effects.save(c, f);
        var d = {
          height: c.height(),
          width: c.width()
        };
        c.from = {
          height: d.height * q.from.y,
          width: d.width * q.from.x
        }, c.to = {
          height: d.height * q.to.y,
          width: d.width * q.to.x
        }, q.from.y != q.to.y && (c.from = a.effects.setTransition(c, h, q.from.y, c.from), c.to = a.effects.setTransition(c, h, q.to.y, c.to)), q.from.x != q.to.x && (c.from = a.effects.setTransition(c, i, q.from.x, c.from), c.to = a.effects.setTransition(c, i, q.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.options.easing, function () {
          k && a.effects.restore(c, f);
        });
      });
      c.animate(c.to, {
        queue: !1,
        duration: b.duration,
        easing: b.options.easing,
        complete: function complete() {
          c.to.opacity === 0 && c.css("opacity", c.from.opacity), j == "hide" && c.hide(), a.effects.restore(c, k ? d : e), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue();
        }
      });
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.shake.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.shake = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "effect"),
          f = b.options.direction || "left",
          g = b.options.distance || 20,
          h = b.options.times || 3,
          i = b.duration || b.options.duration || 140;
      a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
      var j = f == "up" || f == "down" ? "top" : "left",
          k = f == "up" || f == "left" ? "pos" : "neg",
          l = {},
          m = {},
          n = {};
      l[j] = (k == "pos" ? "-=" : "+=") + g, m[j] = (k == "pos" ? "+=" : "-=") + g * 2, n[j] = (k == "pos" ? "-=" : "+=") + g * 2, c.animate(l, i, b.options.easing);

      for (var p = 1; p < h; p++) {
        c.animate(m, i, b.options.easing).animate(n, i, b.options.easing);
      }

      c.animate(m, i, b.options.easing).animate(l, i / 2, b.options.easing, function () {
        a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments);
      }), c.queue("fx", function () {
        c.dequeue();
      }), c.dequeue();
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.slide.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.slide = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = ["position", "top", "bottom", "left", "right"],
          e = a.effects.setMode(c, b.options.mode || "show"),
          f = b.options.direction || "left";
      a.effects.save(c, d), c.show(), a.effects.createWrapper(c).css({
        overflow: "hidden"
      });
      var g = f == "up" || f == "down" ? "top" : "left",
          h = f == "up" || f == "left" ? "pos" : "neg",
          i = b.options.distance || (g == "top" ? c.outerHeight(!0) : c.outerWidth(!0));
      e == "show" && c.css(g, h == "pos" ? isNaN(i) ? "-" + i : -i : i);
      var j = {};
      j[g] = (e == "show" ? h == "pos" ? "+=" : "-=" : h == "pos" ? "-=" : "+=") + i, c.animate(j, {
        queue: !1,
        duration: b.duration,
        easing: b.options.easing,
        complete: function complete() {
          e == "hide" && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue();
        }
      });
    });
  };
})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.transfer.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function (a, b) {
  a.effects.transfer = function (b) {
    return this.queue(function () {
      var c = a(this),
          d = a(b.options.to),
          e = d.offset(),
          f = {
        top: e.top,
        left: e.left,
        height: d.innerHeight(),
        width: d.innerWidth()
      },
          g = c.offset(),
          h = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({
        top: g.top,
        left: g.left,
        height: c.innerHeight(),
        width: c.innerWidth(),
        position: "absolute"
      }).animate(f, b.duration, b.options.easing, function () {
        h.remove(), b.callback && b.callback.apply(c[0], arguments), c.dequeue();
      });
    });
  };
})(jQuery);

;

/***/ }),

/***/ "./src/user/js/vue.js":
/*!****************************!*\
  !*** ./src/user/js/vue.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';
  /*  */

  var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.

  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }
  /**
   * Check if value is primitive.
   */


  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
    _typeof(value) === 'symbol' || typeof value === 'boolean';
  }
  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */


  function isObject(obj) {
    return obj !== null && _typeof(obj) === 'object';
  }
  /**
   * Get the raw type string of a value, e.g., [object Object].
   */


  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }
  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */


  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }
  /**
   * Check if val is a valid array index.
   */


  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  function isPromise(val) {
    return isDef(val) && typeof val.then === 'function' && typeof val["catch"] === 'function';
  }
  /**
   * Convert a value to a string that is actually rendered.
   */


  function toString(val) {
    return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
  }
  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */


  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }
  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */


  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');

    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }

    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }
  /**
   * Check if a tag is a built-in tag.
   */


  var isBuiltInTag = makeMap('slot,component', true);
  /**
   * Check if an attribute is a reserved attribute.
   */

  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
  /**
   * Remove an item from an array.
   */

  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);

      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }
  /**
   * Check whether an object has the property.
   */


  var hasOwnProperty = Object.prototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  /**
   * Create a cached version of a pure function.
   */


  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }
  /**
   * Camelize a hyphen-delimited string.
   */


  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });
  /**
   * Capitalize a string.
   */

  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  /**
   * Hyphenate a camelCase string.
   */

  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });
  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */

  function polyfillBind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }

    boundFn._length = fn.length;
    return boundFn;
  }

  function nativeBind(fn, ctx) {
    return fn.bind(ctx);
  }

  var bind = Function.prototype.bind ? nativeBind : polyfillBind;
  /**
   * Convert an Array-like object to a real Array.
   */

  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);

    while (i--) {
      ret[i] = list[i + start];
    }

    return ret;
  }
  /**
   * Mix properties into target object.
   */


  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }

    return to;
  }
  /**
   * Merge an Array of Objects into a single Object.
   */


  function toObject(arr) {
    var res = {};

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }

    return res;
  }
  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */


  function noop(a, b, c) {}
  /**
   * Always return false.
   */


  var no = function no(a, b, c) {
    return false;
  };
  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */


  var identity = function identity(_) {
    return _;
  };
  /**
   * Generate a string containing static keys from compiler modules.
   */


  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }
  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */


  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }

    var isObjectA = isObject(a);
    var isObjectB = isObject(b);

    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);

        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime();
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }
  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */


  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }

    return -1;
  }
  /**
   * Ensure a function is called only once.
   */


  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';
  var ASSET_TYPES = ['component', 'directive', 'filter'];
  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };
  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */

  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
  /**
   * Check if a string starts with $ or _
   */

  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }
  /**
   * Define a property.
   */


  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }
  /**
   * Parse simple path.
   */


  var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }

    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }

        obj = obj[segments[i]];
      }

      return obj;
    };
  }
  /*  */
  // can we use __proto__?


  var hasProto = ('__proto__' in {}); // Browser environment sniffing

  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

  var nativeWatch = {}.watch;
  var supportsPassive = false;

  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285

      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  } // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV


  var _isServer;

  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }

    return _isServer;
  }; // detect devtools


  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  /* istanbul ignore next */

  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */
  // $flow-disable-line


  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/function () {
      function Set() {
        this.set = Object.create(null);
      }

      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };

      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };

      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }
  /*  */


  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check

  var formatComponentName = noop;
  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;

    var classify = function classify(str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function warn(msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function tip(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }

      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;

      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function repeat(str, n) {
      var res = '';

      while (n) {
        if (n % 2 === 1) {
          res += str;
        }

        if (n > 1) {
          str += str;
        }

        n >>= 1;
      }

      return res;
    };

    generateComponentTrace = function generateComponentTrace(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;

        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];

            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }

          tree.push(vm);
          vm = vm.$parent;
        }

        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }
  /*  */

  var uid = 0;
  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */

  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();

    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) {
        return a.id - b.id;
      });
    }

    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }; // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.


  Dep.target = null;
  var targetStack = [];

  function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }
  /*  */


  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = {
    child: {
      configurable: true
    }
  }; // DEPRECATED: alias for componentInstance for backwards compat.

  /* istanbul ignore next */

  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode(text) {
    if (text === void 0) text = '';
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  } // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.


  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
  }
  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */


  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);
  var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
  /**
   * Intercept mutating methods and emit events
   */

  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      }

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;

      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;

        case 'splice':
          inserted = args.slice(2);
          break;
      }

      if (inserted) {
        ob.observeArray(inserted);
      } // notify change


      ob.dep.notify();
      return result;
    });
  });
  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */

  var shouldObserve = true;

  function toggleObserving(value) {
    shouldObserve = value;
  }
  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */


  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);

    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }

      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };
  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };
  /**
   * Observe a list of Array items.
   */


  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }; // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */


  function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }
  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */

  /* istanbul ignore next */


  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }
  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */


  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }

    var ob;

    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }

    if (asRootData && ob) {
      ob.vmCount++;
    }

    return ob;
  }
  /**
   * Define a reactive property on an Object.
   */


  function defineReactive$$1(obj, key, val, customSetter, shallow) {
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);

    if (property && property.configurable === false) {
      return;
    } // cater for pre-defined getter/setters


    var getter = property && property.get;
    var setter = property && property.set;

    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;

        if (Dep.target) {
          dep.depend();

          if (childOb) {
            childOb.dep.depend();

            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }

        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */

        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */


        if (customSetter) {
          customSetter();
        } // #7981: for accessor properties without setter


        if (getter && !setter) {
          return;
        }

        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }

        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }
  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */


  function set(target, key, val) {
    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }

    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }

    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }

    if (!ob) {
      target[key] = val;
      return val;
    }

    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }
  /**
   * Delete a property and trigger change if necessary.
   */


  function del(target, key) {
    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
    }

    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }

    if (!hasOwn(target, key)) {
      return;
    }

    delete target[key];

    if (!ob) {
      return;
    }

    ob.dep.notify();
  }
  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */


  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();

      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }
  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */


  var strats = config.optionMergeStrategies;
  /**
   * Options with restrictions
   */

  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }

      return defaultStrat(parent, child);
    };
  }
  /**
   * Helper that recursively merges two data objects together.
   */

  function mergeData(to, from) {
    if (!from) {
      return to;
    }

    var key, toVal, fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i]; // in case the object is already observed...

      if (key === '__ob__') {
        continue;
      }

      toVal = to[key];
      fromVal = from[key];

      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }

    return to;
  }
  /**
   * Data
   */


  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }

      if (!parentVal) {
        return childVal;
      } // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.


      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
        return parentVal;
      }

      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };
  /**
   * Hooks and props are merged as arrays.
   */


  function mergeHook(parentVal, childVal) {
    var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    return res ? dedupeHooks(res) : res;
  }

  function dedupeHooks(hooks) {
    var res = [];

    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }

    return res;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });
  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */

  function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);

    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });
  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */

  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }

    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */


    if (!childVal) {
      return Object.create(parentVal || null);
    }

    {
      assertObjectType(key, childVal, vm);
    }

    if (!parentVal) {
      return childVal;
    }

    var ret = {};
    extend(ret, parentVal);

    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];

      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }

      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }

    return ret;
  };
  /**
   * Other object hashes.
   */


  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }

    if (!parentVal) {
      return childVal;
    }

    var ret = Object.create(null);
    extend(ret, parentVal);

    if (childVal) {
      extend(ret, childVal);
    }

    return ret;
  };

  strats.provide = mergeDataOrFn;
  /**
   * Default strategy.
   */

  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };
  /**
   * Validate component names
   */


  function checkComponents(options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName(name) {
    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
      warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
    }

    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
    }
  }
  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */


  function normalizeProps(options, vm) {
    var props = options.props;

    if (!props) {
      return;
    }

    var res = {};
    var i, val, name;

    if (Array.isArray(props)) {
      i = props.length;

      while (i--) {
        val = props[i];

        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = {
            type: null
          };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : {
          type: val
        };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }

    options.props = res;
  }
  /**
   * Normalize all injections into Object-based format
   */


  function normalizeInject(options, vm) {
    var inject = options.inject;

    if (!inject) {
      return;
    }

    var normalized = options.inject = {};

    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = {
          from: inject[i]
        };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({
          from: key
        }, val) : {
          from: val
        };
      }
    } else {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }
  /**
   * Normalize raw function directives into object format.
   */


  function normalizeDirectives(options) {
    var dirs = options.directives;

    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];

        if (typeof def$$1 === 'function') {
          dirs[key] = {
            bind: def$$1,
            update: def$$1
          };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }
  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */


  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child); // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.

    if (!child._base) {
      if (child["extends"]) {
        parent = mergeOptions(parent, child["extends"], vm);
      }

      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;

    for (key in parent) {
      mergeField(key);
    }

    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }

    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }

    return options;
  }
  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */


  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }

    var assets = options[type]; // check local registration variations first

    if (hasOwn(assets, id)) {
      return assets[id];
    }

    var camelizedId = camelize(id);

    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }

    var PascalCaseId = capitalize(camelizedId);

    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    } // fallback to prototype chain


    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

    if (warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }

    return res;
  }
  /*  */


  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key]; // boolean casting

    var booleanIndex = getTypeIndex(Boolean, prop.type);

    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);

        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    } // check default value


    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
      // make sure to observe it.

      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }

    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }
  /**
   * Get the default value of a prop.
   */


  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }

    var def = prop["default"]; // warn against non-factory defaults for Object & Array

    if (isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    } // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger


    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    } // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context


    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }
  /**
   * Assert whether a prop is valid.
   */


  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }

    if (value == null && !prop.required) {
      return;
    }

    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];

    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }

      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
      return;
    }

    var validator = prop.validator;

    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);

    if (simpleCheckRE.test(expectedType)) {
      var t = _typeof(value);

      valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }

    return {
      valid: valid,
      expectedType: expectedType
    };
  }
  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */


  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isSameType(a, b) {
    return getType(a) === getType(b);
  }

  function getTypeIndex(type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }

    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }

    return -1;
  }

  function getInvalidTypeMessage(name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }

    message += ", got " + receivedType + " "; // check if we need to specify received value

    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }

    return message;
  }

  function styleValue(value, type) {
    if (type === 'String') {
      return "\"" + value + "\"";
    } else if (type === 'Number') {
      return "" + Number(value);
    } else {
      return "" + value;
    }
  }

  function isExplicable(value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) {
      return value.toLowerCase() === elem;
    });
  }

  function isBoolean() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return args.some(function (elem) {
      return elem.toLowerCase() === 'boolean';
    });
  }
  /*  */


  function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();

    try {
      if (vm) {
        var cur = vm;

        while (cur = cur.$parent) {
          var hooks = cur.$options.errorCaptured;

          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;

                if (capture) {
                  return;
                }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }

      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;

    try {
      res = args ? handler.apply(context, args) : handler.call(context);

      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res["catch"](function (e) {
          return handleError(e, vm, info + " (Promise/async)");
        }); // issue #9511
        // avoid catch triggering multiple times when nested calls

        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }

    return res;
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }

    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */

    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
  /*  */


  var isUsingMicroTask = false;
  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;

    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  } // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).


  var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:

  /* istanbul ignore next, $flow-disable-line */

  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();

    timerFunc = function timerFunc() {
      p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.

      if (isIOS) {
        setTimeout(noop);
      }
    };

    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });

    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };

    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function timerFunc() {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function timerFunc() {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick(cb, ctx) {
    var _resolve;

    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });

    if (!pending) {
      pending = true;
      timerFunc();
    } // $flow-disable-line


    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  }
  /*  */


  var mark;
  var measure;
  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */

    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };

      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag); // perf.clearMeasures(name)
      };
    }
  }
  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;
  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var warnReservedPrefix = function warnReservedPrefix(target, key) {
      warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = (key in target);
        var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

        if (!has && !isAllowed) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }

        return has || !isAllowed;
      }
    };
    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }

        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }
  /*  */

  var seenObjects = new _Set();
  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */

  function traverse(val) {
    _traverse(val, seenObjects);

    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);

    if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
      return;
    }

    if (val.__ob__) {
      var depId = val.__ob__.dep.id;

      if (seen.has(depId)) {
        return;
      }

      seen.add(depId);
    }

    if (isA) {
      i = val.length;

      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;

      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }
  /*  */


  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns, vm) {
    function invoker() {
      var arguments$1 = arguments;
      var fns = invoker.fns;

      if (Array.isArray(fns)) {
        var cloned = fns.slice();

        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
      }
    }

    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
    var name, def$$1, cur, old, event;

    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);

      if (isUndef(cur)) {
        warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }

        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }

        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }

    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }
  /*  */


  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }

    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
      // and prevent memory leak

      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }
  /*  */


  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;

    if (isUndef(propOptions)) {
      return;
    }

    var res = {};
    var attrs = data.attrs;
    var props = data.props;

    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();

          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }

    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];

        if (!preserve) {
          delete hash[key];
        }

        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];

        if (!preserve) {
          delete hash[altKey];
        }

        return true;
      }
    }

    return false;
  }
  /*  */
  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:
  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.


  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }

    return children;
  } // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.


  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;

    for (i = 0; i < children.length; i++) {
      c = children[i];

      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }

      lastIndex = res.length - 1;
      last = res[lastIndex]; //  nested

      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }

          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }

          res.push(c);
        }
      }
    }

    return res;
  }
  /*  */


  function initProvide(vm) {
    var provide = vm.$options.provide;

    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);

    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i]; // #6574 in case the inject object is observed...

        if (key === '__ob__') {
          continue;
        }

        var provideKey = inject[key].from;
        var source = vm;

        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break;
          }

          source = source.$parent;
        }

        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key]["default"];
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }

      return result;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */


  function resolveSlots(children, context) {
    if (!children || !children.length) {
      return {};
    }

    var slots = {};

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      } // named slots should only be respected if the vnode was rendered in the
      // same context.


      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);

        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots["default"] || (slots["default"] = [])).push(child);
      }
    } // ignore slots that contains only whitespace


    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }

    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }
  /*  */


  function normalizeScopedSlots(slots, normalSlots, prevSlots) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;

    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized;
    } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots;
    } else {
      res = {};

      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    } // expose normal slots on scopedSlots


    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    } // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error


    if (slots && Object.isExtensible(slots)) {
      slots._normalized = res;
    }

    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res;
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function normalized() {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && _typeof(res) === 'object' && !Array.isArray(res) ? [res] // single vnode
      : normalizeChildren(res);
      return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
      ) ? undefined : res;
    }; // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.


    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }

    return normalized;
  }

  function proxyNormalSlot(slots, key) {
    return function () {
      return slots[key];
    };
  }
  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */


  function renderList(val, render) {
    var ret, i, l, keys, key;

    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);

      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);

      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();

        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);

        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }

    if (!isDef(ret)) {
      ret = [];
    }

    ret._isVList = true;
    return ret;
  }
  /*  */

  /**
   * Runtime helper for rendering <slot>
   */


  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;

    if (scopedSlotFn) {
      // scoped slot
      props = props || {};

      if (bindObject) {
        if (!isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }

        props = extend(extend({}, bindObject), props);
      }

      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;

    if (target) {
      return this.$createElement('template', {
        slot: target
      }, nodes);
    } else {
      return nodes;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving filters
   */


  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }
  /*  */


  function isKeyNotMatch(expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1;
    } else {
      return expect !== actual;
    }
  }
  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */


  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName);
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }
  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */


  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }

        var hash;

        var loop = function loop(key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }

          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);

          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});

              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) {
          loop(key);
        }
      }
    }

    return data;
  }
  /*  */

  /**
   * Runtime helper for rendering static trees.
   */


  function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.

    if (tree && !isInFor) {
      return tree;
    } // otherwise, render a fresh tree.


    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }
  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */


  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }
  /*  */


  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};

        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }

    return data;
  }
  /*  */


  function resolveScopedSlots(fns, // see flow/vnode
  res, // the following are added in 2.6
  hasDynamicKeys, contentHashKey) {
    res = res || {
      $stable: !hasDynamicKeys
    };

    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];

      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }

        res[slot.key] = slot.fn;
      }
    }

    if (contentHashKey) {
      res.$key = contentHashKey;
    }

    return res;
  }
  /*  */


  function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];

      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a special value for explicitly removing a binding
        warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
      }
    }

    return baseObj;
  } // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.


  function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
  }
  /*  */


  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }
  /*  */


  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var this$1 = this;
    var options = Ctor.options; // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check

    var contextVm;

    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent); // $flow-disable-line

      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent; // $flow-disable-line

      parent = parent._original;
    }

    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);

    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
      }

      return this$1.$slots;
    };

    Object.defineProperty(this, 'scopedSlots', {
      enumerable: true,
      get: function get() {
        return normalizeScopedSlots(data.scopedSlots, this.slots());
      }
    }); // support for compiled functional template

    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options; // pre-resolve slots for renderSlot()

      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);

        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }

        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;

    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }

      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);

      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }

      return res;
    }
  }

  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }

    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }

    return clone;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }
  /*  */

  /*  */

  /*  */

  /*  */
  // inline hooks to be invoked on component VNodes during patch


  var componentVNodeHooks = {
    init: function init(vnode, hydrating) {
      if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow

        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },
    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },
    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }

      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    },
    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    }
  };
  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base; // plain options object: turn it into a constructor

    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    } // if at this stage it's not a constructor or an async component factory,
    // reject.


    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    } // async component


    var asyncFactory;

    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {}; // resolve constructor options in case global mixins are applied after
    // component constructor creation

    resolveConstructorOptions(Ctor); // transform component v-model data into props & events

    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    } // extract props


    var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    } // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners


    var listeners = data.on; // replace with listeners with .native modifier
    // so it gets processed during parent component patch.

    data.on = data.nativeOn;

    if (isTrue(Ctor.options["abstract"])) {
      // abstract components do not keep anything
      // other than props & listeners & slot
      // work around flow
      var slot = data.slot;
      data = {};

      if (slot) {
        data.slot = slot;
      }
    } // install component management hooks onto the placeholder node


    installComponentHooks(data); // return a placeholder vnode

    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
      Ctor: Ctor,
      propsData: propsData,
      listeners: listeners,
      tag: tag,
      children: children
    }, asyncFactory);
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    }; // check inline-template render functions

    var inlineTemplate = vnode.data.inlineTemplate;

    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }

    return new vnode.componentOptions.Ctor(options);
  }

  function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});

    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];

      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1(f1, f2) {
    var merged = function merged(a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };

    merged._merged = true;
    return merged;
  } // transform component v-model info (value and callback) into
  // prop and event handler respectively.


  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;

    if (isDef(existing)) {
      if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }
  /*  */


  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
  // without getting yelled at by flow

  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }

    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }

    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    } // object syntax in v-bind


    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }

    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    } // warn against non-primitive key


    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      {
        warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
      }
    } // support single function children as default scoped slot


    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = {
        "default": children[0]
      };
      children.length = 0;
    }

    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }

    var vnode, ns;

    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

      if (config.isReservedTag(tag)) {
        // platform built-in elements
        if (isDef(data) && isDef(data.nativeOn)) {
          warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
        }

        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }

    if (Array.isArray(vnode)) {
      return vnode;
    } else if (isDef(vnode)) {
      if (isDef(ns)) {
        applyNS(vnode, ns);
      }

      if (isDef(data)) {
        registerDeepBindings(data);
      }

      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;

    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }

    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];

        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
          applyNS(child, ns, force);
        }
      }
    }
  } // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes


  function registerDeepBindings(data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }

    if (isObject(data["class"])) {
      traverse(data["class"]);
    }
  }
  /*  */


  function initRender(vm) {
    vm._vnode = null; // the root of the child tree

    vm._staticTrees = null; // v-once cached trees

    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates

    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    }; // normalization is always applied for the public version, used in
    // user-written render functions.


    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    }; // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated


    var parentData = parentVnode && parentVnode.data;
    /* istanbul ignore else */

    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
      } // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.


      vm.$vnode = _parentVnode; // render self

      var vnode;

      try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render"); // return error render result,
        // or previous vnode to prevent render error causing blank component

        /* istanbul ignore else */

        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      } // if the returned array contains only a single node, allow it


      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      } // return empty vnode in case the render function errored out


      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }

        vnode = createEmptyVNode();
      } // set parent


      vnode.parent = _parentVnode;
      return vnode;
    };
  }
  /*  */


  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp["default"];
    }

    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = {
      data: data,
      context: context,
      children: children,
      tag: tag
    };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    var owner = currentRenderingInstance;

    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null;
      owner.$on('hook:destroyed', function () {
        return remove(owners, owner);
      });

      var forceRender = function forceRender(renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          owners[i].$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;

          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }

          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)

        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });
      var reject = once(function (reason) {
        warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });
      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);

            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;

                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;

              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false; // return in case resolved synchronously

      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }
  /*  */


  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }
  /*  */


  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];

        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }
  /*  */

  /*  */


  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false; // init parent attached events

    var listeners = vm.$options._parentListeners;

    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn) {
    target.$on(event, fn);
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler(event, fn) {
    var _target = target;
    return function onceHandler() {
      var res = fn.apply(null, arguments);

      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    };
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;

    Vue.prototype.$on = function (event, fn) {
      var vm = this;

      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup

        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }

      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;

      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }

      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this; // all

      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      } // array of events


      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }

        return vm;
      } // specific event


      var cbs = vm._events[event];

      if (!cbs) {
        return vm;
      }

      if (!fn) {
        vm._events[event] = null;
        return vm;
      } // specific handler


      var cb;
      var i = cbs.length;

      while (i--) {
        cb = cbs[i];

        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }

      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();

        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];

      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";

        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }

      return vm;
    };
  }
  /*  */


  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    };
  }

  function initLifecycle(vm) {
    var options = vm.$options; // locate first non-abstract parent

    var parent = options.parent;

    if (parent && !options["abstract"]) {
      while (parent.$options["abstract"] && parent.$parent) {
        parent = parent.$parent;
      }

      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.

      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
        /* removeOnly */
        );
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }

      restoreActiveInstance(); // update __vue__ reference

      if (prevEl) {
        prevEl.__vue__ = null;
      }

      if (vm.$el) {
        vm.$el.__vue__ = vm;
      } // if parent is an HOC, update its $el as well


      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      } // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.

    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;

      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;

      if (vm._isBeingDestroyed) {
        return;
      }

      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true; // remove self from parent

      var parent = vm.$parent;

      if (parent && !parent._isBeingDestroyed && !vm.$options["abstract"]) {
        remove(parent.$children, vm);
      } // teardown watchers


      if (vm._watcher) {
        vm._watcher.teardown();
      }

      var i = vm._watchers.length;

      while (i--) {
        vm._watchers[i].teardown();
      } // remove reference from data ob
      // frozen object may not have observer.


      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      } // call the last hook...


      vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

      vm.__patch__(vm._vnode, null); // fire destroyed hook


      callHook(vm, 'destroyed'); // turn off all instance listeners.

      vm.$off(); // remove __vue__ reference

      if (vm.$el) {
        vm.$el.__vue__ = null;
      } // release circular reference (#6759)


      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;

    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }

    callHook(vm, 'beforeMount');
    var updateComponent;
    /* istanbul ignore if */

    if (config.performance && mark) {
      updateComponent = function updateComponent() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;
        mark(startTag);

        var vnode = vm._render();

        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);
        mark(startTag);

        vm._update(vnode, hydrating);

        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      };
    } // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined


    new Watcher(vm, updateComponent, noop, {
      before: function before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true
    /* isRenderWatcher */
    );
    hydrating = false; // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook

    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }

    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    } // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.

    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.

    var needsForceUpdate = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot);
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }

    vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render

    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject; // update props

    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];

      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?

        props[key] = validateProp(key, propOptions, propsData, vm);
      }

      toggleObserving(true); // keep a copy of raw propsData

      vm.$options.propsData = propsData;
    } // update listeners


    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }

    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;

      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }

    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;

      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;

      if (isInInactiveTree(vm)) {
        return;
      }
    }

    if (!vm._inactive) {
      vm._inactive = true;

      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";

    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }

    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }

    popTarget();
  }
  /*  */


  var MAX_UPDATE_COUNT = 100;
  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;
  /**
   * Reset the scheduler's state.
   */

  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  } // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.


  var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

  var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)

  if (inBrowser && !isIE) {
    var performance = window.performance;

    if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function getNow() {
        return performance.now();
      };
    }
  }
  /**
   * Flush both queues and run the watchers.
   */


  function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id; // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.

    queue.sort(function (a, b) {
      return a.id - b.id;
    }); // do not cache length because more watchers might be pushed
    // as we run existing watchers

    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];

      if (watcher.before) {
        watcher.before();
      }

      id = watcher.id;
      has[id] = null;
      watcher.run(); // in dev build, check and stop circular updates.

      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;

        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    } // keep copies of post queues before resetting state


    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState(); // call component updated and activated hooks

    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue); // devtool hook

    /* istanbul ignore if */

    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;

    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;

      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }
  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */


  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true
      /* true */
      );
    }
  }
  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */


  function queueWatcher(watcher) {
    var id = watcher.id;

    if (has[id] == null) {
      has[id] = true;

      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;

        while (i > index && queue[i].id > watcher.id) {
          i--;
        }

        queue.splice(i + 1, 0, watcher);
      } // queue the flush


      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return;
        }

        nextTick(flushSchedulerQueue);
      }
    }
  }
  /*  */


  var uid$2 = 0;
  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */

  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;

    if (isRenderWatcher) {
      vm._watcher = this;
    }

    vm._watchers.push(this); // options


    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }

    this.cb = cb;
    this.id = ++uid$2; // uid for batching

    this.active = true;
    this.dirty = this.lazy; // for lazy watchers

    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString(); // parse expression for getter

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);

      if (!this.getter) {
        this.getter = noop;
        warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }

    this.value = this.lazy ? undefined : this.get();
  };
  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;

    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }

      popTarget();
      this.cleanupDeps();
    }

    return value;
  };
  /**
   * Add a dependency to this directive.
   */


  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;

    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);

      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };
  /**
   * Clean up for dependency collection.
   */


  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var i = this.deps.length;

    while (i--) {
      var dep = this.deps[i];

      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }

    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };
  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */


  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };
  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */


  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();

      if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;

        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };
  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */


  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };
  /**
   * Depend on all deps collected by this watcher.
   */


  Watcher.prototype.depend = function depend() {
    var i = this.deps.length;

    while (i--) {
      this.deps[i].depend();
    }
  };
  /**
   * Remove self from all dependencies' subscriber list.
   */


  Watcher.prototype.teardown = function teardown() {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }

      var i = this.deps.length;

      while (i--) {
        this.deps[i].removeSub(this);
      }

      this.active = false;
    }
  };
  /*  */


  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };

    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;

    if (opts.props) {
      initProps(vm, opts.props);
    }

    if (opts.methods) {
      initMethods(vm, opts.methods);
    }

    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true
      /* asRootData */
      );
    }

    if (opts.computed) {
      initComputed(vm, opts.computed);
    }

    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.

    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent; // root instance props should be converted

    if (!isRoot) {
      toggleObserving(false);
    }

    var loop = function loop(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */

      {
        var hyphenatedKey = hyphenate(key);

        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }

        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      } // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.

      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) {
      loop(key);
    }

    toggleObserving(true);
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

    if (!isPlainObject(data)) {
      data = {};
      warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    } // proxy data on instance


    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;

    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }

      if (props && hasOwn(props, key)) {
        warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    } // observe data


    observe(data, true
    /* asRootData */
    );
  }

  function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();

    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = {
    lazy: true
  };

  function initComputed(vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;

      if (getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      } // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.


      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();

    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }

    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];

      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }

        if (Dep.target) {
          watcher.depend();
        }

        return watcher.value;
      }
    };
  }

  function createGetterInvoker(fn) {
    return function computedGetter() {
      return fn.call(this, this);
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;

    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn("Method \"" + key + "\" has type \"" + _typeof(methods[key]) + "\" in the component definition. " + "Did you reference the function correctly?", vm);
        }

        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }

        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];

      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }

    if (typeof handler === 'string') {
      handler = vm[handler];
    }

    return vm.$watch(expOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};

    dataDef.get = function () {
      return this._data;
    };

    var propsDef = {};

    propsDef.get = function () {
      return this._props;
    };

    {
      dataDef.set = function () {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };

      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;

      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }

      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);

      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
        }
      }

      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }
  /*  */


  var uid$3 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this; // a uid

      vm._uid = uid$3++;
      var startTag, endTag;
      /* istanbul ignore if */

      if (config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      } // a flag to avoid this being observed


      vm._isVue = true; // merge options

      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */


      {
        initProxy(vm);
      } // expose real self

      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props

      initState(vm);
      initProvide(vm); // resolve provide after data/props

      callHook(vm, 'created');
      /* istanbul ignore if */

      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;

    if (Ctor["super"]) {
      var superOptions = resolveConstructorOptions(Ctor["super"]);
      var cachedSuperOptions = Ctor.superOptions;

      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

        var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }

        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }

    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;

    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }

        modified[key] = latest[key];
      }
    }

    return modified;
  }

  function Vue(options) {
    if (!(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }

    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);
  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      } // additional parameters


      var args = toArray(arguments, 1);
      args.unshift(this);

      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }

      installedPlugins.push(plugin);
      return this;
    };
  }
  /*  */


  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }
  /*  */


  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;
    /**
     * Class inheritance
     */

    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;

      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.

      if (Sub.options.props) {
        initProps$1(Sub);
      }

      if (Sub.options.computed) {
        initComputed$1(Sub);
      } // allow further extension/mixin/plugin usage


      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use; // create asset registers, so extended classes
      // can have their private assets too.

      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      }); // enable recursive self-lookup

      if (name) {
        Sub.options.components[name] = Sub;
      } // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.


      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options); // cache constructor

      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;

    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;

    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }
  /*  */


  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }

          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }

          if (type === 'directive' && typeof definition === 'function') {
            definition = {
              bind: definition,
              update: definition
            };
          }

          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }
  /*  */


  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */


    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;

    for (var key in cache) {
      var cachedNode = cache[key];

      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);

        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];

    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }

    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];
  var KeepAlive = {
    name: 'keep-alive',
    "abstract": true,
    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },
    created: function created() {
      this.cache = Object.create(null);
      this.keys = [];
    },
    destroyed: function destroyed() {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },
    mounted: function mounted() {
      var this$1 = this;
      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) {
          return matches(val, name);
        });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) {
          return !matches(val, name);
        });
      });
    },
    render: function render() {
      var slot = this.$slots["default"];
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;

      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;

        if ( // not included
        include && (!name || !matches(include, name)) || // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance; // make current key freshest

          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key); // prune oldest entry

          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }

      return vnode || slot && slot[0];
    }
  };
  var builtInComponents = {
    KeepAlive: KeepAlive
  };
  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};

    configDef.get = function () {
      return config;
    };

    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.

    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };
    Vue.set = set;
    Vue["delete"] = del;
    Vue.nextTick = nextTick; // 2.6 explicit observable API

    Vue.observable = function (obj) {
      observe(obj);
      return obj;
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    }); // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.

    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);
  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });
  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  }); // expose FunctionalRenderContext for ssr runtime helper installation

  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });
  Vue.version = '2.6.12';
  /*  */
  // these are reserved for web because they are directly compiled away
  // during template compilation

  var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

  var acceptValue = makeMap('input,textarea,option,select,progress');

  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function convertEnumeratedValue(key, value) {
    return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
  };

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };
  /*  */


  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;

    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }

    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }

    return renderClass(data.staticClass, data["class"]);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      "class": isDef(child["class"]) ? [child["class"], parent["class"]] : parent["class"]
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */


    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }

    if (isObject(value)) {
      return stringifyObject(value);
    }

    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */


    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;

    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }

        res += stringified;
      }
    }

    return res;
  }

  function stringifyObject(value) {
    var res = '';

    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }

        res += key;
      }
    }

    return res;
  }
  /*  */


  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };
  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.

  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function isPreTag(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    } // basic support for MathML
    // note it doesn't support other MathML elements being component roots


    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);

  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }

    if (isReservedTag(tag)) {
      return false;
    }

    tag = tag.toLowerCase();
    /* istanbul ignore if */

    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }

    var el = document.createElement(tag);

    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');
  /*  */

  /**
   * Query an element selector if it's not an element already.
   */

  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);

      if (!selected) {
        warn('Cannot find element: ' + el);
        return document.createElement('div');
      }

      return selected;
    } else {
      return el;
    }
  }
  /*  */


  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);

    if (tagName !== 'select') {
      return elm;
    } // false or null will remove the attribute but undefined will not


    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }

    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });
  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;

    if (!isDef(key)) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;

    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }
  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */


  var emptyNode = new VNode('', {}, []);
  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }

    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};

    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;

      if (isDef(key)) {
        map[key] = i;
      }
    }

    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};
    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];

      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }

      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
        return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
      })) && config.isUnknownElement(vnode.tag);
    }

    var creatingElmInVPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check

      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;

      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }

          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);
        /* istanbul ignore if */

        {
          createChildren(vnode, children, insertedVnodeQueue);

          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }

          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;

      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false
          /* hydrating */
          );
        } // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.


        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);

          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }

          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }

      vnode.elm = vnode.componentInstance.$el;

      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode); // make sure to invoke the insert hook

        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i; // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.

      var innerNode = vnode;

      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;

        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }

          insertedVnodeQueue.push(innerNode);
          break;
        }
      } // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself


      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }

        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }

      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }

      i = vnode.data.hook; // Reuse variable

      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }

        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    } // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.


    function setScope(vnode) {
      var i;

      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;

        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }

          ancestor = ancestor.parent;
        }
      } // for slot content they should also get the scopeId from the host instance.


      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }

        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }

      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];

        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;

        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        } // recursively invoke hooks on child component root node


        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }

        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }

        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions

      var canMove = !removeOnly;
      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }

          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];

            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }

          newStartVnode = newCh[++newStartIdx];
        }
      }

      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys(children) {
      var seenKeys = {};

      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;

        if (isDef(key)) {
          if (seenKeys[key]) {
            warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];

        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }

        return;
      } // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.


      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;

      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;

      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }

        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }

      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }

          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }

          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).

    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      } // assert node match


      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false;
        }
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true
          /* hydrating */
          );
        }

        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }

      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }

                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;

              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }

                childNode = childNode.nextSibling;
              } // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.


              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }

                return false;
              }
            }
          }
        }

        if (isDef(data)) {
          var fullInvoke = false;

          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }

          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }

      return true;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }

        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);

        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }

            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            } // either not server-rendered, or hydration failed.
            // create an empty node and replace it


            oldVnode = emptyNodeAt(oldVnode);
          } // replacing existing element


          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm); // create new node

          createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);

            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }

              ancestor.elm = vnode.elm;

              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                } // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.


                var insert = ancestor.data.hook.insert;

                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }

              ancestor = ancestor.parent;
            }
          } // destroy old node


          if (isDef(parentElm)) {
            removeVnodes([oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }
  /*  */


  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;

    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];

      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);

        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);

        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };

      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);

    if (!dirs) {
      // $flow-disable-line
      return res;
    }

    var i, dir;

    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];

      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }

      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    } // $flow-disable-line


    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];

    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];
  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;

    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }

    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }

    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];

      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    } // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max

    /* istanbul ignore if */


    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }

    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.

      /* istanbul ignore if */
      if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
        var blocker = function blocker(e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };

        el.addEventListener('input', blocker); // $flow-disable-line

        el.__ieph = true;
        /* IE placeholder patched */
      }

      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };
  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticClass) && isUndef(data["class"]) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData["class"]))) {
      return;
    }

    var cls = genClassForVnode(vnode); // handle transition classes

    var transitionClass = el._transitionClasses;

    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    } // set the class


    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };
  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);

      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;
            break;
          // "

          case 0x27:
            inSingle = true;
            break;
          // '

          case 0x60:
            inTemplateString = true;
            break;
          // `

          case 0x28:
            paren++;
            break;
          // (

          case 0x29:
            paren--;
            break;
          // )

          case 0x5B:
            square++;
            break;
          // [

          case 0x5D:
            square--;
            break;
          // ]

          case 0x7B:
            curly++;
            break;
          // {

          case 0x7D:
            curly--;
            break;
          // }
        }

        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0; // find first non-whitespace prev char

          for (; j >= 0; j--) {
            p = exp.charAt(j);

            if (p !== ' ') {
              break;
            }
          }

          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');

    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args);
    }
  }
  /*  */

  /* eslint-disable no-unused-vars */


  function baseWarn(msg, range) {
    console.error("[Vue compiler]: " + msg);
  }
  /* eslint-enable no-unused-vars */


  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({
      name: name,
      value: value,
      dynamic: dynamic
    }, range));
    el.plain = false;
  }

  function addAttr(el, name, value, range, dynamic) {
    var attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
    attrs.push(rangeSetItem({
      name: name,
      value: value,
      dynamic: dynamic
    }, range));
    el.plain = false;
  } // add a raw attr (use this in preTransforms)


  function addRawAttr(el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({
      name: name,
      value: value
    }, range));
  }

  function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker(symbol, name, dynamic) {
    return dynamic ? "_p(" + name + ",\"" + symbol + "\")" : symbol + name; // mark the event as captured
  }

  function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
    modifiers = modifiers || emptyObject; // warn prevent and passive modifier

    /* istanbul ignore if */

    if (warn && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.', range);
    } // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.


    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    } // check capture modifier


    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }

    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */


    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;

    if (modifiers["native"]) {
      delete modifiers["native"];
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({
      value: value.trim(),
      dynamic: dynamic
    }, range);

    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */

    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr(el, name) {
    return el.rawAttrsMap[':' + name] || el.rawAttrsMap['v-bind:' + name] || el.rawAttrsMap[name];
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);

    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);

      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  } // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.


  function getAndRemoveAttr(el, name, removeFromMap) {
    var val;

    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;

      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }

    if (removeFromMap) {
      delete el.attrsMap[name];
    }

    return val;
  }

  function getAndRemoveAttrByRegex(el, name) {
    var list = el.attrsList;

    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];

      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr;
      }
    }
  }

  function rangeSetItem(item, range) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }

      if (range.end != null) {
        item.end = range.end;
      }
    }

    return item;
  }
  /*  */

  /**
   * Cross-platform code generation for component v-model
   */


  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;
    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;

    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }

    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var assignment = genAssignmentCode(value, valueExpression);
    el.model = {
      value: "(" + value + ")",
      expression: JSON.stringify(value),
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }
  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */


  function genAssignmentCode(value, assignment) {
    var res = parseModel(value);

    if (res.key === null) {
      return value + "=" + assignment;
    } else {
      return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
    }
  }
  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */


  var len, str, chr, index$1, expressionPos, expressionEndPos;

  function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');

      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        };
      } else {
        return {
          exp: val,
          key: null
        };
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */

      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;

    while (!eof()) {
      chr = next();

      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }

      if (chr === 0x5B) {
        inBracket++;
      }

      if (chr === 0x5D) {
        inBracket--;
      }

      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;

    while (!eof()) {
      chr = next();

      if (chr === stringQuote) {
        break;
      }
    }
  }
  /*  */


  var warn$1; // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.

  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;
    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers); // component v-model doesn't need extra runtime

      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
    } // ensure runtime directive metadata


    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, '$$a.concat([$$v])') + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') + ")}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";
    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type; // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type

    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];

      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
      }
    }
    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
    var valueExpression = '$event.target.value';

    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }

    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);

    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);

    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }
  /*  */
  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.


  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    } // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4

    /* istanbul ignore if */


    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1(event, handler, capture) {
    var _target = target$1; // save current target element in closure

    return function onceHandler() {
      var res = handler.apply(null, arguments);

      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  } // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.


  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;

      handler = original._wrapper = function (e) {
        if ( // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget || // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document) {
          return original.apply(this, arguments);
        }
      };
    }

    target$1.addEventListener(name, handler, supportsPassive ? {
      capture: capture,
      passive: passive
    } : capture);
  }

  function remove$2(name, handler, capture, _target) {
    (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }

    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };
  /*  */

  var svgContainer;

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }

    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key]; // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)

      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }

        if (cur === oldProps[key]) {
          continue;
        } // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property


        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur; // avoid resetting cursor position when value is the same

        var strCur = isUndef(cur) ? '' : String(cur);

        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;

        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }

        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if ( // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  } // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true; // #6157
    // work around IE bug when accessing document.activeElement in an iframe

    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}

    return notInFocus && elm.value !== checkVal;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime

    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal);
      }

      if (modifiers.trim) {
        return value.trim() !== newVal.trim();
      }
    }

    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };
  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  }); // merge static and dynamic style data on the same vnode

  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it

    return data.staticStyle ? extend(data.staticStyle, style) : style;
  } // normalize possible array / string values into Object


  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }

    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }

    return bindingStyle;
  }
  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */


  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;

      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;

        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;

    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }

    return res;
  }
  /*  */


  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;

  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);

      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];
  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);

    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }

    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

    var oldStyle = oldStaticStyle || oldStyleBinding;
    var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.

    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }

    for (name in newStyle) {
      cur = newStyle[name];

      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };
  /*  */

  var whitespaceRE = /\s+/;
  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */

  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }
    /* istanbul ignore else */


    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";

      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }
  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */


  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }
    /* istanbul ignore else */


    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }

      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';

      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }

      cur = cur.trim();

      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }
  /*  */


  function resolveTransition(def$$1) {
    if (!def$$1) {
      return;
    }
    /* istanbul ignore else */


    if (_typeof(def$$1) === 'object') {
      var res = {};

      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }

      extend(res, def$$1);
      return res;
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });
  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation'; // Transition property/event sniffing

  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';

  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }

    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  } // binding to window is necessary to make hot reload work in IE in strict mode


  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
  /* istanbul ignore next */
  function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }

    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;

    if (!type) {
      return cb();
    }

    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;

    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };

    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };

    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);
    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */

    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }

    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  } // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors


  function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
  }
  /*  */


  function enter(vnode, toggleDisplay) {
    var el = vnode.elm; // call leave callback now

    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;

      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (isUndef(data)) {
      return;
    }
    /* istanbul ignore if */


    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration; // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.

    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;

    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);
    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }

        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }

      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];

        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }

        enterHook && enterHook(el, cb);
      });
    } // start enter transition


    beforeEnterHook && beforeEnterHook(el);

    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);

        if (!cb.cancelled) {
          addTransitionClass(el, toClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm; // call enter callback now

    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;

      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);

    if (isUndef(data) || el.nodeType !== 1) {
      return rm();
    }
    /* istanbul ignore if */


    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);
    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }

      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }

      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }

        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }

      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      } // record leaving element


      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }

      beforeLeave && beforeLeave(el);

      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);

          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);

            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }

      leave && leave(el, cb);

      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  } // only used in dev mode


  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }
  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */


  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }

    var invokerFns = fn.fns;

    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};
  var platformModules = [attrs, klass, events, domProps, style, transition];
  /*  */
  // the directive module should be applied last, after all
  // built-in modules have been applied.

  var modules = platformModules.concat(baseModules);
  var patch = createPatchFunction({
    nodeOps: nodeOps,
    modules: modules
  });
  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */

  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;

      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }

        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;

        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.

          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */

          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.

        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);

        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */

    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;

    if (isMultiple && !Array.isArray(value)) {
      warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }

    var selected, option;

    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];

      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;

        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }

          return;
        }
      }
    }

    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }

    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }
  /*  */
  // recursively search for possible transition defined inside the component root


  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },
    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;
      /* istanbul ignore if */

      if (!value === !oldValue) {
        return;
      }

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;

      if (transition$$1) {
        vnode.data.show = true;

        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },
    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };
  var platformDirectives = {
    model: directive,
    show: show
  };
  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  }; // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered

  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;

    if (compOptions && compOptions.Ctor.options["abstract"]) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options; // props

    for (var key in options.propsData) {
      data[key] = comp[key];
    } // events.
    // extract listeners and pass them directly to the transition methods


    var listeners = options._parentListeners;

    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }

    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var isNotTextNode = function isNotTextNode(c) {
    return c.tag || isAsyncPlaceholder(c);
  };

  var isVShowDirective = function isVShowDirective(d) {
    return d.name === 'show';
  };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    "abstract": true,
    render: function render(h) {
      var this$1 = this;
      var children = this.$slots["default"];

      if (!children) {
        return;
      } // filter out text nodes (possible whitespaces)


      children = children.filter(isNotTextNode);
      /* istanbul ignore if */

      if (!children.length) {
        return;
      } // warn multiple elements


      if (children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode; // warn invalid mode

      if (mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0]; // if this is a component root node and the component's
      // parent container node also has transition, skip.

      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      } // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive


      var child = getRealChild(rawChild);
      /* istanbul ignore if */

      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      } // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.


      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild); // mark v-show
      // so that the transition module can hand over the control to the directive

      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }

          var delayedLeave;

          var performLeave = function performLeave() {
            delayedLeave();
          };

          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };
  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);
  delete props.mode;
  var TransitionGroup = {
    props: props,
    beforeMount: function beforeMount() {
      var this$1 = this;
      var update = this._update;

      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

        this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
        );

        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },
    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots["default"] || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];

        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;
            (c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];

        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();

          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }

        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },
    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';

      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation); // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line

      this._reflow = document.body.offsetHeight;
      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (e && e.target !== el) {
              return;
            }

            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },
    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */


        if (this._hasMove) {
          return this._hasMove;
        } // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.


        var clone = el.cloneNode();

        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }

        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */


    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;

    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };
  /*  */
  // install platform specific utils

  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents); // install platform patch function

  Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

  Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  }; // devtools global hook

  /* istanbul ignore next */


  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
        }
      }

      if (config.productionTip !== false && typeof console !== 'undefined') {
        console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
      }
    }, 0);
  }
  /*  */


  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;

    if (!tagRE.test(text)) {
      return;
    }

    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;

    while (match = tagRE.exec(text)) {
      index = match.index; // push text token

      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      } // tag token


      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      rawTokens.push({
        '@binding': exp
      });
      lastIndex = index + match[0].length;
    }

    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }

    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    };
  }
  /*  */


  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');

    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);

      if (res) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
      }
    }

    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }

    var classBinding = getBindingAttr(el, 'class', false
    /* getStatic */
    );

    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var data = '';

    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }

    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }

    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };
  /*  */

  function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');

    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);

        if (res) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false
    /* getStatic */
    );

    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var data = '';

    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }

    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }

    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };
  /*  */

  var decoder;
  var he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    }
  };
  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr'); // Elements that you can, intentionally, leave open
  // (and which close themselves)

  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'); // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content

  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');
  /**
   * Not type-checking this file because it's mostly vendor code.
   */
  // Regular Expressions for parsing tags and attributes

  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i; // #7298: escape - to avoid being passed as HTML comment when inlined in page

  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/; // Special Elements (can contain anything)

  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};
  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g; // #5992

  var isIgnoreNewlineTag = makeMap('pre,textarea', true);

  var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;

    while (html) {
      last = html; // Make sure we're not in a plaintext content element like script/style

      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');

        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }

              advance(commentEnd + 3);
              continue;
            }
          } // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment


          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          } // Doctype:


          var doctypeMatch = html.match(doctype);

          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          } // End tag:


          var endTagMatch = html.match(endTag);

          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          } // Start tag:


          var startTagMatch = parseStartTag();

          if (startTagMatch) {
            handleStartTag(startTagMatch);

            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }

            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;

        if (textEnd >= 0) {
          rest = html.slice(textEnd);

          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);

            if (next < 0) {
              break;
            }

            textEnd += next;
            rest = html.slice(textEnd);
          }

          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;

          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }

          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }

          if (options.chars) {
            options.chars(text);
          }

          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);

        if (!stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"", {
            start: index + html.length
          });
        }

        break;
      }
    } // Clean up any remaining tags


    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);

      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;

        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }

        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }

        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;
      var l = match.attrs.length;
      var attrs = new Array(l);

      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };

        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({
          tag: tagName,
          lowerCasedTag: tagName.toLowerCase(),
          attrs: attrs,
          start: match.start,
          end: match.end
        });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;

      if (start == null) {
        start = index;
      }

      if (end == null) {
        end = index;
      } // Find the closest opened tag of the same type


      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();

        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.", {
              start: stack[i].start,
              end: stack[i].end
            });
          }

          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        } // Remove the open elements from the stack


        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }

        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }
  /*  */


  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:|^#/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;
  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
  var slotRE = /^v-slot(:|$)|^#/;
  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;
  var invalidAttributeRE = /[\s"'<>\/=]/;
  var decodeHTMLCached = cached(he.decode);
  var emptySlotScopeToken = "_empty_"; // configurable state

  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement(tag, attrs, parent) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    };
  }
  /**
   * Convert HTML string to AST.
   */


  function parse(template, options) {
    warn$2 = options.warn || baseWarn;
    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;

    maybeComponent = function maybeComponent(el) {
      return !!el.component || !isReservedTag(el.tag);
    };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    delimiters = options.delimiters;
    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement(element) {
      trimEndingWhitespace(element);

      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      } // tree management


      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root["if"] && (element.elseif || element["else"])) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", {
            start: element.start
          });
        }
      }

      if (currentParent && !element.forbidden) {
        if (element.elseif || element["else"]) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"';
            (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }

          currentParent.children.push(element);
          element.parent = currentParent;
        }
      } // final children cleanup
      // filter out scoped slots


      element.children = element.children.filter(function (c) {
        return !c.slotScope;
      }); // remove trailing whitespace node again

      trimEndingWhitespace(element); // check pre state

      if (element.pre) {
        inVPre = false;
      }

      if (platformIsPreTag(element.tag)) {
        inPre = false;
      } // apply post-transforms


      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace(el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;

        while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === ' ') {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints(el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.', {
          start: el.start
        });
      }

      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.', el.rawAttrsMap['v-for']);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start(tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag); // handle IE svg bug

        /* istanbul ignore if */

        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);

        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated;
            }, {});
          }

          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              });
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.', {
            start: element.start
          });
        } // apply pre-transforms


        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);

          if (element.pre) {
            inVPre = true;
          }
        }

        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }

        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },
      end: function end(tag, start, end$1) {
        var element = stack[stack.length - 1]; // pop stack

        stack.length -= 1;
        currentParent = stack[stack.length - 1];

        if (options.outputSourceRange) {
          element.end = end$1;
        }

        closeElement(element);
      },
      chars: function chars(text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.', {
                start: start
              });
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.", {
                start: start
              });
            }
          }
          return;
        } // IE textarea placeholder bug

        /* istanbul ignore if */


        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }

        var children = currentParent.children;

        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }

        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }

          var res;
          var child;

          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }

          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }

            children.push(child);
          }
        }
      },
      comment: function comment(text, start, end) {
        // adding anything as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };

          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }

          currentParent.children.push(child);
        }
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var list = el.attrsList;
    var len = list.length;

    if (len) {
      var attrs = el.attrs = new Array(len);

      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };

        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    processKey(element); // determine whether this is a plain element after
    // removing structural attributes

    element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);

    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }

    processAttrs(element);
    return element;
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');

    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
        }

        if (el["for"]) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;

          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true
            /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');

    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;

    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var res = parseFor(exp);

      if (res) {
        extend(el, res);
      } else {
        warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap['v-for']);
      }
    }
  }

  function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);

    if (!inMatch) {
      return;
    }

    var res = {};
    res["for"] = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);

    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }

    return res;
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');

    if (exp) {
      el["if"] = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el["else"] = true;
      }

      var elseif = getAndRemoveAttr(el, 'v-else-if');

      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);

    if (prev && prev["if"]) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
    }
  }

  function findPrevElement(children) {
    var i = children.length;

    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if (children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.", children[i]);
        }

        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }

    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');

    if (once$$1 != null) {
      el.once = true;
    }
  } // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">


  function processSlotContent(el) {
    var slotScope;

    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */

      if (slotScope) {
        warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap['scope'], true);
      }

      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
      }

      el.slotScope = slotScope;
    } // slot="xxx"


    var slotTarget = getBindingAttr(el, 'slot');

    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']); // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.

      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    } // 2.6 v-slot syntax


    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);

        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }

            if (el.parent && !maybeComponent(el.parent)) {
              warn$2("<template v-slot> can only appear at the root level inside " + "the receiving component", el);
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);

        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
            }

            if (el.slotScope || el.slotTarget) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }

            if (el.scopedSlots) {
              warn$2("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", slotBinding$1);
            }
          } // add the component's children to its default slot

          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true;
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken; // remove children as they are returned from scopedSlots now

          el.children = []; // mark el non-plain so data gets generated

          el.plain = false;
        }
      }
    }
  }

  function getSlotName(binding) {
    var name = binding.name.replace(slotRE, '');

    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2("v-slot shorthand syntax requires a slot name.", binding);
      }
    }

    return dynamicArgRE.test(name) // dynamic [name]
    ? {
      name: name.slice(1, -1),
      dynamic: true
    } // static name
    : {
      name: "\"" + name + "\"",
      dynamic: false
    };
  } // handle <slot/> outlets


  function processSlotOutlet(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');

      if (el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
      }
    }
  }

  function processComponent(el) {
    var binding;

    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }

    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;

    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;

      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true; // modifiers

        modifiers = parseModifiers(name.replace(dirRE, '')); // support .foo shorthand syntax for the .prop modifier

        if (modifiers) {
          name = name.replace(modifierRE, '');
        }

        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);

          if (isDynamic) {
            name = name.slice(1, -1);
          }

          if (value.trim().length === 0) {
            warn$2("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"");
          }

          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);

              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }

            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }

            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");

              if (!isDynamic) {
                addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);

                if (hyphenate(name) !== camelize(name)) {
                  addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
                }
              } else {
                // handler w/ dynamic event name
                addHandler(el, "\"update:\"+(" + name + ")", syncGen, null, false, warn$2, list[i], true // dynamic
                );
              }
            }
          }

          if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);

          if (isDynamic) {
            name = name.slice(1, -1);
          }

          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else {
          // normal directives
          name = name.replace(dirRE, ''); // parse arg

          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;

          if (arg) {
            name = name.slice(0, -(arg.length + 1));

            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }

          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);

          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);

          if (res) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]); // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation

        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor(el) {
    var parent = el;

    while (parent) {
      if (parent["for"] !== undefined) {
        return true;
      }

      parent = parent.parent;
    }

    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);

    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};

    for (var i = 0, l = attrs.length; i < l; i++) {
      if (map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }

      map[attrs[i].name] = attrs[i].value;
    }

    return map;
  } // for script (e.g. type="x/template") or style, do not decode content


  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;
  /* istanbul ignore next */

  function guardIESVGBug(attrs) {
    var res = [];

    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];

      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }

    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;

    while (_el) {
      if (_el["for"] && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
      }

      _el = _el.parent;
    }
  }
  /*  */


  function preTransformNode(el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;

      if (!map['v-model']) {
        return;
      }

      var typeBinding;

      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }

      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + map['v-bind'] + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true); // 1. checkbox

        var branch0 = cloneASTElement(el); // process for on the main node

        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed

        branch0["if"] = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0["if"],
          block: branch0
        }); // 2. add radio else-if condition

        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        }); // 3. other

        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0["else"] = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0;
      }
    }
  }

  function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };
  var modules$1 = [klass$1, style$1, model$1];
  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")", dir);
    }
  }
  /*  */


  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")", dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };
  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };
  /*  */

  var isStaticKey;
  var isPlatformReservedTag;
  var genStaticKeysCached = cached(genStaticKeys$1);
  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */

  function optimize(root, options) {
    if (!root) {
      return;
    }

    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no; // first pass: mark all non-static nodes.

    markStatic$1(root); // second pass: mark static roots.

    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node["static"] = isStatic(node);

    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }

      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);

        if (!child["static"]) {
          node["static"] = false;
        }
      }

      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);

          if (!block["static"]) {
            node["static"] = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node["static"] || node.once) {
        node.staticInFor = isInFor;
      } // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.


      if (node["static"] && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }

      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node["for"]);
        }
      }

      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }

    if (node.type === 3) {
      // text
      return true;
    }

    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node["if"] && !node["for"] && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;

      if (node.tag !== 'template') {
        return false;
      }

      if (node["for"]) {
        return true;
      }
    }

    return false;
  }
  /*  */


  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/; // KeyboardEvent.keyCode aliases

  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  }; // KeyboardEvent.key aliases

  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  }; // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once

  var genGuard = function genGuard(condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";

    for (var name in events) {
      var handlerCode = genHandler(events[name]);

      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }

    staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";

    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
    } else {
      return prefix + staticHandlers;
    }
  }

  function genHandler(handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value;
      }

      return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];

      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key]; // left/right

          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event." + keyModifier + "Key";
          }).join('||'));
        } else {
          keys.push(key);
        }
      }

      if (keys.length) {
        code += genKeyFilter(keys);
      } // Make sure modifiers like prevent and stop get executed after key filtering


      if (genModifierCode) {
        code += genModifierCode;
      }

      var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value;
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return (// make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join('&&') + ")return null;"
    );
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);

    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }

    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + "," + "$event.key," + "" + JSON.stringify(keyName) + ")";
  }
  /*  */


  function on(el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }

    el.wrapListeners = function (code) {
      return "_g(" + code + "," + dir.value + ")";
    };
  }
  /*  */


  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
    };
  }
  /*  */


  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };
  /*  */

  var CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;

    this.maybeComponent = function (el) {
      return !!el.component || !isReservedTag(el.tag);
    };

    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };

  function generate(ast, options) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    };
  }

  function genElement(el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el["for"] && !el.forProcessed) {
      return genFor(el, state);
    } else if (el["if"] && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    } else {
      // component or element
      var code;

      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;

        if (!el.plain || el.pre && state.maybeComponent(el)) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      } // module transforms


      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }

      return code;
    }
  } // hoist static sub-trees out


  function genStatic(el, state) {
    el.staticProcessed = true; // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.

    var originalPreState = state.pre;

    if (el.pre) {
      state.pre = el.pre;
    }

    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    state.pre = originalPreState;
    return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  } // v-once


  function genOnce(el, state) {
    el.onceProcessed = true;

    if (el["if"] && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;

      while (parent) {
        if (parent["for"]) {
          key = parent.key;
          break;
        }

        parent = parent.parent;
      }

      if (!key) {
        state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
        return genElement(el, state);
      }

      return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
    } else {
      return genStatic(el, state);
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion

    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    var condition = conditions.shift();

    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
    } else {
      return "" + genTernaryExp(condition.block);
    } // v-if with v-once should generate code like (a)?_m(0):_m(1)


    function genTernaryExp(el) {
      return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var exp = el["for"];
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if (state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true
      /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion

    return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
  }

  function genData$2(el, state) {
    var data = '{'; // directives first.
    // directives may mutate the el's other properties before they are generated.

    var dirs = genDirectives(el, state);

    if (dirs) {
      data += dirs + ',';
    } // key


    if (el.key) {
      data += "key:" + el.key + ",";
    } // ref


    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }

    if (el.refInFor) {
      data += "refInFor:true,";
    } // pre


    if (el.pre) {
      data += "pre:true,";
    } // record original tag name for components using "is" attribute


    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    } // module data generation functions


    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    } // attributes


    if (el.attrs) {
      data += "attrs:" + genProps(el.attrs) + ",";
    } // DOM props


    if (el.props) {
      data += "domProps:" + genProps(el.props) + ",";
    } // event handlers


    if (el.events) {
      data += genHandlers(el.events, false) + ",";
    }

    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true) + ",";
    } // slot target
    // only for non-scoped slots


    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    } // scoped slots


    if (el.scopedSlots) {
      data += genScopedSlots(el, el.scopedSlots, state) + ",";
    } // component v-model


    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    } // inline-template


    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);

      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }

    data = data.replace(/,$/, '') + '}'; // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.

    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + el.tag + "\"," + genProps(el.dynamicAttrs) + ")";
    } // v-bind data wrap


    if (el.wrapData) {
      data = el.wrapData(data);
    } // v-on data wrap


    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }

    return data;
  }

  function genDirectives(el, state) {
    var dirs = el.directives;

    if (!dirs) {
      return;
    }

    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;

    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];

      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }

      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : "\"" + dir.arg + "\"") : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }

    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    var ast = el.children[0];

    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn('Inline-template components must have exactly one child element.', {
        start: el.start
      });
    }

    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(el, slots, state) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el["for"] || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return slot.slotTargetDynamic || slot["if"] || slot["for"] || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      ;
    }); // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.

    var needsKey = !!el["if"]; // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.

    if (!needsForceUpdate) {
      var parent = el.parent;

      while (parent) {
        if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent["for"]) {
          needsForceUpdate = true;
          break;
        }

        if (parent["if"]) {
          needsKey = true;
        }

        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots).map(function (key) {
      return genScopedSlot(slots[key], state);
    }).join(',');
    return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;

    while (i) {
      hash = hash * 33 ^ str.charCodeAt(--i);
    }

    return hash >>> 0;
  }

  function containsSlotChild(el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true;
      }

      return el.children.some(containsSlotChild);
    }

    return false;
  }

  function genScopedSlot(el, state) {
    var isLegacySyntax = el.attrsMap['slot-scope'];

    if (el["if"] && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null");
    }

    if (el["for"] && !el.forProcessed) {
      return genFor(el, state, genScopedSlot);
    }

    var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
    var fn = "function(" + slotScope + "){" + "return " + (el.tag === 'template' ? el["if"] && isLegacySyntax ? "(" + el["if"] + ")?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}"; // reverse proxy v-slot without scope on this.$slots

    var reverseProxy = slotScope ? "" : ",proxy:true";
    return "{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}";
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;

    if (children.length) {
      var el$1 = children[0]; // optimize single v-for

      if (children.length === 1 && el$1["for"] && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
        return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
      }

      var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return "[" + children.map(function (c) {
        return gen(c, state);
      }).join(',') + "]" + (normalizationType$1 ? "," + normalizationType$1 : '');
    }
  } // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed


  function getNormalizationType(children, maybeComponent) {
    var res = 0;

    for (var i = 0; i < children.length; i++) {
      var el = children[i];

      if (el.type !== 1) {
        continue;
      }

      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }

      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }

    return res;
  }

  function needsNormalization(el) {
    return el["for"] !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    } else if (node.type === 3 && node.isComment) {
      return genComment(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
  }

  function genComment(comment) {
    return "_e(" + JSON.stringify(comment.text) + ")";
  }

  function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) {
      return {
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      };
    })) : null;
    var bind$$1 = el.attrsMap['v-bind'];

    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }

    if (attrs) {
      res += "," + attrs;
    }

    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }

    return res + ')';
  } // componentName is el.component, take it as argument to shun flow's pessimistic refinement


  function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var staticProps = "";
    var dynamicProps = "";

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);

      if (prop.dynamic) {
        dynamicProps += prop.name + "," + value + ",";
      } else {
        staticProps += "\"" + prop.name + "\":" + value + ",";
      }
    }

    staticProps = "{" + staticProps.slice(0, -1) + "}";

    if (dynamicProps) {
      return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
    } else {
      return staticProps;
    }
  } // #3895, #4268


  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  /*  */
  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed


  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b'); // these unary operators should not be used as property/method names

  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)'); // strip strings in expressions

  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g; // detect problematic expressions in a template

  function detectErrors(ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode(node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];

          if (value) {
            var range = node.rawAttrsMap[name];

            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", warn, range);
            } else if (name === 'v-slot' || name[0] === '#') {
              checkFunctionParameterExpression(value, name + "=\"" + value + "\"", warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", warn, range);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", warn, range);
            }
          }
        }
      }

      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent(exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);

    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
      warn("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim(), range);
    }

    checkExpression(exp, text, warn, range);
  }

  function checkFor(node, text, warn, range) {
    checkExpression(node["for"] || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier(ident, type, text, warn, range) {
    if (typeof ident === 'string') {
      try {
        new Function("var " + ident + "=_");
      } catch (e) {
        warn("invalid " + type + " \"" + ident + "\" in expression: " + text.trim(), range);
      }
    }
  }

  function checkExpression(exp, text, warn, range) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

      if (keywordMatch) {
        warn("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim(), range);
      } else {
        warn("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
      }
    }
  }

  function checkFunctionParameterExpression(exp, text, warn, range) {
    try {
      new Function(exp, '');
    } catch (e) {
      warn("invalid function parameter expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
    }
  }
  /*  */


  var range = 2;

  function generateCodeFrame(source, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = source.length;
    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];

    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;

      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) {
            continue;
          }

          res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
          var lineLength = lines[j].length;

          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }

            count += lineLength + 1;
          }
        }

        break;
      }
    }

    return res.join('\n');
  }

  function repeat$1(str, n) {
    var result = '';

    if (n > 0) {
      while (true) {
        // eslint-disable-line
        if (n & 1) {
          result += str;
        }

        n >>>= 1;

        if (n <= 0) {
          break;
        }

        str += str;
      }
    }

    return result;
  }
  /*  */


  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({
        err: err,
        code: code
      });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);
    return function compileToFunctions(template, options, vm) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;
      /* istanbul ignore if */

      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      } // check cache

      var key = options.delimiters ? String(options.delimiters) + template : template;

      if (cache[key]) {
        return cache[key];
      } // compile


      var compiled = compile(template, options); // check compilation errors/tips

      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
            });
          } else {
            warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
              return "- " + e;
            }).join('\n') + '\n', vm);
          }
        }

        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) {
              return tip(e.msg, vm);
            });
          } else {
            compiled.tips.forEach(function (msg) {
              return tip(msg, vm);
            });
          }
        }
      } // turn code into functions

      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors);
      }); // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use

      /* istanbul ignore if */

      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;
            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }
      return cache[key] = res;
    };
  }
  /*  */


  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(template, options) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function warn(msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function warn(msg, range, tip) {
              var data = {
                msg: msg
              };

              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }

                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }

              (tip ? tips : errors).push(data);
            };
          } // merge custom modules


          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          } // merge custom directives


          if (options.directives) {
            finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
          } // copy other options


          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;
        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      };
    };
  }
  /*  */
  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.


  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);

    if (options.optimize !== false) {
      optimize(ast, options);
    }

    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  });
  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;
  /*  */
  // check whether current browser encodes a char inside attribute values

  var div;

  function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
  } // #3663: IE encodes newlines inside attribute values while other browsers don't


  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false; // #6828: chrome encodes content in a[href]

  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });
  var mount = Vue.prototype.$mount;

  Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);
    /* istanbul ignore if */

    if (el === document.body || el === document.documentElement) {
      warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options; // resolve template/el and convert to render function

    if (!options.render) {
      var template = options.template;

      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */

            if (!template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }

      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        /* istanbul ignore if */

        if (config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }

    return mount.call(this, el, hydrating);
  };
  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */


  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue.compile = compileToFunctions;
  return Vue;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ })

/******/ });