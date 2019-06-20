/*************************************************************************************************************************
**************************************************************************************************************************
ASYNC CODE IN ACTION
***************************************************************************************************************************
**************************************************************************************************************************/

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);

/*************************************************************************************************************************
**************************************************************************************************************************
MAKING HTTP REQUESTS (XHR)
***************************************************************************************************************************
**************************************************************************************************************************/

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     //console.log(request, request.readyState);
//     if(request.readyState === 4){
//         console.log(request.responseText);
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

/*************************************************************************************************************************
**************************************************************************************************************************
RESPONSE STATUS
***************************************************************************************************************************
**************************************************************************************************************************/

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {

//     if(request.readyState === 4 && request.status === 200){
//         console.log(request, request.responseText);
//     }else if(request.readyState === 4){
//         console.log('could not fetch data')
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

/*************************************************************************************************************************
**************************************************************************************************************************
CALLBACK FUNCTIONS
***************************************************************************************************************************
**************************************************************************************************************************/
// const getTodos = (callback) => {
//    const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200){
//                 callback(undefined, request.responseText);
//             }else if(request.readyState === 4){
//                 callback('could not fetch data', undefined);
//             }
//         });
//         request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//         request.send();
// };

// console.log(1);
// console.log(2);

// getTodos((err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// });

// console.log(3);
// console.log(4);

/*************************************************************************************************************************
**************************************************************************************************************************
JSON DATA
***************************************************************************************************************************
**************************************************************************************************************************/

// const getTodos = (callback) => {
//    const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 callback(undefined, data);
//             }else if(request.readyState === 4){
//                 callback('could not fetch data', undefined);
//             }
//         });
//         request.open('GET', 'todos.json');
//         request.send();
// };
// getTodos((err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// });

/*************************************************************************************************************************
**************************************************************************************************************************
CALLBACK HELL
***************************************************************************************************************************
**************************************************************************************************************************/

// const getTodos = (resource, callback) => {
//    const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 callback(undefined, data);
//             }else if(request.readyState === 4){
//                 callback('could not fetch data', undefined);
//             }
//         });
//         request.open('GET', resource);
//         request.send();
// };
// getTodos('todos/luigi.json',(err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) =>{
//         console.log(data);
//         getTodos('todos/yoshi.json', (err, data) =>{
//             console.log(data);
//         });
//     });
// });

/*************************************************************************************************************************
**************************************************************************************************************************
PROMISE BASICS
***************************************************************************************************************************
**************************************************************************************************************************/

// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//             request.addEventListener('readystatechange', () => {
//                 if(request.readyState === 4 && request.status === 200){
//                     const data = JSON.parse(request.responseText);
//                     resolve(data);
//                 }else if(request.readyState === 4){
//                     reject('error getting resource');
//                 }
//             });
//             request.open('GET', resource);
//             request.send();

//     });
// };

// getTodos('todos/luigi.json').then((data) => {
//     console.log('promise resolved:', data);
// }).catch((err) => {
//     console.log('promise rejected:', err)
// });

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve('some data')
//         reject('some error')
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => 
// {
//     console.log(err)
// });
// getSomething().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err)
// })

/*************************************************************************************************************************
**************************************************************************************************************************
CHAINING PROMISES
***************************************************************************************************************************
**************************************************************************************************************************/

// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//             request.addEventListener('readystatechange', () => {
//                 if(request.readyState === 4 && request.status === 200){
//                     const data = JSON.parse(request.responseText);
//                     resolve(data);
//                 }else if(request.readyState === 4){
//                     reject('error getting resource');
//                 }
//             });
//             request.open('GET', resource);
//             request.send();

//     });
// };

// getTodos('todos/luigi.json').then((data) => {
//     console.log('promise resolved:', data);
//     return getTodos('todos/mario.json')
// }).then(data => {
//     console.log('promise 2 resolved:', data);
//     return getTodos('todos/yoshi.json');
// }).then(data => {
//     console.log('promise 3 resolved:', data)
// }).catch((err) => {
//     console.log('promise rejected:', err)
// });

/*************************************************************************************************************************
**************************************************************************************************************************
FETCH API
***************************************************************************************************************************
**************************************************************************************************************************/

// fetch('todos/luigi.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch((err) => {
//     console.log('rejected', err)
// });

/*************************************************************************************************************************
**************************************************************************************************************************
ASYNC & AWAIT
***************************************************************************************************************************
**************************************************************************************************************************/

// const getTodos = async () => {
//     const response = await fetch('todos/luigi.json');
//     const data = await response.json();
//     return data;
// };

// console.log(1);
// console.log(2);

// getTodos().then(data => {
//     console.log(data)
// });

// console.log(3);
// console.log(4);

/*************************************************************************************************************************
**************************************************************************************************************************
THROWING AND CATCHING ERRORS
***************************************************************************************************************************
**************************************************************************************************************************/

// const getTodos = async () => {
//     const response = await fetch('todos/luigi.json');

// if(response.status !== 200){
//     throw new Error('cannot fetch data');
// }
//     const data = await response.json();
//     return data;
// };

// getTodos()
// .then(data => console.log('resolved:', data))
// .catch(err => console.log('rejected:', err.message));