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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n    font-size: 20px;\\n}\\n\\n* {\\n    /*border: 1px solid red;*/\\n    margin: 0;\\n}\\n\\nbody {\\n    font-family: 'Roboto', sans-serif;\\n    min-height: 100vh;\\n    background-color: #ffffff;\\n}\\n\\n#content {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.title {\\n    padding: 10px 0;\\n}\\n\\nul {\\n    list-style-type:none;\\n}\\n\\nfooter{\\n    padding: 1em;\\n}\\n\\n#footerLink {\\n    padding-left: 5px;\\n}\\n\\n.mainTitle {\\n    font-size: 60px;\\n    margin: 20px 0;\\n}\\n\\n.subtitle {\\n    margin-bottom: 20px;\\n    font-size: 30px;\\n}\\n\\nbutton {\\n    height: 50px;\\n    width: 100px;\\n    font-size: 20px;\\n}\\n\\n.tab {\\n    padding: 20px;\\n    min-width: 50%;\\n    background-color: hsl(0deg 0% 94% / 77%);\\n    border-radius: 15px;\\n    text-align: center;\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n}\\n\\n.buttonsDiv {\\n    margin-bottom: 25px;\\n    min-width: 35%;\\n    display: flex;\\n    justify-content: space-evenly;\\n    align-items: center;\\n}\\n\\n.icons {\\n    display: flex;\\n    justify-content: space-around;\\n    padding: 15px 0;\\n    width: 80%;\\n    align-items: center;\\n}\\n\\n.imgHome {\\n    width: 50%;\\n    border-radius: 5px;\\n    margin: 1rem;\\n}\\n\\n.iconImg {\\n    width: 4rem;\\n    border-radius: 5px;\\n}\\n\\n.tile {\\n    display: flex;\\n    min-width: 30%;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-evenly;\\n    background-color: #dfd4c470;\\n    border-radius: 10px;\\n    margin: 0.25rem;\\n    font-size: 2rem;\\n    padding: 1rem;\\n}\\n\\n.prodPicture {\\n    font-size: 1rem;\\n    margin: 1rem 0;\\n}\\n\\n.tilesContainer {\\n    display: flex;\\n    width: 80%;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 1rem;\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/bones.js":
/*!**********************!*\
  !*** ./src/bones.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ page_load)\n/* harmony export */ });\n/* harmony import */ var _burgaPict_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burgaPict.jpeg */ \"./src/burgaPict.jpeg\");\n\n\nfunction  page_load(){\n    let contenedor = document.querySelector(\"#content\")\n    let h1 = document.createElement(\"h1\")\n    h1.textContent = \"Burga\"\n    h1.className = \"mainTitle\"\n\n    let tabs = document.createElement(\"div\")\n    tabs.className = \"buttonsDiv\"\n    let home = document.createElement(\"button\")\n    home.textContent = \"Home\"\n    home.classList.toggle(\"tabButton\")\n    let contact = document.createElement(\"button\")\n    contact.textContent = \"Contact\"\n    contact.classList.toggle(\"tabButton\")\n    let menu = document.createElement(\"button\")\n    menu.textContent = \"Menu\"\n    menu.classList.toggle(\"tabButton\")\n\n    tabs.appendChild(home)\n    tabs.appendChild(menu)\n    tabs.appendChild(contact)\n\n    let footer = document.createElement(\"footer\")\n    footer.id = \"footer\"\n    footer.textContent = \"2021 yagopajarino\"\n    let a = document.createElement(\"a\")\n    a.href = \"https://github.com/yagopajarino\"\n    a.target =\"_blank\"\n    a.id = \"footerLink\"\n    let i = document.createElement(\"i\")\n    i.className = \"fab fa-github\"\n\n    a.appendChild(i)\n    footer.append(a)\n\n    contenedor.appendChild(h1)\n    contenedor.appendChild(tabs)\n    contenedor.appendChild(footer)\n}\n\n\n\n//# sourceURL=webpack://top-restaurantpage/./src/bones.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _facebook_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebook.png */ \"./src/facebook.png\");\n/* harmony import */ var _instagram_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagram.png */ \"./src/instagram.png\");\n/* harmony import */ var _whatsapp_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whatsapp.png */ \"./src/whatsapp.png\");\n/* harmony import */ var _twitter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./twitter.png */ \"./src/twitter.png\");\n\n\n\n\n\nfunction contact() {\n    let div = document.createElement(\"div\")\n    let subt = document.createElement(\"h1\")\n    subt.textContent = \"Opening hours\"\n    subt.className = \"title\"\n\n    let subtitle = document.createElement(\"h2\")\n    subtitle.textContent = \"Días y horarios\"\n    subtitle.className = \"title\"\n\n    let horarios = document.createElement(\"table\")\n    let days = [\"monday\", \"tuesday\", \"wednesday\", \"thursday\", \"friday\", \"saturday\", \"sunday\"]\n    days.forEach(day => {\n        let tr = document.createElement(\"tr\")\n        let dia = document.createElement(\"td\")\n        dia.textContent = day\n        let horario = document.createElement(\"td\")\n        horario.textContent = \"10:00 am - 11:00 pm\"\n        if ([\"saturday\", \"sunday\"].includes(day)){\n            horario.textContent = \"06:00 pm - 12:00 pm\"\n        }\n        tr.appendChild(dia)\n        tr.appendChild(horario)\n        horarios.appendChild(tr)\n    });\n\n    let title = document.createElement(\"h1\")\n    title.textContent = \"Get in Touch\"\n    title.classList = \"title\"\n\n    let social = document.createElement(\"div\")\n    social.classList = \"icons\"\n    let redes = [\"facebook\", \"instagram\", \"whatsapp\", \"twitter\"]\n    let icons = {\"facebook\":_facebook_png__WEBPACK_IMPORTED_MODULE_0__, \"instagram\":_instagram_png__WEBPACK_IMPORTED_MODULE_1__, \"whatsapp\":_whatsapp_png__WEBPACK_IMPORTED_MODULE_2__, \"twitter\":_twitter_png__WEBPACK_IMPORTED_MODULE_3__}\n    redes.forEach(red => {\n        let a = document.createElement(\"a\")\n        a.href = `https://${red}.com/`\n        let icon = document.createElement(\"img\")\n        icon.src = icons[red]\n        icon.classList.toggle(\"iconImg\")\n        a.appendChild(icon)\n        social.appendChild(a)\n    });\n\n    let ifrm = document.createElement(\"iframe\");\n    ifrm.setAttribute(\"src\", \"https://www.openstreetmap.org/export/embed.html?bbox=-58.386111259460456%2C-34.606879346697006%2C-58.37709903717041%2C-34.60061824106917&amp;layer=mapnik&amp;marker=-34.60374885289059%2C-58.38160514831543\")\n    ifrm.width = \"425\"\n    ifrm.height=\"350\"\n    ifrm.frameborder=\"0\" \n    ifrm.scrolling=\"no\" \n    ifrm.marginheight=\"0\" \n    ifrm.marginwidth=\"0\"\n\n    div.appendChild(ifrm)\n    div.appendChild(subt)\n    div.appendChild(horarios)\n    div.appendChild(title)\n    div.appendChild(social)\n    div.classList.toggle(\"tab\")\n    return div\n}\n\n//# sourceURL=webpack://top-restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _burgaPict_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burgaPict.jpeg */ \"./src/burgaPict.jpeg\");\n\n\nfunction home(){\n    let div = document.createElement(\"div\")\n\n    let title = document.createElement(\"h1\")\n    title.className = \"title\"\n    title.textContent = \"Burga Buenos Aires\"\n    let p = document.createElement(\"p\")\n    p.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ex eu elit consectetur vestibulum.\"\n    let img = document.createElement(\"img\")\n    img.src = _burgaPict_jpeg__WEBPACK_IMPORTED_MODULE_0__\n    img.classList.toggle(\"imgHome\")\n\n    div.appendChild(title)\n    div.appendChild(p)\n    div.appendChild(img)\n    div.classList.toggle(\"tab\")\n    return div\n}\n\n\n//# sourceURL=webpack://top-restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bones_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bones.js */ \"./src/bones.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n(0,_bones_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\ninsertarAntesDelFooter((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\nfunction insertarAntesDelFooter(nodo){\n    let footer = document.querySelector(\"#footer\")\n    let contenedor = document.querySelector(\"#content\")\n    let tab = document.querySelector(\".tab\")\n    if (tab != undefined){\n        tab.remove()\n    }\n    contenedor.insertBefore(nodo,footer)\n}\n\nlet buttons = document.querySelectorAll(\".tabButton\")\nbuttons.forEach(button => {\n    button.addEventListener(\"click\", function(){\n        let f = button.textContent\n        if (f == \"Home\"){\n            insertarAntesDelFooter((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())   \n        }\n        else if (f == \"Menu\"){\n            insertarAntesDelFooter((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n        }\n        else {\n            insertarAntesDelFooter((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\n        }\n    })\n});\n\n//# sourceURL=webpack://top-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n    let div = document.createElement(\"div\")\n    let h1 = document.createElement(\"h1\")\n    h1.textContent = \"Menu\"\n    h1.classList = \"title\"\n\n    let pizzaHeader = document.createElement(\"h2\")\n    pizzaHeader.textContent = \"Burgers\"\n    let pizzaLista = document.createElement(\"div\")\n    pizzaLista.classList.toggle(\"tilesContainer\")\n    let pizzas = [\"BigMac\", \"Baconator\", \"Kevin Bacon\", \"Cheeseburger\", \"Veggie\"]\n    pizzas.forEach(pizza => {\n        let el = document.createElement(\"div\")\n        el.textContent = pizza\n        el.classList.toggle(\"tile\")\n        let text = document.createElement(\"span\")\n        text.textContent = \"Product Picture\"\n        text.classList.toggle(\"prodPicture\")\n        el.appendChild(text)\n        pizzaLista.appendChild(el)\n        \n    });\n\n    let bebidasHeader = document.createElement(\"h2\")\n    bebidasHeader.textContent = \"Bebidas\"\n    let bebidasLista = document.createElement(\"div\")\n    let bebidas = [\"Agua\", \"Cerveza\", \"Soda\"]\n    bebidas.forEach(bebida => {\n        let li = document.createElement(\"div\")\n        li.textContent = bebida\n        bebidasLista.appendChild(li)\n    });\n\n\n    div.appendChild(h1)\n    div.appendChild(pizzaHeader)\n    div.appendChild(pizzaLista)\n    div.classList.toggle(\"tab\")\n    return div\n}\n\n//# sourceURL=webpack://top-restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/burgaPict.jpeg":
/*!****************************!*\
  !*** ./src/burgaPict.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e5d56724f59802efc6ca.jpeg\";\n\n//# sourceURL=webpack://top-restaurantpage/./src/burgaPict.jpeg?");

/***/ }),

/***/ "./src/facebook.png":
/*!**************************!*\
  !*** ./src/facebook.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f73c71a378f0f63f4386.png\";\n\n//# sourceURL=webpack://top-restaurantpage/./src/facebook.png?");

/***/ }),

/***/ "./src/instagram.png":
/*!***************************!*\
  !*** ./src/instagram.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7b3dff34fba7bf43d83.png\";\n\n//# sourceURL=webpack://top-restaurantpage/./src/instagram.png?");

/***/ }),

/***/ "./src/twitter.png":
/*!*************************!*\
  !*** ./src/twitter.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f963dcac51d5020e10f3.png\";\n\n//# sourceURL=webpack://top-restaurantpage/./src/twitter.png?");

/***/ }),

/***/ "./src/whatsapp.png":
/*!**************************!*\
  !*** ./src/whatsapp.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e6b08d6a36b9e987e50.png\";\n\n//# sourceURL=webpack://top-restaurantpage/./src/whatsapp.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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