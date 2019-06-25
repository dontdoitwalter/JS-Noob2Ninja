/*************************************************************************************************************************
**************************************************************************************************************************
OBJECT LITERALS
***************************************************************************************************************************
**************************************************************************************************************************/

// let user = {
//     name:'walter',
//     age:30,
//     email:'walterthedev@gmail.com',
//     location:'Indianapolis',
//     blogs:['why mac & cheese rules','10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// user.age = 35
// console.log(user.age)

// const key = 'location'

// console.log(user[key]) // = user['location']

// user['name']='bucky'
// console.log(user.name)

// console.log(typeof user)

/*************************************************************************************************************************
**************************************************************************************************************************
ADDING METHODS TO OBJECTS && 'this' KEYWORD
***************************************************************************************************************************
**************************************************************************************************************************/

// let user = {
//     name:'walter',
//     age:30,
//     email:'walterthedev@gmail.com',
//     location:'Indianapolis',
//     blogs:['why mac & cheese rules','10 things to make with marmite'],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//         // console.log(this)
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blogs =>{
//             console.log(blogs)
//         })
//     }
// };

// console.log(user)

/*************************************************************************************************************************
**************************************************************************************************************************
OBJECTS IN ARRAYS
***************************************************************************************************************************
**************************************************************************************************************************/

// let user = {
//     name:'walter',
//     age:30,
//     email:'walterthedev@gmail.com',
//     location:'Indianapolis',
//     blogs:[    
//         { title: 'why mac and cheese rules', likes:30 },
//         { title: '10 things to make with marmite', likes:50 }
//     ],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//         // console.log(this)
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blogs =>{
//             console.log(blogs.title, blogs.likes)
//         })
//     }
// };

// user.logBlogs();

/*************************************************************************************************************************
**************************************************************************************************************************
MATH OBJECT
***************************************************************************************************************************
**************************************************************************************************************************/

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));  //rounds down no matter what
// console.log(Math.ceil(area));   //rounds up no matter what
// console.log(Math.trunc(area));  // removes decimal

//RANDOM NUMBERS

// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

/*************************************************************************************************************************
**************************************************************************************************************************
PRIMITIVE AND REFERENCE TYPES
***************************************************************************************************************************
**************************************************************************************************************************/

//PRIMITIVE TYPES

// let scoreOne = 50;
// let scoreTwo = scoreOne

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//REFERENCE TYPES

// const userOne = { name:'walter', age:27};
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.age = 40
// console.log(userOne, userTwo);