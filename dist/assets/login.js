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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/sections/customers/login/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/views/sections/customers/login/login.js":
/*!*****************************************************!*\
  !*** ./src/views/sections/customers/login/login.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.scss */ \"./src/views/sections/customers/login/login.scss\");\n// Import CSS\n\n\nfunction onShowHidePasswordForm(event) {\n  event.preventDefault();\n  toggleRecoverPasswordForm();\n}\n\nfunction checkUrlHash() {\n  var hash = window.location.hash;\n\n  if (hash === '#recover') {\n    toggleRecoverPasswordForm();\n  }\n}\n\nfunction toggleRecoverPasswordForm() {\n  document.querySelector('[data-recover-password-form]').classList.toggle('hide');\n  document.querySelector('[data-customer-login-form]').classList.toggle('hide');\n}\n\nfunction recoverPasswordSuccess() {\n  var formState = document.querySelector('[data-recover-password-success]');\n\n  if (!formState) {\n    return;\n  }\n\n  document.querySelector('[data-recover-password-success-message]').classList.remove('hide');\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var recoverPassword = document.querySelector('[data-show-recover-password]');\n  var hideRecoverPasswordLink = document.querySelector('[data-hide-recover-password]');\n\n  if (!recoverPassword) {\n    return;\n  }\n\n  checkUrlHash();\n  recoverPasswordSuccess();\n  recoverPassword.addEventListener('click', function (event) {\n    onShowHidePasswordForm(event);\n  });\n  hideRecoverPasswordLink.addEventListener('click', function (event) {\n    onShowHidePasswordForm(event);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL2xvZ2luL2xvZ2luLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlY3Rpb25zL2N1c3RvbWVycy9sb2dpbi9sb2dpbi5qcz9iMTQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBDU1NcbmltcG9ydCAnLi9sb2dpbi5zY3NzJztcblxuZnVuY3Rpb24gb25TaG93SGlkZVBhc3N3b3JkRm9ybShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2dnbGVSZWNvdmVyUGFzc3dvcmRGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVXJsSGFzaCgpIHtcbiAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICBpZiAoaGFzaCA9PT0gJyNyZWNvdmVyJykge1xuICAgIHRvZ2dsZVJlY292ZXJQYXNzd29yZEZvcm0oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVSZWNvdmVyUGFzc3dvcmRGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yZWNvdmVyLXBhc3N3b3JkLWZvcm1dJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jdXN0b21lci1sb2dpbi1mb3JtXScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gcmVjb3ZlclBhc3N3b3JkU3VjY2VzcygpIHtcbiAgdmFyIGZvcm1TdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlY292ZXItcGFzc3dvcmQtc3VjY2Vzc10nKTtcblxuICBpZiAoIWZvcm1TdGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlY292ZXItcGFzc3dvcmQtc3VjY2Vzcy1tZXNzYWdlXScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlY292ZXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNob3ctcmVjb3Zlci1wYXNzd29yZF0nKTtcbiAgdmFyIGhpZGVSZWNvdmVyUGFzc3dvcmRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaGlkZS1yZWNvdmVyLXBhc3N3b3JkXScpO1xuXG4gIGlmICghcmVjb3ZlclBhc3N3b3JkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2hlY2tVcmxIYXNoKCk7XG4gIHJlY292ZXJQYXNzd29yZFN1Y2Nlc3MoKTtcbiAgcmVjb3ZlclBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgb25TaG93SGlkZVBhc3N3b3JkRm9ybShldmVudCk7XG4gIH0pO1xuICBoaWRlUmVjb3ZlclBhc3N3b3JkTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIG9uU2hvd0hpZGVQYXNzd29yZEZvcm0oZXZlbnQpO1xuICB9KTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/sections/customers/login/login.js\n");

/***/ }),

/***/ "./src/views/sections/customers/login/login.scss":
/*!*******************************************************!*\
  !*** ./src/views/sections/customers/login/login.scss ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL2xvZ2luL2xvZ2luLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL2xvZ2luL2xvZ2luLnNjc3M/MmI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/sections/customers/login/login.scss\n");

/***/ })

/******/ });