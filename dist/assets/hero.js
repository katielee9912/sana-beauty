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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.markScriptLoaded = exports.isScriptLoaded = void 0;\n\nvar markScriptLoaded = function markScriptLoaded(name) {\n  window.POINTER = window.POINTER || {};\n  window.POINTER.loadedScripts = window.POINTER.loadedScripts || {};\n  window.POINTER.loadedScripts[name] = true;\n};\n\nexports.markScriptLoaded = markScriptLoaded;\n\nvar isScriptLoaded = function isScriptLoaded(name) {\n  var _window$POINTER, _window$POINTER$loade;\n\n  return (_window$POINTER = window.POINTER) === null || _window$POINTER === void 0 ? void 0 : (_window$POINTER$loade = _window$POINTER.loadedScripts) === null || _window$POINTER$loade === void 0 ? void 0 : _window$POINTER$loade[name];\n};\n\nexports.isScriptLoaded = isScriptLoaded;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb3JlL2xvYWRlZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvcmUvbG9hZGVkLmpzPzg4MzYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtTY3JpcHRMb2FkZWQgPSBleHBvcnRzLmlzU2NyaXB0TG9hZGVkID0gdm9pZCAwO1xuXG52YXIgbWFya1NjcmlwdExvYWRlZCA9IGZ1bmN0aW9uIG1hcmtTY3JpcHRMb2FkZWQobmFtZSkge1xuICB3aW5kb3cuUE9JTlRFUiA9IHdpbmRvdy5QT0lOVEVSIHx8IHt9O1xuICB3aW5kb3cuUE9JTlRFUi5sb2FkZWRTY3JpcHRzID0gd2luZG93LlBPSU5URVIubG9hZGVkU2NyaXB0cyB8fCB7fTtcbiAgd2luZG93LlBPSU5URVIubG9hZGVkU2NyaXB0c1tuYW1lXSA9IHRydWU7XG59O1xuXG5leHBvcnRzLm1hcmtTY3JpcHRMb2FkZWQgPSBtYXJrU2NyaXB0TG9hZGVkO1xuXG52YXIgaXNTY3JpcHRMb2FkZWQgPSBmdW5jdGlvbiBpc1NjcmlwdExvYWRlZChuYW1lKSB7XG4gIHZhciBfd2luZG93JFBPSU5URVIsIF93aW5kb3ckUE9JTlRFUiRsb2FkZTtcblxuICByZXR1cm4gKF93aW5kb3ckUE9JTlRFUiA9IHdpbmRvdy5QT0lOVEVSKSA9PT0gbnVsbCB8fCBfd2luZG93JFBPSU5URVIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfd2luZG93JFBPSU5URVIkbG9hZGUgPSBfd2luZG93JFBPSU5URVIubG9hZGVkU2NyaXB0cykgPT09IG51bGwgfHwgX3dpbmRvdyRQT0lOVEVSJGxvYWRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfd2luZG93JFBPSU5URVIkbG9hZGVbbmFtZV07XG59O1xuXG5leHBvcnRzLmlzU2NyaXB0TG9hZGVkID0gaXNTY3JpcHRMb2FkZWQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/core/loaded.js\n");

/***/ }),

/***/ "./src/views/sections/hero/hero.js":
/*!*****************************************!*\
  !*** ./src/views/sections/hero/hero.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./hero.scss */ \"./src/views/sections/hero/hero.scss\");\n\nvar _loaded = __webpack_require__(/*! @scripts/core/loaded */ \"./src/scripts/core/loaded.js\");\n\nvar SECTION_NAME = 'hero';\n\nvar hero = function hero() {\n  var heroSlider = document.querySelector('[data-hero-slider]');\n  var slider = new Swiper(heroSlider, {\n    loop: true,\n    effect: 'fade',\n    fadeEffect: {\n      crossFade: true\n    }\n  });\n  return slider;\n};\n\nvar run = function run() {\n  hero();\n}; // Ensure section JS only runs once\n\n\nif (!(0, _loaded.isScriptLoaded)(SECTION_NAME)) {\n  document.addEventListener('DOMContentLoaded', run);\n  document.addEventListener('shopify:section:load', run);\n  (0, _loaded.markScriptLoaded)(SECTION_NAME);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvaGVyby9oZXJvLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlY3Rpb25zL2hlcm8vaGVyby5qcz82ZGZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi9oZXJvLnNjc3NcIik7XG5cbnZhciBfbG9hZGVkID0gcmVxdWlyZShcIkBzY3JpcHRzL2NvcmUvbG9hZGVkXCIpO1xuXG52YXIgU0VDVElPTl9OQU1FID0gJ2hlcm8nO1xuXG52YXIgaGVybyA9IGZ1bmN0aW9uIGhlcm8oKSB7XG4gIHZhciBoZXJvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaGVyby1zbGlkZXJdJyk7XG4gIHZhciBzbGlkZXIgPSBuZXcgU3dpcGVyKGhlcm9TbGlkZXIsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgIGNyb3NzRmFkZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzbGlkZXI7XG59O1xuXG52YXIgcnVuID0gZnVuY3Rpb24gcnVuKCkge1xuICBoZXJvKCk7XG59OyAvLyBFbnN1cmUgc2VjdGlvbiBKUyBvbmx5IHJ1bnMgb25jZVxuXG5cbmlmICghKDAsIF9sb2FkZWQuaXNTY3JpcHRMb2FkZWQpKFNFQ1RJT05fTkFNRSkpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJ1bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3BpZnk6c2VjdGlvbjpsb2FkJywgcnVuKTtcbiAgKDAsIF9sb2FkZWQubWFya1NjcmlwdExvYWRlZCkoU0VDVElPTl9OQU1FKTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/sections/hero/hero.js\n");

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