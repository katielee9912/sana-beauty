!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=41)}([function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(7);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(12).default,o=r(8);t.exports=function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(0),o=r(7),i=r(13),a=r(14);function c(e){var r="function"==typeof Map?new Map:void 0;return t.exports=c=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return a(t,arguments,n(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},t.exports.__esModule=!0,t.exports.default=t.exports,c(e)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e,n)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){t.exports=r(18)},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,l,"next",t)}function l(t){r(a,o,i,c,l,"throw",t)}c(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(19),o=r(20),i=r(17),a=r(21);t.exports=function(t){return n(t)||o(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(7),o=r(15);function i(e,r,a){return o()?(t.exports=i=Reflect.construct,t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=i=function(t,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return r&&n(i,r.prototype),i},t.exports.__esModule=!0,t.exports.default=t.exports),i.apply(null,arguments)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(16);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function f(){}function d(){}function p(){}var h={};c(h,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(E([])));v&&v!==e&&r.call(v,o)&&(h=v);var m=p.prototype=f.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,c(m,"constructor",p),c(p,"constructor",d),d.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,a,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){var n=r(16);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";var n=r(1),o=n(r(9)),i=n(r(11)),a=n(r(10)),c=n(r(2)),l=n(r(3)),u=n(r(4)),s=n(r(5)),f=n(r(0)),d=n(r(6));function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,f.default)(t);if(e){var o=(0,f.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.default)(this,r)}}r(42),r(43),r(44),r(45),void 0===window.customElements.get("filtered-collection-display")&&window.customElements.define("filtered-collection-display",function(t){(0,u.default)(f,t);var e,r,n=p(f);function f(){var t;return(0,c.default)(this,f),(t=n.call(this)).handle=t.getAttribute("data-filtered-collection-display"),t.path=t.getAttribute("data-url"),t.handle&&t.path?(t.sectionId=t.getAttribute("data-section-id"),t.parentContainerSelector="[data-filtered-collection-display]",t.parentContainerEl=document.querySelector(t.parentContainerSelector),t.lastFocusedEl=null,t.fetchResponseCache=[],t.setParamStringsFromUrl(window.location.href),t.initListeners(),t):(0,s.default)(t)}return(0,l.default)(f,[{key:"setParamStringsFromUrl",value:function(t){var e=new URL(t).searchParams;this.sortSearchString=e.has("sort_by")?"sort_by=".concat(e.get("sort_by")):"",this.pageSearchString=e.has("page")?"page=".concat(e.get("page")):"",e.delete("sort_by"),e.delete("page"),this.filterSearchString=e.toString()}},{key:"handleFilterUpdate",value:function(t,e){this.filterSearchString=t,this.pageSearchString="",this.updateDisplay({event:e})}},{key:"handleSortUpdate",value:function(t){console.log("sort!"),this.sortSearchString=t,this.pageSearchString="",this.updateDisplay()}},{key:"handleUrlChange",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.setParamStringsFromUrl(t),this.updateDisplay({pushState:e})}},{key:"initListeners",value:function(){var t=this;window.addEventListener("popstate",(function(){t.handleUrlChange(window.location.href,!1)}))}},{key:"updateDisplay",value:(r=(0,a.default)(o.default.mark((function t(e){var r,n,i,a,c,l,u;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.pushState,n=void 0===r||r,i=e.event,a=void 0===i?null:i,c=[this.filterSearchString,this.sortSearchString,this.pageSearchString].filter((function(t){return 0!==t.length})).join("&"),this.classList.add("collection-display-loading"),l="".concat(this.path,"?").concat(c),t.next=6,this.fetchCollection("".concat(l,"&section_id=").concat(this.sectionId));case 6:u=t.sent,this.updateActiveFilterLinks(u),this.updateFilterFacets(u,a),this.updateSortings(u),this.updateCollectionDisplay(u),this.updatePaginationDisplay(u),this.classList.remove("collection-display-loading"),window.scrollTo({top:0,left:0,behaviour:"smooth"}),n&&window.history.pushState({},"",l);case 15:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"updateFilterFacets",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e?e.target.closest("[data-filter-facet]"):null,n=r?r.dataset.index:null,o=document.querySelectorAll('[data-collection-filter="'.concat(this.handle,'"]')),a=t.querySelectorAll('[data-collection-filter="'.concat(this.handle,'"]'));o.forEach((function(t){var e=t.querySelectorAll("[data-filter-facet]"),r=(0,i.default)(a).find((function(e){return e.dataset.filterId===t.dataset.filterId}));e.forEach((function(t){if(!n||t.dataset.index!==n){var e=r.querySelector('[data-filter-facet][data-index="'.concat(t.dataset.index,'"]'));t.classList.toggle("d-none",!e),e&&(t.querySelector("[data-accordion-content]").innerHTML=e.querySelector("[data-accordion-content]").innerHTML)}}))}))}},{key:"updateActiveFilterLinks",value:function(t){var e=document.querySelectorAll('[data-active-filters="'.concat(this.handle,'"]')),r=t.querySelector('[data-active-filters="'.concat(this.handle,'"]'));e.forEach((function(t){t.innerHTML=r.innerHTML}))}},{key:"updateSortings",value:function(t){var e=t.querySelectorAll('[data-collection-sorting="'.concat(this.handle,'"]'));document.querySelectorAll('[data-collection-sorting="'.concat(this.handle,'"]')).forEach((function(t,r){void 0!==e[r]&&(t.innerHTML=e[r].innerHTML)}))}},{key:"updateCollectionDisplay",value:function(t){var e=t.querySelectorAll('[data-filtered-collection-display="'.concat(this.handle,'"]'));document.querySelectorAll('[data-filtered-collection-display="'.concat(this.handle,'"]')).forEach((function(t,r){void 0!==e[r]&&(t.innerHTML=e[r].innerHTML)}))}},{key:"updatePaginationDisplay",value:function(t){var e=t.querySelectorAll('[data-collection-pagination="'.concat(this.handle,'"]'));document.querySelectorAll('[data-collection-pagination="'.concat(this.handle,'"]')).forEach((function(t,r){void 0!==e[r]&&(t.innerHTML=e[r].innerHTML)}))}},{key:"fetchCollection",value:(e=(0,a.default)(o.default.mark((function t(e){var r,n,i,a;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=null,!(n=this.fetchResponseCache.find((function(t){return t.url===e})))){t.next=6;break}r=n.html,t.next=10;break;case 6:return t.next=8,fetch(e).then((function(t){return t.text()})).then((function(t){return t})).catch((function(t){return console.error(t),null}));case 8:r=t.sent,this.fetchResponseCache.push({url:e,html:r});case 10:return i=new window.DOMParser,a=i.parseFromString(r,"text/html"),t.abrupt("return",a);case 13:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),f}((0,d.default)(HTMLElement))),void 0===window.customElements.get("collection-pagination")&&window.customElements.define("collection-pagination",function(t){(0,u.default)(r,t);var e=p(r);function r(){var t;return(0,c.default)(this,r),(t=e.call(this)).collectionEl=document.querySelector("filtered-collection-display"),t.linkEls=t.querySelectorAll("a"),t.collectionEl&&t.linkEls.length&&t.init(),t}return(0,l.default)(r,[{key:"init",value:function(){var t=this;this.linkEls.forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault(),t.collectionEl.handleUrlChange(e.href)}))}))}}]),r}((0,d.default)(HTMLElement)))},function(t,e,r){"use strict";r.r(e)},function(t,e,r){"use strict";var n=r(1),o=n(r(9)),i=n(r(10)),a=n(r(11)),c=n(r(2)),l=n(r(3)),u=n(r(4)),s=n(r(5)),f=n(r(0)),d=n(r(6));function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,f.default)(t);if(e){var o=(0,f.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.default)(this,r)}}void 0===window.customElements.get("collection-filters")&&window.customElements.define("collection-filters",function(t){(0,u.default)(n,t);var e,r=p(n);function n(){var t;return(0,c.default)(this,n),(t=r.call(this)).filterOptions=(0,a.default)(t.querySelectorAll("[data-filter-option]")),t.removeFilterBtns=(0,a.default)(t.querySelectorAll("[data-remove-filter-btn]")),t.collectionEl=document.querySelector('[data-filtered-collection-display="'.concat(t.getAttribute("data-collection"),'"]')),t.form=t.querySelector("form"),t.collectionEl?(t.initFilterForm(),t.initFilterFacetToggles(),t):(0,s.default)(t)}return(0,l.default)(n,[{key:"initFilterForm",value:function(){var t=this;this.form.addEventListener("change",(function(e){t.updateFilter(e)})),this.removeFilterBtns.forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault(),t.collectionEl.handleUrlChange(e.href)}))}))}},{key:"updateFilter",value:(e=(0,i.default)(o.default.mark((function t(e){var r;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams(new window.FormData(this.form)).toString(),t.next=3,this.collectionEl.handleFilterUpdate(r,e);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"initFilterFacetToggles",value:function(){var t=this,e="collectionStorage_".concat(this.getAttribute("data-collection")),r=this.querySelectorAll("[data-filter-facet]");this.updateFacetStates(r,e),r.forEach((function(n){n.querySelector("details").addEventListener("toggle",(function(){t.saveFacetStates(r,e)}))}))}},{key:"updateFacetStates",value:function(t,e){var r=this,n=localStorage.getItem(e);n&&n.split(",").forEach((function(t){var e=r.querySelector('[data-filter-facet="'.concat(t,'"] details'));e&&e.setAttribute("open","")}))}},{key:"saveFacetStates",value:function(t,e){var r=(0,a.default)(t).filter((function(t){return t.querySelector("details[open]")})).map((function(t){return t.getAttribute("data-filter-facet")})).join(",");localStorage.setItem(e,r)}}]),n}((0,d.default)(HTMLElement)))},function(t,e,r){"use strict";var n=r(1),o=n(r(2)),i=n(r(3)),a=n(r(4)),c=n(r(5)),l=n(r(0)),u=n(r(6));function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,l.default)(t);if(e){var o=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.default)(this,r)}}void 0===window.customElements.get("collection-active-filters")&&window.customElements.define("collection-active-filters",function(t){(0,a.default)(r,t);var e=s(r);function r(){var t;return(0,o.default)(this,r),(t=e.call(this)).collectionEl=document.querySelector('[data-filtered-collection-display="'.concat(t.getAttribute("data-collection"),'"]')),t.collectionEl?(t.initRemoveButtons(),t):(0,c.default)(t)}return(0,i.default)(r,[{key:"initRemoveButtons",value:function(){var t=this;this.querySelectorAll("[data-remove-filter-btn]").forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault(),t.collectionEl.handleUrlChange(e.href)}))}))}}]),r}((0,u.default)(HTMLElement)))},function(t,e,r){"use strict";var n=r(1),o=n(r(2)),i=n(r(3)),a=n(r(4)),c=n(r(5)),l=n(r(0)),u=n(r(6));function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,l.default)(t);if(e){var o=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.default)(this,r)}}void 0===window.customElements.get("collection-sorting")&&window.customElements.define("collection-sorting",function(t){(0,a.default)(r,t);var e=s(r);function r(){var t;return(0,o.default)(this,r),(t=e.call(this)).sortingSelects=t.querySelectorAll("[data-collection-sorting-select]"),t.collectionEl=document.querySelector('[data-filtered-collection-display="'.concat(t.getAttribute("data-collection"),'"]')),t.form=t.querySelector("form"),t.collectionEl?(t.initForm(),t):(0,c.default)(t)}return(0,i.default)(r,[{key:"initForm",value:function(){var t=this;this.form.addEventListener("change",(function(e){var r=new URLSearchParams(new window.FormData(t.form)).toString();t.collectionEl.handleSortUpdate(r)}))}}]),r}((0,u.default)(HTMLElement)))}]);