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

export default showModalWind;