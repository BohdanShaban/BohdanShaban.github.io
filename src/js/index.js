console.log('main.js Connected...')

import showModalWind from './modules/showModalWind';
import formsPostOnServ from './modules/formsPostOnServ'

window.addEventListener('DOMContentLoaded', () => {

    showModalWind();
    formsPostOnServ();
})