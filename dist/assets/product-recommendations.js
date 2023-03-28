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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/sections/product-recommendations/product-recommendations.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/views/sections/product-recommendations/product-recommendations.js":
/*!*******************************************************************************!*\
  !*** ./src/views/sections/product-recommendations/product-recommendations.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product_recommendations_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-recommendations.scss */ \"./src/views/sections/product-recommendations/product-recommendations.scss\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// Import CSS\n\n\n(function () {\n  if (typeof window.customElements.get('product-recommendations') !== 'undefined') {\n    return;\n  }\n\n  var ProductRecommendations = /*#__PURE__*/function (_HTMLElement) {\n    _inherits(ProductRecommendations, _HTMLElement);\n\n    var _super = _createSuper(ProductRecommendations);\n\n    function ProductRecommendations() {\n      var _this;\n\n      _classCallCheck(this, ProductRecommendations);\n\n      _this = _super.call(this);\n      _this.productsContainer = _this.querySelector('[data-reco-products-container]');\n\n      _this.init();\n\n      return _this;\n    }\n\n    _createClass(ProductRecommendations, [{\n      key: \"init\",\n      value: function init() {\n        var _this2 = this;\n\n        if (!this.dataset.url) {\n          return;\n        }\n\n        fetch(this.dataset.url).then(function (response) {\n          return response.text();\n        }).then(function (text) {\n          var parser = new window.DOMParser();\n          var html = parser.parseFromString(text, 'text/html');\n          var recommendations = html.querySelector('[data-reco-products-container]');\n\n          if (recommendations && recommendations.innerHTML.trim().length) {\n            _this2.productsContainer.innerHTML = recommendations.innerHTML;\n          }\n        })[\"catch\"](function (error) {\n          console.error(error);\n        });\n      }\n    }]);\n\n    return ProductRecommendations;\n  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n  window.customElements.define('product-recommendations', ProductRecommendations);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvcHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMvcHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VjdGlvbnMvcHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMvcHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMuanM/ZDAyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7IGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHsgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7IF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpOyB9IGZ1bmN0aW9uIFdyYXBwZXIoKSB7IHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7IH0gV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogV3JhcHBlciwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7IH07IHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTsgfVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgeyBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7IH0gZWxzZSB7IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgdmFyIGEgPSBbbnVsbF07IGEucHVzaC5hcHBseShhLCBhcmdzKTsgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpOyB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTsgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7IHJldHVybiBpbnN0YW5jZTsgfTsgfSByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikgeyByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuLy8gSW1wb3J0IENTU1xuaW1wb3J0ICcuL3Byb2R1Y3QtcmVjb21tZW5kYXRpb25zLnNjc3MnO1xuXG4oZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ3Byb2R1Y3QtcmVjb21tZW5kYXRpb25zJykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIFByb2R1Y3RSZWNvbW1lbmRhdGlvbnMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICAgIF9pbmhlcml0cyhQcm9kdWN0UmVjb21tZW5kYXRpb25zLCBfSFRNTEVsZW1lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQcm9kdWN0UmVjb21tZW5kYXRpb25zKTtcblxuICAgIGZ1bmN0aW9uIFByb2R1Y3RSZWNvbW1lbmRhdGlvbnMoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9kdWN0UmVjb21tZW5kYXRpb25zKTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgIF90aGlzLnByb2R1Y3RzQ29udGFpbmVyID0gX3RoaXMucXVlcnlTZWxlY3RvcignW2RhdGEtcmVjby1wcm9kdWN0cy1jb250YWluZXJdJyk7XG5cbiAgICAgIF90aGlzLmluaXQoKTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQcm9kdWN0UmVjb21tZW5kYXRpb25zLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMuZGF0YXNldC51cmwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCh0aGlzLmRhdGFzZXQudXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICB2YXIgcGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcbiAgICAgICAgICB2YXIgaHRtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodGV4dCwgJ3RleHQvaHRtbCcpO1xuICAgICAgICAgIHZhciByZWNvbW1lbmRhdGlvbnMgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlY28tcHJvZHVjdHMtY29udGFpbmVyXScpO1xuXG4gICAgICAgICAgaWYgKHJlY29tbWVuZGF0aW9ucyAmJiByZWNvbW1lbmRhdGlvbnMuaW5uZXJIVE1MLnRyaW0oKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzMi5wcm9kdWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSByZWNvbW1lbmRhdGlvbnMuaW5uZXJIVE1MO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFByb2R1Y3RSZWNvbW1lbmRhdGlvbnM7XG4gIH0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEhUTUxFbGVtZW50KSk7XG5cbiAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMnLCBQcm9kdWN0UmVjb21tZW5kYXRpb25zKTtcbn0pKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/sections/product-recommendations/product-recommendations.js\n");

/***/ }),

/***/ "./src/views/sections/product-recommendations/product-recommendations.scss":
/*!*********************************************************************************!*\
  !*** ./src/views/sections/product-recommendations/product-recommendations.scss ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvcHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMvcHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWN0aW9ucy9wcm9kdWN0LXJlY29tbWVuZGF0aW9ucy9wcm9kdWN0LXJlY29tbWVuZGF0aW9ucy5zY3NzPzJlMjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/sections/product-recommendations/product-recommendations.scss\n");

/***/ })

/******/ });