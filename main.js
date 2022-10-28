/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: linear-gradient(\\n      rgba(255, 255, 255, 0.35),\\n      rgba(255, 255, 255, 0.35)\\n    ),\\n    url(https://images.wallpaperscraft.com/image/single/evening_table_dinner_restaurant_coast_look_fires_garland_48367_3840x2160.jpg);\\n  background-attachment: fixed;\\n  background-size: cover;\\n}\\n\\nbutton {\\n  font-size: 20px;\\n  padding: 5px;\\n  margin: 10px;\\n  background-color: transparent;\\n  border: 2px solid transparent;\\n  transition: transform 0.3s;\\n  cursor: pointer;\\n}\\n\\nbutton:hover {\\n  transform: translateY(-20%);\\n}\\n\\n.content {\\n  height: 100vh;\\n}\\n\\n.header {\\n  text-align: center;\\n  margin: auto;\\n}\\n\\n.main {\\n  text-align: center;\\n  margin: auto;\\n  max-width: 700px;\\n\\n  height: 600px;\\n  background-color: rgba(255, 255, 255, 0.35);\\n}\\n\\n.footer {\\n  margin-top: 60px;\\n  text-align: center;\\n  width: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactView.js":
/*!****************************!*\
  !*** ./src/contactView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactView)\n/* harmony export */ });\nfunction createContact() {\n  const contact = document.createElement(\"div\");\n  const email = document.createElement(\"h5\");\n  const phone = document.createElement(\"h5\");\n  const address = document.createElement(\"h5\");\n\n  contact.classList.add(\"contact\");\n\n  email.textContent = \"Email: scottshing@yahoo.com.hk\";\n  phone.textContent = \"Phone: 999-999-9999\";\n  address.textContent = \"Address: Toronto\";\n\n  contact.append(email, phone, address);\n\n  return contact;\n}\n\nfunction contactView() {\n  const main = document.querySelector(\".main\");\n  main.innerHTML = \"\";\n\n  main.appendChild(createContact());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactView.js?");

/***/ }),

/***/ "./src/homeView.js":
/*!*************************!*\
  !*** ./src/homeView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeView)\n/* harmony export */ });\nfunction createHomePage() {\n  const homePage = document.createElement(\"div\");\n  const headline = document.createElement(\"h1\");\n  const image = document.createElement(\"img\");\n\n  homePage.classList.add(\"homePage\");\n\n  headline.textContent = \"The Number One Restaurant in Toronto\";\n  image.src =\n    \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBMVFBQTFRUZGBgaHBodHBobGRodGRkYGBoaGxgcGxodIS0kHR0qHxsdJjclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QHRISHzEqISo3MzM1MzEzMzYzMzMzMzMzMTMzMTMzPjMzMzMzMzMzMzMzMzE0MzMzMzMzMzMzMzMzM//AABEIAQMAwgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQHAf/EAEYQAAIBAgMEBwQGBgkEAwAAAAECAAMRBBIhBTFBUQYTImFxgZEyQqGxFFJicsHhB4KSotHwIyQzQ1Nzg7LCNGPS8RVUs//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAAICAgICAQMEAwAAAAAAAAABAhEDMRIhQVEEIjJhE3GRwQVSsf/aAAwDAQACEQMRAD8A9eiImZoIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCJHbW2zQwyg1XsW9lAMzud1lQanXykWr7RxWqKMFSPvOA+IYfc9lPPUQCfxFdKa5ndUX6zMFHqZC4jpngEOXrw7cqavUP7ikTZhuh2FDZ6ofEVPr12NQ+SnsgeUnaGHRBlRVUclAA9BJ4sjkitnpfR4UcURzGHqWmJ6bYJbCo70/wDMpVF+OW0tk+EX0jiOS9EVgdsYatpSrU3PJXBb9nf8J3yN2h0XwVa+fDpf6yjI37S2Mi22BjKGuExRdR/c4jtoe5XHaUch8Y4sWmWaJW8L0oCuKOMpNhqh3FiDSf7lQaeR5jWWSQSIiIAiIgCIiAIiIAiIgCIiAIia69ZKas7sFVRdmJsABvJMA2StV9s1cQ7UcCA2U2fEsL0qZ4hB/eP3DTdealWrtL61LBea1MUPmlI+pHjpasLhkpotOmoVFFgoFgB4SUrIboi9j9HqVBjVJNWufbrVNXPML9Ve4cLb5NxEuVbs+xEQQIiIAiamqgMq8Tf0A3zbAOTH4KnWQ06qK6neGHxHEHvGolSPW7MYBmargSQATq+GvoAfrU76fn7V1V737jbzmFeirqyOAysCCCLgg6EEcpDVkp0aqbhgGUgggEEG4IOoIPETOVXo8zYXEVNnOSVsamHY6k0yTmS/NTf0J3WlqlC4iIgCIiAIiIAiIgCJG7T27hcP/a1VQ8F9pz4It2PpInEdI8QyM9HClKaglq2KYUkVRrmyauw9IJLBjMUlNGqVGCqouzHcB/PDjIDDYJ8ey1sQpTDKQ1Kg2hqW9mpWHLiE9e/TsTZmJxRTEY5ropzUqGTKtx7NR0PavbUK1yL62OkukskVbrpACfYiWKCc9XEopszC++3G3O3LvkJtHbbM7UMMQWU2qVd60z9VRuep3bl3m/snVh6SrvLG+rMTmdjzJPH5cNBaQTRMHH3OVFLH0H8+k6KS1N7MPBRp6nWRQxrKLIAo9T5k75qbEud7t62+Ukgn2cDeQPEzir7SUaJ2jz4fnIgzlx+OWkoJBZ2OVKY9p34AfidwGpgErs2qXrtc3KpdvFmsvwVvhJDH4sU1JuL2PkBvJ7hInYqdTTZqhDVHN2tuLWtpyQCyjuUcZGYzEtXqGkDdVINVuGmopDvOmYcF0OrSCaLRssk01J3m5136njOp3ABJNgJpwYy01vppc+esi8di85sNFHx7zJIIvpm4VcJjl0NGstzx6qocjjz7PqZaJWulyg7Kr3+qD6VARLBhGJpoTvKqfMqJSWy60boiJBIiIgCIkXt3ay4alnyl3YhKaD2nqN7Kj8T+QgGe19r0cMnWVWtc2VQLu7cFRRqTqPXWRK4XH4zWo7YOgdyIf6ww+2+6n4DXgZ1bC2AVf6ViiKmJYb/corwp0hwAva+868zeySVH2Q3WiH2ZsHC4YFqdNVbUtUbtOeJJqNr377QcIcQ6vVFqSENTpn3mGoqVB3b1Q7vaPasElWUHfrx9N0zlqK2fYifCZJAlJ6S7drVS+FwQLFTlrVVYKEvvRHPv23sL5fHd92ptqpimbD4RitMaVcSPilE8W+1uF9OE6MFhKdKmtOmoVFGgHzPM98rstrZE4WhjURadOnhaSKLAFqlQjxsFueZ4zf8AR8cd9eiPCix+byXAnXS2c7amy+O/0k0LK79Hxw3V6J8aLD5PPmfaC70wz/dZ6Z/eDCWsbK+3+7+c+HZPJ/3fzihZTMdtzEU0N8G4fnmFSmPtMad2sOVpt2B1NQmsKy16xFmbcUX6iUzqi+VzxlpOzKg3FT5n+EitpdHEqnNUpdobnTSoDzDrr6yKZNoYik79nOUXjl9s9wb3R4C/IibcJh6aBUUBEHAcBvPiT8zIjJi6G4nE0x7rWWuo7jotTzsZI4HG06q5qbXsbMCCGRuKup1U9xk2Q0SWLxZfQaKOHPxkVXq5qi0l4APU7kv2F8WYfsq3dNe1NoikFVRnqvpTpjezczyQby3CZ7LwhpL2zndznqN9ZzbdyUABQOAAgiurPnTdv6gKAParPSpr953z28bL8ZalUAADcNPISoVmOIx+Hpb1w4avU5dY9lpL3EABh3E8pcZR7LrpIREQBERAErOEUYjalZm1XCIiIDu6ysMzuO8KAvpLNK1sd+r2njaTf3yUqqd4RSjjxvw7jC2PDLYDPsj8ZRzglSQy6EAkH4ceRkI61D7Naqng9/8AeGmhmWqYswAuTYczKDtta9Oi9QYzE3GUAZ6YF3dVHsUwfe5zNujlBjeqatY/92rUf4E2kWWpeydx/S/CUzkV+uqcKdEdYxPK47I8yJCYoYvGaV/6Ch/gI13qD/uVBuH2Rz13XnfhsJTpjLTpqg5KoHrbfOhEJ0AJ8BFXsWlo00KKooRFCqosABYAToo0Wc2UX+Q8Z14fZxOraDlx/KSdKkqiyiwklTVhcGqa7zz/AIcp1REAREQBERANVWirb1B+frK9tjYJ7VagctYKbH69gSEcbnW/PUbwZZYglOigdHcKhpriixqVKqgtUbeAdcijcig6WHKd+08clCm9V9yjdzPBR3kzj2QRTOLokhVo1qlrmwWnU/pFvyFmM5tnr9NrpXcEYakx6tSP7Vxp1hB91Tu8PvCUckkXUW2TvQ/Zr06TVav9tXbPU5qD7CdwUcOBJHCWGfBPsgMREQBERAEhOkmynqrTq0SFxFEl6bHcb+0jfZYafleTcQCD2PtdcUpIvSxFPs1KTaMpG/Tit9zd+s2Ykm/aXK3Hke+34iYba6PpXIqqzUa6ezWTRhbgw99e49+upkWOkmJoDJjKHWIP7+kLoRzena66bzu5CSprTI4N9o0dKD/Vz/mUf/1pybp0yzZRvlc6R7RpV8HVek6NlyPZLC2R0bVd43cZZG2rh8NT62tUC5vZG92A4Ko1Ovlzk+SKdUStHAIu8Zj37vSbqtVEUszKijeSQqjzOgnnW0OnOIq6YdRRQ3s7APUIHEL7C7/tSrVqjVGd6rvVK7i7FrE77A6DW+gk2K9nqGN6bYCnp1wc8qYL38GHZ+MhKv6SkJK0sM7EfXZU0HHs5p53Sw5YNX9wVBTXvORmb0sv7YmOGuKlS++w/eF/kZF2S0ktF7q9PsWQClGit92ZnY77cMsjMR+kPHhrf0Hkj6DzeQ7vaw5KPW1vxnLsLCfSMVTQi6s4v9xbkjzVWiXSJh29Hp2CqbWdFfrsOpZQ2VqL9m4vYkPvnR1m2F/+m4/1kP4iTtFbDxmZYDeZRNlnV6ID/wCdx1P+1wBYDe1Ksj+iGxmWH6a4QkLV6zDsfdrU2T46r8ZOkSh9PqYthnP1qiftqG/4SVJ3RHFNNl9w2Kp1FD03V1O5lYMp8wbTongeBdkJem702F+0jFSbNxtvFuEtexun2Ip2XEKKybs62WoLaXt7L+HZ8ZezOvR2bY2T1u0sRTZytN0o1XQadYVBRQTwHY18vEWrDKpQUwAuUWWwsABuFuVpBYfaNLE4161Jsy/R6anQgq3WVDlYHUG3zkurWNxOab+o7IRuC9nfg3OqnePlOucTm4Wou8bx851qb6zSPoxku7MoiJYoIiIAiIgHNjnstufy4ziXQE8W0Hh702Y57tbkPnrNdbQgcgPU6n5zGT7Z0wj0l7K70g2JhWpVarUlV1R2zL2TcKSCctg3nPP8fUa7lmLMFVczG53WAHIDl3z0bpS9sM4+syL5F1LfugzzOs2Zc3+JUPoN00x6KZtpElQ0W3IKP2jOJ61qTtzb5k/iZspVtG/VPxb+Am/aOB/pKVHhUOHI8KlNb/v5po2YKNnftXYrUMBhnNRznObqzYIjPTZ9ABctpYkkyL2zhuqxlenr2baneRlUj4GeqdLNn9ZhHVRqmVwO5D2gP1c0pv6SdmlMRSxAHYqDq2PDOL5b+K/7JRbNH2iq4urq33B8bD8Jb+hWzsuMUEf2eHQnueoqP8ncSlvSLVBTOhYU19XAHzB8567sbCZcbjHtvTD28MjD8PhJk7IgqTJ91uCNRfkbHyI1EjK3RrBuSXw6Ox3swzOfFz2j6yWiQQRmC2Z1BtSqP1Z303YuF70Zrsv3SSvIDjWP0jNalS7qt/SnUl6nm/6T8RpRpjec7epVV+bekjyiy0ynUG7I7/xJMwd7K3n8SQJ8Q2C95NvADKPw9ZpL6E82A8gcx+c1Mki99AKWmJqc3VP2AT/ylwla6B0SuEDnfUd3+OT/AIyyzkm7kzvxqoo6ME+pU7j8/wD1O2ghAseBNvDhIpWsQeU66uJYNYbtPO8vCVLsyyQbfR3RETU5xERAEREAim1fxPwvMKhuSeZM7fo4DFr7rm3KR8wkmjrg09FY6e1itCmq3LNUsoG8koygDzb4Si7QpGn1dNt9N3U+Ksyn5T1XF7OSpVo1H16rOVXhnbKFY+ABt3kHhPOumtEpiag4FlceDi5P7Qb0l8cvBTLHyReEftZeYt5qxt/PfLdjlVaOysawJWn1aVLC5PVns281f1Ep1eg9KpZhYrlY/ddVIPxHrPQuiWGXE0lpsdMPUd0199yr0m7wCamncJd9mS6IrpB0ux4qZf8AphYMECqXCt7OdmB7RGtgBa/ObNibQqY9HwdetnZgSodFGbLqDTqIAUdd/aVwQD3yN6cbQeti3VwAaZZAAtuyHYob3JJKlTw1OgnDsOnUp4vCECxNamPJnUONPskyPJfj9JPbV6P1KL4Gq67qlOlUI3XV1FJ/NQqnkVA1npqUQKjVOLKin9QuR/vn3EUVdSjC4PDvBuD4ggHym2SZmjEioVtTKqx0zMLhRxOXTMe64nkvTgOmKNM13qgKpuzkm7DW6iyIeNlAFiJ6vtOmzUaqL7TI4X7xUgfGeEU0aodAL2HAKAAABoB3CQy0F2WfohicW2cYasTUQZ+oc5qdVLgHLc9hgSBwvmGo1kd0r2mcVilyqVsqrlNwVaxL3B3FWZx+rOjojVOHxFSqw0p0XY296+VUUd7OVAEhUc9qq5u9Qmx7ibu3nw/OTHYn10Y42oA1huVf/XyE41BOVR8TYeZ4anf3TtwuzalYkoNCdWOijkL/AICTNPo3lGbPmcWIW1lNiDlJ5HdLU3ozuMemXjYeLw5ppRpVA5pootYgkDQsAQLgniNNZKylVK9ao9NgHpGmXOc9WW7YAyKO0MvE305SUpYrGIMxCV042sjjzUlb9xC+Mylil4N4fIjp9MsM6vpOVVsLm3HuNvwkPs7adOsDkJDL7SMLOviOXeLg85N4WkrILi9iZSKd0XyNUn4Oik+ZQec2TFRbQTKbnMxERBAiIgEXS9rxv8jNE6RTYVN3G/lNDCxI5TB6OuLViU/9IWzS9IV1FzT0f7hNwf1TfyYnhLhMHUEFSAQQQQdxB3gjlKp07LyjaoqGGwa4rD4euFzPSRaden71TDspAZbak5e0tveVhvWfNiP9AxopO16dRQA/BkYk0nPg2ZT94ndJzB7GFNVVKjI1Mt1bi2YI7F+rcHR0BJFjwAOh1mG18FWqqjuKNRkzdkIy9aje3TIZ2C3sCDrZlB0mimjB42a+l3RhcTUFejUVaugYMGyvl9k3AJDAabjcAbrTZ0Y6MNTqLWrsjMl8iISVDEEZmZgNbE2FuN7nS0js6qlSmj07lLWF7llK6FWvqGB0IOtxJDDU2zA2IH4SxLjUas73UkEA2POZEzmxaVCL02UMODqSjdxsQQe8ehkcv/yDnKww9JeLKXqPb7KsqKD3m9uRljAmpR9tdC0aq1ajVFIuSWQpnUk6krZgVudbelt0utNLAC5NuJ3nvM5MTh2JJGt/WQy8N7KTtLC08PR+jUg1XEVrXNhfItxcKCcqi7AXOhYtfs6QibHGdkchmFhUK+yttRRQ8TuLt4KOMvO1/wCr0a1YIA5AAOl2diES53nUjwEq+zlsmW9yCbk7ySblj3kkmXhGyuaSWtnSiBQFAAA3AbgJlETc4xM6NZkOZTY/zv5zCIIJCthFxAFSmerrpuZef4qeIPnzkhsnaRqUiGGSojFaicmtoRxytvHmN4MhcHiDTcNw496nf/PdOzaoFLEUcQu6oRTqd6uQEbycrryJ5zLLC1a2dGDJTUXotmFJKLf+dZtmvDCyL4fPWbJktGkts+xESxAiIgHBiqbFrgEjh3fwmnEqQxvxsf4/GdmMRiunmJy1KTZATwPwP5/OYyWzoxy1/BpiImZ0CIkdQoHGOy3K4ZSVdgbGu66MiEbqYOjMN57I4yYxcnSKTmoq2ReOx70esxuGAyAqr5janiXLBLIu8uoveoNOzbt2OWZ2T0ywlawZupf6lQgC/wBlvZPqD3Tn2hghjaeKy5VpUlalQ3BA6WNR+QAKhByyvznmVSxGY8R5g8prN8a9E/Hwx+QpW6a/4e7qbi41HMbp9nh+zajU2BAIW2qrUqU9+4lqbAg+u+SmL2++TIprox3P9KrOgUb7AkHN3E28d0hZEJ/AyxfStez1tmABJIAG8nQDzlb2v00wlG4Ruuf6qG63+0/sjyue6eY1M9TV3d7a5qjswHhmO/wgqADYhR9Y8fCUeX0dOP8Axb+6b6JDHbcr4ushqGyBmKItwi5QT+s27tHnpa9p30qhU3nPs7ZOIagHNFyisSjpYVFDak5D7SG/ieR0M1dYwOXOjH6r3pP+w4/hOrG6R5PyFcnxSpddE4lQNumchg9Qf3T+KgN6ZSZuXGVBvp1P1qNT/wAZryRzcGScThXaB/w6h8KdT/xmxMRUb2cNXP8ApOB6soEckRxfo6pt2k9M4N1/vFViDY3BFyDflu07pxP9IAu1JaQ+tVq00HwYn4TQmFeswVXOIHvJQVgng1drLY/q+chyVFowd2eg7G2rSxFMOlxoCVYWYZhde4g62IuDY8QbSUhthbMqU81SplDuqIES5SnTp5siAn2j2jc6DgOZmZibiIiAIiIAmitVGbKRow3zfNGJo5l7xukO66LKr7I6ohUkHhPk6D2x9pfiJyznaOuLvezg2gHqPTwlMlWqXLsN6UFt1jDkxuEU8C9+ElduVlwuDZaShcqhKajQZjZKajxYqPOcvRtM9fGVd5Vkor3KlNahtyu1U+gnzazGpisHRO4VGqMDvy0VuNP8w0/5M6ccaicuWXKVeEc22lp4bCUMIzWQgCq3E0kBesT3uRl041BPOtvbQOJqtWyKl7BVUDcN2Y+81t57rDdJvp7tFa2JsrDJTBQm9lL5gWF+IBUefhK3SyM6CxZMwzkaEpcZgvI24zLJK3xR6Xw8ChB5JbekbWw1bKrmk+VxdWCEqw7iJyEltw0Gv8+k99o0VVVRQAoAAFtAALATyPpXsVsNiWIFqdRi1NvdBYksh5EG9u7zkTxcVaL4PnvNJQn1/Zu2B0Uq4umtVayKtyCLMzKwOoK6AHjx0IPGXLZPQnD0iGe9VxuL6gHuG4el++VXoFtPqcUaTGyVgBY7lqL7PqLr3nLPVJrjjFq0jj+dkzRm4Sbr+iL2jtBaLU10AYMAOZtp8bftTHbGz6dVbMild5OUFjrYKoOmYnS53cNTccXSvDgthKp3JVynwqKQl/8AUFMecn6K2UA75ocGqKqvQfDGkwyZKjAkMjMAhI7IXXtBdNTqxuTvnnWNo4ihUak9Sojryd7EcGXXUGe5yE6RbKw9dbVhqPZYe2O8Hh8ucpOFrro6Pj54wl9UU1+TyzBbVyaVhWqD6y4iojAeF7H4SxYfDJWpq9LCVWDbmr4pwlr2vlV2YjyF+cjsB0ZWs5K1GbDqQM5UA1CD2whB1Ubs9t97DS8v+HRUUWAAGirw00GnITC5Lps686wy+rGqIrAdG6NAAsiPUbtM5QWXgFQG+VR4kneSZZsJTyqO/wDkTThGLXzWNtxsNDO2aRV9nHOTS4iIiXMxERAEREAREQDhxVIqcy+fd3zS6hhdd/EfiJJkTgr0ChzLu+X5TOUTaEr68lKxPSKphXxdGkoLvUFTOdVRWpUwbgalrqdJ96BVqlfFYirWdqhSll7RuAKjAkBdwB6vcOU7Nv8ARxa2apRslVjdl3LUPGx91j6Huveav0d4Rqf08OpVgKYIIseyKh/5b4g5OSXg6sscKwNr7m+/x+34Jzotg6WfFsKaDLVVFsiiwWjSbTTTtOZlR2Bs/wCkl1CGqpzmmKlwpvfN1V7DXXdvm3o+hKYvKbMar2PJuqpgH4CeebM2Pi/pNJBTdGR0JYg2XKwLsX3NcX49q55maSdV1ZzYYclJuVUv5/B7JObH4GnWQ06qhlPAzpn2aHIUTF/o+Qm9Ku6W1UMM2Ug3FjcNoeN5b8AtUIq1SrOAAWUEBre9lPsk8rmdU+yFFLRpPLKaSk7ojOkGBNfDVqQ9plOU8nHaQ+TAGVfZeNxvVU6tKotZHRWC1TlqrcXK9YAQ1jp2lB01Jl7lP2VSyddS4JWqgdyu3WKPIVAJnkbXaL4UpWmYPtnHHT6K1/8AOphfUa/CaDs6tW/6l1Cf4NMtlb/MqGzMPsgAeMmpkFA1b04nx5CZPJJm6xxj2Y0qSgDTKo0AGm7cFH82mYBdrD8gIAZzYfkBJGhRCjv4mRGNic+P7mVKmFAAmcT5Nzm2fYiIIEREAREQBERAEREA46+E4r6fwnOtYrdTuIsQd9vGScxqU1beJRx8o1U+ql2ji2Oi0xUGe+dy+ota6qLX4+zv75LAyKqYI+6b9xmrtpzHy/hJU2toh44v7WTcSHXHOOIPlNg2i3IS36sSrwSJSJGHaLfVHrNZx7dw8o/ViFgkS8r5w1qldiQA75u/SnTTcPuTYaztxJ7h+UyTCMd+n88pnKfLpI0hDg7bNecDcPM7/LlNlHDM2p0HPnOulhVXvPf/AAm+FD2JZf8AUwp0wosJsiJoYt2IiIAiIgCIiAIiIAiIgCIiAIiIAiIgGDUlO9R6TWcKvL4mbolaRKbXk0/RU+r8TMhQQe6PSbIikOT9gCfYiWIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//Z\";\n  homePage.append(headline, image);\n\n  return homePage;\n}\n\nfunction homeView() {\n  const main = document.querySelector(\".main\");\n  main.innerHTML = \"\";\n  main.appendChild(createHomePage());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/homeView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeView.js */ \"./src/homeView.js\");\n/* harmony import */ var _menuView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuView.js */ \"./src/menuView.js\");\n/* harmony import */ var _contactView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactView.js */ \"./src/contactView.js\");\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n(0,_website_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\nconst homeBtn = document.querySelector(\".homeBtn\");\nconst menuBtn = document.querySelector(\".menuBtn\");\nconst contactBtn = document.querySelector(\".contactBtn\");\n\nhomeBtn.addEventListener(\"click\", _homeView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nmenuBtn.addEventListener(\"click\", _menuView_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ncontactBtn.addEventListener(\"click\", _contactView_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n(0,_homeView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuView.js":
/*!*************************!*\
  !*** ./src/menuView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuView)\n/* harmony export */ });\nfunction createItem(foodName, des, pri) {\n  const menuItem = document.createElement(\"div\");\n  const food = document.createElement(\"h5\");\n  const description = document.createElement(\"h5\");\n  const price = document.createElement(\"h5\");\n\n  food.textContent = foodName;\n  description.textContent = des;\n  price.textContent = pri;\n\n  menuItem.append(food, description, price);\n\n  return menuItem;\n}\n\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  menu.append(\n    createItem(\n      \"Lobster Soup\",\n      \"Warm and creamy lobster make you feel good\",\n      \"$5\"\n    ),\n    createItem(\"Crispy Chicken\", \"Crispy checken makes your day\", \"$10\"),\n    createItem(\"Caesar Salad\", \"Great meal starting from great salad!\", \"$6\")\n  );\n  return menu;\n}\n\nfunction menuView() {\n  const main = document.querySelector(\".main\");\n  main.innerHTML = \"\";\n  main.appendChild(createMenu());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuView.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initial)\n/* harmony export */ });\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  const name = document.createElement(\"h1\");\n\n  header.classList.add(\"header\");\n  name.textContent = \"Hacker Restaurant\";\n\n  header.appendChild(name);\n  content.appendChild(header);\n  return header;\n}\n\nfunction createMain() {\n  const main = document.createElement(\"main\");\n  main.classList.add(\"main\");\n  content.append(main);\n\n  return main;\n}\n\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"nav\");\n\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.innerHTML = \"Home Page\";\n  homeBtn.classList.add(\"homeBtn\");\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.innerHTML = \"Menu\";\n  menuBtn.classList.add(\"menuBtn\");\n\n  const contactBtn = document.createElement(\"button\");\n  contactBtn.innerHTML = \"Contact Details\";\n  contactBtn.classList.add(\"contactBtn\");\n\n  nav.append(homeBtn, menuBtn, contactBtn);\n\n  return nav;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"div\");\n  const copyRight = document.createElement(\"h3\");\n  footer.classList.add(\"footer\");\n\n  copyRight.textContent = \"Copyright Ⓒ Scott Chau\";\n\n  footer.appendChild(copyRight);\n\n  content.appendChild(footer);\n\n  return footer;\n}\n\nfunction initial() {\n  createHeader().appendChild(createNav());\n  createMain();\n  createFooter();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;