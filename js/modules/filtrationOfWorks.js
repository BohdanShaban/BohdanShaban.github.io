
const filtrationOfWorks = ( ) => { // Imperative Style (with no Args)
    console.log("filtrationOfWorks.js Connected...");

    // MENU BTNS Filtration VARS :
        const menu = document.querySelector('.works__nav'),
            allBtnsArr = document.querySelectorAll('.works__nav > a'),

            allBtn = menu.querySelector('.all'),
            websitesBtn = menu.querySelector('.websites'),
            reactBtn = menu.querySelector('.react'),
            backendBtn = menu.querySelector('.backend');
    //

    // PORTFOLIO Works VARS :
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
            //el.classList.remove('animated', 'fadeInUp');
        });
        // notExistCurrently.style.display = 'none';
        // notExistCurrently.classList.remove('animated', 'fadeInUp');

        // Show Certain
        if(elmsArr) {
            elmsArr.forEach( el => {
                el.style.display = 'block';
                //el.classList.add('animated', 'fadeInUp');
            })
        } else {
            // notExistCurrently.style.display = 'block';
            // notExistCurrently.classList.add('animated', 'fadeInUp');
        }
        
    }
    // EVENT LISTENERS
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

export default filtrationOfWorks;