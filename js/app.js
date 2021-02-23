/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.js */ \"./src/js/demo.js\");\n/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demo_js__WEBPACK_IMPORTED_MODULE_1__);\n\n/* Your JS Code goes here */\n\n/* Demo JS */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9hcHAuanM/OTBlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQTs7QUFFQSIsImZpbGUiOiIuL3NyYy9qcy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvYXBwLnNjc3MnO1xuXG4vKiBZb3VyIEpTIENvZGUgZ29lcyBoZXJlICovXG5cbi8qIERlbW8gSlMgKi9cbmltcG9ydCAnLi9kZW1vLmpzJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/demo.js":
/*!************************!*\
  !*** ./src/js/demo.js ***!
  \************************/
/***/ (() => {

eval("var demo = function demo() {\n  return 'Webpack Boilerplate v5.0.1 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';\n}; // eslint-disable-next-line no-console\n\n\nconsole.log(demo());\n$(document).ready(function () {\n  var navListItem = $('.navbar-nav>li');\n  var navLink = $('.navbar-nav>li>a');\n  var urlLocation = window.location.href;\n  var page = window.location.pathname;\n  var stickyNavTop = $('.navbar').offset().top; // Add active class on page change and section change\n\n  $.each(navLink, function (key, value) {\n    var currentLink = $(this);\n    var href = currentLink.attr('href');\n\n    if (urlLocation.indexOf(href) > -1) {\n      $(this).parent().addClass('active');\n    } else {\n      $(this).parent().removeClass('active');\n    }\n  }); // Close nav on link click\n\n  navLink.on('click', function () {\n    navListItem.removeClass('active');\n    $(this).parent().addClass('active');\n\n    if ($('.navbar-collapse').hasClass('show')) {\n      $('.navbar-collapse').collapse('hide');\n    }\n  });\n  $('.navbar-brand').on('click', function () {\n    if ($('.navbar-collapse').hasClass('show')) {\n      $('.navbar-collapse').collapse('hide');\n      $(\"html, body\").animate({\n        scrollTop: 0\n      }, 850);\n    }\n\n    if (page == '/' || page == '') {\n      $(\"html, body\").animate({\n        scrollTop: 0\n      }, 850);\n    } else {\n      $(location).attr('href', '/');\n      $(\"html, body\").animate({\n        scrollTop: 0\n      }, 850);\n    }\n  }); //Nav click slick smooth scroll custom\n\n  $('a.nav-link').on('click', function () {\n    var target = $(this.hash);\n    $('html,body').animate({\n      scrollTop: target.offset().top\n    }, 850);\n  }); // Assign active class to nav links while scrolling\n\n  $('body').scrollspy({\n    target: '#siteNav',\n    offset: 60\n  }); // Hamburger click\n\n  $('.navbar-toggler').on(\"click\", function () {\n    $('.toggle').toggleClass('clicked');\n  }); // Animate on page change\n\n  $('body').addClass('animated'); // Illumination effect\n\n  var box = $('.box');\n  var originalBg = box.css(\"background-color\");\n  var lightColor = \"rgba(255,255,255,0.85)\";\n  var gradientSize = 250;\n  box.each(function () {\n    $(this).on('mousemove', function (e) {\n      var x = e.pageX - this.offsetLeft;\n      var y = e.pageY - this.offsetTop;\n      var xy = x + \" \" + y;\n      var bgWebKit = \"-webkit-gradient(radial, \" + xy + \", 0, \" + xy + \", \" + gradientSize + \", from(\" + lightColor + \"), to(rgba(255,255,255,0.0))), \" + originalBg;\n      var bgMoz = \"-moz-radial-gradient(\" + x + \"px \" + y + \"px 45deg, circle, \" + lightColor + \" 0%, \" + originalBg + \" \" + gradientSize + \"px)\";\n      $(this).css({\n        background: bgWebKit\n      }).css({\n        background: bgMoz\n      });\n    }).mouseleave(function () {\n      $(this).css({\n        background: originalBg\n      });\n    });\n  }); // Sticky nav\n\n  var stickyNav = function stickyNav() {\n    var scrollTop = $(window).scrollTop();\n\n    if (scrollTop > stickyNavTop) {\n      $('.navbar').addClass('sticky');\n      $('body').addClass('nav-fixed');\n    } else {\n      $('.navbar').removeClass('sticky');\n      $('body').removeClass('nav-fixed');\n    }\n  };\n\n  stickyNav();\n  $(window).scroll(function () {\n    stickyNav();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9kZW1vLmpzP2MzNDgiXSwibmFtZXMiOlsiZGVtbyIsImNvbnNvbGUiLCJsb2ciLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm5hdkxpc3RJdGVtIiwibmF2TGluayIsInVybExvY2F0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicGFnZSIsInBhdGhuYW1lIiwic3RpY2t5TmF2VG9wIiwib2Zmc2V0IiwidG9wIiwiZWFjaCIsImtleSIsInZhbHVlIiwiY3VycmVudExpbmsiLCJhdHRyIiwiaW5kZXhPZiIsInBhcmVudCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJvbiIsImhhc0NsYXNzIiwiY29sbGFwc2UiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidGFyZ2V0IiwiaGFzaCIsInNjcm9sbHNweSIsInRvZ2dsZUNsYXNzIiwiYm94Iiwib3JpZ2luYWxCZyIsImNzcyIsImxpZ2h0Q29sb3IiLCJncmFkaWVudFNpemUiLCJlIiwieCIsInBhZ2VYIiwib2Zmc2V0TGVmdCIsInkiLCJwYWdlWSIsIm9mZnNldFRvcCIsInh5IiwiYmdXZWJLaXQiLCJiZ01veiIsImJhY2tncm91bmQiLCJtb3VzZWxlYXZlIiwic3RpY2t5TmF2Iiwic2Nyb2xsIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU0sK0ZBQU47QUFBQSxDQUFiLEMsQ0FFQTs7O0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLEVBQWhCO0FBQ0FHLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQixNQUFJQyxXQUFXLEdBQUdILENBQUMsQ0FBQyxnQkFBRCxDQUFuQjtBQUNBLE1BQUlJLE9BQU8sR0FBR0osQ0FBQyxDQUFDLGtCQUFELENBQWY7QUFDQSxNQUFJSyxXQUFXLEdBQUdD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RUFBQUEsQ0FBQyxDQUFDTSxNQUFELENBQUQsQ0FBVTRDLE1BQVYsQ0FBaUIsWUFBWTtBQUN6QkQsSUFBQUEsU0FBUztBQUNaLEdBRkQ7QUFJSCxDQS9GRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlbW8gPSAoKSA9PiAnV2VicGFjayBCb2lsZXJwbGF0ZSB2NS4wLjEgLSBTQVNTL1Bvc3RDU1MsIEVTNi83LCBicm93c2VyIHN5bmMsIHNvdXJjZSBjb2RlIGxpc3RpbmcgYW5kIG1vcmUuJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGRlbW8oKSk7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5hdkxpc3RJdGVtID0gJCgnLm5hdmJhci1uYXY+bGknKTtcbiAgICBsZXQgbmF2TGluayA9ICQoJy5uYXZiYXItbmF2PmxpPmEnKTtcbiAgICBsZXQgdXJsTG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBsZXQgcGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBsZXQgc3RpY2t5TmF2VG9wID0gJCgnLm5hdmJhcicpLm9mZnNldCgpLnRvcDtcblxuICAgIC8vIEFkZCBhY3RpdmUgY2xhc3Mgb24gcGFnZSBjaGFuZ2UgYW5kIHNlY3Rpb24gY2hhbmdlXG4gICAgJC5lYWNoKG5hdkxpbmssIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBjdXJyZW50TGluayA9ICQodGhpcyk7XG4gICAgICAgIGxldCBocmVmID0gY3VycmVudExpbmsuYXR0cignaHJlZicpO1xuICAgICAgICBpZiAodXJsTG9jYXRpb24uaW5kZXhPZihocmVmKSA+IC0xKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENsb3NlIG5hdiBvbiBsaW5rIGNsaWNrXG4gICAgbmF2TGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdkxpc3RJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGlmICgkKCcubmF2YmFyLWNvbGxhcHNlJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICAgICAgJCgnLm5hdmJhci1jb2xsYXBzZScpLmNvbGxhcHNlKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcubmF2YmFyLWJyYW5kJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCgnLm5hdmJhci1jb2xsYXBzZScpLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgICAgICQoJy5uYXZiYXItY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgODUwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFnZSA9PSAnLycgfHwgcGFnZSA9PSAnJykge1xuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgODUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQobG9jYXRpb24pLmF0dHIoJ2hyZWYnLCAnLycpO1xuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgODUwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9OYXYgY2xpY2sgc2xpY2sgc21vb3RoIHNjcm9sbCBjdXN0b21cbiAgICAkKCdhLm5hdi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgICAgICB9LCA4NTApXG4gICAgfSk7XG5cbiAgICAvLyBBc3NpZ24gYWN0aXZlIGNsYXNzIHRvIG5hdiBsaW5rcyB3aGlsZSBzY3JvbGxpbmdcbiAgICAkKCdib2R5Jykuc2Nyb2xsc3B5KHt0YXJnZXQ6ICcjc2l0ZU5hdicsIG9mZnNldDogNjB9KTtcblxuICAgIC8vIEhhbWJ1cmdlciBjbGlja1xuICAgICQoJy5uYXZiYXItdG9nZ2xlcicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcudG9nZ2xlJykudG9nZ2xlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICB9KTtcblxuICAgIC8vIEFuaW1hdGUgb24gcGFnZSBjaGFuZ2VcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2FuaW1hdGVkJyk7XG5cbiAgICAvLyBJbGx1bWluYXRpb24gZWZmZWN0XG4gICAgbGV0IGJveCA9ICQoJy5ib3gnKTtcbiAgICBsZXQgb3JpZ2luYWxCZyA9IGJveC5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgIGxldCBsaWdodENvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuODUpXCI7XG4gICAgbGV0IGdyYWRpZW50U2l6ZSA9IDI1MDtcbiAgICBib3guZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGUucGFnZVggLSB0aGlzLm9mZnNldExlZnQ7XG4gICAgICAgICAgICBsZXQgeSA9IGUucGFnZVkgLSB0aGlzLm9mZnNldFRvcDtcbiAgICAgICAgICAgIGxldCB4eSA9IHggKyBcIiBcIiArIHk7XG4gICAgICAgICAgICBsZXQgYmdXZWJLaXQgPSBcIi13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBcIiArIHh5ICsgXCIsIDAsIFwiICsgeHkgKyBcIiwgXCIgKyBncmFkaWVudFNpemUgKyBcIiwgZnJvbShcIiArIGxpZ2h0Q29sb3IgKyBcIiksIHRvKHJnYmEoMjU1LDI1NSwyNTUsMC4wKSkpLCBcIiArIG9yaWdpbmFsQmc7XG4gICAgICAgICAgICBsZXQgYmdNb3ogPSBcIi1tb3otcmFkaWFsLWdyYWRpZW50KFwiICsgeCArIFwicHggXCIgKyB5ICsgXCJweCA0NWRlZywgY2lyY2xlLCBcIiArIGxpZ2h0Q29sb3IgKyBcIiAwJSwgXCIgKyBvcmlnaW5hbEJnICsgXCIgXCIgKyBncmFkaWVudFNpemUgKyBcInB4KVwiO1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5jc3Moe2JhY2tncm91bmQ6IGJnV2ViS2l0fSlcbiAgICAgICAgICAgICAgICAuY3NzKHtiYWNrZ3JvdW5kOiBiZ01ven0pO1xuICAgICAgICB9KS5tb3VzZWxlYXZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKHtiYWNrZ3JvdW5kOiBvcmlnaW5hbEJnfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gU3RpY2t5IG5hdlxuICAgIGxldCBzdGlja3lOYXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChzY3JvbGxUb3AgPiBzdGlja3lOYXZUb3ApIHtcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25hdi1maXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdzdGlja3knKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbmF2LWZpeGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHN0aWNreU5hdigpO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0aWNreU5hdigpO1xuICAgIH0pO1xuXG59KTtcblxuIl0sImZpbGUiOiIuL3NyYy9qcy9kZW1vLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/demo.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc3JjL3Njc3MvYXBwLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;