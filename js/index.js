console.log('main.js Connected...')

import showModalWind from './modules/showModalWind';
import formsPostOnServ from './modules/formsPostOnServ';
import JQueryFormPost from './modules/JQueryFormPost';


window.addEventListener('DOMContentLoaded', () => {

    showModalWind();
    //formsPostOnServ();
    JQueryFormPost();
})