!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=64)}({64:function(e,t,r){"use strict";function o(e){e.preventDefault(),n()}function n(){document.querySelector("[data-recover-password-form]").classList.toggle("hide"),document.querySelector("[data-customer-login-form]").classList.toggle("hide")}r(65),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-show-recover-password]"),t=document.querySelector("[data-hide-recover-password]");e&&("#recover"===window.location.hash&&n(),document.querySelector("[data-recover-password-success]")&&document.querySelector("[data-recover-password-success-message]").classList.remove("hide"),e.addEventListener("click",(function(e){o(e)})),t.addEventListener("click",(function(e){o(e)})))}))},65:function(e,t,r){"use strict";r.r(t)}});