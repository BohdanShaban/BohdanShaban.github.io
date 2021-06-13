console.log('main.js Connected...')

import showModalWind from './modules/showModalWind';
//import formsPostOnServ from './modules/formsPostOnServ'; // PHP Can't be Used -> FormsPree Account was created & Used
import filtrationOfWorks from './modules/filtrationOfWorks';
import scrollingSlow from './modules/scrollingSlow';


window.addEventListener('DOMContentLoaded', () => {

    showModalWind();
    //formsPostOnServ(); // PHP Can't be Used -> FormsPree Account was created & Used
    filtrationOfWorks();
    scrollingSlow('.pageup');

})