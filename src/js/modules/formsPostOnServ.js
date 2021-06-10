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

export default formsPostOnServ;