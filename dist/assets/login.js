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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./login.scss */ \"./src/views/sections/customers/login/login.scss\");\n\n// Import CSS\nfunction onShowHidePasswordForm(event) {\n  event.preventDefault();\n  toggleRecoverPasswordForm();\n}\n\nfunction checkUrlHash() {\n  var hash = window.location.hash;\n\n  if (hash === '#recover') {\n    toggleRecoverPasswordForm();\n  }\n}\n\nfunction toggleRecoverPasswordForm() {\n  document.querySelector('[data-recover-password-form]').classList.toggle('hide');\n  document.querySelector('[data-customer-login-form]').classList.toggle('hide');\n}\n\nfunction recoverPasswordSuccess() {\n  var formState = document.querySelector('[data-recover-password-success]');\n\n  if (!formState) {\n    return;\n  }\n\n  document.querySelector('[data-recover-password-success-message]').classList.remove('hide');\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var recoverPassword = document.querySelector('[data-show-recover-password]');\n  var hideRecoverPasswordLink = document.querySelector('[data-hide-recover-password]');\n\n  if (!recoverPassword) {\n    return;\n  }\n\n  checkUrlHash();\n  recoverPasswordSuccess();\n  recoverPassword.addEventListener('click', function (event) {\n    onShowHidePasswordForm(event);\n  });\n  hideRecoverPasswordLink.addEventListener('click', function (event) {\n    onShowHidePasswordForm(event);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL2xvZ2luL2xvZ2luLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlY3Rpb25zL2N1c3RvbWVycy9sb2dpbi9sb2dpbi5qcz9iMTQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi9sb2dpbi5zY3NzXCIpO1xuXG4vLyBJbXBvcnQgQ1NTXG5mdW5jdGlvbiBvblNob3dIaWRlUGFzc3dvcmRGb3JtKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZ2dsZVJlY292ZXJQYXNzd29yZEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tVcmxIYXNoKCkge1xuICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gIGlmIChoYXNoID09PSAnI3JlY292ZXInKSB7XG4gICAgdG9nZ2xlUmVjb3ZlclBhc3N3b3JkRm9ybSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVJlY292ZXJQYXNzd29yZEZvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlY292ZXItcGFzc3dvcmQtZm9ybV0nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWN1c3RvbWVyLWxvZ2luLWZvcm1dJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiByZWNvdmVyUGFzc3dvcmRTdWNjZXNzKCkge1xuICB2YXIgZm9ybVN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVjb3Zlci1wYXNzd29yZC1zdWNjZXNzXScpO1xuXG4gIGlmICghZm9ybVN0YXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVjb3Zlci1wYXNzd29yZC1zdWNjZXNzLW1lc3NhZ2VdJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICB2YXIgcmVjb3ZlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2hvdy1yZWNvdmVyLXBhc3N3b3JkXScpO1xuICB2YXIgaGlkZVJlY292ZXJQYXNzd29yZExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1oaWRlLXJlY292ZXItcGFzc3dvcmRdJyk7XG5cbiAgaWYgKCFyZWNvdmVyUGFzc3dvcmQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjaGVja1VybEhhc2goKTtcbiAgcmVjb3ZlclBhc3N3b3JkU3VjY2VzcygpO1xuICByZWNvdmVyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBvblNob3dIaWRlUGFzc3dvcmRGb3JtKGV2ZW50KTtcbiAgfSk7XG4gIGhpZGVSZWNvdmVyUGFzc3dvcmRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgb25TaG93SGlkZVBhc3N3b3JkRm9ybShldmVudCk7XG4gIH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/sections/customers/login/login.js\n");

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