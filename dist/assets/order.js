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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/sections/customers/order/order.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/views/sections/customers/order/order.js":
/*!*****************************************************!*\
  !*** ./src/views/sections/customers/order/order.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _order_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.scss */ \"./src/views/sections/customers/order/order.scss\");\n// Import CSS\n\n\nfunction accountPageSelectorInit() {\n  var pageSelector = document.querySelector('[data-account-page-selector]');\n\n  if (pageSelector === null) {\n    return;\n  }\n\n  pageSelector.addEventListener('change', function () {\n    window.location.href = pageSelector.value;\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  accountPageSelectorInit();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL29yZGVyL29yZGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlY3Rpb25zL2N1c3RvbWVycy9vcmRlci9vcmRlci5qcz8xNGI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBDU1NcbmltcG9ydCAnLi9vcmRlci5zY3NzJztcblxuZnVuY3Rpb24gYWNjb3VudFBhZ2VTZWxlY3RvckluaXQoKSB7XG4gIHZhciBwYWdlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY2NvdW50LXBhZ2Utc2VsZWN0b3JdJyk7XG5cbiAgaWYgKHBhZ2VTZWxlY3RvciA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhZ2VTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYWdlU2VsZWN0b3IudmFsdWU7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBhY2NvdW50UGFnZVNlbGVjdG9ySW5pdCgpO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/sections/customers/order/order.js\n");

/***/ }),

/***/ "./src/views/sections/customers/order/order.scss":
/*!*******************************************************!*\
  !*** ./src/views/sections/customers/order/order.scss ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL29yZGVyL29yZGVyLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL29yZGVyL29yZGVyLnNjc3M/YmQ1MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/sections/customers/order/order.scss\n");

/***/ })

/******/ });