
const filtrationOfWorks = ( ) => { // Imperative Style (with no Args)
    console.log("filtrationOfWorks.js Connected... !!!");

    //// MENU BTNS Filtration VARS :
        const menu = document.querySelector('.works__nav'),
            allBtnsArr = document.querySelectorAll('.works__nav > a'),

            allBtn = menu.querySelector('.all'),
            websitesBtn = menu.querySelector('.websites'),
            reactBtn = menu.querySelector('.react'),
            backendBtn = menu.querySelector('.backend'),

            loadMoreBtn = document.querySelector('.load_more_works');
        let showMoreWorks = false;
        let currentlyClicked = 'ALL';
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
        let iterator = 0;

        // Hide All
        allDivs.forEach( el => {
            el.style.display = 'none';
            el.classList.remove('animated', 'fadeInUp');
        });
        // notExistCurrently.style.display = 'none';
        // notExistCurrently.classList.remove('animated', 'fadeInUp');

        if(showMoreWorks) { //Btn ShowMoreWorks WAS Pushed
            // Show All Works of Chosen Type

            if(elmsArr) {
                elmsArr.forEach( el => {
                    el.style.display = 'block';
                    el.classList.add('animated', 'fadeInUp');
                })
            } else {
                // notExistCurrently.style.display = 'block';
                // notExistCurrently.classList.add('animated', 'fadeInUp');
            }

        } else { //Btn ShowMoreWorks Wasn't Pushed

            // Show 3 Works of Chosen Type
            if(elmsArr) {
                elmsArr.forEach( el => {
                    if(iterator < 6) {

                        el.style.display = 'block';
                        el.classList.add('animated', 'fadeInUp');
                        iterator++;
                    }
                    
                })
            } else {
                // notExistCurrently.style.display = 'block';
                // notExistCurrently.classList.add('animated', 'fadeInUp');
            }
        }

        
        
    }

    //// EVENT LISTENERS
    allBtn.addEventListener( 'click' , () => { filterElms(allDivs); currentlyClicked = 'ALL' } );
    websitesBtn.addEventListener( 'click' , () => { filterElms(websitesDivs); currentlyClicked = 'WEBSITES' } );
    reactBtn.addEventListener( 'click' , () => { filterElms(reactDivs); currentlyClicked = 'REACT' } );
    backendBtn.addEventListener( 'click' , () => { filterElms(beckendDivs); currentlyClicked = 'BACKEND' } );

    let active = false;
    loadMoreBtn.addEventListener( 'click' , () => { 
        showMoreWorks = !showMoreWorks;

        switch(currentlyClicked) {
            case 'ALL':
                filterElms(allDivs);
                break; 
            case 'WEBSITES':
                filterElms(websitesDivs);
                break; 
            case 'REACT':
                filterElms(reactDivs);
                break; 
            case 'BACKEND':
                filterElms(beckendDivs);
                break;
        }

        if(active) {
            active = false;
            loadMoreBtn.classList.remove('active');
        } else {
            active = true;
            loadMoreBtn.classList.add('active');
        }
        
    });


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