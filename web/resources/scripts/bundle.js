(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slideIn = _interopRequireDefault(require("./modules/slide-in"));

var _randomLetters = _interopRequireDefault(require("./modules/random-letters"));

document.addEventListener("DOMContentLoaded", function () {
  var slideInText = new _slideIn.default();
  var randomLetters = new _randomLetters.default('#wrapper-16 p');
});

},{"./modules/random-letters":2,"./modules/slide-in":3,"@babel/runtime/helpers/interopRequireDefault":7}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var RandomLetters =
/*#__PURE__*/
function () {
  function RandomLetters(querySelector) {
    (0, _classCallCheck2.default)(this, RandomLetters);
    this.textWrapper = document.querySelector(querySelector);
    this.querySelector = querySelector;
    this.modifyText();
    this.animateText();
  }

  (0, _createClass2.default)(RandomLetters, [{
    key: "modifyText",
    value: function modifyText() {
      var new_text = (0, _toConsumableArray2.default)(this.textWrapper.innerText).map(function (e) {
        return e != ' ' ? "<span style=\"visibility: hidden\">".concat(e, "</span>") : ' ';
      });
      new_text = new_text.toString().replace(/,/g, '');
      this.textWrapper.innerHTML = new_text;
    }
  }, {
    key: "animateText",
    value: function animateText() {
      var letters = document.querySelectorAll("".concat(this.querySelector, " span"));
      var lettersArray = (0, _toConsumableArray2.default)(letters);
      this.shuffle(lettersArray);
      lettersArray.forEach(function (e) {
        var delayTime = Math.random() * (3 - 1) + 1;
        setTimeout(function () {
          e.style.visibility = '';
        }, delayTime * 1000);
      });
    }
  }, {
    key: "shuffle",
    value: function shuffle(array) {
      for (var i = array.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        var _ref = [array[j], array[i - 1]];
        array[i - 1] = _ref[0];
        array[j] = _ref[1];
      }
    }
  }]);
  return RandomLetters;
}();

exports.default = RandomLetters;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/toConsumableArray":10}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var SlideIn =
/*#__PURE__*/
function () {
  function SlideIn() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, SlideIn);
    this.slideWrapper = document.getElementsByClassName(settings.slideWrapper || 'slide-in-wrapper')[0];
    this.slideText = document.getElementsByClassName(settings.slideText || 'slide-in-text-inner')[0];
    this.slideFill = document.getElementsByClassName(settings.slideFill || 'slide-in-fill');
    this.slideAnimate = document.getElementsByClassName(settings.slideAnimate || 'slide-in-animate')[0];
    this.slideElement = document.getElementsByClassName(this.slideText)[0];
    this.setStyles();
    this.events();
  }

  (0, _createClass2.default)(SlideIn, [{
    key: "setStyles",
    value: function setStyles() {
      this.slideFill[0].style.width = "".concat((this.slideWrapper.offsetWidth - this.slideText.offsetWidth) / 2, "px");
      this.slideFill[1].style.width = "".concat((this.slideWrapper.offsetWidth - this.slideText.offsetWidth) / 2, "px");
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      var resizeTimer;
      window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          _this.slideFill[0].style.width = "".concat((_this.slideWrapper.offsetWidth - _this.slideText.offsetWidth) / 2, "px");
          _this.slideFill[1].style.width = "".concat((_this.slideWrapper.offsetWidth - _this.slideText.offsetWidth) / 2, "px");
        }, 250);
      });
    }
  }]);
  return SlideIn;
}();

exports.default = SlideIn;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":6,"@babel/runtime/helpers/interopRequireDefault":7}],4:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],6:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],7:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],8:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],9:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],10:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":4,"./iterableToArray":8,"./nonIterableSpread":9}]},{},[1]);
