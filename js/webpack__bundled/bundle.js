/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/filtrationOfWorks.js":
/*!*****************************************!*\
  !*** ./js/modules/filtrationOfWorks.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const filtrationOfWorks = ( ) => { // Imperative Style (with no Args)
    console.log("filtrationOfWorks.js Connected...");

    //// MENU BTNS Filtration VARS :
        const menu = document.querySelector('.works__nav'),
            allBtnsArr = document.querySelectorAll('.works__nav > a'),

            allBtn = menu.querySelector('.all'),
            websitesBtn = menu.querySelector('.websites'),
            reactBtn = menu.querySelector('.react'),
            backendBtn = menu.querySelector('.backend');
    //

    //// PORTFOLIO Works VARS :
    const wrapper = document.querySelector('.portfolio'),

            allDivs = wrapper.querySelectorAll('.all'),
            websitesDivs = wrapper.querySelectorAll('.websites'),
            reactDivs = wrapper.querySelectorAll('.react'),
            beckendDivs = wrapper.querySelectorAll('.backend');
    //
    //console.dir(`allBtnsArr: ${allBtnsArr}`);


    const filterElms = (elmsArr) => {

        // Hide All
        allDivs.forEach( el => {
            el.style.display = 'none';
            el.classList.remove('animated', 'fadeInUp');
        });
        // notExistCurrently.style.display = 'none';
        // notExistCurrently.classList.remove('animated', 'fadeInUp');

        // Show Certain
        if(elmsArr) {
            elmsArr.forEach( el => {
                el.style.display = 'block';
                el.classList.add('animated', 'fadeInUp');
            })
        } else {
            // notExistCurrently.style.display = 'block';
            // notExistCurrently.classList.add('animated', 'fadeInUp');
        }
        
    }

    //// EVENT LISTENERS
    allBtn.addEventListener( 'click' , () => { filterElms(allDivs) } );
    websitesBtn.addEventListener( 'click' , () => { filterElms(websitesDivs) } );
    reactBtn.addEventListener( 'click' , () => { filterElms(reactDivs) } );
    backendBtn.addEventListener( 'click' , () => { filterElms(beckendDivs) } );
    // Not Exist Currently
    // grandyBtn.addEventListener( 'click' , () => { filterElms() } );
    // grandFathBtn.addEventListener( 'click' , () => { filterElms() } );

    // MENU ELMS CLICK
    menu.addEventListener( 'click', (e) => {
        const target = e.target;

        if(target && target.tagName === 'A') {

            allBtnsArr.forEach( menuItem => { menuItem.classList.remove('active'); })
            target.classList.add('active');
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtrationOfWorks);

/***/ }),

/***/ "./js/modules/scrollingSlow.js":
/*!*************************************!*\
  !*** ./js/modules/scrollingSlow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//import { ids } from "webpack";

const scrollingSlow = ( upArrowSel ) => {
    console.log("scrollingSlow.js Connected...");


    
    // Up Arrow Appears When Scroll a Litle Down
    // const upArrow = document.querySelector(upArrowSel);

    // window.addEventListener( 'scroll', () => {

    //     if( document.documentElement.scrollTop > 600 ) { // !!!
    //         upArrow.classList.add('animated', 'fadeIn');
    //         upArrow.classList.remove('fadeOut');
    //     } else {
    //         upArrow.classList.remove('fadeIn');
    //         upArrow.classList.add('fadeOut');
    //     }
    // })

    // SCROLLING WITH requestAnimationFrame

    let links = document.querySelectorAll('[href^="#"]'), // ^ —> Must Be at Str BEGINING !!!
        speed = 0.3;
    //
 
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });


    // SCROLLING WITH PURE JS

    // const element = document.documentElement,
    //       body = document.body;

    // const calcScroll = () => {
    //     upElem.addEventListener('click', function(event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             let hashElement = document.querySelector(this.hash),
    //                 hashElementTop = 0;

    //             while (hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };

    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;

    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }
        
    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };

    // calcScroll();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollingSlow);

/***/ }),

/***/ "./js/modules/showModalWind.js":
/*!*************************************!*\
  !*** ./js/modules/showModalWind.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
////////    MODAL  WINDOWS  (L 3)     ///////////

const showModalWind = () => {
    console.log("showModalWind.js Connected...");

    const openModalWind = (modal) => {
        modal.style.display = 'flex';
        
        //document.body.classList.add('modal-open');  // BootStrap class
        document.body.style.overflow = 'hidden';
    }
    const closeModalWind = (modal) => {
        modal.style.display = 'none';

        //document.body.classList.remove('modal-open'); // BootStrap class
        document.body.style.overflow = '';
    }

    function bindModalWind( trigersSelector, modalSelector, closeSelector  ) {

        const trigers = document.querySelectorAll( trigersSelector),
              modal   = document.querySelector( modalSelector),
              close   = document.querySelector( closeSelector );
        //
        
        trigers.forEach( triger => {
            triger.addEventListener( 'click' , (e) => {
                if (e.target ) {  e.preventDefault(); }
    
                openModalWind(modal);
            })
        })

        close.addEventListener( 'click' , (e) => {
            if (e.target ) {  e.preventDefault(); }
    
            closeModalWind(modal);
        })

        // By Click Outside of Mod Win  ->  Close It
        modal.addEventListener( 'click' , (e) => {
            if (e.target == modal) { closeModalWind(modal); }
        })
    }

    const showModalByTime = ( modalSelector, time ) => {
        const modal   = document.querySelector( modalSelector);
        setTimeout( () => { openModalWind(modal) }, time );
    }
    
    bindModalWind( '.hire_me_btn',  '.popup__hire_me',  '.popup__hire_me .modal__close' );
    //bindModalWind( '.phone_link',  '.popup',  '.popup .popup_close' );

    //showModalByTime( '.popup__hire_me',  10000 );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModalWind);

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
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_showModalWind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showModalWind */ "./js/modules/showModalWind.js");
/* harmony import */ var _modules_filtrationOfWorks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/filtrationOfWorks */ "./js/modules/filtrationOfWorks.js");
/* harmony import */ var _modules_scrollingSlow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollingSlow */ "./js/modules/scrollingSlow.js");
console.log('main.js Connected...')

;
//import formsPostOnServ from './modules/formsPostOnServ'; // PHP Can't be Used -> FormsPree Account was created & Used




window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_showModalWind__WEBPACK_IMPORTED_MODULE_0__.default)();
    //formsPostOnServ(); // PHP Can't be Used -> FormsPree Account was created & Used
    (0,_modules_filtrationOfWorks__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_modules_scrollingSlow__WEBPACK_IMPORTED_MODULE_2__.default)('.pageup');

})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map