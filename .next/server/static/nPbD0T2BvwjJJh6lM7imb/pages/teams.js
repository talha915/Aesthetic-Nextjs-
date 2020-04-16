module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dFpZ");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Cgje":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "/static/style.css",
      rel: "stylesheet"
    })), __jsx("header", {
      className: "header"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: "images/logo.png",
      alt: "Aesthetic Record"
    })))), __jsx("input", {
      type: "checkbox",
      id: "menu"
    }), __jsx("label", {
      className: "nav-opener",
      htmlFor: "menu"
    }, __jsx("span", null)), __jsx("span", {
      className: "overlay"
    }), __jsx("nav", {
      className: "main-nav"
    }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Features")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/priceplans"
    }, __jsx("a", {
      href: "#"
    }, "Plans & Pricing"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/learn"
    }, __jsx("a", null, "Learning Lab"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/marketplace"
    }, __jsx("a", null, "Marketplace")))), __jsx("ul", {
      className: "user-info"
    }, __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Login")), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "btn"
    }, "Start Free Trial")))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "QXRP":
/***/ (function(module) {

module.exports = JSON.parse("{\"ourteams\":[{\"image\":\"images/img18.jpg\",\"name\":\"Justin Harper\",\"designation\":\"Founder & CEO \",\"readBio\":\"Read bio\",\"detailName\":\"Justin Harper, MD\",\"detailedRole\":\"Dr. Justin Harper is an Aesthetic Physician and healthcare innovator with a diverse background encompassing plastic surgery, dermatology, and medical technology. He founded Juvly Aesthetics in Columbus, OH in 2014, and in five years has grown a single practice to 12 locations across 5 states with yearly revenues exceeding $16M. Under Dr. Harper’s leadership, Juvly has become the largest independently-owned Medical Spa chain in the Aesthetics industry and a center of excellence for technique and thought leadership. In addition to his work at Juvly, Dr. Harper is actively involved in designing new studies and participating in ongoing clinical research across the industry. Dr. Harper is often called upon for his expertise in both clinical and business operations, serving as an industry consultant and media spokesman for key aesthetic manufacturers. Additionally, he enjoys teaching and training others and has been a National Trainer & Advisor for Allergan & Galderma (GAIN) for several years. In 2019, he founded Aesthetic Next, a multi-disciplinary, immersive industry conference in Dallas, TX, that focuses on clinical applications, practice management, and technology enabled growth for Aesthetic practices. Known for it’s international faculty lineup, Aesthetic Next has quickly become a favorite among those looking for a unique experience to advance their technical skills. As a lifelong technology innovator, Dr. Harper quickly identified a major gap in medical spa management software, and in 2016 he founded Aesthetic Record, an end-to-end EMR & Practice Management software that brings the sophistication of data-driven operations to aesthetic practices of all sizes. With over 300 features including a complete clinical photography suite, fully integrated revenue generation platform, and advanced business insights, this technology has grown at an explosive rate both in size and capabilities. AR now powers over 900 practices & 3500 users across 9 countries with no signs of slowing. Now with offices in Columbus, OH and Dallas, TX, Dr. Harper continues to drive the company toward innovative solutions and industry disruption. \",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img22.jpg\"},{\"image\":\"images/img19.jpg\",\"name\":\"Tiphany Lopez\",\"designation\":\"Chief Growth Officer \",\"readBio\":\"Read bio\",\"detailName\":\"Tiphany Lopez, PhD, MBA\",\"detailedRole\":\"Tiphany serves as the Chief Growth Officer at Aesthetic Record where she oversees the Sales, Training & Technology Teams in Dallas, TX, Columbus, OH and Mohali, India. In addition, she works closely with Industry Partners to expand the digital footprint of AR with key 3rd party platform integrations and future-focused feature developments to serve the growing AR userbase. In the last year, she’s led Aesthetic Record to triple digit growth in both its user base and annual recurring revenue, more than doubling the sales & training teams to meet the increased demand. While technology innovation is her passion, she’s spent the last 13 years working with Fortune 500 companies to standardize their “people intensive” operations from front-line associates to C-Suite executives. She’s worked in the trenches, scaling business operations for companies like Walmart, Inc., Dillard’s, Tyson Foods, Proctor & Gamble, and Nestle among others. Tiphany led a best-in-class training organization in the Aesthetic Industry where she was well known for constant innovation- building technology platforms to assist in injection-related education and creating programs that redefined the learning experience for nearly 15,000 clinicians per year. Along with Dr. Justin Harper, she co-directs Aesthetic Next, a multi-disciplinary, immersive industry conference in Dallas, TX, that focuses on clinical applications, practice management, and technology enabled growth for Aesthetic practices. Known for its international faculty lineup, Aesthetic Next has quickly become a favorite among those looking for a unique experience to advance their technical skills. \",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img21.jpg\"},{\"image\":\"images/img20.jpg\",\"name\":\"Victoria Adrian\",\"designation\":\"Director of Sales \",\"readBio\":\"Read bio\",\"detailName\":\"Victoria Adrian\",\"detailedRole\":\"Victoria started with Aesthetic Record in 2017 as it’s first full-time employee, and in the last three years, she has assumed the role of Director of Sales where she leads a team of 14 sales and support professionals, and more than 4000 users. Her background in software coupled with her love of the Aesthetic industry has helped to transition Aesthetic Record from a small startup to an all inclusive, invaluable platform with more than 1000 practices participating globally. Victoria has been a key advisor in the development of the software, translating customer feedback, and preferences into action. She’s actively involved in everything from troubleshooting software concerns to visiting accounts and personally onboarding new users\",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img23.jpg\"},{\"image\":\"images/img08.jpg\",\"name\":\"Gannesh Kompella\",\"designation\":\"Director of Technology \",\"readBio\":\"Read bio\",\"detailName\":\"Ganesh Kompella\",\"detailedRole\":\"Victoria started with Aesthetic Record in 2017 as it’s first full-time employee, and in the last three years, she has assumed the role of Director of Sales where she leads a team of 14 sales and support professionals, and more than 4000 users. Her background in software coupled with her love of the Aesthetic industry has helped to transition Aesthetic Record from a small startup to an all inclusive, invaluable platform with more than 1000 practices participating globally. Victoria has been a key advisor in the development of the software, translating customer feedback, and preferences into action. She’s actively involved in everything from troubleshooting software concerns to visiting accounts and personally onboarding new users. \",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img32.jpg\"},{\"image\":\"images/img09.jpg\",\"name\":\"Jazmenne KinCannon\",\"designation\":\"Senior Sales Specialist \",\"readBio\":\"Read bio\",\"detailName\":\"Jazmenne KinCannon\",\"detailedRole\":\"Jazmene began working in Aesthetics in 2017 as a Patient Coordinator for an Ohio-based Plastic Surgeon. She fell in love with the industry, and joined Aesthetic Record with first-hand experience on the potential pitfalls and practice benefits that come from using an EMR system. Jazmene understands the changing dynamics of a busy practice, and she takes pride in providing a very genuine customer service experience, ensuring each client receives outstanding support. Her passion to connect with AR Users on a very relatable level and to guide each one through an impactful training journey. When Jazmene isn't busy doing her most important job as a mother to two great kids, she enjoys attending music festivals & traveling.\",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img30.jpg\"},{\"image\":\"images/img10.jpg\",\"name\":\"Kelsey Orms\",\"designation\":\"Senior Sales Specialist \",\"readBio\":\"Read bio\",\"detailName\":\"Kelsey Orms\",\"detailedRole\":\"Kelsey, an Account Manager at Aesthetic Record, works with practices and businesses across the globe in providing a patient to practice experience. With over 5 years in the Medial Aesthetics industry, Kelsey understands what practices in the industry need, and how Aesthetic Record can facilitate that. She prides herself in providing extraordinary customer service, treating every client with care, consideration and respect. Her passion for this industry and her communication skills make her a perfect fit for her role. She ensures every client receives VIP customer service experiences and support.Kelsey has previously worked at practices in multiple states across the U.S. and holds a dual BA in Strategic Communications and Marketing from Grand Canyon University. When Kelsey is not working on all things Aesthetic Record, you can find her traveling, playing with her 2 Siberian Huskies and watching Ohio State football. Go Bucks!\",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img26.jpg\"},{\"image\":\"images/img11.jpg\",\"name\":\"Kennith Powell\",\"designation\":\"Senior Sales Engineer \",\"readBio\":\"Read bio\",\"detailName\":\"Kenneth Powell\",\"detailedRole\":\"Kenneth Powell holds a Bachelors of Arts from The Ohio State University with major in Strategic Communications. As a Senior Sales Engineer at Aesthetic Record, he trains new account users on how to navigate through the system, including account settings, inventory, and the provider app. Not only does Kenneth assist aesthetic/health professionals to configure their accounts for success, he’s also a big part of the AR introduction and training video series where he personally welcomes each new user! In addition to onboarding new users, Kenny troubleshoots software issues and users concerns to ensure all systems are operational both for clients and internal employees. Kenneth also enjoys cooking and fashion and works out of the Columbus, OH AR office.\",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img25.jpg\"},{\"image\":\"images/img12.jpg\",\"name\":\"Vivienne Echendu\",\"designation\":\"Vender Relations Manager \",\"readBio\":\"Read bio\",\"detailName\":\"Vivienne Echendu\",\"detailedRole\":\"It didn’t take long for Vivienne to grow into her cowboy boots after emigrating from Nigeria to Texas. Ever since she was a little girl, Vivienne has always been enamored with the field of STEM. She graduated with honors from Prairie View A&M University with a Bachelors of Science in Biology and a minor in Chemistry. Vivienne has had the opportunity to conduct research in genetics, oncology, biochemistry, bioinformatics, and IRB and non-IRB clinical trials.Before joining the vibrant Aesthetic Record team, she held brand management and business development roles in retail and senior home health care, respectively. Now as the Vendor Relations Specialist at Aesthetic Record, Vivienne is excited to bridge her love for medicine with her passion for people every day. Vivienne is inspired by God’s unconditional love for her and will never get tired of asking Him for guidance. She invites challenges as a way to think outside the box and considers herself a lifelong student of life because, when you stop learning, you stop growing. What is she up to right now? Probably cooking Jollof rice with country music playing in the background.\",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img24.jpg\"},{\"image\":\"images/img13.jpg\",\"name\":\"JT Cothran\",\"designation\":\"Business Process Specialist \",\"readBio\":\"Read bio\",\"detailName\":\"JT Cothran\",\"detailedRole\":\"Since 2008, JT has been at the helm of his own start ups. It began with the creation of his family’s commercial maintenance, demolition and restoration company as he was leaving high school. But before heading off to college, where he would later graduate from Dallas Baptist University with a degree in Music Business and a minor in Music History, he launched his own media and production company.With several entities under the banners of Down Castle Records & Mobile Productions, JT spent most of this century’s second decade working in the recording and live production/performance industry. Throughout that time, he put nearly two thousand live shows under his belt along with countless recording sessions that grew his studio into one of the DFW area’s most popular for local artist. In 2018, JT left the live production scene to concentrate of the functions of his studio. The Warehouse, until late 2019 when he joined the AR team. He focuses on various aspects of multi-media production for Aesthetic Record from producing training videos to building the show flow for Aesthetic Next. He’s also an avid Dallas Stars fan and an uber competitive hockey player in his own right, having spent most of his life on the ice!\",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img27.jpg\"},{\"image\":\"images/img14.jpg\",\"name\":\"Isabelle McDowell\",\"designation\":\"Mid-Market Sales Specialist \",\"readBio\":\"Read bio\",\"detailName\":\"Isabelle McDowell\",\"detailedRole\":\"Isabelle has a diverse background is sales, aesthetics and customer service. Prior to joining Aesthetic Record, she held positions as a wholesale apparel account manager and advertising account coordinator. Additionally, she has been a licensed esthetician since 2011. Since then, she has worked at various medical spas as a provider as well as in front desk operations. She earned her Bachelor’s degree in Public Relations and Psychology from Southern Methodist University and resides in Dallas.\",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img29.jpg\"},{\"image\":\"images/img15.jpg\",\"name\":\"Catherine McCauley\",\"designation\":\"Sales Engineer \",\"readBio\":\"Read bio\",\"detailName\":\"JT Cothran\",\"detailedRole\":\"Catherine brings over 20 years of Sales and Account Management experience in the Pharmaceutical, Educational and Business Sectors. She graduated from the University of North Texas with a Bachelor of Business Administration. The great loves of her life are her three wonderful children and two adorable cats. When she is not working she enjoys spending time with friends and family, and walking and reading.\",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img28.jpg\"},{\"image\":\"images/img16.jpg\",\"name\":\"Nick Whatton\",\"designation\":\"Sales Engineer \",\"readBio\":\"Read bio\",\"detailName\":\"Nick Whatton\",\"detailedRole\":\"Nick graduated with a Bachelor's Degree in Recreation & Sport Management from the University of North Texas. Prior to coming to Aesthetic Record, Nick was a Territory Sales Manager at BSN Sports where he worked with Municipalities, YMCA's and Boys and Girls Club serving their sporting equipment, facility, park and uniform needs. He worked closely with vendors such as Nike, Under Armour and Bison selling both Park and Recreation Equipment needs for league sports. Before joining the private sector, Nick spent 8 years with the United States Marine Corps where he served as a Crew Chief for Amphibious Operations.\",\"seeLeadership\":\"See All Leadership\",\"backArrows\":\"images/arrows.svg\",\"detailedImage\":\"images/img31.jpg\"}]}");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dFpZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Header.jsx
var Header = __webpack_require__("Cgje");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Teams/TeamsHeader.jsx
var __jsx = external_react_default.a.createElement;



class TeamsHeader_TeamsHeader extends external_react_["Component"] {
  render() {
    return __jsx("div", null, __jsx(head_default.a, null, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "/static/style.css",
      rel: "stylesheet"
    })), __jsx("ul", {
      className: "breadcrumbs container"
    }, __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Home")), __jsx("li", {
      className: "current"
    }, __jsx("a", {
      href: "#"
    }, "Elevate by Aesthetic Record"))), __jsx("div", {
      className: "banner"
    }, __jsx("div", {
      className: "container"
    }, __jsx("img", {
      src: "images/banner.jpg",
      alt: "Image Description"
    }), __jsx("span", {
      className: "img-shape"
    }, __jsx("img", {
      src: "images/icon-leaf.png",
      alt: "image description"
    })))));
  }

}

/* harmony default export */ var Teams_TeamsHeader = (TeamsHeader_TeamsHeader);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/Teams/OurTeams.jsx
var OurTeams_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class OurTeams_OurTeams extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "setTeamsObj", () => {
      this.setState({
        ourteams: this.props.teamObj.ourteams
      });
    });

    _defineProperty(this, "getTeamsObj", () => {
      if (this.state.ourteams) {
        let teams = this.state.ourteams.map((data, index) => {
          return OurTeams_jsx("a", {
            className: "box",
            key: index,
            onClick: () => this.teamsData(data, index)
          }, OurTeams_jsx("div", {
            className: "img"
          }, OurTeams_jsx("img", {
            src: data.image,
            alt: "Image Description"
          })), OurTeams_jsx("div", {
            className: "holder"
          }, OurTeams_jsx("h4", null, data.name), OurTeams_jsx("span", {
            className: "designation"
          }, data.designation, " "), OurTeams_jsx("span", {
            className: "link"
          }, data.readBio, OurTeams_jsx("i", {
            className: "icon-arrow-r"
          }))));
        });
        return teams;
      }
    });

    _defineProperty(this, "teamsData", (data, index) => {
      router_default.a.push({
        pathname: '/detailsteam',
        query: {
          name: data.detailName,
          designation: data.designation,
          backArrow: data.backArrows,
          leadership: data.seeLeadership,
          image: data.detailedImage,
          bio: data.detailedRole
        }
      });
    });

    this.state = {
      ourteams: ''
    };
  }

  UNSAFE_componentWillMount() {
    this.setTeamsObj();
  }

  render() {
    return OurTeams_jsx("div", null, OurTeams_jsx(head_default.a, null, OurTeams_jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",
      rel: "stylesheet"
    }), OurTeams_jsx("link", {
      href: "/static/style.css",
      rel: "stylesheet"
    })), OurTeams_jsx("div", {
      className: "team"
    }, OurTeams_jsx("span", {
      className: "img-shape-bottom"
    }, OurTeams_jsx("img", {
      src: "images/icon-leaf-big.png",
      alt: "Image description"
    })), OurTeams_jsx("div", {
      className: "container"
    }, OurTeams_jsx("h2", null, "Our Team"), OurTeams_jsx("div", {
      className: "boxes"
    }, OurTeams_jsx("span", {
      className: "img-shape"
    }, OurTeams_jsx("img", {
      src: "images/icon.png",
      alt: "Image Description"
    })), this.getTeamsObj()))));
  }

}

/* harmony default export */ var Teams_OurTeams = (OurTeams_OurTeams);
// EXTERNAL MODULE: ./components/Teams/TeamsFooter.jsx
var TeamsFooter = __webpack_require__("yJua");

// EXTERNAL MODULE: ./components/SignUp.jsx
var SignUp = __webpack_require__("n9PM");

// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__("naWs");

// EXTERNAL MODULE: ./data/teams.json
var teams = __webpack_require__("QXRP");

// CONCATENATED MODULE: ./pages/teams.js

var teams_jsx = external_react_default.a.createElement;









function Teams(props) {
  return teams_jsx("div", null, teams_jsx(head_default.a, null, teams_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",
    rel: "stylesheet"
  }), teams_jsx("link", {
    href: "/static/style.css",
    rel: "stylesheet"
  })), teams_jsx("div", {
    className: "wrapper"
  }, teams_jsx(Header["a" /* default */], null), teams_jsx("main", {
    className: "main"
  }, teams_jsx(Teams_TeamsHeader, null), teams_jsx(Teams_OurTeams, {
    teamObj: props.teamsObj
  })), teams_jsx(TeamsFooter["a" /* default */], null), teams_jsx(SignUp["a" /* default */], null), teams_jsx(Footer["a" /* default */], null)));
}

async function getStaticProps({}) {
  let teamsObj = teams;
  return {
    props: {
      teamsObj
    }
  };
}
/* harmony default export */ var pages_teams = __webpack_exports__["default"] = (Teams);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "n9PM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class SignUp extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "/static/style.css",
      rel: "stylesheet"
    })), __jsx("div", {
      className: "signup-block"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "col"
    }, __jsx("h2", null, "14 Day Risk-Free Trial"), __jsx("p", null, "Dedicated Support & On-boarding")), __jsx("div", {
      className: "col"
    }, __jsx("a", {
      href: "#",
      className: "btn"
    }, "Sign Up Today"), __jsx("p", null, "No Hidden Set-Up Fees or Software Installation")))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (SignUp);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "naWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "/static/style.css",
      rel: "stylesheet"
    })), __jsx("footer", {
      className: "footer"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "info"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", null, __jsx("img", {
      src: "images/logo-footer.png",
      alt: "Aesthetic Record"
    })))), __jsx("a", {
      href: "mailto:info@aestheticrecord.com",
      className: "mail"
    }, __jsx("i", {
      className: "icon-email"
    }), " info@aestheticrecord.com"), __jsx("a", {
      href: "#",
      className: "btn"
    }, "Book Meeting"), __jsx("ul", {
      className: "social-networks"
    }, __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icon-facebook"
    }))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icon-youtube"
    }))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icon-instagram"
    }))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icon-linkedin"
    }))))), __jsx("div", {
      className: "footer-links"
    }, __jsx("nav", {
      className: "links"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/connect'
      }
    }, __jsx("strong", null, "Connect")), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/onlinebooking'
      }
    }, __jsx("a", null, "Online Booking"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/smartscheduling'
      }
    }, __jsx("a", null, "Smart Scheduling"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/patientportal'
      }
    }, __jsx("a", null, "Patient Portal"))))), __jsx("nav", {
      className: "links large"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/treat"
    }, __jsx("strong", null, "Treat")), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/emr'
      }
    }, __jsx("a", null, "Complete EMR Solution"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/beforeafterphoto'
      }
    }, __jsx("a", null, "Before & After Photos"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/mobilePointofsale'
      }
    }, __jsx("a", null, "Mobile Point-of-Sale"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/patientmembership'
      }
    }, __jsx("a", {
      href: "#"
    }, "Patient Wallet & Memberships"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/telehealth'
      }
    }, __jsx("a", null, "Telehealth"))))), __jsx("nav", {
      className: "links large"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/manage"
    }, __jsx("strong", null, "Manage")), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/businessinsights'
      }
    }, __jsx("a", null, "Business Insights "))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/supplychain'
      }
    }, __jsx("a", null, "Supply Chain Management "))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/ept'
      }
    }, __jsx("a", null, "Employee Performance Tracking"))))), __jsx("nav", {
      className: "links"
    }, __jsx("strong", null, "Company"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/about"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/teams"
    }, __jsx("a", null, "Our Team "))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "News")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Careers")))), __jsx("nav", {
      className: "links"
    }, __jsx("strong", null, "Resources"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Elevate Blog")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "Learn Articles")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, "AR Academy")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: "/marketplace"
      }
    }, __jsx("a", null, "Marketplace"))))))), __jsx("div", {
      className: "footer-info"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "copyright"
    }, __jsx("p", null, "\xA9 2019 Aesthetic Record. All Rights Reserved ", __jsx("span", null, "|"), " ", __jsx("a", {
      href: "#"
    }, "Terms Of Service"), " ", __jsx("a", {
      href: "#"
    }, "AR Policies"))), __jsx("div", {
      className: "logo-holder"
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: "images/logo-apple.svg",
      alt: "Image Description"
    })), __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: "images/logo-gdbr.svg",
      alt: "Image Description"
    })), __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: "images/ar-emr-hipaa-law.png",
      alt: "Image Description"
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yJua":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TeamsFooter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "/static/style.css",
      rel: "stylesheet"
    })), __jsx("div", {
      className: "bottom-block shape",
      style: {
        backgroundImage: "url(images/img17.jpg)"
      }
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "textblock"
    }, __jsx("h3", null, "Try Aesthetic Record with your team for free "), __jsx("a", {
      href: "#",
      className: "btn full"
    }, "Get Started")))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (TeamsFooter);

/***/ })

/******/ });