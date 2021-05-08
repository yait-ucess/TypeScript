/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/achievement/achieve.ts":
/*!************************************!*\
  !*** ./src/achievement/achieve.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Achieve": () => (/* binding */ Achieve)
/* harmony export */ });
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score */ "./src/achievement/score.ts");

class Achieve {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('achieve--active');
        const score = _score__WEBPACK_IMPORTED_MODULE_0__.Score.getInstance();
        score.render();
        if (score.totalScore == 15) {
            alert('おめでとう！  今日も頑張ったね！');
        }
        this.element.classList.toggle('achieve--end');
    }
}


/***/ }),

/***/ "./src/achievement/achieveList.ts":
/*!****************************************!*\
  !*** ./src/achievement/achieveList.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchieveList": () => (/* binding */ AchieveList)
/* harmony export */ });
/* harmony import */ var _achieve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achieve */ "./src/achievement/achieve.ts");

class AchieveList {
    constructor() {
        this.elements = document.querySelectorAll('.achieve');
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(element => {
            new _achieve__WEBPACK_IMPORTED_MODULE_0__.Achieve(element);
        });
    }
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('achieve--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const achieveScore = element.querySelector('.achieve__score');
            if (achieveScore) {
                this._activeElementsScore.push(Number(achieveScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
    static getInstance() {
        if (!AchieveList.instance) {
            AchieveList.instance = new AchieveList();
        }
        return AchieveList.instance;
    }
}


/***/ }),

/***/ "./src/achievement/score.ts":
/*!**********************************!*\
  !*** ./src/achievement/score.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Score": () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _achieveList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achieveList */ "./src/achievement/achieveList.ts");

class Score {
    constructor() { }
    get totalScore() {
        const achieveList = _achieveList__WEBPACK_IMPORTED_MODULE_0__.AchieveList.getInstance();
        return achieveList.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/achievement/main.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _achieveList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achieveList */ "./src/achievement/achieveList.ts");

_achieveList__WEBPACK_IMPORTED_MODULE_0__.AchieveList.getInstance();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY2hpZXZlbWVudC8uL3NyYy9hY2hpZXZlbWVudC9hY2hpZXZlLnRzIiwid2VicGFjazovL2FjaGlldmVtZW50Ly4vc3JjL2FjaGlldmVtZW50L2FjaGlldmVMaXN0LnRzIiwid2VicGFjazovL2FjaGlldmVtZW50Ly4vc3JjL2FjaGlldmVtZW50L3Njb3JlLnRzIiwid2VicGFjazovL2FjaGlldmVtZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FjaGlldmVtZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hY2hpZXZlbWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FjaGlldmVtZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWNoaWV2ZW1lbnQvLi9zcmMvYWNoaWV2ZW1lbnQvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDekI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZm9DO0FBQzdCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBTztBQUN2QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25DNEM7QUFDckM7QUFDUCxtQkFBbUI7QUFDbkI7QUFDQSw0QkFBNEIsaUVBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ040QztBQUM1QyxpRUFBdUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NvcmUgfSBmcm9tIFwiLi9zY29yZVwiO1xuZXhwb3J0IGNsYXNzIEFjaGlldmUge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tFdmVudEhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGNsaWNrRXZlbnRIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWNoaWV2ZS0tYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gU2NvcmUuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgc2NvcmUucmVuZGVyKCk7XG4gICAgICAgIGlmIChzY29yZS50b3RhbFNjb3JlID09IDE1KSB7XG4gICAgICAgICAgICBhbGVydCgn44GK44KB44Gn44Go44GG77yBICDku4rml6XjgoLpoJHlvLXjgaPjgZ/jga3vvIEnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWNoaWV2ZS0tZW5kJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQWNoaWV2ZSB9IGZyb20gXCIuL2FjaGlldmVcIjtcbmV4cG9ydCBjbGFzcyBBY2hpZXZlTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNoaWV2ZScpO1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIG5ldyBBY2hpZXZlKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjaGlldmUtLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbGVtZW50cztcbiAgICB9XG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzU2NvcmUoKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWNoaWV2ZVNjb3JlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWNoaWV2ZV9fc2NvcmUnKTtcbiAgICAgICAgICAgIGlmIChhY2hpZXZlU2NvcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlLnB1c2goTnVtYmVyKGFjaGlldmVTY29yZS50ZXh0Q29udGVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFBY2hpZXZlTGlzdC5pbnN0YW5jZSkge1xuICAgICAgICAgICAgQWNoaWV2ZUxpc3QuaW5zdGFuY2UgPSBuZXcgQWNoaWV2ZUxpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQWNoaWV2ZUxpc3QuaW5zdGFuY2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQWNoaWV2ZUxpc3QgfSBmcm9tIFwiLi9hY2hpZXZlTGlzdFwiO1xuZXhwb3J0IGNsYXNzIFNjb3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGdldCB0b3RhbFNjb3JlKCkge1xuICAgICAgICBjb25zdCBhY2hpZXZlTGlzdCA9IEFjaGlldmVMaXN0LmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiBhY2hpZXZlTGlzdC5hY3RpdmVFbGVtZW50c1Njb3JlLnJlZHVjZSgodG90YWwsIHNjb3JlKSA9PiB0b3RhbCArIHNjb3JlLCAwKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVfX251bWJlcicpLnRleHRDb250ZW50ID0gU3RyaW5nKHRoaXMudG90YWxTY29yZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFTY29yZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU2NvcmUuaW5zdGFuY2UgPSBuZXcgU2NvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NvcmUuaW5zdGFuY2U7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBY2hpZXZlTGlzdCB9IGZyb20gXCIuL2FjaGlldmVMaXN0XCI7XG5BY2hpZXZlTGlzdC5nZXRJbnN0YW5jZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==