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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/sections/customers/addresses/addresses.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@shopify/theme-addresses/theme-addresses.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/theme-addresses/theme-addresses.js ***!
  \******************************************************************/
/*! exports provided: CountryProvinceSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountryProvinceSelector\", function() { return CountryProvinceSelector; });\n/**\n * CountryProvinceSelector Constructor\n * @param {String} countryOptions the country options in html string\n */\nfunction CountryProvinceSelector(countryOptions) {\n  if (typeof countryOptions !== 'string') {\n    throw new TypeError(countryOptions + ' is not a string.');\n  }\n  this.countryOptions = countryOptions;\n}\n\n/**\n * Builds the country and province selector with the given node element\n * @param {Node} countryNodeElement The <select> element for country\n * @param {Node} provinceNodeElement The <select> element for province\n * @param {Object} options Additional settings available\n * @param {CountryProvinceSelector~onCountryChange} options.onCountryChange callback after a country `change` event\n * @param {CountryProvinceSelector~onProvinceChange} options.onProvinceChange callback after a province `change` event\n */\nCountryProvinceSelector.prototype.build = function (countryNodeElement, provinceNodeElement, options) {\n  if (typeof countryNodeElement !== 'object') {\n    throw new TypeError(countryNodeElement + ' is not a object.');\n  }\n\n  if (typeof provinceNodeElement !== 'object') {\n    throw new TypeError(provinceNodeElement + ' is not a object.');\n  }\n\n  var defaultValue = countryNodeElement.getAttribute('data-default');\n  options = options || {}\n\n  countryNodeElement.innerHTML = this.countryOptions;\n  countryNodeElement.value = defaultValue;\n\n  if (defaultValue && getOption(countryNodeElement, defaultValue)) {\n    var provinces = buildProvince(countryNodeElement, provinceNodeElement, defaultValue);\n    options.onCountryChange && options.onCountryChange(provinces, provinceNodeElement, countryNodeElement);\n  }\n\n  // Listen for value change on the country select\n  countryNodeElement.addEventListener('change', function (event) {\n    var target = event.target;\n    var selectedValue = target.value;\n    \n    var provinces = buildProvince(target, provinceNodeElement, selectedValue);\n    options.onCountryChange && options.onCountryChange(provinces, provinceNodeElement, countryNodeElement);\n  });\n\n  options.onProvinceChange && provinceNodeElement.addEventListener('change', options.onProvinceChange);\n}\n\n/**\n * This callback is called after a user interacted with a country `<select>`\n * @callback CountryProvinceSelector~onCountryChange\n * @param {array} provinces the parsed provinces\n * @param {Node} provinceNodeElement province `<select>` element\n * @param {Node} countryNodeElement country `<select>` element\n */\n\n /**\n * This callback is called after a user interacted with a province `<select>`\n * @callback CountryProvinceSelector~onProvinceChange\n * @param {Event} event the province selector `change` event object\n */\n\n/**\n * Returns the <option> with the specified value from the\n * given node element\n * A null is returned if no such <option> is found\n */\nfunction getOption(nodeElement, value) {\n  return nodeElement.querySelector('option[value=\"' + value +'\"]')\n}\n\n/**\n * Builds the options for province selector\n */\nfunction buildOptions (provinceNodeElement, provinces) {\n  var defaultValue = provinceNodeElement.getAttribute('data-default');\n\n  provinces.forEach(function (option) {\n    var optionElement = document.createElement('option');\n    optionElement.value = option[0];\n    optionElement.textContent = option[1];\n\n    provinceNodeElement.appendChild(optionElement);\n  })\n\n  if (defaultValue && getOption(provinceNodeElement, defaultValue)) {\n    provinceNodeElement.value = defaultValue;\n  }\n}\n\n/**\n * Builds the province selector\n */\nfunction buildProvince (countryNodeElement, provinceNodeElement, selectedValue) {\n  var selectedOption = getOption(countryNodeElement, selectedValue);\n  var provinces = JSON.parse(selectedOption.getAttribute('data-provinces'));\n\n  provinceNodeElement.options.length = 0;\n\n  if (provinces.length) {\n    buildOptions(provinceNodeElement, provinces)\n  }\n\n  return provinces;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvdGhlbWUtYWRkcmVzc2VzL3RoZW1lLWFkZHJlc3Nlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS90aGVtZS1hZGRyZXNzZXMvdGhlbWUtYWRkcmVzc2VzLmpzPzE5YjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3VudHJ5UHJvdmluY2VTZWxlY3RvciBDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IGNvdW50cnlPcHRpb25zIHRoZSBjb3VudHJ5IG9wdGlvbnMgaW4gaHRtbCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvdW50cnlQcm92aW5jZVNlbGVjdG9yKGNvdW50cnlPcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgY291bnRyeU9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjb3VudHJ5T3B0aW9ucyArICcgaXMgbm90IGEgc3RyaW5nLicpO1xuICB9XG4gIHRoaXMuY291bnRyeU9wdGlvbnMgPSBjb3VudHJ5T3B0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIGNvdW50cnkgYW5kIHByb3ZpbmNlIHNlbGVjdG9yIHdpdGggdGhlIGdpdmVuIG5vZGUgZWxlbWVudFxuICogQHBhcmFtIHtOb2RlfSBjb3VudHJ5Tm9kZUVsZW1lbnQgVGhlIDxzZWxlY3Q+IGVsZW1lbnQgZm9yIGNvdW50cnlcbiAqIEBwYXJhbSB7Tm9kZX0gcHJvdmluY2VOb2RlRWxlbWVudCBUaGUgPHNlbGVjdD4gZWxlbWVudCBmb3IgcHJvdmluY2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgc2V0dGluZ3MgYXZhaWxhYmxlXG4gKiBAcGFyYW0ge0NvdW50cnlQcm92aW5jZVNlbGVjdG9yfm9uQ291bnRyeUNoYW5nZX0gb3B0aW9ucy5vbkNvdW50cnlDaGFuZ2UgY2FsbGJhY2sgYWZ0ZXIgYSBjb3VudHJ5IGBjaGFuZ2VgIGV2ZW50XG4gKiBAcGFyYW0ge0NvdW50cnlQcm92aW5jZVNlbGVjdG9yfm9uUHJvdmluY2VDaGFuZ2V9IG9wdGlvbnMub25Qcm92aW5jZUNoYW5nZSBjYWxsYmFjayBhZnRlciBhIHByb3ZpbmNlIGBjaGFuZ2VgIGV2ZW50XG4gKi9cbkNvdW50cnlQcm92aW5jZVNlbGVjdG9yLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uIChjb3VudHJ5Tm9kZUVsZW1lbnQsIHByb3ZpbmNlTm9kZUVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBjb3VudHJ5Tm9kZUVsZW1lbnQgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjb3VudHJ5Tm9kZUVsZW1lbnQgKyAnIGlzIG5vdCBhIG9iamVjdC4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvdmluY2VOb2RlRWxlbWVudCAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHByb3ZpbmNlTm9kZUVsZW1lbnQgKyAnIGlzIG5vdCBhIG9iamVjdC4nKTtcbiAgfVxuXG4gIHZhciBkZWZhdWx0VmFsdWUgPSBjb3VudHJ5Tm9kZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQnKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBjb3VudHJ5Tm9kZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5jb3VudHJ5T3B0aW9ucztcbiAgY291bnRyeU5vZGVFbGVtZW50LnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gIGlmIChkZWZhdWx0VmFsdWUgJiYgZ2V0T3B0aW9uKGNvdW50cnlOb2RlRWxlbWVudCwgZGVmYXVsdFZhbHVlKSkge1xuICAgIHZhciBwcm92aW5jZXMgPSBidWlsZFByb3ZpbmNlKGNvdW50cnlOb2RlRWxlbWVudCwgcHJvdmluY2VOb2RlRWxlbWVudCwgZGVmYXVsdFZhbHVlKTtcbiAgICBvcHRpb25zLm9uQ291bnRyeUNoYW5nZSAmJiBvcHRpb25zLm9uQ291bnRyeUNoYW5nZShwcm92aW5jZXMsIHByb3ZpbmNlTm9kZUVsZW1lbnQsIGNvdW50cnlOb2RlRWxlbWVudCk7XG4gIH1cblxuICAvLyBMaXN0ZW4gZm9yIHZhbHVlIGNoYW5nZSBvbiB0aGUgY291bnRyeSBzZWxlY3RcbiAgY291bnRyeU5vZGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIHNlbGVjdGVkVmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgXG4gICAgdmFyIHByb3ZpbmNlcyA9IGJ1aWxkUHJvdmluY2UodGFyZ2V0LCBwcm92aW5jZU5vZGVFbGVtZW50LCBzZWxlY3RlZFZhbHVlKTtcbiAgICBvcHRpb25zLm9uQ291bnRyeUNoYW5nZSAmJiBvcHRpb25zLm9uQ291bnRyeUNoYW5nZShwcm92aW5jZXMsIHByb3ZpbmNlTm9kZUVsZW1lbnQsIGNvdW50cnlOb2RlRWxlbWVudCk7XG4gIH0pO1xuXG4gIG9wdGlvbnMub25Qcm92aW5jZUNoYW5nZSAmJiBwcm92aW5jZU5vZGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9wdGlvbnMub25Qcm92aW5jZUNoYW5nZSk7XG59XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgYWZ0ZXIgYSB1c2VyIGludGVyYWN0ZWQgd2l0aCBhIGNvdW50cnkgYDxzZWxlY3Q+YFxuICogQGNhbGxiYWNrIENvdW50cnlQcm92aW5jZVNlbGVjdG9yfm9uQ291bnRyeUNoYW5nZVxuICogQHBhcmFtIHthcnJheX0gcHJvdmluY2VzIHRoZSBwYXJzZWQgcHJvdmluY2VzXG4gKiBAcGFyYW0ge05vZGV9IHByb3ZpbmNlTm9kZUVsZW1lbnQgcHJvdmluY2UgYDxzZWxlY3Q+YCBlbGVtZW50XG4gKiBAcGFyYW0ge05vZGV9IGNvdW50cnlOb2RlRWxlbWVudCBjb3VudHJ5IGA8c2VsZWN0PmAgZWxlbWVudFxuICovXG5cbiAvKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIGFmdGVyIGEgdXNlciBpbnRlcmFjdGVkIHdpdGggYSBwcm92aW5jZSBgPHNlbGVjdD5gXG4gKiBAY2FsbGJhY2sgQ291bnRyeVByb3ZpbmNlU2VsZWN0b3J+b25Qcm92aW5jZUNoYW5nZVxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgdGhlIHByb3ZpbmNlIHNlbGVjdG9yIGBjaGFuZ2VgIGV2ZW50IG9iamVjdFxuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgPG9wdGlvbj4gd2l0aCB0aGUgc3BlY2lmaWVkIHZhbHVlIGZyb20gdGhlXG4gKiBnaXZlbiBub2RlIGVsZW1lbnRcbiAqIEEgbnVsbCBpcyByZXR1cm5lZCBpZiBubyBzdWNoIDxvcHRpb24+IGlzIGZvdW5kXG4gKi9cbmZ1bmN0aW9uIGdldE9wdGlvbihub2RlRWxlbWVudCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5vZGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicgKyB2YWx1ZSArJ1wiXScpXG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSBvcHRpb25zIGZvciBwcm92aW5jZSBzZWxlY3RvclxuICovXG5mdW5jdGlvbiBidWlsZE9wdGlvbnMgKHByb3ZpbmNlTm9kZUVsZW1lbnQsIHByb3ZpbmNlcykge1xuICB2YXIgZGVmYXVsdFZhbHVlID0gcHJvdmluY2VOb2RlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVmYXVsdCcpO1xuXG4gIHByb3ZpbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICB2YXIgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb25bMF07XG4gICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvblsxXTtcblxuICAgIHByb3ZpbmNlTm9kZUVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gIH0pXG5cbiAgaWYgKGRlZmF1bHRWYWx1ZSAmJiBnZXRPcHRpb24ocHJvdmluY2VOb2RlRWxlbWVudCwgZGVmYXVsdFZhbHVlKSkge1xuICAgIHByb3ZpbmNlTm9kZUVsZW1lbnQudmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIHByb3ZpbmNlIHNlbGVjdG9yXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUHJvdmluY2UgKGNvdW50cnlOb2RlRWxlbWVudCwgcHJvdmluY2VOb2RlRWxlbWVudCwgc2VsZWN0ZWRWYWx1ZSkge1xuICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBnZXRPcHRpb24oY291bnRyeU5vZGVFbGVtZW50LCBzZWxlY3RlZFZhbHVlKTtcbiAgdmFyIHByb3ZpbmNlcyA9IEpTT04ucGFyc2Uoc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb3ZpbmNlcycpKTtcblxuICBwcm92aW5jZU5vZGVFbGVtZW50Lm9wdGlvbnMubGVuZ3RoID0gMDtcblxuICBpZiAocHJvdmluY2VzLmxlbmd0aCkge1xuICAgIGJ1aWxkT3B0aW9ucyhwcm92aW5jZU5vZGVFbGVtZW50LCBwcm92aW5jZXMpXG4gIH1cblxuICByZXR1cm4gcHJvdmluY2VzO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@shopify/theme-addresses/theme-addresses.js\n");

/***/ }),

/***/ "./src/views/sections/customers/addresses/addresses.js":
/*!*************************************************************!*\
  !*** ./src/views/sections/customers/addresses/addresses.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _themeAddresses = __webpack_require__(/*! @shopify/theme-addresses */ \"./node_modules/@shopify/theme-addresses/theme-addresses.js\");\n\n__webpack_require__(/*! ./addresses.scss */ \"./src/views/sections/customers/addresses/addresses.scss\");\n\n// Import CSS\nfunction initializeAddressForm(countryProvinceSelector, container) {\n  var countrySelector = container.querySelector('[data-address-country]');\n  var provinceSelector = container.querySelector('[data-address-province]');\n  var provinceWrapper = container.querySelector('[data-address-province-wrapper]');\n  var deleteForm = container.querySelector('[data-address-delete-form]');\n\n  if (!countrySelector || !provinceSelector || !provinceWrapper) {\n    return;\n  }\n\n  countryProvinceSelector.build(countrySelector, provinceSelector, {\n    onCountryChange: function onCountryChange(provinces) {\n      provinceWrapper.classList.toggle('hide', !provinces.length);\n      provinceSelector.dispatchEvent(new Event('change'));\n    }\n  });\n\n  if (typeof countrySelector.options[countrySelector.selectedIndex] !== 'undefined') {\n    countrySelector.dispatchEvent(new Event('change'));\n  }\n\n  if (deleteForm) {\n    deleteForm.addEventListener('submit', function (event) {\n      var confirmMessage = deleteForm.getAttribute('data-confirm-message');\n\n      if (!window.confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {\n        event.preventDefault();\n      }\n    });\n  }\n}\n\nfunction addressToggles() {\n  var addressContainer = document.querySelector('[data-account-dashboard-addresses]');\n\n  if (addressContainer === null) {\n    return;\n  }\n\n  var addresses = addressContainer.querySelectorAll('[data-address-container]');\n  addresses.forEach(function (address) {\n    var toggle = address.querySelector('[data-address-container-toggle]');\n    toggle.addEventListener('click', function () {\n      address.classList.toggle('active');\n    });\n  });\n}\n\nfunction accountPageSelectorInit() {\n  var pageSelector = document.querySelector('[data-account-page-selector]');\n\n  if (pageSelector === null) {\n    return;\n  }\n\n  pageSelector.addEventListener('change', function () {\n    window.location.href = pageSelector.value;\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  addressToggles();\n  accountPageSelectorInit();\n  var addresses = document.querySelectorAll('[data-address]');\n\n  if (!addresses.length) {\n    return;\n  }\n\n  var countryProvinceSelector = new _themeAddresses.CountryProvinceSelector(window.theme.allCountryOptionTags);\n  addresses.forEach(function (address) {\n    initializeAddressForm(countryProvinceSelector, address);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL2FkZHJlc3Nlcy9hZGRyZXNzZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL2FkZHJlc3Nlcy9hZGRyZXNzZXMuanM/MmMwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90aGVtZUFkZHJlc3NlcyA9IHJlcXVpcmUoXCJAc2hvcGlmeS90aGVtZS1hZGRyZXNzZXNcIik7XG5cbnJlcXVpcmUoXCIuL2FkZHJlc3Nlcy5zY3NzXCIpO1xuXG4vLyBJbXBvcnQgQ1NTXG5mdW5jdGlvbiBpbml0aWFsaXplQWRkcmVzc0Zvcm0oY291bnRyeVByb3ZpbmNlU2VsZWN0b3IsIGNvbnRhaW5lcikge1xuICB2YXIgY291bnRyeVNlbGVjdG9yID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZHJlc3MtY291bnRyeV0nKTtcbiAgdmFyIHByb3ZpbmNlU2VsZWN0b3IgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtYWRkcmVzcy1wcm92aW5jZV0nKTtcbiAgdmFyIHByb3ZpbmNlV3JhcHBlciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGRyZXNzLXByb3ZpbmNlLXdyYXBwZXJdJyk7XG4gIHZhciBkZWxldGVGb3JtID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZHJlc3MtZGVsZXRlLWZvcm1dJyk7XG5cbiAgaWYgKCFjb3VudHJ5U2VsZWN0b3IgfHwgIXByb3ZpbmNlU2VsZWN0b3IgfHwgIXByb3ZpbmNlV3JhcHBlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvdW50cnlQcm92aW5jZVNlbGVjdG9yLmJ1aWxkKGNvdW50cnlTZWxlY3RvciwgcHJvdmluY2VTZWxlY3Rvciwge1xuICAgIG9uQ291bnRyeUNoYW5nZTogZnVuY3Rpb24gb25Db3VudHJ5Q2hhbmdlKHByb3ZpbmNlcykge1xuICAgICAgcHJvdmluY2VXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhcHJvdmluY2VzLmxlbmd0aCk7XG4gICAgICBwcm92aW5jZVNlbGVjdG9yLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHlwZW9mIGNvdW50cnlTZWxlY3Rvci5vcHRpb25zW2NvdW50cnlTZWxlY3Rvci5zZWxlY3RlZEluZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb3VudHJ5U2VsZWN0b3IuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgfVxuXG4gIGlmIChkZWxldGVGb3JtKSB7XG4gICAgZGVsZXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBjb25maXJtTWVzc2FnZSA9IGRlbGV0ZUZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbmZpcm0tbWVzc2FnZScpO1xuXG4gICAgICBpZiAoIXdpbmRvdy5jb25maXJtKGNvbmZpcm1NZXNzYWdlIHx8ICdBcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gZGVsZXRlIHRoaXMgYWRkcmVzcz8nKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZHJlc3NUb2dnbGVzKCkge1xuICB2YXIgYWRkcmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjY291bnQtZGFzaGJvYXJkLWFkZHJlc3Nlc10nKTtcblxuICBpZiAoYWRkcmVzc0NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBhZGRyZXNzZXMgPSBhZGRyZXNzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFkZHJlc3MtY29udGFpbmVyXScpO1xuICBhZGRyZXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgIHZhciB0b2dnbGUgPSBhZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZHJlc3MtY29udGFpbmVyLXRvZ2dsZV0nKTtcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRyZXNzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWNjb3VudFBhZ2VTZWxlY3RvckluaXQoKSB7XG4gIHZhciBwYWdlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY2NvdW50LXBhZ2Utc2VsZWN0b3JdJyk7XG5cbiAgaWYgKHBhZ2VTZWxlY3RvciA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhZ2VTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYWdlU2VsZWN0b3IudmFsdWU7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBhZGRyZXNzVG9nZ2xlcygpO1xuICBhY2NvdW50UGFnZVNlbGVjdG9ySW5pdCgpO1xuICB2YXIgYWRkcmVzc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWRkcmVzc10nKTtcblxuICBpZiAoIWFkZHJlc3Nlcy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY291bnRyeVByb3ZpbmNlU2VsZWN0b3IgPSBuZXcgX3RoZW1lQWRkcmVzc2VzLkNvdW50cnlQcm92aW5jZVNlbGVjdG9yKHdpbmRvdy50aGVtZS5hbGxDb3VudHJ5T3B0aW9uVGFncyk7XG4gIGFkZHJlc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgaW5pdGlhbGl6ZUFkZHJlc3NGb3JtKGNvdW50cnlQcm92aW5jZVNlbGVjdG9yLCBhZGRyZXNzKTtcbiAgfSk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/sections/customers/addresses/addresses.js\n");

/***/ }),

/***/ "./src/views/sections/customers/addresses/addresses.scss":
/*!***************************************************************!*\
  !*** ./src/views/sections/customers/addresses/addresses.scss ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3Mvc2VjdGlvbnMvY3VzdG9tZXJzL2FkZHJlc3Nlcy9hZGRyZXNzZXMuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWN0aW9ucy9jdXN0b21lcnMvYWRkcmVzc2VzL2FkZHJlc3Nlcy5zY3NzP2MwODYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/sections/customers/addresses/addresses.scss\n");

/***/ })

/******/ });