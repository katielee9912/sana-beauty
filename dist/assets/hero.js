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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/sections/hero/hero.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/core/loaded.js":
/*!************************************!*\
  !*** ./src/scripts/core/loaded.js ***!
  \************************************/
/*! exports provided: markScriptLoaded, isScriptLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"markScriptLoaded\", function() { return markScriptLoaded; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isScriptLoaded\", function() { return isScriptLoaded; });\nvar markScriptLoaded = function markScriptLoaded(name) {\n  window.POINTER = window.POINTER || {};\n  window.POINTER.loadedScripts = window.POINTER.loadedScripts || {};\n  window.POINTER.loadedScripts[name] = true;\n};\nvar isScriptLoaded = function isScriptLoaded(name) {\n  var _window$POINTER, _window$POINTER$loade;\n\n  return (_window$POINTER = window.POINTER) === null || _window$POINTER === void 0 ? void 0 : (_window$POINTER$loade = _window$POINTER.loadedScripts) === null || _window$POINTER$loade === void 0 ? void 0 : _window$POINTER$loade[name];\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb3JlL2xvYWRlZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvcmUvbG9hZGVkLmpzPzg4MzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBtYXJrU2NyaXB0TG9hZGVkID0gZnVuY3Rpb24gbWFya1NjcmlwdExvYWRlZChuYW1lKSB7XG4gIHdpbmRvdy5QT0lOVEVSID0gd2luZG93LlBPSU5URVIgfHwge307XG4gIHdpbmRvdy5QT0lOVEVSLmxvYWRlZFNjcmlwdHMgPSB3aW5kb3cuUE9JTlRFUi5sb2FkZWRTY3JpcHRzIHx8IHt9O1xuICB3aW5kb3cuUE9JTlRFUi5sb2FkZWRTY3JpcHRzW25hbWVdID0gdHJ1ZTtcbn07XG5leHBvcnQgdmFyIGlzU2NyaXB0TG9hZGVkID0gZnVuY3Rpb24gaXNTY3JpcHRMb2FkZWQobmFtZSkge1xuICB2YXIgX3dpbmRvdyRQT0lOVEVSLCBfd2luZG93JFBPSU5URVIkbG9hZGU7XG5cbiAgcmV0dXJuIChfd2luZG93JFBPSU5URVIgPSB3aW5kb3cuUE9JTlRFUikgPT09IG51bGwgfHwgX3dpbmRvdyRQT0lOVEVSID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3dpbmRvdyRQT0lOVEVSJGxvYWRlID0gX3dpbmRvdyRQT0lOVEVSLmxvYWRlZFNjcmlwdHMpID09PSBudWxsIHx8IF93aW5kb3ckUE9JTlRFUiRsb2FkZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3dpbmRvdyRQT0lOVEVSJGxvYWRlW25hbWVdO1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/core/loaded.js\n");

/***/ }),

/***/ "./src/views/sections/hero/hero.js":
/*!*****************************************!*\
  !*** ./src/views/sections/hero/hero.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.scss */ \"./src/views/sections/hero/hero.scss\");\n/* harmony import */ var _scripts_core_loaded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scripts/core/loaded */ \"./src/scripts/core/loaded.js\");\n\n\nvar SECTION_NAME = 'hero';\n\nvar hero = function hero() {\n  var heroSlider = document.querySelector('[data-hero-slider]');\n  var slider = new Swiper(heroSlider, {\n    loop: true,\n    effect: 'fade',\n    fadeEffect: {\n      crossFade: true\n    }\n  });\n  return slider;\n};\n\nvar run = function run() {\n  hero();\n}; // Ensure section JS only runs once\n\n\nif (!Object(_scripts_core_loaded__WEBPACK_IMPORTED_MODULE_1__[\"isScriptLoaded\"])(SECTION_NAME)) {\n  document.addEventListener('DOMContentLoaded', run);\n  document.addEventListener('shopify:section:load', run);\n  Object(_scripts_core_loaded__WEBPACK_IMPORTED_MODULE_1__[\"markScriptLoaded\"])(SECTION_NAME);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvaGVyby9oZXJvLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlY3Rpb25zL2hlcm8vaGVyby5qcz82ZGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9oZXJvLnNjc3MnO1xuaW1wb3J0IHsgaXNTY3JpcHRMb2FkZWQsIG1hcmtTY3JpcHRMb2FkZWQgfSBmcm9tICdAc2NyaXB0cy9jb3JlL2xvYWRlZCc7XG52YXIgU0VDVElPTl9OQU1FID0gJ2hlcm8nO1xuXG52YXIgaGVybyA9IGZ1bmN0aW9uIGhlcm8oKSB7XG4gIHZhciBoZXJvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaGVyby1zbGlkZXJdJyk7XG4gIHZhciBzbGlkZXIgPSBuZXcgU3dpcGVyKGhlcm9TbGlkZXIsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgIGNyb3NzRmFkZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzbGlkZXI7XG59O1xuXG52YXIgcnVuID0gZnVuY3Rpb24gcnVuKCkge1xuICBoZXJvKCk7XG59OyAvLyBFbnN1cmUgc2VjdGlvbiBKUyBvbmx5IHJ1bnMgb25jZVxuXG5cbmlmICghaXNTY3JpcHRMb2FkZWQoU0VDVElPTl9OQU1FKSkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcnVuKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTpzZWN0aW9uOmxvYWQnLCBydW4pO1xuICBtYXJrU2NyaXB0TG9hZGVkKFNFQ1RJT05fTkFNRSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/sections/hero/hero.js\n");

/***/ }),

/***/ "./src/views/sections/hero/hero.scss":
/*!*******************************************!*\
  !*** ./src/views/sections/hero/hero.scss ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvaGVyby9oZXJvLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VjdGlvbnMvaGVyby9oZXJvLnNjc3M/MzZjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/sections/hero/hero.scss\n");

/***/ })

/******/ });