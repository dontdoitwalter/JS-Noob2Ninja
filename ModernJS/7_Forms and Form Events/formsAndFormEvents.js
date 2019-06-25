/*************************************************************************************************************************
**************************************************************************************************************************
SUBMIT EVENTS
***************************************************************************************************************************
**************************************************************************************************************************/

// const form = document.querySelector('.signup-form');
// //const username = document.querySelector('#username');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     //console.log(username.value);
//     console.log(form.username.value)
// });

/*************************************************************************************************************************
**************************************************************************************************************************
REGULAR EXPRESSIONS
***************************************************************************************************************************
**************************************************************************************************************************/

// const form = document.querySelector('.signup-form');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(form.username.value);
// });

// //testing RegEx
// const username = 'shaunshaun';
// const pattern = /^[a-z]{6,}$/

// // let result = pattern.test(username);
// // console.log(result);
// // if(result){
// //     console.log('regex test passed :)')
// // } else{
// //     console.log('regex test failed :(')
// // }

// let result = username.search(pattern);
// console.log(result)

/*************************************************************************************************************************
**************************************************************************************************************************
FORM VALIDATION
***************************************************************************************************************************
**************************************************************************************************************************/

// const  form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback')

// form.addEventListener('submit', e =>{
//     e.preventDefault();
//         //validation
//     const username = form.username.value;
//     const usernamePattern = /^[a-zA-Z]{6, 12}$/;

//     if(usernamePattern.test(username)){
//         //positive feedback
//         feedback.textContent = 'valid username';
//     } else {
//         //negative feedback
//         feedback.textContent = 'username is invalid';
//     }
// })

/*************************************************************************************************************************
**************************************************************************************************************************
KEYBOARD EVENTS
***************************************************************************************************************************
**************************************************************************************************************************/

const  form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit', e =>{
    e.preventDefault();
        //validation
    const username = form.username.value;

    if(usernamePattern.test(username)){
        //positive feedback
        feedback.textContent = 'valid username';
    } else {
        //negative feedback
        feedback.textContent = 'username is invalid';
    }
});

//LIVE FEEDBACK
form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class','success');
    } else{
        form.username.setAttribute('class','error');
    }
});