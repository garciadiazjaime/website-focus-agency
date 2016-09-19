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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _reactRouter = __webpack_require__(4);

	var _bodyParser = __webpack_require__(5);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _dataWrapper = __webpack_require__(6);

	var _dataWrapper2 = _interopRequireDefault(_dataWrapper);

	var _config = __webpack_require__(7);

	var _config2 = _interopRequireDefault(_config);

	var _api = __webpack_require__(9);

	var _api2 = _interopRequireDefault(_api);

	var _routes = __webpack_require__(11);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)(); /* eslint max-len: [2, 500, 4] */


	app.set('views', './views');
	app.set('view engine', 'jade');

	app.use(_bodyParser2.default.json());
	app.use(_bodyParser2.default.urlencoded({
	  extended: false
	}));

	app.use(_express2.default.static('static'));

	app.use('/api/', _api2.default);

	app.get('/*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      var props = {};
	      var content = (0, _server.renderToString)(_react2.default.createElement(
	        _dataWrapper2.default,
	        { data: props },
	        _react2.default.createElement(_reactRouter.RoutingContext, renderProps)
	      ));
	      res.render('index', { content: content, props: props });
	    } else {
	      res.status(404).send('Not found');
	    }
	  });
	});

	app.set('ipaddress', _config2.default.get('ipaddress'));
	app.set('port', _config2.default.get('port'));

	var server = app.listen(app.get('port'), app.get('ipaddress'), function (err) {
	  if (err) {
	    console.log(err);
	  }

	  var host = server.address().address;
	  var port = server.address().port;
	  console.log('Example app listening at http://%s:%s', host, port);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataWrapper = function (_React$Component) {
	  _inherits(DataWrapper, _React$Component);

	  function DataWrapper() {
	    _classCallCheck(this, DataWrapper);

	    return _possibleConstructorReturn(this, (DataWrapper.__proto__ || Object.getPrototypeOf(DataWrapper)).apply(this, arguments));
	  }

	  _createClass(DataWrapper, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        data: this.props.data
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return DataWrapper;
	}(_react2.default.Component);

	exports.default = DataWrapper;


	DataWrapper.propTypes = {
	  data: _react2.default.PropTypes.object.isRequired,
	  children: _react2.default.PropTypes.any
	};

	DataWrapper.childContextTypes = {
	  data: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var convict = __webpack_require__(8);

	var config = convict({
	    email: {
	      doc: 'default contact email',
	      format: String,
	      default: 'info@mintitmedia.com'
	    },
	    ipaddress: {
	        doc: 'IP the application runs on',
	        format: 'ipaddress',
	        default: '127.0.0.1',
	        env: 'OPENSHIFT_NODEJS_IP'
	    },
	    port: {
	        doc: 'Port the application listens on',
	        format: 'port',
	        default: '3030',
	        env: 'OPENSHIFT_NODEJS_PORT'
	    },
	    sendgrid: {
	        doc: 'Sendrid API KEY',
	        format: String,
	        default: '',
	        env: 'SENDGRID_API_KEY'
	    }
	});

	config.validate();

	module.exports = config;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("convict");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var express = __webpack_require__(1);
	/*eslint-disable */
	var router = express.Router();
	/*eslint-enable */
	var conf = __webpack_require__(7);
	var sendgrid = __webpack_require__(10)(conf.get('sendgrid'));

	router.post('/send_email', function (req, res) {
	  var fromname = req.body.fromname;
	  var replyto = req.body.replyto;
	  var subject = req.body.subject;
	  var html = req.body.html;

	  var email = new sendgrid.Email({
	    to: conf.get('email'),
	    from: conf.get('email'),
	    fromname: fromname,
	    replyto: replyto,
	    subject: subject,
	    bcc: ['info@mintitmedia.com'],
	    html: html
	  });

	  sendgrid.send(email, function (err) {
	    var response = true;
	    if (err) {
	      console.error(err);
	      response = false;
	    }
	    res.send({
	      status: response
	    });
	  });
	});

	exports.default = router;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("sendgrid");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _createBrowserHistory = __webpack_require__(13);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _sitemap = __webpack_require__(14);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var items = _sitemap2.default.items;

	var routes = items.children.map(function (item, index) {
	  return _react2.default.createElement(_reactRouter.Route, { path: item.url, component: item.component, key: index });
	});
	var history = process.env.TIER === 'FE' ? (0, _createBrowserHistory2.default)() : null;

	exports.default = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: history },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: items.component },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: items.default }),
	    routes
	  )
	);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */
/***/ function(module, exports) {

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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AppHandler = __webpack_require__(15);

	var _AppHandler2 = _interopRequireDefault(_AppHandler);

	var _home = __webpack_require__(25);

	var _home2 = _interopRequireDefault(_home);

	var _about = __webpack_require__(41);

	var _about2 = _interopRequireDefault(_about);

	var _services = __webpack_require__(62);

	var _services2 = _interopRequireDefault(_services);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  items: {
	    component: _AppHandler2.default,
	    default: _home2.default,
	    children: [{
	      title: 'Contáctanos',
	      url: '/contacto',
	      component: _home2.default
	    }, {
	      title: 'Apoyo Logístico',
	      url: '/apoyo-logistico',
	      component: _about2.default
	    }, {
	      title: 'Focus Groups',
	      url: '/focus-groups',
	      component: _services2.default
	    }]
	  },
	  icons: [{
	    title: 'facebook',
	    url: 'https://www.facebook.com/'
	  }, {
	    title: 'twitter',
	    url: 'https://www.twitter.com/'
	  }],
	  addresses: [{
	    title: 'Tijuana',
	    tel: '(664) 634-1615 / 684-7425'
	  }, {
	    title: 'Mexicali',
	    tel: '(686) 552-3672'
	  }, {
	    title: 'Ensenada',
	    tel: '(686) 552-3672'
	  }, {
	    title: 'Farmacia de la Piel',
	    tel: '(664) 684-8288'
	  }]
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _sitemap = __webpack_require__(14);

	var _sitemap2 = _interopRequireDefault(_sitemap);

	var _menu = __webpack_require__(16);

	var _menu2 = _interopRequireDefault(_menu);

	var _footer = __webpack_require__(20);

	var _footer2 = _interopRequireDefault(_footer);

	var _scroll = __webpack_require__(23);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _menu3 = __webpack_require__(24);

	var _menu4 = _interopRequireDefault(_menu3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppHandler = function (_React$Component) {
	  _inherits(AppHandler, _React$Component);

	  function AppHandler(props, context) {
	    _classCallCheck(this, AppHandler);

	    var _this = _possibleConstructorReturn(this, (AppHandler.__proto__ || Object.getPrototypeOf(AppHandler)).call(this, props, context));

	    _this.state = {
	      data: context.data ? context.data : {}
	    };
	    return _this;
	  }

	  _createClass(AppHandler, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scrollHandler(true);
	      window.addEventListener('scroll', this.onScroll, false);
	      // this.googleAnalytics();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.scrollHandler();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.onScroll, false);
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll() {
	      var offset = window.pageYOffset;
	      if (offset > 186) {
	        $('#menu_wrapper').addClass('navbar-fixed-top');
	      } else {
	        $('#menu_wrapper').removeClass('navbar-fixed-top');
	      }
	    }
	  }, {
	    key: 'googleAnalytics',
	    value: function googleAnalytics() {
	      /*eslint-disable */
	      // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	      // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	      // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	      // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	      // ga('create', 'UA--', 'auto');
	      // ga('send', 'pageview');
	      /*eslint-enable */
	    }
	  }, {
	    key: 'scrollHandler',
	    value: function scrollHandler(isFirstTime) {
	      var location = this.props.location;

	      (0, _scroll2.default)(location);
	      if (!isFirstTime) {
	        var bits = location.pathname.split('/');
	        (0, _menu4.default)(bits[1] || 'inicio');
	      }
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler() {
	      if ($('.navbar-header button').is(':visible')) {
	        $('.navbar-header button').click();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_menu2.default, { items: _sitemap2.default.items.children, icons: _sitemap2.default.icons, onClick: this.clickHandler }),
	        this.props.children,
	        _react2.default.createElement(_footer2.default, { items: _sitemap2.default.items.children, addresses: _sitemap2.default.addresses, icons: _sitemap2.default.icons })
	      );
	    }
	  }]);

	  return AppHandler;
	}(_react2.default.Component);

	exports.default = AppHandler;


	AppHandler.propTypes = {
	  children: _react2.default.PropTypes.object.isRequired,
	  location: _react2.default.PropTypes.any,
	  context: _react2.default.PropTypes.any,
	  data: _react2.default.PropTypes.any
	};

	AppHandler.contextTypes = {
	  data: _react2.default.PropTypes.object
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(19);

	var MainMenu = function (_React$Component) {
	  _inherits(MainMenu, _React$Component);

	  function MainMenu() {
	    _classCallCheck(this, MainMenu);

	    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
	  }

	  _createClass(MainMenu, [{
	    key: 'getItems',
	    value: function getItems(data) {
	      var _this2 = this;

	      return data.map(function (item, index) {
	        var title = item.title;
	        var url = item.url;

	        var elementID = url.replace('/', '');
	        var className = style.navbarNavAnchor;
	        var onClick = _this2.props.onClick;

	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: url, className: className, id: elementID, onClick: onClick },
	            title
	          )
	        );
	      });
	    }
	  }, {
	    key: 'getIcons',
	    value: function getIcons(data) {
	      return data.map(function (item, index) {
	        return _react2.default.createElement(
	          'li',
	          { key: index },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: item.url, className: style.sm_icon, id: item.url, target: '_blank' },
	            _react2.default.createElement(_svg2.default, { network: item.title, className: style[item.title] })
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      /*eslint-disable */
	      return _react2.default.createElement(
	        'div',
	        { className: style.navbarWrapper },
	        _react2.default.createElement(
	          'nav',
	          { className: style.navbarDefault + ' navbar navbar navbar-fixed-top', id: 'menu_wrapper' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container-fluid' },
	            _react2.default.createElement(
	              'div',
	              { className: 'row' },
	              _react2.default.createElement(
	                'div',
	                { className: style.navbarHeader + ' navbar-header' },
	                _react2.default.createElement(
	                  'button',
	                  { type: 'button', className: 'navbar-toggle collapsed menu_trigger ' + style.toggleButton, 'data-toggle': 'collapse', 'data-target': '#mainmenu', 'aria-expanded': 'false' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'sr-only' },
	                    'Toggle navigation'
	                  ),
	                  _react2.default.createElement('span', { className: 'icon-bar ' + style.iconBar }),
	                  _react2.default.createElement('span', { className: 'icon-bar ' + style.iconBar }),
	                  _react2.default.createElement('span', { className: 'icon-bar ' + style.iconBar })
	                ),
	                _react2.default.createElement(_reactRouter.Link, { className: style.navbarBrand + ' navbar-brand', to: '/' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.navbarCollapse + ' collapse navbar-collapse', id: 'mainmenu' },
	                _react2.default.createElement(
	                  'ul',
	                  { className: style.navbarIcons },
	                  this.getIcons(this.props.icons)
	                ),
	                _react2.default.createElement(
	                  'ul',
	                  { className: style.navbarNav + ' nav navbar-nav' },
	                  this.getItems(this.props.items)
	                )
	              )
	            )
	          )
	        )
	      );
	      /*eslint-enable */
	    }
	  }]);

	  return MainMenu;
	}(_react2.default.Component);

	exports.default = MainMenu;


	MainMenu.propTypes = {
	  items: _react2.default.PropTypes.array.isRequired,
	  icons: _react2.default.PropTypes.array,
	  location: _react2.default.PropTypes.any,
	  onClick: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.getFacebookIcon = getFacebookIcon;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _style = __webpack_require__(18);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	function renderItems(network, className) {
	  switch (network) {
	    case 'facebook':
	      /*eslint-disable */
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	        _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	        _react2.default.createElement('path', { d: 'M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z' })
	      );
	      break;
	    case 'twitter':
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	        _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	        _react2.default.createElement('path', { d: 'M23.5 9.7c-0.6 0.3-1.3 0.5-2 0.5 0.7-0.4 1.3-1.1 1.5-1.9 -0.7 0.4-1.4 0.7-2.2 0.8 -0.6-0.7-1.5-1.1-2.5-1.1 -1.9 0-3.5 1.6-3.5 3.5 0 0.3 0 0.5 0.1 0.8 -2.9-0.1-5.5-1.5-7.2-3.6 -0.3 0.5-0.5 1.1-0.5 1.8 0 1.2 0.6 2.3 1.6 2.9 -0.6 0-1.1-0.2-1.6-0.4 0 0 0 0 0 0 0 1.7 1.2 3.1 2.8 3.4 -0.3 0.1-0.6 0.1-0.9 0.1 -0.2 0-0.4 0-0.7-0.1 0.4 1.4 1.7 2.4 3.3 2.4 -1.2 0.9-2.7 1.5-4.3 1.5 -0.3 0-0.6 0-0.8 0 1.5 1 3.4 1.6 5.3 1.6 6.4 0 9.9-5.3 9.9-9.9 0-0.1 0-0.3 0-0.4C22.4 11 23 10.4 23.5 9.7z' })
	      );
	      break;
	    case 'pinterest':
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	        _react2.default.createElement('circle', { className: this.props.background, cx: '15', cy: '15', r: '15' }),
	        _react2.default.createElement('path', { d: 'M14.4 18.1c-0.5 2.6-1.1 5.1-2.9 6.4 -0.6-4 0.8-6.9 1.5-10.1 -1.1-1.8 0.1-5.5 2.4-4.6 2.8 1.1-2.4 6.8 1.1 7.5 3.7 0.8 5.2-6.4 2.9-8.8 -3.3-3.4-9.7-0.1-8.9 4.8 0.2 1.2 1.4 1.5 0.5 3.2 -2.1-0.5-2.8-2.1-2.7-4.4 0.1-3.7 3.3-6.2 6.5-6.6 4-0.4 7.8 1.5 8.3 5.2 0.6 4.2-1.8 8.8-6.1 8.5C15.8 19.2 15.4 18.6 14.4 18.1' })
	      );
	      break;
	    case 'instagram':
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	        _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	        _react2.default.createElement('path', { d: 'M20.6 7H9.4c-1.3 0-2.4 0.9-2.4 2.1v11.8c0 1.2 1.1 2.1 2.4 2.1h11.3c1.3 0 2.4-0.9 2.4-2.1V9.1C23 7.9 22 7 20.6 7zM18.6 9.2c0-0.3 0.2-0.5 0.5-0.5h1.7c0.3 0 0.5 0.2 0.5 0.5v1.7c0 0.3-0.2 0.5-0.5 0.5h-1.7c-0.3 0-0.5-0.2-0.5-0.5V9.2zM17.7 11.7v0c0 0 0 0 0 0H17.7zM14.9 12c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5 -2 0-3.5-1.6-3.5-3.5C11.4 13.6 13 12 14.9 12zM22 20.7c0 0.8-0.6 1.4-1.4 1.4H9.3c-0.8 0-1.4-0.6-1.4-1.4V13.3h2.9c-0.3 0.7-0.5 1.4-0.5 2.2 0 2.6 2.1 4.7 4.7 4.7 2.6 0 4.7-2.1 4.7-4.7 0-0.7-0.2-1.4-0.5-2h2.8V20.7z' })
	      );
	      break;
	    case 'square_arrow':
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '31', height: '31', viewBox: '0 0 31.4 31.3', className: className },
	        _react2.default.createElement('path', { d: 'M1 30.9c-0.3 0-0.5-0.2-0.5-0.5V1c0-0.3 0.2-0.5 0.5-0.5h29.4c0.3 0 0.5 0.2 0.5 0.5v29.4c0 0.3-0.2 0.5-0.5 0.5H1z', fill: '#221f1f' }),
	        _react2.default.createElement('path', { d: 'M30.4 1v29.4H1V1H30.4M30.4 0H1c-0.6 0-1 0.4-1 1v29.4c0 0.6 0.4 1 1 1h29.4c0.6 0 1-0.4 1-1V1C31.4 0.4 31 0 30.4 0L30.4 0z', fill: '#FFF' }),
	        _react2.default.createElement('polyline', { points: ' 13.2 9.1 19.7 15.6 13.1 22.2 ', fill: 'none', stroke: '#fff' })
	      );
	      break;
	    case 'arrow_right':
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '8', height: '14', viewBox: '0 0 7.7 13.8', className: className },
	        _react2.default.createElement('polyline', { points: '0.5 0.4 7 6.9 0.4 13.5 ', fill: 'none', stroke: '#FFF' })
	      );
	      break;
	    case 'arrow_down':
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '15', height: '8', viewBox: '0 0 14.6 8', className: className },
	        _react2.default.createElement('polyline', { points: '13.8 0.8 7.3 7.3 0.7 0.7 ', fill: 'none', stroke: '#FFF' })
	      );
	      break;
	    case 'carousel_right':
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '10', height: '18', viewBox: '0 0 10.1 18', className: className },
	        _react2.default.createElement('polyline', { points: ' 1.1 1.1 9 9 1.1 16.9 ', fill: 'none', strokeLinejoin: 'round', strokeWidth: '2', stroke: '#010101' })
	      );
	      break;
	    case 'carousel_left':
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '10', height: '18', viewBox: '0 0 10.1 18', className: className },
	        _react2.default.createElement('polyline', { points: ' 9 16.9 1.1 9 9 1.1 ', fill: 'none', strokeLinejoin: 'round', strokeWidth: '2', stroke: '#010101' })
	      );
	      break;
	    case 'location':
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '30', viewBox: '0 0 17.5 30', className: className },
	        _react2.default.createElement('path', { d: 'M8.8 5.4c-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3C12.1 6.9 10.6 5.4 8.8 5.4zM8.8 10.1c-0.8 0-1.4-0.6-1.4-1.4 0-0.8 0.6-1.4 1.4-1.4 0.8 0 1.4 0.6 1.4 1.4C10.1 9.5 9.5 10.1 8.8 10.1z', fill: '#CBA764' }),
	        _react2.default.createElement('path', { d: 'M8.8 0C3.9 0 0 3.9 0 8.8c0 1.1 0.2 2.1 0.6 3.2L7.9 29.4C8 29.8 8.4 30 8.8 30c0 0 0 0 0 0 0.4 0 0.8-0.2 0.9-0.6l7.3-17.5c0.4-1 0.6-2.1 0.6-3.1C17.5 3.9 13.6 0 8.8 0zM15.1 11.3L8.8 26.5 2.5 11.5l-0.1-0.3C2.1 10.4 2 9.6 2 8.8c0-3.8 3.1-6.8 6.8-6.8 3.8 0 6.8 3.1 6.8 6.8C15.6 9.6 15.4 10.4 15.1 11.3z', fill: '#CBA764' })
	      );
	      break;
	    default:
	      return _react2.default.createElement(
	        'svg',
	        { xmlns: 'http://www.w3.org/2000/svg', width: '30', height: '30', viewBox: '0 0 30 30', className: className },
	        _react2.default.createElement('circle', { cx: '15', cy: '15', r: '15' }),
	        _react2.default.createElement('path', { d: 'M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z' })
	      );
	    /*eslint-enable */
	  }
	}

	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: 'render',
	    value: function render() {
	      return renderItems(this.props.network, this.props.className);
	    }
	  }]);

	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;


	SVG.propTypes = {
	  background: _react2.default.PropTypes.string,
	  color: _react2.default.PropTypes.string,
	  network: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string
	};

	function getFacebookIcon(href, title, className) {
	  return _react2.default.createElement(
	    _reactRouter.Link,
	    { to: href, className: [_style2.default.fbIcon, className || ''].join(' '), target: '_blank' },
	    renderItems('facebook', _style2.default.facebook),
	    title ? _react2.default.createElement(
	      'span',
	      null,
	      title
	    ) : null
	  );
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___eofHt","vCenter":"style__vCenter___3ydwB","vCenterRel":"style__vCenterRel___1Xcj8","hCenter":"style__hCenter___2IrLV","inheritHeight":"style__inheritHeight___XdU0Q","hideOverflow":"style__hideOverflow___1wNkm","icon-sprites":"style__icon-sprites___33LTB","fbIcon":"style__fbIcon___3C8wt","facebook":"style__facebook___5cRlv"};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___cfX-h","vCenter":"style__vCenter___ZA14l","navbarBrand":"style__navbarBrand___2rqc0","toggleButton":"style__toggleButton___3q8M1","navbarNavAnchor":"style__navbarNavAnchor___37QYF","vCenterRel":"style__vCenterRel___1GkYt","navbarIcons":"style__navbarIcons___jZlWo","sm_icon":"style__sm_icon___3hlQn","hCenter":"style__hCenter___2Rj-i","inheritHeight":"style__inheritHeight___2LMcf","hideOverflow":"style__hideOverflow___3olA9","icon-sprites":"style__icon-sprites___1xY5y","navbarWrapper":"style__navbarWrapper___VqN0H","navbarDefault":"style__navbarDefault___aolZK","navbarHeader":"style__navbarHeader___2FrdS","iconBar":"style__iconBar___1hD4n","navbarCollapse":"style__navbarCollapse___3blFh","navbarNav":"style__navbarNav___1r3v1","facebook":"style__facebook___5X5oX","twitter":"style__twitter___2J781","pinterest":"style__pinterest___1p5Ft","instagram":"style__instagram___32QmM"};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _powered = __webpack_require__(21);

	var _powered2 = _interopRequireDefault(_powered);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(22);

	var FooterAAA = function (_React$Component) {
	  _inherits(FooterAAA, _React$Component);

	  function FooterAAA() {
	    _classCallCheck(this, FooterAAA);

	    return _possibleConstructorReturn(this, (FooterAAA.__proto__ || Object.getPrototypeOf(FooterAAA)).apply(this, arguments));
	  }

	  _createClass(FooterAAA, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.footerWrapper },
	        _react2.default.createElement(_powered2.default, null)
	      );
	    }
	  }]);

	  return FooterAAA;
	}(_react2.default.Component);

	exports.default = FooterAAA;


	FooterAAA.propTypes = {
	  items: _react2.default.PropTypes.array.isRequired,
	  addresses: _react2.default.PropTypes.array,
	  icons: _react2.default.PropTypes.array
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(22);

	var Powered = function (_React$Component) {
	  _inherits(Powered, _React$Component);

	  function Powered() {
	    _classCallCheck(this, Powered);

	    return _possibleConstructorReturn(this, (Powered.__proto__ || Object.getPrototypeOf(Powered)).apply(this, arguments));
	  }

	  _createClass(Powered, [{
	    key: 'render',
	    value: function render() {
	      var data = [{
	        name: 'POOL',
	        url: 'http://somospool.com',
	        title: 'somos pool'
	      }, {
	        name: 'MINT',
	        url: 'http://mintitmedia.com',
	        title: 'Diseño y Desarrollo Web en Tijuana'
	      }];

	      return _react2.default.createElement(
	        'div',
	        { className: style.powered },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-6' },
	              'Todos los derechos reservados FOCUS Investigación de Mercados © 2016'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-6' },
	              'Un proyecto de: ',
	              _react2.default.createElement(
	                'a',
	                { href: data[0].url, title: data[0].title, target: '_blank' },
	                data[0].name
	              ),
	              '   Código por: ',
	              _react2.default.createElement(
	                'a',
	                { href: data[1].url, title: data[1].title, target: '_blank' },
	                data[1].name
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Powered;
	}(_react2.default.Component);

	exports.default = Powered;

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___24X-f","vCenter":"style__vCenter___rkH6k","vCenterRel":"style__vCenterRel___W_SE5","hCenter":"style__hCenter___rq5W3","inheritHeight":"style__inheritHeight___IbmOF","hideOverflow":"style__hideOverflow___3nmjb","icon-sprites":"style__icon-sprites___2GHz5","footerWrapper":"style__footerWrapper___zbtoF","container":"style__container___2PqEc","sitemap":"style__sitemap___2b9Al","facebook":"style__facebook___39dVV","twitter":"style__twitter___1oyfA","pinterest":"style__pinterest___2_EXF","instagram":"style__instagram___1nFr4","contact_info":"style__contact_info___31Ajw","powered":"style__powered___2okxk","serviceTitle":"style__serviceTitle___22DP1"};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint max-len: [2, 600, 4] */
	var scropllInProgress = false;

	function getScrollTo(section, elementID) {
	  var topElements = ['inicio', 'nosotros', 'equipo', 'servicios', 'contacto'];
	  if (topElements.indexOf(elementID) !== -1 || section === 'contacto') {
	    return 0;
	  }
	  return $('#' + elementID).offset().top - 220;
	}

	exports.default = function (location) {
	  // todo: get topElements from sitemap and improve exceptions "elementID"
	  var bits = location.pathname.split('/');
	  var elementID = location.pathname ? bits.pop() || 'inicio' : 'inicio';
	  if ($('.menu_trigger').is(':visible') && bits.length === 1) {
	    elementID = 'inicio';
	  }
	  if (bits[1] === 'contacto') {
	    elementID = 'contacto';
	  }
	  if ($('#' + elementID).length && !scropllInProgress) {
	    scropllInProgress = true;
	    var scrollTo = getScrollTo(bits[1], elementID);
	    var srolltime = 100;
	    var rootTag = typeof document.body.scrollTop !== 'undefined' ? 'body' : 'html, body';
	    $(rootTag).animate({
	      scrollTop: scrollTo
	    }, srolltime, 'swing', function () {
	      scropllInProgress = false;
	    });
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (elementID) {
	  $('.navbar-nav li.active').removeClass('active');
	  $('.navbar-nav a#' + elementID).parent().addClass('active');
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(26);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(28);

	var _block4 = _interopRequireDefault(_block3);

	var _block5 = __webpack_require__(30);

	var _block6 = _interopRequireDefault(_block5);

	var _block7 = __webpack_require__(39);

	var _block8 = _interopRequireDefault(_block7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var HomeSection = function (_React$Component) {
	  _inherits(HomeSection, _React$Component);

	  function HomeSection() {
	    _classCallCheck(this, HomeSection);

	    return _possibleConstructorReturn(this, (HomeSection.__proto__ || Object.getPrototypeOf(HomeSection)).apply(this, arguments));
	  }

	  _createClass(HomeSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, null),
	        _react2.default.createElement(_block4.default, null),
	        _react2.default.createElement(_block6.default, null),
	        _react2.default.createElement(_block8.default, null)
	      );
	    }
	  }]);

	  return HomeSection;
	}(_react2.default.Component);

	exports.default = HomeSection;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(27);

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, (Block1.__proto__ || Object.getPrototypeOf(Block1)).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block1 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-3' },
	              _react2.default.createElement('div', { className: style.icon1 })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-9' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title1 },
	                '¿Cómo podemos apoyarte en tu proyecto de investigación?'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;

/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1IAv0","vCenter":"style__vCenter___3op1c","iconBase1":"style__iconBase1___jpNPy","icon1":"style__icon1___1YYV3","icon2":"style__icon2___3C7SE","icon3":"style__icon3___Asxwl","icon5":"style__icon5___1szMg","icon18":"style__icon18___eR2Yw","icon6":"style__icon6___3MGvY","icon7":"style__icon7___1WX6I","icon8":"style__icon8___2cdLk","icon9":"style__icon9___3BHZQ","icon10":"style__icon10___1Rfrv","icon11":"style__icon11___14ATb","icon12":"style__icon12___3RaUb","icon13":"style__icon13___1ho_Q","icon14":"style__icon14___2k1Bv","icon15":"style__icon15___1i59u","icon16":"style__icon16___1vvEE","icon17":"style__icon17___1wAEL","vCenterRel":"style__vCenterRel___3rmpk","hCenter":"style__hCenter___bN1_x","inheritHeight":"style__inheritHeight___3EV0T","hideOverflow":"style__hideOverflow___1jYcy","icon-sprites":"style__icon-sprites___113mW","title1":"style__title1___1fgRn","title5":"style__title5___21deO","title6":"style__title6___2x7FO","title7":"style__title7___1Pacu","title9":"style__title9___3oCLz","title10":"style__title10___sRFKM","title8":"style__title8___1BoeB","block1":"style__block1___4ldXJ"};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(29);

	var Block2 = function (_React$Component) {
	  _inherits(Block2, _React$Component);

	  function Block2() {
	    _classCallCheck(this, Block2);

	    return _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).apply(this, arguments));
	  }

	  _createClass(Block2, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block2 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement('img', { src: '/images/home/Focus-FocusGroups-portada.png', className: 'img-responsive' }),
	              _react2.default.createElement('div', { className: style.icon2 }),
	              _react2.default.createElement(
	                'div',
	                { className: style.title },
	                'FOCUS GROUPS ',
	                _react2.default.createElement('br', null)
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.icon4 },
	                _react2.default.createElement(_svg2.default, { network: 'arrow_right' })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement('img', { src: '/images/home/Focus-ApoyoLogistico-portada.png', className: 'img-responsive' }),
	              _react2.default.createElement('div', { className: style.icon3 }),
	              _react2.default.createElement(
	                'div',
	                { className: style.title },
	                'APOYO LOGÍSTICO ',
	                _react2.default.createElement('br', null),
	                ' DE CAMPO'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.icon4 },
	                _react2.default.createElement(_svg2.default, { network: 'arrow_right' })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block2;
	}(_react2.default.Component);

	exports.default = Block2;

/***/ },
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___ByilZ","vCenter":"style__vCenter___1v0oL","iconBase1":"style__iconBase1___vWzSz","icon1":"style__icon1___3kcLC","icon2":"style__icon2___3MpNi","icon3":"style__icon3___WEXui","icon5":"style__icon5___2dAnj","icon18":"style__icon18___tWhCw","icon6":"style__icon6___2irWG","icon7":"style__icon7___2oLQS","icon8":"style__icon8___i_6LE","icon9":"style__icon9____Rlep","icon10":"style__icon10___2CuE9","icon11":"style__icon11___1Dsjf","icon12":"style__icon12___200Sv","icon13":"style__icon13___2LWt3","icon14":"style__icon14___1SzXZ","icon15":"style__icon15___3dpUd","icon16":"style__icon16___JwWga","icon17":"style__icon17___3G19k","vCenterRel":"style__vCenterRel___r367-","hCenter":"style__hCenter___35AKo","inheritHeight":"style__inheritHeight___GkUeM","hideOverflow":"style__hideOverflow___30PJL","icon-sprites":"style__icon-sprites___1crXd","block2":"style__block2___yxSll","title":"style__title___2JfTK","icon4":"style__icon4___3z4ow"};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _form = __webpack_require__(31);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(38);

	var Block3 = function (_React$Component) {
	  _inherits(Block3, _React$Component);

	  function Block3() {
	    _classCallCheck(this, Block3);

	    return _possibleConstructorReturn(this, (Block3.__proto__ || Object.getPrototypeOf(Block3)).apply(this, arguments));
	  }

	  _createClass(Block3, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block3 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title5 },
	                'Resultados Confiables ',
	                _react2.default.createElement('br', null),
	                ' Reales y Precisos'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.description + ' ' + style.title6 },
	                'Para mayor información acerca de nuestros servicios, preguntas o comentarios favor de llenar la siguiente forma'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement(_form2.default, null)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block3;
	}(_react2.default.Component);

	exports.default = Block3;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(32);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _restClient = __webpack_require__(33);

	var _restClient2 = _interopRequireDefault(_restClient);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 600, 4] */

	var style = __webpack_require__(37);

	var Form1 = function (_React$Component) {
	  _inherits(Form1, _React$Component);

	  function Form1(props) {
	    _classCallCheck(this, Form1);

	    var _this2 = _possibleConstructorReturn(this, (Form1.__proto__ || Object.getPrototypeOf(Form1)).call(this, props));

	    _this2.state = {
	      formData: _this2.getInitialFormState(),
	      requiredFields: _this2.getRequiredFields(_this2.getInitialFormState()),
	      showLoading: false
	    };

	    _this2.submitFormHandler = _this2.submitFormHandler.bind(_this2);
	    _this2.onChangeHandler = _this2.onChangeHandler.bind(_this2);
	    return _this2;
	  }

	  _createClass(Form1, [{
	    key: 'onChangeHandler',
	    value: function onChangeHandler(event) {
	      var formData = this.state.formData;
	      var _event$target = event.target;
	      var name = _event$target.name;
	      var value = _event$target.value;

	      formData[name].value = value;
	      this.setState({ formData: formData });
	    }
	  }, {
	    key: 'getRequiredFields',
	    value: function getRequiredFields(data) {
	      var fields = {};
	      _lodash2.default.map(data, function (item, index) {
	        if (item.require) {
	          fields[index] = item;
	        }
	      });
	      return fields;
	    }
	  }, {
	    key: 'getInitialFormState',
	    value: function getInitialFormState() {
	      return {
	        name: {
	          title: 'Nombre',
	          value: '',
	          require: true
	        },
	        email: {
	          title: 'Correo Electrónico',
	          value: '',
	          require: true
	        },
	        tel: {
	          title: 'Empresa',
	          value: '',
	          require: true
	        },
	        message: {
	          title: 'Mensaje',
	          value: '',
	          require: true
	        }
	      };
	    }
	  }, {
	    key: 'getHTMLMessage',
	    value: function getHTMLMessage(data) {
	      var response = _lodash2.default.map(data, function (item) {
	        return item.title + ': ' + item.value + '<br />';
	      });
	      return response.join('');
	    }
	  }, {
	    key: 'validateForm',
	    value: function validateForm(data, requiredFields) {
	      var response = true;
	      _lodash2.default.map(requiredFields, function (item, property) {
	        var labelElement = $('#lab_' + property);
	        if (!data.hasOwnProperty(property) || !data[property].value.length) {
	          if (response) {
	            response = false;
	          }
	          labelElement.addClass(style.errorCSSClass);
	        } else {
	          labelElement.removeClass(style.errorCSSClass);
	        }
	      });
	      return response;
	    }

	    /*
	    Handler function to validate form and send data
	    */

	  }, {
	    key: 'submitFormHandler',
	    value: function submitFormHandler(event) {
	      var _this3 = this;

	      event.preventDefault();
	      var formData = this.state.formData;
	      var isFormValid = this.validateForm(formData, this.state.requiredFields);
	      var msgElement = $('#msg');
	      msgElement.removeClass(style.errorCSSClass + ' ' + style.successCSSClass);
	      msgElement.html('');

	      if (isFormValid) {
	        (function () {
	          _this3.setState({
	            showLoading: true
	          });
	          msgElement.html('Enviando...');
	          var _this = _this3;
	          var html = _this3.getHTMLMessage(formData);
	          var data = {
	            fromname: formData.name.value,
	            replyto: formData.email.value,
	            subject: 'Forma de Contacto Website: NOTABLE',
	            html: html
	          };

	          (0, _restClient2.default)({
	            path: '/api/send_email',
	            method: 'POST',
	            entity: data
	          }).then(function (response) {
	            var state = {
	              showLoading: false
	            };
	            if (response.entity.status) {
	              state.formData = _this.getInitialFormState();
	            }
	            _this.setState(state);
	            msgElement.addClass(response.entity.status ? style.successCSSClass : style.errorCSSClass);
	            msgElement.html(response.entity.status ? 'Información enviada de manera exitosa, gracias.' : 'Lo sentimos, favor de intentar más tarde.');
	          });
	        })();
	      } else {
	        msgElement.addClass(style.errorCSSClass);
	      }
	      msgElement.html(!isFormValid ? 'Favor de llenar los campos en rojo.' : '');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state$formData = this.state.formData;
	      var name = _state$formData.name;
	      var email = _state$formData.email;
	      var tel = _state$formData.tel;
	      var message = _state$formData.message;


	      return _react2.default.createElement(
	        'form',
	        { id: 'form', className: style.form + ' form-horizontal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + style.formGroup },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10' },
	            _react2.default.createElement('input', { type: 'text', name: 'name', onChange: this.onChangeHandler, value: name.value, placeholder: name.title })
	          ),
	          _react2.default.createElement('div', { className: style.borderBottom2 })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + style.formGroup },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10' },
	            _react2.default.createElement('input', { type: 'tel', name: 'tel', onChange: this.onChangeHandler, value: tel.value, placeholder: tel.title })
	          ),
	          _react2.default.createElement('div', { className: style.borderBottom2 })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + style.formGroup },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10' },
	            _react2.default.createElement('input', { type: 'text', name: 'email', onChange: this.onChangeHandler, value: email.value, placeholder: email.title })
	          ),
	          _react2.default.createElement('div', { className: style.borderBottom2 })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + style.formGroup },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10' },
	            _react2.default.createElement('textarea', { type: 'text', name: 'message', onChange: this.onChangeHandler, value: message.value, placeholder: message.title })
	          ),
	          _react2.default.createElement('div', { className: style.borderBottom2 })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('span', { id: 'msg' })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.state.showLoading ? _react2.default.createElement(
	            'span',
	            { className: style.loader },
	            'Cargando'
	          ) : null
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + style.formGroup },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-10' },
	            _react2.default.createElement(
	              'div',
	              { className: 'pull-right' },
	              _react2.default.createElement(
	                'a',
	                { className: style.submit, onClick: this.submitFormHandler },
	                'ENVIAR',
	                _react2.default.createElement(_svg2.default, { network: 'arrow_right', className: style.svg })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Form1;
	}(_react2.default.Component);

	exports.default = Form1;

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rest = __webpack_require__(34);

	var _rest2 = _interopRequireDefault(_rest);

	var _mime = __webpack_require__(35);

	var _mime2 = _interopRequireDefault(_mime);

	var _errorCode = __webpack_require__(36);

	var _errorCode2 = _interopRequireDefault(_errorCode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _rest2.default.wrap(_mime2.default, { mime: 'application/json' }).wrap(_errorCode2.default, { code: 300 });

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("rest");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("rest/interceptor/mime");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("rest/interceptor/errorCode");

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___2Fdsc","vCenter":"style__vCenter___326IJ","vCenterRel":"style__vCenterRel___4_C2C","hCenter":"style__hCenter___2XMJE","inheritHeight":"style__inheritHeight___5Fyev","hideOverflow":"style__hideOverflow___3N6t-","icon-sprites":"style__icon-sprites___1IBbl","buttonBase1":"style__buttonBase1___3-9aM","button1":"style__button1___32jzC","submit":"style__submit___3y4I1","button2":"style__button2___1eTIn","title1":"style__title1___3QnpE","title5":"style__title5___3gyO3","title6":"style__title6___3mcUZ","title7":"style__title7___2tYLY","title9":"style__title9___2ZmTr","title10":"style__title10___wvVDz","title8":"style__title8___1Ai4T","form":"style__form___3w3uh","formGroup":"style__formGroup___1f9zT"};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1UpIU","vCenter":"style__vCenter___1YV9g","vCenterRel":"style__vCenterRel___1D8tj","hCenter":"style__hCenter___2TvfM","inheritHeight":"style__inheritHeight___3jids","hideOverflow":"style__hideOverflow___16pkQ","icon-sprites":"style__icon-sprites___3x6uL","title1":"style__title1___3QBup","title5":"style__title5___w6HV2","title6":"style__title6___8k-iy","title7":"style__title7___3kWyz","title9":"style__title9___2eqlu","title10":"style__title10___3vWP1","title8":"style__title8___3tkZ-","block3":"style__block3___2cywe","description":"style__description___3DSyr"};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(40);

	var Block4 = function (_React$Component) {
	  _inherits(Block4, _React$Component);

	  function Block4() {
	    _classCallCheck(this, Block4);

	    return _possibleConstructorReturn(this, (Block4.__proto__ || Object.getPrototypeOf(Block4)).apply(this, arguments));
	  }

	  _createClass(Block4, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block4 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-12' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title5 },
	                'Conoce más acerca de FOCUS Investigación de mercados'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-12' },
	              _react2.default.createElement(
	                'div',
	                { className: style.cta },
	                _react2.default.createElement(
	                  'a',
	                  { className: style.button2, onClick: this.submitFormHandler },
	                  'VISITA NUESTRO SITIO',
	                  _react2.default.createElement(_svg2.default, { network: 'arrow_right', className: style.svg })
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title7 },
	                _react2.default.createElement(
	                  'b',
	                  null,
	                  'Tijuana'
	                ),
	                _react2.default.createElement('br', null),
	                'Santa María #2841 Col. América Tijuana B.C. ',
	                _react2.default.createElement('br', null),
	                '22044 (664) 634 2930 y (664) 634 2815 ',
	                _react2.default.createElement('br', null),
	                'contactotij@focus.com.mx'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title7 },
	                _react2.default.createElement(
	                  'b',
	                  null,
	                  'Mexicali'
	                ),
	                _react2.default.createElement('br', null),
	                'Cetys Universidad Campus Mexicali Despacho #8010 ',
	                _react2.default.createElement('br', null),
	                '(686) 554 3347 y (686) 552 3345 ',
	                _react2.default.createElement('br', null),
	                'contacto@focus.com.mx'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block4;
	}(_react2.default.Component);

	exports.default = Block4;

/***/ },
/* 40 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___2Xb8X","vCenter":"style__vCenter___hmun0","vCenterRel":"style__vCenterRel___2lPVo","hCenter":"style__hCenter___1JZnn","inheritHeight":"style__inheritHeight___1rILl","hideOverflow":"style__hideOverflow___1Q2PJ","icon-sprites":"style__icon-sprites___38gIr","title1":"style__title1___25IAx","title5":"style__title5___T2PV8","title6":"style__title6___G7Bi3","title7":"style__title7___18HEf","title9":"style__title9___3NVGB","title10":"style__title10___kxsnJ","title8":"style__title8___1HuLF","buttonBase1":"style__buttonBase1___3z8Mz","button1":"style__button1___1hNj-","button2":"style__button2___1PxHI","block4":"style__block4___3PLzc","cta":"style__cta___1iNEx"};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(42);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(44);

	var _block4 = _interopRequireDefault(_block3);

	var _block5 = __webpack_require__(46);

	var _block6 = _interopRequireDefault(_block5);

	var _block7 = __webpack_require__(48);

	var _block8 = _interopRequireDefault(_block7);

	var _block9 = __webpack_require__(53);

	var _block10 = _interopRequireDefault(_block9);

	var _block11 = __webpack_require__(56);

	var _block12 = _interopRequireDefault(_block11);

	var _block13 = __webpack_require__(60);

	var _block14 = _interopRequireDefault(_block13);

	var _block15 = __webpack_require__(30);

	var _block16 = _interopRequireDefault(_block15);

	var _block17 = __webpack_require__(39);

	var _block18 = _interopRequireDefault(_block17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutSection = function (_React$Component) {
	  _inherits(AboutSection, _React$Component);

	  function AboutSection() {
	    _classCallCheck(this, AboutSection);

	    return _possibleConstructorReturn(this, (AboutSection.__proto__ || Object.getPrototypeOf(AboutSection)).apply(this, arguments));
	  }

	  _createClass(AboutSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, null),
	        _react2.default.createElement(_block4.default, null),
	        _react2.default.createElement(_block6.default, null),
	        _react2.default.createElement(_block8.default, null),
	        _react2.default.createElement(_block10.default, null),
	        _react2.default.createElement(_block12.default, null),
	        _react2.default.createElement(_block14.default, null),
	        _react2.default.createElement(_block16.default, null),
	        _react2.default.createElement(_block18.default, null)
	      );
	    }
	  }]);

	  return AboutSection;
	}(_react2.default.Component);

	exports.default = AboutSection;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(43);

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, (Block1.__proto__ || Object.getPrototypeOf(Block1)).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block1 },
	        _react2.default.createElement('div', { className: style.icon2 }),
	        _react2.default.createElement(
	          'div',
	          { className: style.title5 },
	          'CÁMARA GESELL Y ',
	          _react2.default.createElement('br', null),
	          'FOCUS GROUPS'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: style.icon4 },
	          _react2.default.createElement(_svg2.default, { network: 'arrow_down' })
	        )
	      );
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___31Hcb","vCenter":"style__vCenter___1vIHp","iconBase1":"style__iconBase1___1G8eC","icon1":"style__icon1___3tgx_","icon2":"style__icon2___1yE6B","icon3":"style__icon3___1SyK0","icon5":"style__icon5___6HIE0","icon18":"style__icon18___2cC69","icon6":"style__icon6___axw__","icon7":"style__icon7___38kd3","icon8":"style__icon8___234v_","icon9":"style__icon9___d3K-u","icon10":"style__icon10___3z7eG","icon11":"style__icon11___kvQFW","icon12":"style__icon12___1Yjwa","icon13":"style__icon13___2CKY7","icon14":"style__icon14___3Y8Bm","icon15":"style__icon15___311NX","icon16":"style__icon16___1TRPT","icon17":"style__icon17___3tM_i","vCenterRel":"style__vCenterRel___370S2","hCenter":"style__hCenter___35qeO","inheritHeight":"style__inheritHeight___1sRB4","hideOverflow":"style__hideOverflow___3Yokh","icon-sprites":"style__icon-sprites___1i1iv","title1":"style__title1___1LlDm","title5":"style__title5___1Vr2v","title6":"style__title6___2K-qx","title7":"style__title7___3y_yN","title9":"style__title9___3uBxl","title10":"style__title10___1vDy9","title8":"style__title8___1urYo","block1":"style__block1___1lHDD","icon4":"style__icon4___3G-d7"};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(45);

	var Block2 = function (_React$Component) {
	  _inherits(Block2, _React$Component);

	  function Block2() {
	    _classCallCheck(this, Block2);

	    return _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).apply(this, arguments));
	  }

	  _createClass(Block2, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block2 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-10 col-sm-offset-1' },
	              _react2.default.createElement('div', { className: style.icon5 }),
	              _react2.default.createElement(
	                'div',
	                { className: style.title8 },
	                'Somos tus aliados en proyectos cualitativos, contamos con más de 18 años de experiencia, la mejor opción de cámara gesell en Tijuana y equipo de reclutamiento especializado en toda la región.'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block2;
	}(_react2.default.Component);

	exports.default = Block2;

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___xP6Z-","vCenter":"style__vCenter___3EDwH","iconBase1":"style__iconBase1___vEUsJ","icon1":"style__icon1___KDca6","icon2":"style__icon2___3a-qc","icon3":"style__icon3___3E1x6","icon5":"style__icon5___32ufr","icon18":"style__icon18___1bTR5","icon6":"style__icon6___2w3-v","icon7":"style__icon7___3MlVX","icon8":"style__icon8___2a2GL","icon9":"style__icon9___2E3gV","icon10":"style__icon10___3ZkMF","icon11":"style__icon11___vXrcq","icon12":"style__icon12___2UqBb","icon13":"style__icon13___FaqSc","icon14":"style__icon14___20zbo","icon15":"style__icon15___3Ipyh","icon16":"style__icon16___59OTs","icon17":"style__icon17___1Xoxg","vCenterRel":"style__vCenterRel___1d1I_","hCenter":"style__hCenter___3LKuT","inheritHeight":"style__inheritHeight___11OVE","hideOverflow":"style__hideOverflow___1koJ0","icon-sprites":"style__icon-sprites___2uiLf","title1":"style__title1___2c1PC","title5":"style__title5___XOjHY","title6":"style__title6___2E_cG","title7":"style__title7___21JO_","title9":"style__title9___1XDH4","title10":"style__title10___WuBTc","title8":"style__title8___36gBQ","block2":"style__block2___2ZcHI"};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(47);

	var Block3 = function (_React$Component) {
	  _inherits(Block3, _React$Component);

	  function Block3() {
	    _classCallCheck(this, Block3);

	    return _possibleConstructorReturn(this, (Block3.__proto__ || Object.getPrototypeOf(Block3)).apply(this, arguments));
	  }

	  _createClass(Block3, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block3 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title8 },
	                'Servicio de Reclutamiento Especializado'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.title9 },
	                _react2.default.createElement(
	                  'ul',
	                  { className: style.list1 },
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Personal con experiencia dedicado a reclutar.'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Aseguramos el target solicitado con llenado de filtro previo'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Control interno de reclutados para evitar su participación frecuente.'
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title8 },
	                'Coordinación Profesional del Proyecto'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.title9 },
	                _react2.default.createElement(
	                  'ul',
	                  { className: style.list1 },
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Asignamos un coordinador para la logística y seguimiento de tu proyecto. (Focus group , entrevistas y entnografías)'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Podrás conocer el estatus de tu proyecto en todo momento.'
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'Nos adecuamos a tu sistema de control del estudio.'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block3;
	}(_react2.default.Component);

	exports.default = Block3;

/***/ },
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1cV0K","vCenter":"style__vCenter___36W6o","iconBase1":"style__iconBase1___2Szb5","icon1":"style__icon1___2mIJx","icon2":"style__icon2___1sEMe","icon3":"style__icon3___2Zzlz","icon5":"style__icon5___FaVz4","icon18":"style__icon18___3ew7e","icon6":"style__icon6___3kAPx","icon7":"style__icon7___1y6RQ","icon8":"style__icon8___3RsbQ","icon9":"style__icon9___2TSxY","icon10":"style__icon10___190fa","icon11":"style__icon11___2lm4y","icon12":"style__icon12___2ts8f","icon13":"style__icon13___3TLEh","icon14":"style__icon14___2B9Pm","icon15":"style__icon15___2GYpJ","icon16":"style__icon16___34-wK","icon17":"style__icon17___23zqT","vCenterRel":"style__vCenterRel___1YqGI","hCenter":"style__hCenter___3Rsy5","inheritHeight":"style__inheritHeight___2L2YW","hideOverflow":"style__hideOverflow___R7Nky","icon-sprites":"style__icon-sprites___1R2yV","title1":"style__title1___36WkF","title5":"style__title5___1hZAj","title6":"style__title6___3ZgkO","title7":"style__title7___3fXSj","title9":"style__title9___bvzMX","title10":"style__title10___3FA6a","title8":"style__title8___zKD-A","list1":"style__list1___P9TuL","block3":"style__block3___13Edl"};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(32);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _carousel = __webpack_require__(49);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _imageUtil = __webpack_require__(50);

	var _data = __webpack_require__(51);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(52);

	var Block4 = function (_React$Component) {
	  _inherits(Block4, _React$Component);

	  function Block4() {
	    _classCallCheck(this, Block4);

	    return _possibleConstructorReturn(this, (Block4.__proto__ || Object.getPrototypeOf(Block4)).apply(this, arguments));
	  }

	  _createClass(Block4, [{
	    key: 'renderItems',
	    value: function renderItems(data) {
	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          var divStyle = (0, _imageUtil.getImageBackground)(item.image);
	          var className = index === 0 ? 'active' : '';
	          return _react2.default.createElement(
	            'div',
	            { className: 'item ' + (style.item || '') + ' ' + className, key: index, style: divStyle },
	            _react2.default.createElement('div', { className: 'container-fluid' })
	          );
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var carouselClasses = {
	        inner: style.inner,
	        controls: {
	          base: style.controls,
	          prev: style.prev,
	          next: style.next,
	          arrow: style.arrow
	        }
	      };
	      return _react2.default.createElement(
	        'div',
	        { className: style.block4 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-8' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title1 },
	                'RENTA DE ',
	                _react2.default.createElement('br', null),
	                'CÁMARA DE GESELL'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.title6 },
	                'La cámara Gesell está completamente equipada para la realización de focus groups.'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4' },
	              _react2.default.createElement('div', { className: style.icon18 }),
	              _react2.default.createElement(
	                'div',
	                { className: style.title6 },
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'Somos parte de la selección de Focus Vision, líder global en trasmisión en vivo de video de estudios cualitativos'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-12' },
	              _react2.default.createElement(
	                _carousel2.default,
	                { id: 'carousel-section2-block4', interval: 8000, indicators: false, classes: carouselClasses },
	                this.renderItems(_data2.default)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block4;
	}(_react2.default.Component);

	exports.default = Block4;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(32);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var Carousel = function (_React$Component) {
	  _inherits(Carousel, _React$Component);

	  function Carousel() {
	    _classCallCheck(this, Carousel);

	    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
	  }

	  _createClass(Carousel, [{
	    key: 'getIndicators',
	    value: function getIndicators(sliderId, isVisible, data, indicatorClass) {
	      var indicators = [];
	      if (isVisible !== false && _lodash2.default.isArray(data) && data.length) {
	        var _ret = function () {
	          var activeClassName = indicatorClass && indicatorClass.active ? 'active ' + indicatorClass.active : 'active';
	          indicators = data.map(function (item, index) {
	            var className = index === 0 ? activeClassName : '';
	            return _react2.default.createElement('li', { 'data-target': '#' + sliderId, 'data-slide-to': index, className: className, key: index });
	          });
	          return {
	            v: _react2.default.createElement(
	              'ol',
	              { className: 'carousel-indicators ' + (indicatorClass.base || '') },
	              indicators
	            )
	          };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	      return null;
	    }
	  }, {
	    key: 'getControls',
	    value: function getControls(sliderId, isVisible, classes) {
	      var base = classes.base;
	      var prev = classes.prev;
	      var next = classes.next;
	      var arrow = classes.arrow;

	      if (isVisible !== false) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'a',
	            { className: 'left carousel-control ' + (base || '') + ' ' + (prev || ''), href: '#' + sliderId, role: 'button', 'data-slide': 'prev' },
	            _react2.default.createElement(_svg2.default, { network: 'carousel_left', className: arrow }),
	            _react2.default.createElement(
	              'span',
	              { className: 'sr-only' },
	              'Previous'
	            )
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: 'right carousel-control ' + (base || '') + ' ' + (next || ''), href: '#' + sliderId, role: 'button', 'data-slide': 'next' },
	            _react2.default.createElement(_svg2.default, { network: 'carousel_right', className: arrow }),
	            _react2.default.createElement(
	              'span',
	              { className: 'sr-only' },
	              'Next'
	            )
	          )
	        );
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var id = _props.id;
	      var interval = _props.interval;
	      var children = _props.children;
	      var indicators = _props.indicators;
	      var controls = _props.controls;
	      var classes = _props.classes;

	      return _react2.default.createElement(
	        'div',
	        { id: id, className: 'carousel slide', 'data-ride': 'carousel', 'data-interval': interval || 8000 },
	        this.getIndicators(id, indicators, children, classes.indicator),
	        _react2.default.createElement(
	          'div',
	          { className: 'carousel-inner ' + (classes.inner || ''), role: 'listbox' },
	          children
	        ),
	        this.getControls(id, controls, classes.controls)
	      );
	    }
	  }]);

	  return Carousel;
	}(_react2.default.Component);

	exports.default = Carousel;


	Carousel.propTypes = {
	  id: _react2.default.PropTypes.string.isRequired,
	  interval: _react2.default.PropTypes.number.isRequired,
	  children: _react2.default.PropTypes.any,
	  indicators: _react2.default.PropTypes.bool,
	  controls: _react2.default.PropTypes.bool,
	  classes: _react2.default.PropTypes.object
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getImageBackground = getImageBackground;
	exports.normalizeImageUrl = normalizeImageUrl;

	var _lodash = __webpack_require__(32);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getImageBackground(data) {
	  var imgUrl = '';
	  if (_lodash2.default.isObject(data) && data.src) {
	    imgUrl = data.src.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
	  } else if (_lodash2.default.isString(data) && data) {
	    imgUrl = data.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
	  }
	  return imgUrl ? {
	    backgroundImage: 'url(' + imgUrl + ')'
	  } : null;
	} /* eslint max-len: [2, 500, 4] */
	function normalizeImageUrl(data) {
	  return data.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  image: '/images/focus-groups/carousel/Focus-Camaragesell-01.png'
	}, {
	  image: '/images/focus-groups/carousel/Focus-Camaragesell-02.png'
	}, {
	  image: '/images/focus-groups/carousel/Focus-Camaragesell-03.png'
	}, {
	  image: '/images/focus-groups/carousel/Focus-Camaragesell-04.png'
	}, {
	  image: '/images/focus-groups/carousel/Focus-Camaragesell-05.png'
	}, {
	  image: '/images/focus-groups/carousel/Focus-Camaragesell-06.png'
	}, {
	  image: '/images/focus-groups/carousel/Focus-Camaragesell-07.png'
	}];

/***/ },
/* 52 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___3P8Pp","vCenter":"style__vCenter___2Et1N","iconBase1":"style__iconBase1___vyKYi","icon1":"style__icon1___2P3S8","icon2":"style__icon2___2VgtC","icon3":"style__icon3___2eAU3","icon5":"style__icon5___1FGka","icon18":"style__icon18___11aZY","icon6":"style__icon6___19fAs","icon7":"style__icon7___3rbhH","icon8":"style__icon8___3-Jsf","icon9":"style__icon9___3Y9ki","icon10":"style__icon10___2qw99","icon11":"style__icon11___2XWsk","icon12":"style__icon12___2LHxW","icon13":"style__icon13___1tU1N","icon14":"style__icon14___2YcP2","icon15":"style__icon15___1owP4","icon16":"style__icon16___2fWoP","icon17":"style__icon17___128_0","vCenterRel":"style__vCenterRel___3DCRz","hCenter":"style__hCenter___wKyoU","inheritHeight":"style__inheritHeight___1zL8U","hideOverflow":"style__hideOverflow___3ZV71","icon-sprites":"style__icon-sprites___8RQVq","title1":"style__title1___1w9oV","title5":"style__title5___TtpHn","title6":"style__title6___eDkzQ","title7":"style__title7___1eGbP","title9":"style__title9___3IKbC","title10":"style__title10___2fVTb","title8":"style__title8___3UdhB","list1":"style__list1___1nnPU","block4":"style__block4___3WbAu","item":"style__item___1iMUQ","controls":"style__controls___-UIba"};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	var _data = __webpack_require__(54);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(55);

	var Block5 = function (_React$Component) {
	  _inherits(Block5, _React$Component);

	  function Block5() {
	    _classCallCheck(this, Block5);

	    return _possibleConstructorReturn(this, (Block5.__proto__ || Object.getPrototypeOf(Block5)).apply(this, arguments));
	  }

	  _createClass(Block5, [{
	    key: 'renderColumn',
	    value: function renderColumn(data) {
	      return _react2.default.createElement(
	        'div',
	        null,
	        data.items.map(function (item, index) {
	          return _react2.default.createElement(
	            'div',
	            { key: index },
	            _react2.default.createElement(
	              'div',
	              { className: style.item },
	              _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-sm-4' },
	                  _react2.default.createElement('i', { className: item.icon })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-sm-7' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: style.title9 },
	                    item.text
	                  )
	                )
	              )
	            )
	          );
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data1 = _data2.default.data1;
	      var data2 = _data2.default.data2;

	      return _react2.default.createElement(
	        'div',
	        { className: style.block5 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title10 },
	                data1.title
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.content },
	                this.renderColumn(data1)
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-6' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title10 },
	                data2.title
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.content2 },
	                this.renderColumn(data2)
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: style.cta },
	              _react2.default.createElement(
	                'a',
	                { className: style.button2, onClick: this.submitFormHandler },
	                'CONTÁCTANOS',
	                _react2.default.createElement(_svg2.default, { network: 'arrow_right', className: style.svg })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block5;
	}(_react2.default.Component);

	exports.default = Block5;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint max-len: [2, 500, 4] */

	var style = __webpack_require__(55);

	exports.default = {
	  data1: {
	    title: 'Instalaciones',
	    items: [{
	      icon: style.icon6,
	      text: 'Sala de espera equipada para participantes de sesiones.'
	    }, {
	      icon: style.icon7,
	      text: 'Cámara Gesell con mesa redonda para 12 personas.'
	    }, {
	      icon: style.icon8,
	      text: 'Área de observación directa con vidrio de piso a techo y sala con circuito cerrado.'
	    }, {
	      icon: style.icon9,
	      text: 'Cómodas y modernas instalaciones.'
	    }, {
	      icon: style.icon10,
	      text: 'Equipada para traducción simultánea.'
	    }, {
	      icon: style.icon11,
	      text: 'Ubicada estratégicamente en la zona gastronómica, hotelera y financiera de Tijuana. Con amplio estacionamiento.'
	    }]
	  },
	  data2: {
	    title: 'Servicios Complementarios',
	    items: [{
	      icon: style.icon12,
	      text: 'Atención personalizada de recepción de participantes, llenado de filtros y entrega de obsequios.'
	    }, {
	      icon: style.icon13,
	      text: 'Bocadillos y Coffee Break para participantes y clientes.'
	    }, {
	      icon: style.icon14,
	      text: 'Transmisión de sesiones en vivo vía Internet.'
	    }, {
	      icon: style.icon15,
	      text: 'Traducción simultánea.'
	    }, {
	      icon: style.icon16,
	      text: 'Entrega de incentivos a participantes.'
	    }, {
	      icon: style.icon17,
	      text: 'Entrega final de material: filtros, documentación general de target, videos y audios.'
	    }]
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___2hB4-","vCenter":"style__vCenter___1T9ty","iconBase1":"style__iconBase1___1ZMRL","icon1":"style__icon1___1lQ3n","icon2":"style__icon2___36VkM","icon3":"style__icon3___1V7JI","icon5":"style__icon5___1dja6","icon18":"style__icon18___2hIqC","icon6":"style__icon6___1okrm","icon7":"style__icon7___3knKr","icon8":"style__icon8___3DQMq","icon9":"style__icon9___24H9P","icon10":"style__icon10___3Bbf9","icon11":"style__icon11___2_pH2","icon12":"style__icon12___25PzX","icon13":"style__icon13___LlJtr","icon14":"style__icon14___VOmxW","icon15":"style__icon15___2v2l-","icon16":"style__icon16___1AdfK","icon17":"style__icon17___1H8NS","vCenterRel":"style__vCenterRel___1eTtv","hCenter":"style__hCenter___3rAH4","inheritHeight":"style__inheritHeight___rxPQW","hideOverflow":"style__hideOverflow___3fx1Y","icon-sprites":"style__icon-sprites___2Jx7f","title1":"style__title1___3OYdf","title5":"style__title5___m4d_4","title6":"style__title6___N7pUo","title7":"style__title7___VqQ4U","title9":"style__title9___iJFPc","title10":"style__title10___3lYUp","title8":"style__title8___2zEnq","buttonBase1":"style__buttonBase1___eBItz","button1":"style__button1___9YZAe","button2":"style__button2___Uj5BF","block5":"style__block5___25GTL","content":"style__content___1fHlS","content2":"style__content2___3besd","item":"style__item___31bDr","cta":"style__cta___3mEBX"};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(32);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactSlick = __webpack_require__(57);

	var _reactSlick2 = _interopRequireDefault(_reactSlick);

	var _data = __webpack_require__(58);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


	var style = __webpack_require__(59);

	var Block6 = function (_React$Component) {
	  _inherits(Block6, _React$Component);

	  function Block6() {
	    _classCallCheck(this, Block6);

	    return _possibleConstructorReturn(this, (Block6.__proto__ || Object.getPrototypeOf(Block6)).apply(this, arguments));
	  }

	  _createClass(Block6, [{
	    key: 'renderItems',
	    value: function renderItems(data) {
	      if (_lodash2.default.isArray(data) && data.length) {
	        return data.map(function (item, index) {
	          return _react2.default.createElement(
	            'div',
	            { key: index },
	            _react2.default.createElement('img', { src: item.image })
	          );
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var settings = {
	        dots: true,
	        infinite: true,
	        speed: 500,
	        responsive: [{
	          breakpoint: 420,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 1
	          }
	        }, {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 2
	          }
	        }, {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 5,
	            slidesToScroll: 4
	          }
	        }, {
	          breakpoint: 100000,
	          settings: {
	            slidesToShow: 6,
	            slidesToScroll: 5
	          }
	        }]
	      };
	      return _react2.default.createElement(
	        'div',
	        { className: style.block6 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title8 },
	                'NUESTRA EXPERIENCIA'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-8' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title8 },
	                'Hemos colaborado con las mejores agencias de investigación de mercados a nivel nacional.'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: style.slider },
	              _react2.default.createElement(
	                _reactSlick2.default,
	                settings,
	                this.renderItems(_data2.default)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block6;
	}(_react2.default.Component);

	exports.default = Block6;

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("react-slick");

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  image: '/images/focus-groups/slider/Logo-berumen.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-elinstituto.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-GDV.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-gfk.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-insitum.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-ipsos.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-iq.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-kp.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-lamarcalab.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-lexia.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-mb.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-nodo.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-nr.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-parametria.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-person.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-phenoma.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-qsolutions.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-serta.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-sigmados.jpg'
	}, {
	  image: '/images/focus-groups/slider/logo-tns.jpg'
	}];

/***/ },
/* 59 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___5Hdev","vCenter":"style__vCenter___2R7xI","vCenterRel":"style__vCenterRel___1n4Yk","hCenter":"style__hCenter___3Hr8B","inheritHeight":"style__inheritHeight___1S0fd","hideOverflow":"style__hideOverflow___ABBe6","icon-sprites":"style__icon-sprites___3FKSV","title1":"style__title1___3gJwS","title5":"style__title5___1rO0v","title6":"style__title6___19b6v","title7":"style__title7___3lYX3","title9":"style__title9___1eXFV","title10":"style__title10___1kxNv","title8":"style__title8___2nnP7","block6":"style__block6___1xbXn","item":"style__item___19454","controls":"style__controls___tuP_g","slider":"style__slider___2lmu6"};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _svg = __webpack_require__(17);

	var _svg2 = _interopRequireDefault(_svg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(61);

	var Block7 = function (_React$Component) {
	  _inherits(Block7, _React$Component);

	  function Block7() {
	    _classCallCheck(this, Block7);

	    return _possibleConstructorReturn(this, (Block7.__proto__ || Object.getPrototypeOf(Block7)).apply(this, arguments));
	  }

	  _createClass(Block7, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block7 },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-fluid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-4' },
	              _react2.default.createElement(
	                'div',
	                { className: style.title8 },
	                'UBICACIÓN'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: style.title6 },
	                _react2.default.createElement(
	                  'b',
	                  null,
	                  'Tijuana'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'Santa María #2841 Col. América Tijuana B.C. 22044'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  '(664) 634 2930 y (664) 634 2815'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'Ubicación estratégica en la zona gastronómica, hotelera y financiera de Tijuana.'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'Contamos con amplio estacionamiento.'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: style.cta },
	                  _react2.default.createElement(
	                    'a',
	                    { className: style.button1, onClick: this.submitFormHandler },
	                    'VER EN GOOGLE MAPS',
	                    _react2.default.createElement(_svg2.default, { network: 'arrow_right', className: style.svg })
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-8' },
	              _react2.default.createElement('img', { src: '/images/focus-groups/Focus-Mapa.jpg', className: 'img-responsive' })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Block7;
	}(_react2.default.Component);

	exports.default = Block7;

/***/ },
/* 61 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fCenter":"style__fCenter___1YJUo","vCenter":"style__vCenter___1XSDF","vCenterRel":"style__vCenterRel___1J02z","hCenter":"style__hCenter___2Tdv3","inheritHeight":"style__inheritHeight___fdY-6","hideOverflow":"style__hideOverflow___GHITu","icon-sprites":"style__icon-sprites___1TCxk","title1":"style__title1___3raEq","title5":"style__title5___14ULg","title6":"style__title6___3Jlc3","title7":"style__title7___1VsjO","title9":"style__title9___28hRl","title10":"style__title10___3lUTy","title8":"style__title8___1VtVb","buttonBase1":"style__buttonBase1___3uoWJ","button1":"style__button1___2lmPw","button2":"style__button2___1v8SZ","block7":"style__block7___273ic"};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _block = __webpack_require__(63);

	var _block2 = _interopRequireDefault(_block);

	var _block3 = __webpack_require__(65);

	var _block4 = _interopRequireDefault(_block3);

	var _block5 = __webpack_require__(67);

	var _block6 = _interopRequireDefault(_block5);

	var _block7 = __webpack_require__(69);

	var _block8 = _interopRequireDefault(_block7);

	var _block9 = __webpack_require__(71);

	var _block10 = _interopRequireDefault(_block9);

	var _block11 = __webpack_require__(73);

	var _block12 = _interopRequireDefault(_block11);

	var _block13 = __webpack_require__(75);

	var _block14 = _interopRequireDefault(_block13);

	var _block15 = __webpack_require__(30);

	var _block16 = _interopRequireDefault(_block15);

	var _block17 = __webpack_require__(39);

	var _block18 = _interopRequireDefault(_block17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ServicesSection = function (_React$Component) {
	  _inherits(ServicesSection, _React$Component);

	  function ServicesSection() {
	    _classCallCheck(this, ServicesSection);

	    return _possibleConstructorReturn(this, (ServicesSection.__proto__ || Object.getPrototypeOf(ServicesSection)).apply(this, arguments));
	  }

	  _createClass(ServicesSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_block2.default, null),
	        _react2.default.createElement(_block4.default, null),
	        _react2.default.createElement(_block6.default, null),
	        _react2.default.createElement(_block8.default, null),
	        _react2.default.createElement(_block10.default, null),
	        _react2.default.createElement(_block12.default, null),
	        _react2.default.createElement(_block14.default, null),
	        _react2.default.createElement(_block16.default, null),
	        _react2.default.createElement(_block18.default, null)
	      );
	    }
	  }]);

	  return ServicesSection;
	}(_react2.default.Component);

	exports.default = ServicesSection;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(64);

	var Block1 = function (_React$Component) {
	  _inherits(Block1, _React$Component);

	  function Block1() {
	    _classCallCheck(this, Block1);

	    return _possibleConstructorReturn(this, (Block1.__proto__ || Object.getPrototypeOf(Block1)).apply(this, arguments));
	  }

	  _createClass(Block1, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block1 },
	        'bloque1services'
	      );
	    }
	  }]);

	  return Block1;
	}(_react2.default.Component);

	exports.default = Block1;

/***/ },
/* 64 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(66);

	var Block2 = function (_React$Component) {
	  _inherits(Block2, _React$Component);

	  function Block2() {
	    _classCallCheck(this, Block2);

	    return _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).apply(this, arguments));
	  }

	  _createClass(Block2, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block5 },
	        'block2'
	      );
	    }
	  }]);

	  return Block2;
	}(_react2.default.Component);

	exports.default = Block2;

/***/ },
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(68);

	var Block3 = function (_React$Component) {
	  _inherits(Block3, _React$Component);

	  function Block3() {
	    _classCallCheck(this, Block3);

	    return _possibleConstructorReturn(this, (Block3.__proto__ || Object.getPrototypeOf(Block3)).apply(this, arguments));
	  }

	  _createClass(Block3, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block5 },
	        'block3'
	      );
	    }
	  }]);

	  return Block3;
	}(_react2.default.Component);

	exports.default = Block3;

/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(70);

	var Block4 = function (_React$Component) {
	  _inherits(Block4, _React$Component);

	  function Block4() {
	    _classCallCheck(this, Block4);

	    return _possibleConstructorReturn(this, (Block4.__proto__ || Object.getPrototypeOf(Block4)).apply(this, arguments));
	  }

	  _createClass(Block4, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block5 },
	        'block4'
	      );
	    }
	  }]);

	  return Block4;
	}(_react2.default.Component);

	exports.default = Block4;

/***/ },
/* 70 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(72);

	var Block5 = function (_React$Component) {
	  _inherits(Block5, _React$Component);

	  function Block5() {
	    _classCallCheck(this, Block5);

	    return _possibleConstructorReturn(this, (Block5.__proto__ || Object.getPrototypeOf(Block5)).apply(this, arguments));
	  }

	  _createClass(Block5, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block5 },
	        'block5'
	      );
	    }
	  }]);

	  return Block5;
	}(_react2.default.Component);

	exports.default = Block5;

/***/ },
/* 72 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(74);

	var Block6 = function (_React$Component) {
	  _inherits(Block6, _React$Component);

	  function Block6() {
	    _classCallCheck(this, Block6);

	    return _possibleConstructorReturn(this, (Block6.__proto__ || Object.getPrototypeOf(Block6)).apply(this, arguments));
	  }

	  _createClass(Block6, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block5 },
	        'block6'
	      );
	    }
	  }]);

	  return Block6;
	}(_react2.default.Component);

	exports.default = Block6;

/***/ },
/* 74 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(76);

	var Block7 = function (_React$Component) {
	  _inherits(Block7, _React$Component);

	  function Block7() {
	    _classCallCheck(this, Block7);

	    return _possibleConstructorReturn(this, (Block7.__proto__ || Object.getPrototypeOf(Block7)).apply(this, arguments));
	  }

	  _createClass(Block7, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: style.block5 },
	        'block7'
	      );
	    }
	  }]);

	  return Block7;
	}(_react2.default.Component);

	exports.default = Block7;

/***/ },
/* 76 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);