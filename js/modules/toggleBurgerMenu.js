

const toggleBurgerMenu = () => {
    console.log("toggleBurgerMenu.js Connected...");

    const burgerBtn = document.querySelector('#burgerToggleID'),
          navPannel = document.querySelector('#nav');
    console.log(navPannel);

    burgerBtn.addEventListener( 'click' , (e) => {
        if (e.target ) {  e.preventDefault(); }

        // Toggle .show class When Btn Pushed
        if (navPannel.matches('.show') ) {
            navPannel.classList.remove('show');
        } else {
            navPannel.classList.add('show');
        }
    })
}

export default toggleBurgerMenu;