!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=59)}({59:function(e,t,n){"use strict";var r=n(60);n(61),document.addEventListener("DOMContentLoaded",(function(){var e,t;null!==(e=document.querySelector("[data-account-dashboard-addresses]"))&&e.querySelectorAll("[data-address-container]").forEach((function(e){e.querySelector("[data-address-container-toggle]").addEventListener("click",(function(){e.classList.toggle("active")}))})),null!==(t=document.querySelector("[data-account-page-selector]"))&&t.addEventListener("change",(function(){window.location.href=t.value}));var n=document.querySelectorAll("[data-address]");if(n.length){var o=new r.CountryProvinceSelector(window.theme.allCountryOptionTags);n.forEach((function(e){!function(e,t){var n=t.querySelector("[data-address-country]"),r=t.querySelector("[data-address-province]"),o=t.querySelector("[data-address-province-wrapper]"),a=t.querySelector("[data-address-delete-form]");n&&r&&o&&(e.build(n,r,{onCountryChange:function(e){o.classList.toggle("hide",!e.length),r.dispatchEvent(new Event("change"))}}),void 0!==n.options[n.selectedIndex]&&n.dispatchEvent(new Event("change")),a&&a.addEventListener("submit",(function(e){var t=a.getAttribute("data-confirm-message");window.confirm(t||"Are you sure you wish to delete this address?")||e.preventDefault()})))}(o,e)}))}}))},60:function(e,t,n){"use strict";function r(e){if("string"!=typeof e)throw new TypeError(e+" is not a string.");this.countryOptions=e}function o(e,t){return e.querySelector('option[value="'+t+'"]')}function a(e,t,n){var r=o(e,n),a=JSON.parse(r.getAttribute("data-provinces"));return t.options.length=0,a.length&&function(e,t){var n=e.getAttribute("data-default");t.forEach((function(t){var n=document.createElement("option");n.value=t[0],n.textContent=t[1],e.appendChild(n)})),n&&o(e,n)&&(e.value=n)}(t,a),a}n.r(t),n.d(t,"CountryProvinceSelector",(function(){return r})),r.prototype.build=function(e,t,n){if("object"!=typeof e)throw new TypeError(e+" is not a object.");if("object"!=typeof t)throw new TypeError(t+" is not a object.");var r=e.getAttribute("data-default");if(n=n||{},e.innerHTML=this.countryOptions,e.value=r,r&&o(e,r)){var u=a(e,t,r);n.onCountryChange&&n.onCountryChange(u,t,e)}e.addEventListener("change",(function(r){var o=r.target,u=o.value,i=a(o,t,u);n.onCountryChange&&n.onCountryChange(i,t,e)})),n.onProvinceChange&&t.addEventListener("change",n.onProvinceChange)}},61:function(e,t,n){"use strict";n.r(t)}});