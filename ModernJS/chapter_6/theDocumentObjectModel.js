/*************************************************************************************************************************
**************************************************************************************************************************
THE QUERY SELECTOR
***************************************************************************************************************************
**************************************************************************************************************************/

//THESE GRAB ONE

// const para = document.querySelector('p');  //grabs first p tag and ignores the rest
// console.log(para)

// const errorPara = document.querySelector('.error');  //grabs first 'class=error'
// console.log(errorPara)

// const paraError = document.querySelector('div.error'); //grabs error div instead
// console.log(paraError);

//THESE GRAB ALL

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(para =>{
//     console.log(para)
// });
// console.log(paras);  //can use array selectors to select specific p tags

// console.log(errors)

/*************************************************************************************************************************
**************************************************************************************************************************
OTHER WAYS TO QUERY THE DOM
***************************************************************************************************************************
**************************************************************************************************************************/

// //GET AN ELEMENT BY ID
// const title = document.getElementById('page-title');
// console.log(title)

// //GET AN ELEMENT BY CLASSNAME
// const error = document.getElementsByClassName('error')  // CANNOT USE FOREACH
// console.log(error)
// console.log(error[0]);

// //GET AN ELEMENT BY TAG NAME
// const tagName = document.getElementsByTagName('p');   // CANNOT USE FOREACH
// console.log(tagName);
// console.log(tagName[1]);

/*************************************************************************************************************************
**************************************************************************************************************************
ADDING AND CHANGING PAGE CONTENT
***************************************************************************************************************************
**************************************************************************************************************************/

