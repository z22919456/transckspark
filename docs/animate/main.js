/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(14);
	module.exports = __webpack_require__(18);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import 'points';

	var _message = __webpack_require__(2);

	var _flock = __webpack_require__(3);

	var _flock2 = _interopRequireDefault(_flock);

	var _rafLoop = __webpack_require__(8);

	var _rafLoop2 = _interopRequireDefault(_rafLoop);

	var _drawLinks = __webpack_require__(9);

	var _drawLinks2 = _interopRequireDefault(_drawLinks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var width = void 0,
	    height = void 0,
	    flock = void 0,
	    elements = void 0,
	    containerEl = void 0;
	onResize();
	initializeElements();
	_rafLoop2.default.add(tick);
	window.addEventListener('resize', onResize);

	function initializeElements() {
	  containerEl = document.createElement('div');
	  containerEl.className = 'container hidden';
	  document.body.appendChild(containerEl);

	  elements = flock.boids.map(function (boid, index) {
	    var el = document.createElement('div');
	    el.innerHTML = boid.name;
	    el.className = 'title' + (boid.type ? ' work' : '');
	    // Accessing boids by index, because the boids array is updated on resize:
	    el.addEventListener('pointerdown', function () {
	      return (0, _message.redirect)(flock.boids[index].url);
	    });
	    el.addEventListener('pointerenter', function () {
	      return flock.boids[index].velocity.multiplyNum(0.1);
	    });
	    el.addEventListener('pointerleave', function () {
	      return flock.boids[index].velocity.divideNum(0.1);
	    });
	    containerEl.appendChild(el);
	    return el;
	  });

	  addElementsToFlock();
	}

	function tick() {
	  flock.tick();
	  (0, _drawLinks2.default)(flock.boids);

	  flock.boids.forEach(function (boid, index) {
	    var point = boid.averagePosition;
	    var style = elements[index].style;
	    style.transform = style['-webkit-transform'] = 'translate(' + point.x + 'px, ' + point.y + 'px) translate(-50%, -50%)';
	  });
	  // Show elements:
	  containerEl.className = 'container';
	}

	function addElementsToFlock() {
	  flock.boids.forEach(function (boid, index) {
	    var el = elements[index];
	    var bounds = el.getBoundingClientRect();
	    _extends(boid, {
	      el: el,
	      elSize: {
	        width: bounds.width,
	        height: bounds.height
	      },
	      elSizeMargin: {
	        width: bounds.width + 40,
	        height: bounds.height + 40
	      }
	    });
	  });
	}

	function onResize() {
	  width = window.innerWidth;
	  height = window.innerHeight;
	  flock = new _flock2.default(10, [width, height]);
	  if (elements) {
	    addElementsToFlock();
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function postMessage(data) {
	  window.parent.postMessage(JSON.stringify(data), '*');
	}

	function redirect(url) {
	  var onHomepage = /homepage\=1/.test(window.location.search);
	  if (onHomepage) {
	    postMessage({
	      status: 'redirect',
	      domain_path: url
	    });
	  } else {
	    window.parent.location = url;
	  }
	}

	window.addEventListener('message', function (event) {
	  var data = JSON.parse(event.data);
	  // Ignore messages that do not contain the domain_path property:
	  if (!data.domain_path) return;
	});

	// Get unique cover id from url:
	// Tell parent that loading of this iframe is ready
	postMessage({
	  status: 'ready',
	  coverId: window.location.pathname.split('/')[4]
	});

	exports.redirect = redirect;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _point = __webpack_require__(4);

	var _point2 = _interopRequireDefault(_point);

	var _boid2 = __webpack_require__(6);

	var _boid3 = _interopRequireDefault(_boid2);

	var _subjects = __webpack_require__(7);

	var _subjects2 = _interopRequireDefault(_subjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var margin = 30;

	var Flock = function () {
	  function Flock(amount, size) {
	    _classCallCheck(this, Flock);

	    this.boids = [];
	    this.size = _point2.default.fromArray(size);
	    for (var i = 0; i < 7; i++) {
	      var kind = _subjects2.default.pijlers[i % 4];
	      var boid = new _boid3.default({
	        position: new _point2.default((i + 0.5) / 8, 0.25 + (i % 2 ? 0.1 : -0.1)).multiply(this.size.clone().subtractNum(margin * 2)).addNum(margin),
	        maxSpeed: 0.5 + Math.random() / 8,
	        maxForce: 5 + Math.random(),
	        radius: 10,
	        wallMargin: 30
	      });
	      boid.type = kind.work;
	      boid.name = kind.name;
	      boid.url = kind.url;
	      this.boids.push(boid);
	    }
	    for (var _i = 0; _i < 6; _i++) {
	      var _kind = _subjects2.default.disciplines[_i % 3];
	      var _boid = new _boid3.default({
	        position: new _point2.default((_i + 0.5) / 6, 0.75 + (_i % 2 ? 0.1 : -0.1)).multiply(this.size.clone().subtractNum(margin * 2)).addNum(margin),
	        maxSpeed: 0.3 + Math.random() / 8,
	        maxForce: Math.random() / 10 + 0.5,
	        radius: 10,
	        wallMargin: 30
	      });
	      _boid.type = _kind.work;
	      _boid.name = _kind.name;
	      _boid.url = _kind.url;
	      this.boids.push(_boid);
	    }
	  }

	  _createClass(Flock, [{
	    key: 'tick',
	    value: function tick(mousePos) {
	      var _this = this;

	      this.boids.forEach(function (boid) {
	        return boid.tick(_this.boids, _this.size, mousePos);
	      });
	    }
	  }]);

	  return Flock;
	}();

	exports.default = Flock;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = Point;

	var numerical = __webpack_require__(5);

	/**
	 * # Point - A JavaScript 2D point class with methods for common vector operations
	 */

	/**
	 * Constructor.
	 *
	 * ### Examples:
	 *     var point1 = new Point(100, 50);
	 *
	 * @param {Number} x Value of the x coordinate
	 * @param {Number} y Value of the y coordinate
	 * @return {Point}
	 * @api public
	 */
	function Point(x, y) {
	  /**
	   * The X coordinate
	   *
	   * ### Examples:
	   *     var point = new Point(42, 21);
	   *
	   *     point.x;
	   *     // => 42
	   *
	   * @api public
	   */
	  this.x = x || 0;

	  /**
	   * The Y coordinate
	   *
	   * ### Examples:
	   *     var point = new Point(42, 21);
	   *
	   *     point.y;
	   *     // => 21
	   *
	   * @api public
	   */
	  this.y = y || 0;
	}

	/**
	 * # Manipulation
	 *
	 * These functions are chainable.
	 */

	Point.prototype = {
	  /**
	   * Adds another vector to this one
	   *
	   * ### Examples:
	   *     var point1 = new Point(10, 10);
	   *     var point = new Point(20, 30);
	   *
	   *     point1.add(point);
	   *     point1.toString();
	   *     // => x:30, y:40
	   *
	   * @param {Point} vector The other vector you want to add to this one
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  add: function add(point) {
	    this.x += point.x;
	    this.y += point.y;
	    return this;
	  },

	  /**
	   * Sets the x and y coordinates of the point
	   *
	   * ### Examples:
	   *     var point = new Point();
	   *     point.set(10, 10);
	   *
	   *     point1.toString();
	   *     // => x:10, y:10
	   *
	   * @param {Number} x
	   * @param {Number} y
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  set: function set(x, y) {
	    this.x = x;
	    this.y = y;
	    return this;
	  },

	  /**
	   * Adds the given number to both point coordinates
	   *
	   * ### Examples:
	   *     var point = new Point(1, 2);
	   *
	   *     point.addNum(2);
	   *     point.toString();
	   *     // => x: 3, y: 4
	   *
	   * @param {Number} number The number to add
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  addNum: function addNum(number) {
	    this.x += number;
	    this.y += number;
	    return this;
	  },

	  /**
	   * Adds the given number to the X coordinate
	   *
	   * ### Examples:
	   *     var point = new Point(1, 2);
	   *
	   *     point.addX(2);
	   *     point.toString();
	   *     // => x: 3, y: 2
	   *
	   * @param {Number} number The number to add
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  addX: function addX(number) {
	    this.x += number;
	    return this;
	  },

	  /**
	   * Adds the given number to the Y coordinate
	   *
	   * ### Examples:
	   *     var point = new Point(1, 2);
	   *
	   *     point.addY(2);
	   *     point.toString();
	   *     // => x: 1, y: 4
	   *
	   * @param {Number} number The number to add
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  addY: function addY(number) {
	    this.y += number;
	    return this;
	  },

	  /**
	   * Subtracts another vector from this one
	   *
	   * ### Examples:
	   *     var point1 = new Point(100, 50);
	   *     var point = new Point(20, 30);
	   *
	   *     point1.subtract(point);
	   *     point1.toString();
	   *     // => x:80, y:20
	   *
	   * @param {Point} vector The other vector you want subtract from this one
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  subtract: function subtract(point) {
	    this.x -= point.x;
	    this.y -= point.y;
	    return this;
	  },

	  /**
	   * Subtracts the given number from the X and Y coordinates of the point
	   *
	   * ### Examples:
	   *     var point = new Point(100, 200);
	   *
	   *     point.subtractNum(20);
	   *     point.toString();
	   *     // => x: 80, y: 180
	   *
	   * @param {Number} number The number to subtract
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  subtractNum: function subtractNum(number) {
	    this.x -= number;
	    this.y -= number;
	    return this;
	  },

	  /**
	   * Subtracts the given number from the X coordinate
	   *
	   * ### Examples:
	   *     var point = new Point(100, 200);
	   *
	   *     point.subtractX(20);
	   *     point.toString();
	   *     // => x: 80, y: 200
	   *
	   * @param {Number} number The number to subtract
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  subtractX: function subtractX(number) {
	    this.x -= number;
	    return this;
	  },

	  /**
	   * Subtracts the given number from the Y coordinate
	   *
	   * ### Examples:
	   *     var point = new Point(100, 200);
	   *
	   *     point.subtractY(20);
	   *     point.toString();
	   *     // => x: 100, y: 180
	   *
	   * @param {Number} number The number to subtract
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  subtractY: function subtractY(number) {
	    this.y -= number;
	    return this;
	  },

	  /**
	   * Divides X and Y coordinates of the point by those of the given point
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *     var point = new Point(2, 2);
	   *
	   *     point.divide(point);
	   *     point.toString();
	   *     // => x:50, y:25
	   *
	   * @param {Point} vector The vector to divide by
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  divide: function divide(point) {
	    this.x /= point.x;
	    this.y /= point.y;
	    return this;
	  },

	  /**
	   * Divides X and Y coordinates of the point by those of the given number
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *
	   *     point.divideNum(2);
	   *     point.toString();
	   *     // => x:50, y:25
	   *
	   * @param {Number} number The number to divide by
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  divideNum: function divideNum(number) {
	    if (number === 0) {
	      this.x = 0;
	      this.y = 0;
	    } else {
	      this.x /= number;
	      this.y /= number;
	    }

	    return this;
	  },

	  /**
	   * Divides the X coordinate by the given number
	   *
	   * ### Examples:
	   *     var point = new Victor(100, 50);
	   *
	   *     point.divideX(2);
	   *     point.toString();
	   *     // => x:50, y:50
	   *
	   * @param {Number} The number to divide by
	   * @return {Victor} `this` for chaining capabilities
	   * @api public
	   */
	  divideX: function divideX(number) {
	    if (number === 0) {
	      this.x = 0;
	    } else {
	      this.x /= number;
	    }
	    return this;
	  },

	  /**
	   * Divides the Y coordinate by the given number
	   *
	   * ### Examples:
	   *     var point = new Victor(100, 50);
	   *
	   *     point.divideY(2);
	   *     point.toString();
	   *     // => x:100, y:25
	   *
	   * @param {Number} The number to divide by
	   * @return {Victor} `this` for chaining capabilities
	   * @api public
	   */
	  divideY: function divideY(number) {
	    if (number === 0) {
	      this.y = 0;
	    } else {
	      this.y /= number;
	    }
	    return this;
	  },

	  /**
	   * Inverts the X and Y coordinates of the point
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *
	   *     point.invert();
	   *     point.toString();
	   *     // => x:-100, y:-50
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  invert: function invert() {
	    this.x = -this.x;
	    this.y = -this.y;
	    return this;
	  },

	  /**
	   * Inverts the X coordinate
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *
	   *     point.invertX();
	   *     point.toString();
	   *     // => x:-100, y:50
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  invertX: function invertX() {
	    this.x = -this.x;
	    return this;
	  },

	  /**
	   * Inverts the Y coordinate
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *
	   *     point.invertY();
	   *     point.toString();
	   *     // => x:100, y:-50
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  invertY: function invertY() {
	    this.y = -this.y;
	    return this;
	  },

	  /**
	   * Sets the integer remainders of dividing the point by
	   * the supplied point
	   *
	   * ### Examples:
	     * var point = new Point(12, 6);
	     * point.modulo(new Point(5, 2))
	     * console.log(point); // {x: 2, y: 0}
	   *
	   * @param {Point} point
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  modulo: function modulo(point) {
	    this.x = this.x % point.x;
	    this.y = this.y % point.y;
	    return this;
	  },

	  /**
	   * Sets the integer remainders of dividing the point's
	   * coordinates by the supplied number
	   *
	   * ### Examples:
	     * var point = new Point(12, 6);
	     * point.modulo(new Point(5, 2))
	     * console.log(point); // {x: 2, y: 0}
	   *
	   * @param {Point} vector
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  moduloNum: function moduloNum(number) {
	    this.x = this.x % number;
	    this.y = this.y % number;
	    return this;
	  },

	  /**
	   * Sets the integer remainders of dividing the x coordinate by
	   * the supplied number
	   *
	   * ### Examples:
	     * var point = new Point(12, 6);
	     * point.moduloX(5)
	     * console.log(point); // {x: 2, y: 6}
	   *
	   * @param {Point} number
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  moduloX: function moduloX(number) {
	    this.x = this.x % number;
	    return this;
	  },

	  /**
	   * Sets the integer remainders of dividing the y coordinate by
	   * the supplied number
	   *
	   * ### Examples:
	     * var point = new Point(12, 6);
	     * point.moduloY(5)
	     * console.log(point); // {x: 12, y: 1}
	   *
	   * @param {Point} number
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  moduloY: function moduloY(number) {
	    this.y = this.y % number;
	    return this;
	  },

	  /**
	   * Multiplies the X and Y coordinates by coordinates from a given point
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *     var point = new Point(2, 2);
	   *
	   *     point.multiply(point);
	   *     point.toString();
	   *     // => x:200, y:100
	   *
	   * @param {Point} vector The vector to multiply by
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  multiply: function multiply(vector) {
	    this.x *= vector.x;
	    this.y *= vector.y;
	    return this;
	  },

	  /**
	   * Multiplies the X and Y coordinates by the given number
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *
	   *     point.multiplyNum(2);
	   *     point.toString();
	   *     // => x:200, y:100
	   *
	   * @param {Number} number The number to multiply by
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  multiplyNum: function multiplyNum(number) {
	    this.x *= number;
	    this.y *= number;
	    return this;
	  },

	  /**
	   * Multiplies the X coordinate by the given number
	   *
	   * ### Examples:
	   *     var point = new Victor(100, 50);
	   *
	   *     point.multiplyX(2);
	   *     point.toString();
	   *     // => x:200, y:50
	   *
	   * @param {Number} The number to multiply the X coordinate with
	   * @return {Victor} `this` for chaining capabilities
	   * @api public
	   */
	  multiplyX: function multiplyX(number) {
	    this.x *= number;
	    return this;
	  },

	  /**
	   * Multiplies the Y coordinate by the given number
	   *
	   * ### Examples:
	   *     var point = new Victor(100, 50);
	   *
	   *     point.multiplyY(2);
	   *     point.toString();
	   *     // => x:100, y:100
	   *
	   * @param {Number} number The number to multiply the Y coordinate with
	   * @return {Victor} `this` for chaining capabilities
	   * @api public
	   */
	  multiplyY: function multiplyY(number) {
	    this.y *= number;
	    return this;
	  },

	  /**
	   * Normalizes the length of the vector to 1 without
	   * changing its angle. The optional
	   * length parameter defines the length to normalize to.
	   *
	   * @param {Number} length The length of the normalized vector
	   * @return {Point} the normalized vector of the vector that is represented
	   *                 by this point's X and Y coordinates
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  normalize: function normalize(length) {
	    if (length === undefined) length = 1;
	    var current = this.getLength();

	    var scale = current !== 0 ? length / current : 0;
	    this.multiplyNum(scale);

	    return this;
	  },

	  /**
	   * Rounds the X and Y coordinates of the point to an integer value
	   *
	   * ### Examples:
	   *     var point = new Point(100.2, 50.9);
	   *
	   *     point.round();
	   *     point.toString();
	   *     // => x:100, y:51
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  round: function round() {
	    this.x = Math.round(this.x);
	    this.y = Math.round(this.y);
	    return this;
	  },

	  /**
	   * Sets the X and Y coordinates of the point to absolute values
	   *
	   * ### Examples:
	   *     var point = new Point(-100, 100);
	   *
	   *     point.abs();
	   *     point.toString();
	   *     // => x:100, y:100
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  abs: function abs() {
	    this.x = Math.abs(this.x);
	    this.y = Math.abs(this.y);
	    return this;
	  },

	  /**
	   * Sets the X and Y coordinates to the smallest integer greater
	   * than or equal to the given coordinates
	   *
	   * ### Examples:
	   *     var point = new Point(10.3, 10.8);
	   *
	   *     point.ceil();
	   *     point.toString();
	   *     // => x:11, y:11
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  ceil: function ceil() {
	    this.x = Math.ceil(this.x);
	    this.y = Math.ceil(this.y);
	    return this;
	  },

	  /**
	   * Sets the X and Y coordinates to the largest integer less
	   * than or equal to the given coordinates
	   *
	   * ### Examples:
	   *     var point = new Point(10.3, 10.8);
	   *
	   *     point.floor();
	   *     point.toString();
	   *     // => x:10, y:10
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  floor: function floor() {
	    this.x = Math.floor(this.x);
	    this.y = Math.floor(this.y);
	    return this;
	  },

	  /**
	   * Performs a linear blend / interpolation towards another point
	   *
	   * ### Examples:
	   *     var point1 = new Point(100, 100);
	   *     var point = new Point(200, 200);
	   *
	   *     point1.mix(point, 0.5);
	   *     point.toString();
	   *     // => x:150, y:150
	   *
	   * @param {Point} point The other point
	   * @param {Number} amount The blend amount (optional, default: 0.5)
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  mix: function mix(point, amount) {
	    this.x = numerical.mix(this.x, point.x, amount);
	    this.y = numerical.mix(this.y, point.y, amount);
	    return this;
	  },

	  /**
	   * # Products
	   */

	  /**
	   * Creates a clone of this point
	   *
	   * ### Examples:
	   *     var point1 = new Point(10, 10);
	   *     var point = point1.clone();
	   *
	   *     point.toString();
	   *     // => x:10, y:10
	   *
	   * @return {Point} the cloned point
	   * @api public
	   */
	  clone: function clone() {
	    return new Point(this.x, this.y);
	  },

	  /**
	   * Copies another point's X and Y coordinates to its own
	   *
	   * ### Examples:
	   *     var point1 = new Point(10, 10);
	   *     var point = new Point(20, 20);
	   *     point1.copy(point);
	   *
	   *     point1.toString();
	   *     // => x:20, y:20
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  copy: function copy(point) {
	    this.x = point.x;
	    this.y = point.y;
	    return this;
	  },

	  /**
	   * Returns the vector from this point to the supplied point
	   *
	   * ### Examples:
	   *     var point = new Point(10, 10);
	   *     var point1 = new Point(15, 15);
	   *     var vector = point.getVector(point1);
	   *
	   *     vector.toString();
	   *     // => x:5, y:5
	   *
	   * @return {Point} The vector
	   * @api public
	   */
	  getVector: function getVector(point) {
	    return point.clone().subtract(this);
	  },

	  /**
	   * Sets the point to zero (0,0)
	   *
	   * ### Examples:
	   *     var point1 = new Point(10, 10);
	   *     var1.zero();
	   *     point1.toString();
	   *     // => x:0, y:0
	   *
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  zero: function zero() {
	    this.x = this.y = 0;
	    return this;
	  },

	  /**
	   * Calculates the dot product of this vector and another
	   *
	   * ### Examples:
	   *     var point1 = new Point(100, 50);
	   *     var point = new Point(200, 60);
	   *
	   *     point1.dot(point);
	   *     // => 23000
	   *
	   * @param {Point} vector The second vector
	   * @return {Number} the dot product of the two points
	   * @api public
	   */
	  dot: function dot(point) {
	    return this.x * point.x + this.y * point.y;
	  },

	  /**
	   * Returns the cross product of this vector and another
	   *
	   * @param {Point} vector The second vector
	   * @returns {Number} the cross product of the two points
	   */
	  cross: function cross(point) {
	    return this.x * point.y - this.y * point.x;
	  },

	  /**
	   * Projects a vector onto this vector, setting itself to the result.
	   *
	   * ### Examples:
	   *     var point = new Point(100, 0);
	   *     var point = new Point(100, 100);
	   *
	   *     point.project(point);
	   *     point.toString();
	   *     // => x:50, y:50
	   *
	   * @param {Point} vector The other vector you want to project this vector onto
	   * @return {Point} `this` for chaining capabilities
	   * @api public
	   */
	  project: function project(vector) {
	    var coeff = vector.isZero() ? 0 : this.dot(vector) / vector.getLengthSquared();
	    this.x = coeff * vector.x;
	    this.y = coeff * vector.y;
	    return this;
	  },

	  /**
	   * The angle
	   *
	   * ### Examples:
	   *     var point = new Point(10, 0);
	   *
	   *     point.angle;
	   *     // => 90
	   *
	   * @api public
	   */
	  get angle() {
	    return this.getAngle();
	  },

	  getAngle: function getAngle(point) {
	    return numerical.radiansToDegrees(this.getAngleInRadians(point));
	  },

	  getAngleInRadians: function getAngleInRadians(point) {
	    if (!point) {
	      return this.isZero()
	      // Return the preserved angle in case the vector has no
	      // length, and update the internal _angle in case the
	      // vector has a length. See #setAngle() for more
	      // explanations.
	      ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x);
	    } else {
	      var div = this.getLength() * point.getLength();
	      if (numerical.isZero(div)) {
	        return NaN;
	      } else {
	        var a = this.dot(point) / div;
	        return Math.acos(a < -1 ? -1 : a > 1 ? 1 : a);
	      }
	    }
	  },

	  getDirectedAngle: function getDirectedAngle(point) {
	    return Math.atan2(this.cross(point), this.dot(point)) * 180 / Math.PI;
	  },

	  set angle(angle) {
	    this.setAngle(angle);
	  },

	  setAngle: function setAngle(angle) {
	    this.setAngleInRadians(numerical.degreesToRadians(angle));
	    return this;
	  },

	  setAngleInRadians: function setAngleInRadians(angle) {
	    // We store a reference to _angle internally so we still preserve it
	    // when the vector's length is set to zero, and then anything else.
	    // Note that we cannot rely on it if x and y are something else than 0,
	    // since updating x / y does not automatically change _angle!
	    this._angle = angle;
	    console.log(this.isZero());
	    if (!this.isZero()) {
	      var length = this.getLength();
	      this.x = Math.cos(angle) * length;
	      this.y = Math.sin(angle) * length;
	    }
	    return this;
	  },

	  /**
	   * Rotates the point by the given angle around an optional center point.
	   *
	   * @param {Number} angle the rotation angle in radian
	   * @param {Point} center the optional center point of the rotation
	   * @return {Point} `this` for chaining capabilities
	   */
	  rotate: function rotate(angle, center) {
	    if (angle === 0) return this;
	    var radians = numerical.degreesToRadians(angle);
	    var s = Math.sin(radians);
	    var c = Math.cos(radians);
	    var x = this.x;
	    var y = this.y;
	    if (center) {
	      x -= center.x;
	      y -= center.y;
	    }
	    var x1 = x * c - y * s;
	    var y1 = x * s + y * c;
	    if (center) {
	      x1 += center.x;
	      y1 += center.y;
	    }
	    this.x = x1;
	    this.y = y1;
	    return this;
	  },

	  rotateBy: function rotateBy(rotation) {
	    return this.rotate(this.getAngle() + rotation);
	  },

	  /**
	   * Calculates the euclidean distance between this point and another
	   *
	   * ### Examples:
	   *     var point1 = new Point(100, 50);
	   *     var point = new Point(200, 60);
	   *
	   *     point1.distance(point);
	   *     // => 100.4987562112089
	   *
	   * @param {Point} point The second point
	   * @return {Number} Distance
	   * @api public
	   */
	  getDistance: function getDistance(point) {
	    return Math.sqrt(this.getDistanceSquared(point));
	  },

	  /**
	   * Calculates the squared euclidean distance between this point and another
	   *
	   * ### Examples:
	   *     var point1 = new Point(100, 50);
	   *     var point = new Point(200, 60);
	   *
	   *     point1.getDistanceSquared(point);
	   *     // => 10100
	   *
	   * @param {Point} point The second point
	   * @return {Number} Distance
	   * @api public
	   */
	  getDistanceSquared: function getDistanceSquared(point) {
	    var dx = this.x - point.x;
	    var dy = this.y - point.y;
	    return dx * dx + dy * dy;
	  },

	  /**
	   * Calculates the length or magnitude of the point
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *
	   *     point.length();
	   *     // => 111.80339887498948
	   *
	   * @return {Number} Length / Magnitude
	   * @api public
	   */
	  getLength: function getLength() {
	    return Math.sqrt(this.getLengthSquared());
	  },

	  /**
	   * The length of the point
	   *
	   * ### Examples:
	   *     var point = new Point(10, 0);
	   *
	   *     point.length;
	   *     // => 10
	   *
	   * @api public
	   */
	  get length() {
	    return this.getLength();
	  },

	  // double-dog-leg hypothenuse approximation
	  // http://forums.parallax.com/discussion/147522/dog-leg-hypotenuse-approximation
	  getApproximateLength: function getApproximateLength() {
	    var x = Math.abs(this.x);
	    var y = Math.abs(this.y);
	    var lo = Math.min(x, y);
	    var hi = Math.max(x, y);
	    return hi + 3 * lo / 32 + Math.max(0, 2 * lo - hi) / 8 + Math.max(0, 4 * lo - hi) / 16;
	  },

	  /**
	   * Squared length / magnitude
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *
	   *     point.getLengthSquared();
	   *     // => 12500
	   *
	   * @return {Number} Length / Magnitude
	   * @api public
	   */
	  getLengthSquared: function getLengthSquared() {
	    return this.x * this.x + this.y * this.y;
	  },

	  set length(length) {
	    this.setLength(length);
	  },

	  /**
	   * Changes the location of the vector, but keeps it's angle.
	   *
	   * @param {Number} length
	   * @return {Point} `this` for chaining capabilities
	   */
	  setLength: function setLength(length) {
	    if (this.isZero()) {
	      var angle = this._angle || 0;
	      this.x = Math.cos(angle) * length;
	      this.y = Math.sin(angle) * length;
	    } else {
	      var scale = length / this.getLength();
	      this.x = this.x * scale;
	      this.y = this.y * scale;
	    }
	    return this;
	  },

	  /**
	   * Limits the length of the vector, but keeps it's angle.
	   *
	   * @param {Number} length
	   * @return {Point} `this` for chaining capabilities
	   */
	  limitLength: function limitLength(length) {
	    var len = this.getLength();
	    if (len > length) {
	      var scale = length / len;
	      this.x = this.x * scale;
	      this.y = this.y * scale;
	    }
	    return this;
	  },

	  inverse: function inverse() {
	    this.x = 1.0 / this.x;
	    this.y = 1.0 / this.y;
	    return this;
	  },

	  /**
	   * Checks if the point is within a given distance of another point.
	   *
	   * @param {Point} point the point to check against
	   * @param {Number} tolerance the maximum distance allowed
	   * @returns {Boolean} true if it is within the given distance, false otherwise
	   * @api public
	   */
	  isClose: function isClose(point, tolerance) {
	    return this.getDistanceSquared(point) < tolerance * tolerance;
	  },

	  /**
	   * Checks if the vector represented by this point is collinear (parallel) to
	   * another vector.
	   *
	   * @param {Point} point the vector to check against
	   * @returns {Boolean} true if it is colinear
	   */
	  isCollinear: function isCollinear(point) {
	    return numerical.isZero(Math.abs(this.cross(point)));
	  },

	  /**
	   * Checks if the vector represented by this point is orthogonal
	   * (perpendicular) to another vector.
	   *
	   * @param {Point} point the vector to check against
	   * @returns {Boolean} true if it is orthogonal, false otherwise
	   */
	  isOrthogonal: function isOrthogonal(point) {
	    return numerical.isZero(Math.abs(this.dot(point)));
	  },

	  /**
	   * Checks whether the point's X and Y coordinates are both 0
	   *
	   * ### Examples:
	   *     var point = new Point(100, 50);
	   *
	   *     point.isZero();
	   *     // => true
	   *
	   * @return {Boolean}
	   * @api public
	   */
	  isZero: function isZero() {
	    return numerical.isZero(this.x) && numerical.isZero(this.y);
	  },

	  /**
	   * Checks whether the coordinates of the point are equal to that of the
	   * supplied point.
	   *
	   * ### Examples:
	   *     var point1 = new Point(100, 50);
	   *     var point = new Point(100, 50);
	   *
	   *     point1.equals(point);
	   *     // => true
	   *
	   * @return {Boolean} true if the coordinates are equal, false otherwise
	   * @api public
	   */
	  equals: function equals(point) {
	    return this.x === point.x && this.y === point.y;
	  },

	  /**
	   * # Utility Methods
	   */

	  /**
	   * Returns an string representation of the point
	   *
	   * ### Examples:
	   *     var point = new Point(10, 20);
	   *
	   *     point.toString();
	   *     // => x:10, y:20
	   *
	   * @return {String}
	   * @api public
	   */
	  toString: function toString() {
	    return '{ x: ' + numerical.format(this.x) + ', y: ' + numerical.format(this.y) + ' }';
	  },

	  /**
	   * Returns an array representation of the point
	   *
	   * ### Examples:
	   *     var point = new Point(10, 20);
	   *
	   *     point.toArray();
	   *     // => [10, 20]
	   *
	   * @return {Array}
	   * @api public
	   */
	  toArray: function toArray() {
	    return [this.x, this.y];
	  },

	  /**
	   * Returns an object representation of the point
	   *
	   * ### Examples:
	   *     var point = new Point(10, 20);
	   *
	   *     point.toObject();
	   *     // => { x: 10, y: 20 }
	   *
	   * @return {Object}
	   * @api public
	   */
	  toObject: function toObject() {
	    return { x: this.x, y: this.y };
	  }
	};

	Point.prototype.getHorizontalAngle = Point.prototype.getAngle;
	Point.prototype.getHorizontalAngleDeg = Point.prototype.getAngleInDegrees;

	/**
	 * # Static
	 */

	/**
	 * Creates a new instance from an array
	 *
	 * ### Examples:
	 *     var point = Point.fromArray([42, 21]);
	 *
	 *     point.toString();
	 *     // => x:42, y:21
	 *
	 * @name Point.fromArray
	 * @param {Array} array Array with the x and y coordinates at index 0 and 1 respectively
	 * @return {Point} The new instance
	 * @api public
	 */
	Point.fromArray = function (arr) {
	  return new Point(arr[0] || 0, arr[1] || 0);
	};

	/**
	 * Creates a new instance from an object
	 *
	 * ### Examples:
	 *     var point = Point.fromObject({ x: 42, y: 21 });
	 *
	 *     point.toString();
	 *     // => x:42, y:21
	 *
	 * @name Point.fromObject
	 * @param {Object} obj Object with the values for x and y
	 * @return {Point} The new instance
	 * @api public
	 */
	Point.fromObject = function (obj) {
	  return new Point(obj.x || 0, obj.y || 0);
	};

	Point.fromAngleWithLength = function (angle, length) {
	  var point = new Point(length, 0);
	  point.setAngle(angle);
	  return point;
	};

	/**
	 * Generates a random vector between 0 and 360 degrees with the given length,
	 * or a length of 1 if none was provided
	 * 
	 * ### Examples:
	 *     var randomVector = Point.random();
	 *
	 *     point.toString();
	 *     // => x:0.0273982 y: 0.9784389
	 *
	 * @name Point.randomVector
	 * @param scale Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @return {Point} The new instance
	 * @api public
	 */
	Point.randomVector = function (length) {
	  length = length || 1.0;
	  var r = Math.random() * 2.0 * Math.PI;
	  return new Point(Math.cos(r) * length, Math.sin(r) * length);
	};

	/**
	 * Generates a random point with X and Y coordinates between 0 and 1
	 *
	 * ### Examples:
	 *     var randomVector = Point.random();
	 *
	 *     point.toString();
	 *     // => x:0.0273982 y: 0.9784389
	 *
	 * @name Point.random
	 * @return {Point} The new instance
	 * @api public
	 */
	Point.random = function () {
	  return new Point(Math.random(), Math.random());
	};

	/**
	 * Returns a new point object with the smallest x and y of the
	 * supplied points.
	 *
	 * @static
	 * @param {Point} point1
	 * @param {Point} point2
	  *
	 * @name Point.min
	 * @return {Point} The new instance
	 * @api public
	 */
	Point.min = function (point1, point2) {
	  return new Point(Math.min(point1.x, point2.x), Math.min(point1.y, point2.y));
	};

	/**
	 * Returns a new point object with the largest x and y of the
	 * supplied points.
	 *
	 * @static
	 * @param {Point} point1
	 * @param {Point} point2
	  *
	 * @name Point.max
	 * @return {Point} The new instance
	 * @api public
	 */
	Point.max = function (point1, point2) {
	  return new Point(Math.max(point1.x, point2.x), Math.max(point1.y, point2.y));
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	// Precision when comparing against 0
	// References:
	//  http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
	//  http://www.cs.berkeley.edu/~wkahan/Math128/Cubic.pdf
	/**
	 * A very small absolute value used to check if a value is very close to
	 * zero. The value should be large enough to offset any floating point
	 * noise, but small enough to be meaningful in computation in a nominal
	 * range (see MACHINE_EPSILON).
	 */
	var EPSILON = 1e-12;
	var DEGREES = 180 / Math.PI;

	module.exports = {
	  EPSILON: EPSILON,

	  mix: function mix(value1, value2, ratio) {
	    return value1 * (1 - ratio) + value2 * ratio;
	  },

	  radiansToDegrees: function radiansToDegrees(rad) {
	    return rad * DEGREES;
	  },

	  degreesToRadians: function degreesToRadians(deg) {
	    return deg / DEGREES;
	  },

	  format: function format(number) {
	    // It would be nice to use Number#toFixed() instead, but it pads with 0,
	    // unecessarily consuming space.
	    var multiplier = 100000; // Math.pow(10, 5), where 5 is the amount of fractional digits
	    return Math.round(number * multiplier) / multiplier;
	  },

	  isZero: function isZero(number) {
	    return number < EPSILON;
	  }
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _point = __webpack_require__(4);

	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Boid = function () {
	  function Boid(_ref) {
	    var position = _ref.position,
	        maxSpeed = _ref.maxSpeed,
	        maxForce = _ref.maxForce,
	        radius = _ref.radius,
	        wallMargin = _ref.wallMargin;

	    _classCallCheck(this, Boid);

	    this.acceleration = new _point2.default();
	    this.velocity = _point2.default.randomVector();
	    this.position = position.clone();
	    this.averagePosition = position.clone();
	    this.radius = radius;
	    this.maxSpeed = maxSpeed;
	    this.maxSpeedSq = maxSpeed * maxSpeed;
	    this.maxForce = maxForce;
	    this.desiredSeperation = 100 * 100;
	    this.wallMargin = wallMargin || 0;
	  }

	  _createClass(Boid, [{
	    key: 'tick',
	    value: function tick(boids, size) {
	      this.flock(boids);
	      this.update();
	      this.bounceBorder(size);
	    }

	    // We accumulate a new acceleration each time based on three rules

	  }, {
	    key: 'flock',
	    value: function flock(boids) {
	      var separation = this.separationVector(boids);
	      var alignment = this.alignmentVector(boids);
	      var cohesion = this.cohesionVector(boids);

	      separation.multiplyNum(2.0);
	      alignment.multiplyNum(1.0);
	      cohesion.multiplyNum(1.0);

	      this.acceleration.add(separation).add(alignment).add(cohesion);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      // Update velocity
	      this.acceleration.limitLength(this.maxForce);
	      this.velocity.add(this.acceleration).limitLength(this.maxSpeed);
	      this.position.add(this.velocity);
	      this.averagePosition.mix(this.position, 0.2);
	      // Reset acceleration to 0 each cycle
	      this.acceleration.zero();
	    }
	  }, {
	    key: 'predictVectorTo',
	    value: function predictVectorTo(boid) {
	      var lookAheadTime = this.position.getDistanceSquared(boid.position) / this.maxSpeedSq;

	      return boid.velocity.clone().multiplyNum(lookAheadTime);
	    }
	  }, {
	    key: 'pursueBoid',
	    value: function pursueBoid(boid) {
	      var predictedTarget = this.predictVectorTo(boid).add(boid.position);
	      this.arrive(predictedTarget);
	      return this;
	    }
	  }, {
	    key: 'evadeBoid',
	    value: function evadeBoid(boid) {
	      var predictedTarget = this.predictVectorTo(boid).add(boid.position);
	      this.flee(predictedTarget);
	      return this;
	    }
	  }, {
	    key: 'flee',
	    value: function flee(target) {
	      var vector = this.seekVector(target).inverse();
	      this.acceleration.add(vector);
	    }
	  }, {
	    key: 'arrive',
	    value: function arrive(target) {
	      var vector = this.steerVector(target, true);
	      this.acceleration.add(vector);
	    }
	  }, {
	    key: 'bounceBorder',
	    value: function bounceBorder(size) {
	      var position = this.position;
	      var radius = this.radius;
	      if (position.x < radius + this.wallMargin) this.velocity.addX(1);
	      if (position.y < radius + this.wallMargin) this.velocity.addY(1);
	      if (position.x > size.x - radius - this.wallMargin) this.velocity.addX(-1);
	      if (position.y > size.y - radius - this.wallMargin) this.velocity.addY(-1);
	    }
	  }, {
	    key: 'seekVector',
	    value: function seekVector(target) {
	      return this.position.getVector(target).normalize(this.maxSpeed).subtract(this.velocity).limitLength(this.maxForce);
	    }

	    // A method that calculates a steering vector towards a target
	    // Takes a second argument, if true, it slows down as it approaches
	    // the target

	  }, {
	    key: 'steerVector',
	    value: function steerVector(target, slowdown) {
	      var desired = this.position.vector(target);
	      var distance = desired.length;
	      // Two options for desired vector magnitude
	      // (1 -- based on distance, 2 -- maxSpeed)

	      // This damping is somewhat arbitrary:
	      desired.normalize(slowdown && distance < 100 ? this.maxSpeed * (distance / 100) : this.maxSpeed);

	      // Steering = Desired minus Velocity
	      return desired.subtract(this.velocity).limitLength(this.maxForce); // Limit to maximum steering force
	    }
	  }, {
	    key: 'isSame',
	    value: function isSame(boid) {
	      return this.name === boid.name && this.maxForce > boid.maxForce;
	    }

	    // Checks for nearby boids and steers away

	  }, {
	    key: 'separationVector',
	    value: function separationVector(boids) {
	      var sum = new _point2.default();
	      var count = 0;
	      var vector = new _point2.default();
	      // For every boid in the system, check if it's too close
	      for (var i = 0, l = boids.length; i < l; i++) {
	        var other = boids[i];
	        vector.copy(this.position).subtract(other.position);
	        var distance = vector.getLengthSquared();
	        var same = this.isSame(other);
	        if (same && distance < this.desiredSeperation * 2) {
	          this.evadeBoid(other);
	          // If the distance is greater than 0 and less than an arbitrary amount
	          // (0 when you are yourself)
	        } else if (distance > 0 && distance < this.desiredSeperation) {
	          // Calculate vector pointing away from neighbor
	          sum.add(vector.normalize());
	          count++;
	        }
	      }
	      // Average -- divide by how many
	      if (count > 0) sum.divideNum(count);
	      if (!sum.isZero()) {
	        // Implement Reynolds: Steering = Desired - Velocity
	        sum.normalize(this.maxSpeed).subtract(this.velocity).limitLength(this.maxForce);
	      }
	      return sum;
	    }

	    // Alignment
	    // For every nearby boid in the system, calculate the average velocity

	  }, {
	    key: 'alignmentVector',
	    value: function alignmentVector(boids) {
	      var sum = new _point2.default();
	      var count = 0;
	      for (var i = 0, l = boids.length; i < l; i++) {
	        var other = boids[i];
	        var distance = this.position.getDistanceSquared(other.position);
	        if (distance > 0 && distance < this.desiredSeperation) {
	          sum.add(other.velocity);
	          count++;
	        }
	      }

	      if (count > 0) sum.divideNum(count);
	      if (!sum.isZero()) {
	        // Implement Reynolds: Steering = Desired - Velocity
	        sum.normalize(this.maxSpeed).subtract(this.velocity).limitLength(this.maxForce);
	      }
	      return sum;
	    }

	    // Cohesion
	    // For the average location (i.e. center) of all nearby boids,
	    // calculate steering vector towards that location

	  }, {
	    key: 'cohesionVector',
	    value: function cohesionVector(boids) {
	      var sum = new _point2.default();
	      var count = 0;
	      for (var i = 0, l = boids.length; i < l; i++) {
	        var other = boids[i];
	        var distance = this.position.getDistanceSquared(other.position);
	        if (other !== this && distance < this.desiredSeperation) {
	          sum.add(other.position);
	          count++;
	        }
	      }
	      if (count > 0) {
	        sum.divideNum(count);
	        // Steer towards the location
	        return this.seekVector(sum);
	      }
	      return sum;
	    }
	  }]);

	  return Boid;
	}();

	exports.default = Boid;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  disciplines: [{
	    name: '戒嚴',
	    work: true
	  }, {
	    name: '轉型<br/>正義',
	    work: true
	  }, {
	    name: '社會<br/>歧見',
	    work: true
	  }, {
	    name: '中正<br/>紀念堂',
	    work: true
	  }, {
	    name: '紀念碑',
	    work: true
	  }, {
	    name: '歷史<br/>記憶',
	    work: true
	  }],
	  pijlers: [{
	    name: '空間'
	  }, {
	    name: '負面<br/>遺跡'
	  }, {
	    name: '白色<br/>恐怖'
	  }, {
	    name: '想像<br/>的建築'
	  }, {
	    name: '文化<br/>資產'
	  }, {
	    name: '人名<br/>的聲音'
	  }, {
	    name: '民間<br/>力量'
	  }]
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var running = true;
	var looping = false;
	var functions = [];

	function stop() {
	  running = false;
	  return rafLoop;
	}

	function start() {
	  running = true;
	  looping = true;
	  window.requestAnimationFrame(loop);
	  return rafLoop;
	}

	function loop() {
	  functions.forEach(function (func) {
	    return func();
	  });
	  if (running) window.requestAnimationFrame(loop);
	}

	function add(func) {
	  if (!functions) functions = [];
	  functions.push(func);
	  if (running && !looping) start();
	  return rafLoop;
	}

	function remove(func) {
	  var index = functions.indexOf(func);
	  if (index !== -1) functions.splice(index, 1);
	  return rafLoop;
	}

	var rafLoop = { stop: stop, start: start, add: add, remove: remove };

	exports.default = rafLoop;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.default = drawLinks;

	var _canvasFit = __webpack_require__(10);

	var _canvasFit2 = _interopRequireDefault(_canvasFit);

	var _d3Voronoi = __webpack_require__(12);

	var _d3Voronoi2 = _interopRequireDefault(_d3Voronoi);

	var _point = __webpack_require__(4);

	var _point2 = _interopRequireDefault(_point);

	var _lineRectangleCollision = __webpack_require__(13);

	var _lineRectangleCollision2 = _interopRequireDefault(_lineRectangleCollision);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var width = void 0,
	    height = void 0;
	var mouse = void 0;
	var averageMouse = new _point2.default();
	var mouseBoid = {
	  averagePosition: averageMouse,
	  position: averageMouse,
	  elSizeMargin: { width: 80, height: 80 },
	  name: 'mouse',
	  elSize: { width: 100, height: 100 },
	  velocity: new _point2.default(),
	  type: true
	};

	var v = _d3Voronoi2.default.voronoi();
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	var ratio = window.devicePixelRatio || 1;
	document.body.appendChild(canvas);
	document.addEventListener('pointermove', function (event) {
	  var mouseSize = 0;
	  if (mouse) {
	    mouse.set(event.clientX + mouseSize, event.clientY + mouseSize);
	  } else {
	    mouse = new _point2.default(event.clientX + mouseSize, event.clientY + mouseSize);
	    averageMouse.set(mouse.x, mouse.y);
	  }
	});
	document.addEventListener('pointerout', function (event) {
	  mouse = null;
	});

	resizeCanvas();
	window.addEventListener('resize', resizeCanvas);

	function resizeCanvas() {
	  (0, _canvasFit2.default)(canvas, window, ratio);
	  ctx.scale(ratio, ratio);
	  width = canvas.width;
	  height = canvas.height;
	}

	function drawLine(_ref, lineWidth) {
	  var _ref2 = _slicedToArray(_ref, 2),
	      p1 = _ref2[0],
	      p2 = _ref2[1];

	  ctx.lineWidth = lineWidth;
	  ctx.beginPath();
	  ctx.strokeStyle = 'white';
	  ctx.moveTo(p1.x, p1.y);
	  ctx.lineTo(p2.x, p2.y);
	  ctx.stroke();
	}

	function drawLinks(boids) {
	  ctx.clearRect(0, 0, width, height);
	  var lastIndex = boids.length;
	  if (mouse) {
	    averageMouse.mix(mouse, 0.1);
	  }

	  if (mouse) {
	    boids.filter(function (boid) {
	      return boid.averagePosition.isClose(averageMouse, 50);
	    }).forEach(function (boid, index) {
	      return index === 0 && boid.position.mix(averageMouse, 0.05);
	    });
	  }

	  v(boids.map(function (boid) {
	    return boid.position.toArray();
	  }).concat(mouse // if there is a mouse
	  && !boids.some(function (boid) {
	    return boid.averagePosition.isClose(averageMouse, 60);
	  }) // and we aren't too close to a title
	  ? [averageMouse.toArray()] : [])).edges.filter(function (edge) {
	    return edge.right;
	  }).map(function (edge) {
	    var leftIndex = edge.left.index;
	    var rightIndex = edge.right.index;
	    var left = leftIndex === lastIndex ? mouseBoid : boids[leftIndex];
	    var right = rightIndex === lastIndex ? mouseBoid : boids[rightIndex];
	    var combined = [left, right];
	    return combined;
	  }).filter(function (_ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2),
	        a = _ref4[0],
	        b = _ref4[1];

	    var dis = a.averagePosition.getDistanceSquared(b.averagePosition);
	    return a.name !== b.name && dis < height * 70 && dis > 10000;
	  }).map(function (pair) {
	    var _pair = _slicedToArray(pair, 2),
	        a = _pair[0],
	        b = _pair[1];
	    // Don't connect items with the same name:


	    if (a.name === b.name) return;
	    var points = pair.map(function (boid) {
	      return boid.averagePosition;
	    });
	    // Shorten the lines to fit in a rectangle around the title elements:
	    points[0] = (0, _lineRectangleCollision2.default)(points[1], points[0], points[0], a.elSizeMargin);
	    points[1] = (0, _lineRectangleCollision2.default)(points[0], points[1], points[1], b.elSizeMargin);

	    // Make sure none of the lines are crossing titles:
	    var collides = boids.some(function (boid) {
	      return (0, _lineRectangleCollision2.default)(points[0], points[1], boid.averagePosition, boid.elSize);
	    });
	    var sameType = a.type === b.type;
	    if (!collides) {
	      drawLine(points, sameType ? 1 : 8);
	    }
	  });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var size = __webpack_require__(11);

	module.exports = fit;

	var scratch = new Float32Array(2);

	function fit(canvas, parent, scale) {
	  var isSVG = canvas.nodeName.toUpperCase() === 'SVG';

	  canvas.style.position = canvas.style.position || 'absolute';
	  canvas.style.top = 0;
	  canvas.style.left = 0;

	  resize.scale = parseFloat(scale || 1);
	  resize.parent = parent;

	  return resize();

	  function resize() {
	    var p = resize.parent || canvas.parentNode;
	    if (typeof p === 'function') {
	      var dims = p(scratch) || scratch;
	      var width = dims[0];
	      var height = dims[1];
	    } else if (p && p !== document.body) {
	      var psize = size(p);
	      var width = psize[0] | 0;
	      var height = psize[1] | 0;
	    } else {
	      var width = window.innerWidth;
	      var height = window.innerHeight;
	    }

	    if (isSVG) {
	      canvas.setAttribute('width', width * resize.scale + 'px');
	      canvas.setAttribute('height', height * resize.scale + 'px');
	    } else {
	      canvas.width = width * resize.scale;
	      canvas.height = height * resize.scale;
	    }

	    canvas.style.width = width + 'px';
	    canvas.style.height = height + 'px';

	    return resize;
	  }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = getSize;

	function getSize(element) {
	  // Handle cases where the element is not already
	  // attached to the DOM by briefly appending it
	  // to document.body, and removing it again later.
	  if (element === window || element === document.body) {
	    return [window.innerWidth, window.innerHeight];
	  }

	  if (!element.parentNode) {
	    var temporary = true;
	    document.body.appendChild(element);
	  }

	  var bounds = element.getBoundingClientRect();
	  var styles = getComputedStyle(element);
	  var height = (bounds.height | 0) + parse(styles.getPropertyValue('margin-top')) + parse(styles.getPropertyValue('margin-bottom'));
	  var width = (bounds.width | 0) + parse(styles.getPropertyValue('margin-left')) + parse(styles.getPropertyValue('margin-right'));

	  if (temporary) {
	    document.body.removeChild(element);
	  }

	  return [width, height];
	}

	function parse(prop) {
	  return parseFloat(prop) || 0;
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.d3_voronoi = global.d3_voronoi || {});
	})(undefined, function (exports) {
	  'use strict';

	  var version = "0.3.3";

	  function constant(x) {
	    return function () {
	      return x;
	    };
	  }

	  function x(d) {
	    return d[0];
	  }

	  function y(d) {
	    return d[1];
	  }

	  function RedBlackTree() {
	    this._ = null; // root node
	  }

	  function RedBlackNode(node) {
	    node.U = // parent node
	    node.C = // color - true for red, false for black
	    node.L = // left node
	    node.R = // right node
	    node.P = // previous node
	    node.N = null; // next node
	  }

	  RedBlackTree.prototype = {
	    constructor: RedBlackTree,

	    insert: function insert(after, node) {
	      var parent, grandpa, uncle;

	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) {
	            after = after.L;
	          }after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = RedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;

	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              RedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            RedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              RedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            RedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },

	    remove: function remove(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;

	      var parent = node.U,
	          sibling,
	          left = node.L,
	          right = node.R,
	          next,
	          red;

	      if (!left) next = right;else if (!right) next = left;else next = RedBlackFirst(right);

	      if (parent) {
	        if (parent.L === node) parent.L = next;else parent.R = next;
	      } else {
	        this._ = next;
	      }

	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }

	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) {
	        node.C = false;return;
	      }

	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            RedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              RedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            RedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            RedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              RedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            RedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);

	      if (node) node.C = false;
	    }
	  };

	  function RedBlackRotateLeft(tree, node) {
	    var p = node,
	        q = node.R,
	        parent = p.U;

	    if (parent) {
	      if (parent.L === p) parent.L = q;else parent.R = q;
	    } else {
	      tree._ = q;
	    }

	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }

	  function RedBlackRotateRight(tree, node) {
	    var p = node,
	        q = node.L,
	        parent = p.U;

	    if (parent) {
	      if (parent.L === p) parent.L = q;else parent.R = q;
	    } else {
	      tree._ = q;
	    }

	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }

	  function RedBlackFirst(node) {
	    while (node.L) {
	      node = node.L;
	    }return node;
	  }

	  function createEdge(left, right, v0, v1) {
	    var edge = [null, null],
	        index = edges.push(edge) - 1;
	    edge.left = left;
	    edge.right = right;
	    if (v0) setEdgeEnd(edge, left, right, v0);
	    if (v1) setEdgeEnd(edge, right, left, v1);
	    cells[left.index].halfedges.push(index);
	    cells[right.index].halfedges.push(index);
	    return edge;
	  }

	  function createBorderEdge(left, v0, v1) {
	    var edge = [v0, v1];
	    edge.left = left;
	    return edge;
	  }

	  function setEdgeEnd(edge, left, right, vertex) {
	    if (!edge[0] && !edge[1]) {
	      edge[0] = vertex;
	      edge.left = left;
	      edge.right = right;
	    } else if (edge.left === right) {
	      edge[1] = vertex;
	    } else {
	      edge[0] = vertex;
	    }
	  }

	  // Liang–Barsky line clipping.
	  function clippedEdge(edge, x0, y0, x1, y1) {
	    var a = edge[0],
	        b = edge[1],
	        ax = a[0],
	        ay = a[1],
	        bx = b[0],
	        by = b[1],
	        t0 = 0,
	        t1 = 1,
	        dx = bx - ax,
	        dy = by - ay,
	        l,
	        r;

	    r = x0 - ax;
	    if (!dx && r > 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dx > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }

	    r = x1 - ax;
	    if (!dx && r < 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dx > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }

	    r = y0 - ay;
	    if (!dy && r > 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dy > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }

	    r = y1 - ay;
	    if (!dy && r < 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dy > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }

	    if (!(t0 > 0) && !(t1 < 1)) return edge; // TODO Better check?

	    l = edge.left, r = edge.right;
	    if (t0 > 0) a = [ax + t0 * dx, ay + t0 * dy];
	    if (t1 < 1) b = [ax + t1 * dx, ay + t1 * dy];
	    edge = [a, b];
	    edge.left = l;
	    edge.right = r;
	    return edge;
	  }

	  function connectedEdge(edge, x0, y0, x1, y1) {
	    var v1 = edge[1];
	    if (v1) return edge;

	    var v0 = edge[0],
	        left = edge.left,
	        right = edge.right,
	        lx = left[0],
	        ly = left[1],
	        rx = right[0],
	        ry = right[1],
	        fx = (lx + rx) / 2,
	        fy = (ly + ry) / 2,
	        fm,
	        fb;

	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!v0) v0 = [fx, y0];else if (v0[1] >= y1) return;
	        v1 = [fx, y1];
	      } else {
	        if (!v0) v0 = [fx, y1];else if (v0[1] < y0) return;
	        v1 = [fx, y0];
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!v0) v0 = [(y0 - fb) / fm, y0];else if (v0[1] >= y1) return;
	          v1 = [(y1 - fb) / fm, y1];
	        } else {
	          if (!v0) v0 = [(y1 - fb) / fm, y1];else if (v0[1] < y0) return;
	          v1 = [(y0 - fb) / fm, y0];
	        }
	      } else {
	        if (ly < ry) {
	          if (!v0) v0 = [x0, fm * x0 + fb];else if (v0[0] >= x1) return;
	          v1 = [x1, fm * x1 + fb];
	        } else {
	          if (!v0) v0 = [x1, fm * x1 + fb];else if (v0[0] < x0) return;
	          v1 = [x0, fm * x0 + fb];
	        }
	      }
	    }

	    edge = [v0, v1];
	    edge.left = left;
	    edge.right = right;
	    return edge;
	  }

	  function clippedEdges(x0, y0, x1, y1) {
	    var i = edges.length,
	        clippedEdges = new Array(i),
	        edge;

	    while (i--) {
	      if ((edge = connectedEdge(edges[i], x0, y0, x1, y1)) && (edge = clippedEdge(edge, x0, y0, x1, y1)) && (Math.abs(edge[0][0] - edge[1][0]) > epsilon || Math.abs(edge[0][1] - edge[1][1]) > epsilon)) {
	        clippedEdges[i] = edge;
	      }
	    }

	    return clippedEdges;
	  }

	  function createCell(site) {
	    return cells[site.index] = {
	      site: site,
	      halfedges: []
	    };
	  }

	  function cellHalfedgeAngle(cell, edge) {
	    var site = cell.site,
	        va = edge.left,
	        vb = edge.right;
	    if (site === vb) vb = va, va = site;
	    if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
	    if (site === va) va = edge[1], vb = edge[0];else va = edge[0], vb = edge[1];
	    return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
	  }

	  function cellHalfedgeStart(cell, edge) {
	    return edge[+(edge.left !== cell.site)];
	  }

	  function cellHalfedgeEnd(cell, edge) {
	    return edge[+(edge.left === cell.site)];
	  }

	  function sortCellHalfedges() {
	    for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
	      if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
	        var index = new Array(m),
	            array = new Array(m);
	        for (j = 0; j < m; ++j) {
	          index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
	        }index.sort(function (i, j) {
	          return array[j] - array[i];
	        });
	        for (j = 0; j < m; ++j) {
	          array[j] = halfedges[index[j]];
	        }for (j = 0; j < m; ++j) {
	          halfedges[j] = array[j];
	        }
	      }
	    }
	  }

	  function clipCells(edges, x0, y0, x1, y1) {
	    var iCell = cells.length,
	        cell,
	        iHalfedge,
	        halfedges,
	        nHalfedges,
	        start,
	        startX,
	        startY,
	        end,
	        endX,
	        endY;

	    while (iCell--) {
	      if (cell = cells[iCell]) {
	        halfedges = cell.halfedges;
	        iHalfedge = halfedges.length;

	        // Remove any dangling clipped edges.
	        while (iHalfedge--) {
	          if (!edges[halfedges[iHalfedge]]) {
	            halfedges.splice(iHalfedge, 1);
	          }
	        }

	        // Insert any border edges as necessary.
	        iHalfedge = 0, nHalfedges = halfedges.length;
	        while (iHalfedge < nHalfedges) {
	          end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
	          start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
	          if (Math.abs(endX - startX) > epsilon || Math.abs(endY - startY) > epsilon) {
	            halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(cell.site, end, Math.abs(endX - x0) < epsilon && y1 - endY > epsilon ? [x0, Math.abs(startX - x0) < epsilon ? startY : y1] : Math.abs(endY - y1) < epsilon && x1 - endX > epsilon ? [Math.abs(startY - y1) < epsilon ? startX : x1, y1] : Math.abs(endX - x1) < epsilon && endY - y0 > epsilon ? [x1, Math.abs(startX - x1) < epsilon ? startY : y0] : Math.abs(endY - y0) < epsilon && endX - x0 > epsilon ? [Math.abs(startY - y0) < epsilon ? startX : x0, y0] : null)) - 1);
	            ++nHalfedges;
	          }
	        }
	      }
	    }
	  }

	  var circlePool = [];

	  var firstCircle;

	  function Circle() {
	    RedBlackNode(this);
	    this.x = this.y = this.arc = this.site = this.cy = null;
	  }

	  function attachCircle(arc) {
	    var lArc = arc.P,
	        rArc = arc.N;

	    if (!lArc || !rArc) return;

	    var lSite = lArc.site,
	        cSite = arc.site,
	        rSite = rArc.site;

	    if (lSite === rSite) return;

	    var bx = cSite[0],
	        by = cSite[1],
	        ax = lSite[0] - bx,
	        ay = lSite[1] - by,
	        cx = rSite[0] - bx,
	        cy = rSite[1] - by;

	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -epsilon2) return;

	    var ha = ax * ax + ay * ay,
	        hc = cx * cx + cy * cy,
	        x = (cy * ha - ay * hc) / d,
	        y = (ax * hc - cx * ha) / d;

	    var circle = circlePool.pop() || new Circle();
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

	    arc.circle = circle;

	    var before = null,
	        node = circles._;

	    while (node) {
	      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
	        if (node.L) node = node.L;else {
	          before = node.P;break;
	        }
	      } else {
	        if (node.R) node = node.R;else {
	          before = node;break;
	        }
	      }
	    }

	    circles.insert(before, circle);
	    if (!before) firstCircle = circle;
	  }

	  function detachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) firstCircle = circle.N;
	      circles.remove(circle);
	      circlePool.push(circle);
	      RedBlackNode(circle);
	      arc.circle = null;
	    }
	  }

	  var beachPool = [];

	  function Beach() {
	    RedBlackNode(this);
	    this.edge = this.site = this.circle = null;
	  }

	  function createBeach(site) {
	    var beach = beachPool.pop() || new Beach();
	    beach.site = site;
	    return beach;
	  }

	  function detachBeach(beach) {
	    detachCircle(beach);
	    beaches.remove(beach);
	    beachPool.push(beach);
	    RedBlackNode(beach);
	  }

	  function removeBeach(beach) {
	    var circle = beach.circle,
	        x = circle.x,
	        y = circle.cy,
	        vertex = [x, y],
	        previous = beach.P,
	        next = beach.N,
	        disappearing = [beach];

	    detachBeach(beach);

	    var lArc = previous;
	    while (lArc.circle && Math.abs(x - lArc.circle.x) < epsilon && Math.abs(y - lArc.circle.cy) < epsilon) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      detachBeach(lArc);
	      lArc = previous;
	    }

	    disappearing.unshift(lArc);
	    detachCircle(lArc);

	    var rArc = next;
	    while (rArc.circle && Math.abs(x - rArc.circle.x) < epsilon && Math.abs(y - rArc.circle.cy) < epsilon) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      detachBeach(rArc);
	      rArc = next;
	    }

	    disappearing.push(rArc);
	    detachCircle(rArc);

	    var nArcs = disappearing.length,
	        iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }

	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);

	    attachCircle(lArc);
	    attachCircle(rArc);
	  }

	  function addBeach(site) {
	    var x = site[0],
	        directrix = site[1],
	        lArc,
	        rArc,
	        dxl,
	        dxr,
	        node = beaches._;

	    while (node) {
	      dxl = leftBreakPoint(node, directrix) - x;
	      if (dxl > epsilon) node = node.L;else {
	        dxr = x - rightBreakPoint(node, directrix);
	        if (dxr > epsilon) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -epsilon) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -epsilon) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }

	    createCell(site);
	    var newArc = createBeach(site);
	    beaches.insert(lArc, newArc);

	    if (!lArc && !rArc) return;

	    if (lArc === rArc) {
	      detachCircle(lArc);
	      rArc = createBeach(lArc.site);
	      beaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
	      attachCircle(lArc);
	      attachCircle(rArc);
	      return;
	    }

	    if (!rArc) {
	      // && lArc
	      newArc.edge = createEdge(lArc.site, newArc.site);
	      return;
	    }

	    // else lArc !== rArc
	    detachCircle(lArc);
	    detachCircle(rArc);

	    var lSite = lArc.site,
	        ax = lSite[0],
	        ay = lSite[1],
	        bx = site[0] - ax,
	        by = site[1] - ay,
	        rSite = rArc.site,
	        cx = rSite[0] - ax,
	        cy = rSite[1] - ay,
	        d = 2 * (bx * cy - by * cx),
	        hb = bx * bx + by * by,
	        hc = cx * cx + cy * cy,
	        vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

	    setEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = createEdge(lSite, site, null, vertex);
	    rArc.edge = createEdge(site, rSite, null, vertex);
	    attachCircle(lArc);
	    attachCircle(rArc);
	  }

	  function leftBreakPoint(arc, directrix) {
	    var site = arc.site,
	        rfocx = site[0],
	        rfocy = site[1],
	        pby2 = rfocy - directrix;

	    if (!pby2) return rfocx;

	    var lArc = arc.P;
	    if (!lArc) return -Infinity;

	    site = lArc.site;
	    var lfocx = site[0],
	        lfocy = site[1],
	        plby2 = lfocy - directrix;

	    if (!plby2) return lfocx;

	    var hl = lfocx - rfocx,
	        aby2 = 1 / pby2 - 1 / plby2,
	        b = hl / plby2;

	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

	    return (rfocx + lfocx) / 2;
	  }

	  function rightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return leftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site[1] === directrix ? site[0] : Infinity;
	  }

	  var epsilon = 1e-6;
	  var epsilon2 = 1e-12;
	  var beaches;
	  var cells;
	  var circles;
	  var edges;

	  function triangleArea(a, b, c) {
	    return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
	  }

	  function lexicographic(a, b) {
	    return b[1] - a[1] || b[0] - a[0];
	  }

	  function Diagram(sites, extent) {
	    var site = sites.sort(lexicographic).pop(),
	        x,
	        y,
	        circle;

	    edges = [];
	    cells = new Array(sites.length);
	    beaches = new RedBlackTree();
	    circles = new RedBlackTree();

	    while (true) {
	      circle = firstCircle;
	      if (site && (!circle || site[1] < circle.y || site[1] === circle.y && site[0] < circle.x)) {
	        if (site[0] !== x || site[1] !== y) {
	          addBeach(site);
	          x = site[0], y = site[1];
	        }
	        site = sites.pop();
	      } else if (circle) {
	        removeBeach(circle.arc);
	      } else {
	        break;
	      }
	    }

	    sortCellHalfedges();

	    if (extent) {
	      var x0 = extent[0][0],
	          y0 = extent[0][1],
	          x1 = extent[1][0],
	          y1 = extent[1][1];
	      this.extent = [[x0, y0], [x1, y1]];
	      this.cellEdges = clippedEdges(x0, y0, x1, y1);
	      clipCells(this.cellEdges, x0, y0, x1, y1);
	    } else {
	      this.cellEdges = edges;
	    }

	    this.cells = cells;
	    this.edges = edges;

	    beaches = circles = edges = cells = null;
	  }

	  Diagram.prototype = {
	    constructor: Diagram,

	    polygons: function polygons() {
	      var cells = this.cells,
	          edges = this.cellEdges,
	          extent = this.extent,
	          x0 = extent[0][0],
	          y0 = extent[0][1],
	          x1 = extent[1][0],
	          y1 = extent[1][1],
	          polygons = new Array(cells.length);

	      cells.forEach(function (cell, i) {
	        var site = cell.site,
	            halfedges = cell.halfedges,
	            polygon;
	        if (halfedges.length) polygon = halfedges.map(function (index) {
	          return cellHalfedgeStart(cell, edges[index]);
	        });else if (site[0] >= x0 && site[0] <= x1 && site[1] >= y0 && site[1] <= y1) polygon = [[x0, y1], [x1, y1], [x1, y0], [x0, y0]];else return;
	        polygons[i] = polygon;
	        polygon.data = site.data;
	      });

	      return polygons;
	    },

	    triangles: function triangles() {
	      var triangles = [],
	          edges = this.edges;

	      this.cells.forEach(function (cell, i) {
	        var site = cell.site,
	            halfedges = cell.halfedges,
	            j = -1,
	            m = halfedges.length,
	            s0,
	            e1 = edges[halfedges[m - 1]],
	            s1 = e1.left === site ? e1.right : e1.left;

	        while (++j < m) {
	          s0 = s1;
	          e1 = edges[halfedges[j]];
	          s1 = e1.left === site ? e1.right : e1.left;
	          if (i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
	            triangles.push([site.data, s0.data, s1.data]);
	          }
	        }
	      });

	      return triangles;
	    },

	    links: function links() {
	      return this.edges.filter(function (edge) {
	        return edge.right;
	      }).map(function (edge) {
	        return {
	          source: edge.left.data,
	          target: edge.right.data
	        };
	      });
	    }
	  };

	  function voronoi() {
	    var x$$ = x,
	        y$$ = y,
	        extent = null;

	    function voronoi(data) {
	      return new Diagram(data.map(function (d, i) {
	        var s = [Math.round(x$$(d, i, data) / epsilon) * epsilon, Math.round(y$$(d, i, data) / epsilon) * epsilon];
	        s.index = i;
	        s.data = d;
	        return s;
	      }), extent);
	    }
	    voronoi.polygons = function (data) {
	      return voronoi(data).polygons();
	    };

	    voronoi.links = function (data) {
	      return voronoi(data).links();
	    };

	    voronoi.triangles = function (data) {
	      return voronoi(data).triangles();
	    };

	    voronoi.x = function (_) {
	      return arguments.length ? (x$$ = typeof _ === "function" ? _ : constant(+_), voronoi) : x$$;
	    };

	    voronoi.y = function (_) {
	      return arguments.length ? (y$$ = typeof _ === "function" ? _ : constant(+_), voronoi) : y$$;
	    };

	    voronoi.extent = function (_) {
	      return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
	    };

	    voronoi.size = function (_) {
	      return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0], extent[1][1]];
	    };

	    return voronoi;
	  }

	  exports.version = version;
	  exports.voronoi = voronoi;
	});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = lineRectangleCollision;

	// The Liang-Barsky algorithm for line-rectangle collisions
	// https://gist.github.com/ChickenProp/3194723
	function lineRectangleCollision(lineP1, lineP2, rectCenter, rectSize) {
	  var x = lineP1.x;
	  var y = lineP1.y;
	  var vx = lineP2.x - x;
	  var vy = lineP2.y - y;
	  var p = [-vx, vx, -vy, vy];
	  var left = rectCenter.x - rectSize.width * 0.5;
	  var top = rectCenter.y - rectSize.height * 0.5;
	  var q = [x - left, left + rectSize.width - x, y - top, top + rectSize.height - y];
	  var u1 = Number.NEGATIVE_INFINITY;
	  var u2 = Number.POSITIVE_INFINITY;

	  for (var i = 0; i < 4; i++) {
	    if (p[i] === 0) {
	      if (q[i] < 0) return false;
	    } else {
	      var t = q[i] / p[i];
	      if (p[i] < 0 && u1 < t) u1 = t;else if (p[i] > 0 && u2 > t) u2 = t;
	    }
	  }

	  if (u1 > u2 || u1 > 1 || u1 < 0) return false;

	  return {
	    x: x + u1 * vx,
	    y: y + u1 * vy
	  };
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);