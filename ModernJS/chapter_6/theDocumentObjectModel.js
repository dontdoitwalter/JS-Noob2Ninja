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

// const para = document.querySelector('p');
// console.log(para.innerText)
// para.innerText = 'Ninjas are awesome!'      //Replaces current
// para.innerText += ' Ninjas are awesome!'  //Adds to current

// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += ' New text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML = '<h2>THIS IS A NEW H2</h2>'

// const people = ['mario','luigi','yoshi'];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`
// })

/*************************************************************************************************************************
**************************************************************************************************************************
GETTING AND SETTING ATTRIBUTES
***************************************************************************************************************************
**************************************************************************************************************************/

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'))

// link.setAttribute('href', 'https://www.thenetninja.co.uk')
// link.innerText = 'The Net Ninja Website'
// console.log(link.getAttribute('href'))

// const mssg = document.querySelector('p')

// console.log(mssg.getAttribute('class'))

// mssg.setAttribute('error','success');
// mssg.setAttribute('style', 'color:green')

/*************************************************************************************************************************
**************************************************************************************************************************
CHANGING CSS STYLES
***************************************************************************************************************************
**************************************************************************************************************************/

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px');  //OVERRIDES CURRENT STYLE COMPLETELY

// console.log(title.style);
// console.log(title.style.color)

// title.style.margin = '50px';
// title.style.color = 'crimson'
// title.style.fontSize = '60px'
// title.style.margin=''; //removes styling

/*************************************************************************************************************************
**************************************************************************************************************************
ADDING & REMOVING CLASSES
***************************************************************************************************************************
**************************************************************************************************************************/

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success')
// console.log(content.classList);

// const paras = document.querySelectorAll('p');

// paras.forEach(p =>{
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.textContent.includes('success')){
//         p.classList.add('success');
//     }
// });

// //HOW TO TOGGLE

// const title = document.querySelector('.title');

// title.classList.toggle('test')

/*************************************************************************************************************************
**************************************************************************************************************************
PARENTS, CHILDREN AND SIBLINGS
***************************************************************************************************************************
**************************************************************************************************************************/

// const article = document.querySelector('article');

// console.log(article.children)

// console.log(Array.from(article.children))

// Array.from(article.children).forEach( child =>{
//     child.classList.add('article-element')
// })

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);

// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// //chaining

// console.log(title.nextElementSibling.parentElement.children);

/*************************************************************************************************************************
**************************************************************************************************************************
EVENT BASICS (CLICK EVENTS)
***************************************************************************************************************************
**************************************************************************************************************************/

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('you clicked me')
// })

// const items = document.querySelectorAll('li');

// items.forEach( item => {
//     item.addEventListener('click', (e) => {
//         // console.log('item clicked')
//         // console.log(e);
//         // console.log(e.target);
//         // console.log(item);
//         e.target.style.textDecoration = 'line-through'
//     })
// })

/*************************************************************************************************************************
**************************************************************************************************************************
CREATING AND REMOVING ELEMENTS  && EVENT BUBBLING AND DELEGATION
***************************************************************************************************************************
**************************************************************************************************************************/

// const ul = document.querySelector('ul');
// // ul.remove();
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     // ul.innerHTML += '<li>something new</li>'
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // ul.append(li) //adds to bottom
//     ul.prepend(li) //add to top
// });

// // const items = document.querySelectorAll('li');

// // items.forEach(item => {
// //     item.addEventListener('click', e => {
// //         console.log('event in LI');
// //         e.stopPropagation();
// //         // e.target.style.textDecoration = 'line-through'
// //         e.target.remove();
// //     });
// // });

// ul.addEventListener('click', e => {
//     // console.log('event in UL')
//     console.log(e.target);
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });

/*************************************************************************************************************************
**************************************************************************************************************************
MORE DOM EVENTS
***************************************************************************************************************************
**************************************************************************************************************************/

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//     console.log('OI! My content is copyright!')
// })

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//     console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`
// });

// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY)
// })