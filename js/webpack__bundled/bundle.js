/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/formsPostOnServ.js":
/*!***************************************!*\
  !*** ./js/modules/formsPostOnServ.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
////////    FORMS  (L 5)     ///////////

const formsPostOnServ = (  ) => {
    console.log("formsPostOnServ.js Connected...");

    const formsArr  = document.querySelectorAll('form'),
          inputsArr = document.querySelectorAll('input');

    //console.dir(formsArr);

    const messages = {
        loading : 'Data is Loading...',
        success : 'Successfully Loaded !',
        error   : 'An Errrrror Ocured !!!!'
    };

    // PREVENT INPUT LETTERS IN PHONE FIELD
    //import prevLettInp from './additional/prevLettInp';
    //prevLettInp('input[name="user_phone"]'); // !!!

    // POST DATA f()
    const postData = async( url, data) => {
        // Loading Message (On prev Created Div)
        document.querySelector('.messageDiv').textContent = messages.loading;

        let result = await fetch( url, 
            {
                method: 'POST',
                body: data
            });
        return await result.text();
    }

    formsArr.forEach( formItem => {
        formItem.addEventListener( 'submit', (e) => {  // !!! 'submit'  —>  e.preventDefault();
            e.preventDefault();

            // MESSAGE EL CREATION
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('messageDiv');
            formItem.appendChild(messageDiv);

            // MAKE FormData OBJ
            const formData = new FormData(formItem);
            
            // POST Data
            postData('mail.php' , formData)
            .then( res => {
                console.log(res);
                messageDiv.textContent = messages.success;
            })
            .catch( () => { messageDiv.textContent = messages.error })
            .finally( () => {
                inputsArr.forEach( input => {
                    input.value = ''; // Clear Form Inputs
                })
                setTimeout( () => {
                    messageDiv.remove();
                }, 3000);
            })
    
        })
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsPostOnServ);

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

    showModalByTime( '.hire_me_btn',  30000 );
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
/* harmony import */ var _modules_formsPostOnServ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/formsPostOnServ */ "./js/modules/formsPostOnServ.js");
console.log('main.js Connected...')

;


window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_showModalWind__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_modules_formsPostOnServ__WEBPACK_IMPORTED_MODULE_1__.default)();
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map