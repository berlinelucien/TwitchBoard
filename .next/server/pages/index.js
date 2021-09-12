module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/runner/personalized-twitch-dashboard/pages/index.js\";\n// Main entry point of your app\n\n\n\n\nconst Home = () => {\n  // State\n  const {\n    0: favoriteChannels,\n    1: setFavoriteChannels\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]); // Actions\n\n  const addStreamChannel = async event => {\n    //Prevent the page from redirecting\n    event.preventDefault();\n    const {\n      value\n    } = event.target.elements.name;\n\n    if (value) {\n      console.log('Input: ', value); // Call Twitch Search API\n\n      const path = `https://${window.location.hostname}`;\n      const response = await fetch(`${path}/api/twitch`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          data: value\n        })\n      });\n      const json = await response.json();\n      console.log(\"From the server: \", json.data);\n      setFavoriteChannels(prevState => [...prevState, value]);\n      event.target.elements.name.value = \"\";\n    }\n  }; //Render method (form componenet)\n\n\n  const renderForm = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: addStreamChannel,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        id: \"name\",\n        placeholder: \"Twitch Channel Name\",\n        type: \"text\",\n        required: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Add Streamer \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, undefined);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"\\uD83C\\uDFA5 Personal Twitch Dashboard\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputContainer,\n      children: [renderForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: favoriteChannels.join(\",\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJmYXZvcml0ZUNoYW5uZWxzIiwic2V0RmF2b3JpdGVDaGFubmVscyIsInVzZVN0YXRlIiwiYWRkU3RyZWFtQ2hhbm5lbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInRhcmdldCIsImVsZW1lbnRzIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInByZXZTdGF0ZSIsInJlbmRlckZvcm0iLCJzdHlsZXMiLCJmb3JtQ29udGFpbmVyIiwiY29udGFpbmVyIiwiaW5wdXRDb250YWluZXIiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEQsQ0FGaUIsQ0FHakI7O0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTUMsS0FBTixJQUFlO0FBQ3RDO0FBQ0FBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFVBQU07QUFBRUM7QUFBRixRQUFZRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsUUFBYixDQUFzQkMsSUFBeEM7O0FBRUEsUUFBSUgsS0FBSixFQUFXO0FBQ1RJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJMLEtBQXZCLEVBRFMsQ0FHVDs7QUFDQSxZQUFNTSxJQUFJLEdBQUksV0FBVUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFTLEVBQWpEO0FBRUEsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFTCxJQUFLLGFBQVQsRUFBc0I7QUFDaERNLGNBQU0sRUFBRSxNQUR3QztBQUVoREMsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCO0FBRFQsU0FGdUM7QUFLaERDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUMsY0FBSSxFQUFFakI7QUFBUixTQUFmO0FBTDBDLE9BQXRCLENBQTVCO0FBUUEsWUFBTWtCLElBQUksR0FBRyxNQUFNUixRQUFRLENBQUNRLElBQVQsRUFBbkI7QUFFQWQsYUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNhLElBQUksQ0FBQ0QsSUFBdEM7QUFFQXRCLHlCQUFtQixDQUFDd0IsU0FBUyxJQUFJLENBQUMsR0FBR0EsU0FBSixFQUFlbkIsS0FBZixDQUFkLENBQW5CO0FBRUFGLFdBQUssQ0FBQ0csTUFBTixDQUFhQyxRQUFiLENBQXNCQyxJQUF0QixDQUEyQkgsS0FBM0IsR0FBbUMsRUFBbkM7QUFDRDtBQUNGLEdBNUJELENBSmlCLENBa0NqQjs7O0FBQ0EsUUFBTW9CLFVBQVUsR0FBRyxtQkFDakI7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLGFBQXZCO0FBQUEsMkJBQ0U7QUFBTSxjQUFRLEVBQUV6QixnQkFBaEI7QUFBQSw4QkFDRTtBQUFPLFVBQUUsRUFBQyxNQUFWO0FBQWlCLG1CQUFXLEVBQUMscUJBQTdCO0FBQW1ELFlBQUksRUFBQyxNQUF4RDtBQUErRCxnQkFBUTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7O0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUV3Qiw4REFBTSxDQUFDRSxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssZUFBUyxFQUFFRiw4REFBTSxDQUFDRyxjQUF2QjtBQUFBLGlCQUNHSixVQUFVLEVBRGIsZUFFRTtBQUFBLGtCQUFNMUIsZ0JBQWdCLENBQUMrQixJQUFqQixDQUFzQixHQUF0QjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsQ0F4REQ7O0FBMERlaEMsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1haW4gZW50cnkgcG9pbnQgb2YgeW91ciBhcHBcbmltcG9ydCAgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgLy8gU3RhdGVcbiAgY29uc3QgW2Zhdm9yaXRlQ2hhbm5lbHMsIHNldEZhdm9yaXRlQ2hhbm5lbHNdID0gdXNlU3RhdGUoW10pXG4gIC8vIEFjdGlvbnNcbiAgY29uc3QgYWRkU3RyZWFtQ2hhbm5lbCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAvL1ByZXZlbnQgdGhlIHBhZ2UgZnJvbSByZWRpcmVjdGluZ1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldC5lbGVtZW50cy5uYW1lXG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbnB1dDogJywgdmFsdWUpXG5cbiAgICAgIC8vIENhbGwgVHdpdGNoIFNlYXJjaCBBUElcbiAgICAgIGNvbnN0IHBhdGggPSBgaHR0cHM6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX1gXG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cGF0aH0vYXBpL3R3aXRjaGAse1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiB2YWx1ZSB9KVxuICAgICAgfSlcblxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgICBjb25zb2xlLmxvZyhcIkZyb20gdGhlIHNlcnZlcjogXCIsIGpzb24uZGF0YSlcblxuICAgICAgc2V0RmF2b3JpdGVDaGFubmVscyhwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgdmFsdWVdKVxuXG4gICAgICBldmVudC50YXJnZXQuZWxlbWVudHMubmFtZS52YWx1ZSA9IFwiXCJcbiAgICB9XG4gIH1cblxuICAvL1JlbmRlciBtZXRob2QgKGZvcm0gY29tcG9uZW5ldClcbiAgY29uc3QgcmVuZGVyRm9ybSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2FkZFN0cmVhbUNoYW5uZWx9PlxuICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJUd2l0Y2ggQ2hhbm5lbCBOYW1lXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgU3RyZWFtZXIgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+8J+OpSBQZXJzb25hbCBUd2l0Y2ggRGFzaGJvYXJkPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XG4gICAgICAgIHtyZW5kZXJGb3JtKCl9XG4gICAgICAgIDxkaXY+e2Zhdm9yaXRlQ2hhbm5lbHMuam9pbihcIixcIil9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSBcblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"divider\": \"Home_divider__2KR_X\",\n\t\"inputContainer\": \"Home_inputContainer__3c2Jq\",\n\t\"formContainer\": \"Home_formContainer__6-xh4\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2M1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiZGl2aWRlclwiOiBcIkhvbWVfZGl2aWRlcl9fMktSX1hcIixcblx0XCJpbnB1dENvbnRhaW5lclwiOiBcIkhvbWVfaW5wdXRDb250YWluZXJfXzNjMkpxXCIsXG5cdFwiZm9ybUNvbnRhaW5lclwiOiBcIkhvbWVfZm9ybUNvbnRhaW5lcl9fNi14aDRcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
