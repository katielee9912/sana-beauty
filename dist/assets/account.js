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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/sections/customers/account/account.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/views/sections/customers/account/account.js":
/*!*********************************************************!*\
  !*** ./src/views/sections/customers/account/account.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./account.scss */ \"./src/views/sections/customers/account/account.scss\");\n\n// Import CSS\nfunction orderDetails() {\n  var ordersContainer = document.querySelector('[data-account-dashboard-orders]');\n\n  if (ordersContainer === null) {\n    return;\n  }\n\n  var orders = ordersContainer.querySelectorAll('[data-account-dashboard-order]');\n  orders.forEach(function (order) {\n    var toggle = order.querySelector('[data-account-dashboard-order-toggle]');\n    toggle.addEventListener('click', function () {\n      order.classList.toggle('active');\n    });\n  });\n}\n\nfunction accountPageSelectorInit() {\n  var pageSelector = document.querySelector('[data-account-page-selector]');\n\n  if (pageSelector === null) {\n    return;\n  }\n\n  pageSelector.addEventListener('change', function () {\n    window.location.href = pageSelector.value;\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  orderDetails();\n  accountPageSelectorInit();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL2FjY291bnQvYWNjb3VudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWN0aW9ucy9jdXN0b21lcnMvYWNjb3VudC9hY2NvdW50LmpzP2JlYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuL2FjY291bnQuc2Nzc1wiKTtcblxuLy8gSW1wb3J0IENTU1xuZnVuY3Rpb24gb3JkZXJEZXRhaWxzKCkge1xuICB2YXIgb3JkZXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWNjb3VudC1kYXNoYm9hcmQtb3JkZXJzXScpO1xuXG4gIGlmIChvcmRlcnNDb250YWluZXIgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgb3JkZXJzID0gb3JkZXJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjY291bnQtZGFzaGJvYXJkLW9yZGVyXScpO1xuICBvcmRlcnMuZm9yRWFjaChmdW5jdGlvbiAob3JkZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gb3JkZXIucXVlcnlTZWxlY3RvcignW2RhdGEtYWNjb3VudC1kYXNoYm9hcmQtb3JkZXItdG9nZ2xlXScpO1xuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG9yZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWNjb3VudFBhZ2VTZWxlY3RvckluaXQoKSB7XG4gIHZhciBwYWdlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY2NvdW50LXBhZ2Utc2VsZWN0b3JdJyk7XG5cbiAgaWYgKHBhZ2VTZWxlY3RvciA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhZ2VTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYWdlU2VsZWN0b3IudmFsdWU7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBvcmRlckRldGFpbHMoKTtcbiAgYWNjb3VudFBhZ2VTZWxlY3RvckluaXQoKTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/views/sections/customers/account/account.js\n");

/***/ }),

/***/ "./src/views/sections/customers/account/account.scss":
/*!***********************************************************!*\
  !*** ./src/views/sections/customers/account/account.scss ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL2FjY291bnQvYWNjb3VudC5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlY3Rpb25zL2N1c3RvbWVycy9hY2NvdW50L2FjY291bnQuc2Nzcz9iZjU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/views/sections/customers/account/account.scss\n");

/***/ })

/******/ });