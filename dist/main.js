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

/***/ "./src/addtask.js":
/*!************************!*\
  !*** ./src/addtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"addTasktoArr\": () => (/* binding */ addTasktoArr),\n/* harmony export */   \"createDOMTask\": () => (/* binding */ createDOMTask)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nlet addTask = {\n    title: _dom__WEBPACK_IMPORTED_MODULE_0__.dom.titleInput,\n    }\n\nfunction Task (title) {\n    this.title = title\n}\n\nfunction addTasktoArr() {\n\n    \n    const task = new Task(addTask.title.value)\n    _index__WEBPACK_IMPORTED_MODULE_1__.activeArr.push(task)\n    localStorage.setItem('Tasks', JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_1__.activeArr))\n    console.log(_index__WEBPACK_IMPORTED_MODULE_1__.activeArr)\n\n    // let i = //i should be whatever task is returned which correlates an index to modify\n    const todos = JSON.parse(localStorage.getItem('Tasks'))[0].title;\n    console.log(todos)\n\n    createDOMTask()\n}\n\nfunction createDOMTask() {\n    // let localStorageTask = JSON.parse(localStorage.getItem('Task'))[0].title\n\n    const main = document.getElementById('main')\n    const div = document.createElement('div')\n    const btn = document.createElement('button')\n    const p = document.createElement('p')\n\n    p.innerHTML = \"localStorageTask\"\n\n    div.appendChild(p)\n\n    main.appendChild(div)\n\n}\n\n\n\n//# sourceURL=webpack://src/./src/addtask.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\nlet dom = {\n    nav : document.getElementById('nav'),\n    inboxBtn : document.getElementById('inbox'),\n    todayBtn : document.getElementById('today'),\n    thisWeekBtn : document.getElementById('thisWeek'),\n    addTaskBtn : document.getElementById('addTaskBtn'),\n    titleInput : document.getElementById('titleInput'),\n}\n\nconst navBtnArr = [dom.inboxBtn, dom.todayBtn, dom.thisWeekBtn]\n\nfor (let i = 0; i < navBtnArr.length; i++) {\n    navBtnArr[i].setAttribute('id', 'navBtn'+i)\n}\n\nnavBtnArr.forEach(btn => {\n    btn.addEventListener('click', (e) => {\n        console.log(dom.inboxBtn)\n        dom.inboxBtn.classList.remove(\"nav-btn-active\")\n        dom.todayBtn.classList.remove(\"nav-btn-active\")\n        dom.thisWeekBtn.classList.remove(\"nav-btn-active\")\n        e.target.classList.add(\"nav-btn-active\")\n    })\n    \n});\n\n\n\n\n\n//# sourceURL=webpack://src/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeArr\": () => (/* binding */ activeArr)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _addtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addtask */ \"./src/addtask.js\");\n\n\n\nconst inboxArr = []\nlet activeArr = inboxArr\n\nlet active = true\nconst hamburgerBtn = document.querySelector(\".hamburger-btn\").addEventListener('click', () =>{\n    active = !active\n    if (active === true){\n        _dom__WEBPACK_IMPORTED_MODULE_0__.dom.nav.classList.remove('inactive-nav')\n\n    }\n    else if (active === false){\n        _dom__WEBPACK_IMPORTED_MODULE_0__.dom.nav.classList.add('inactive-nav')\n    }\n    \n})\n\n_dom__WEBPACK_IMPORTED_MODULE_0__.dom.addTaskBtn.addEventListener('click', _addtask__WEBPACK_IMPORTED_MODULE_1__.addTasktoArr)\n\n\n\n//# sourceURL=webpack://src/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;