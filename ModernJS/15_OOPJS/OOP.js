/*************************************************************************************************************************
**************************************************************************************************************************
OBJECT LITERAL RECAP
***************************************************************************************************************************
**************************************************************************************************************************/

// const  userOne = {
//     username: 'ryu',
//     email:'ryu@thenetninja.co.uk',
//     login(){
//         console.log('the user logged in')
//     },
//     logout(){
//         console.log('the user logged out')
//     }
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

// const userTwo = {
//     username: 'Chun Li',
//     email: 'chun.li@thenetninja.co.uk',
//     login(){
//         console.log('the user logged in')
//     },
//     logout(){
//         console.log('the user logged out')
//     }
// }
// console.log(userTwo.email, userTwo.username);
// userTwo.login();

// //this is what we want to do
// const userThree = new userOne('shaun@thenetninja.co.uk', 'shaun')

/*************************************************************************************************************************
**************************************************************************************************************************
CLASS CONSTRUCTORS
***************************************************************************************************************************
**************************************************************************************************************************/

// class User {
//     constructor(username, email){
//         //set properties
//         this.username = username;
//         this.email = email;
//     }
// }

// const userOne = new User('mario', 'mario@thenetninja.co.uk');
// const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

// console.log(userOne, userTwo);

/*************************************************************************************************************************
**************************************************************************************************************************
CLASS METHODS & METHOD CHAINING & CLASS INHERITANCE(subclasses)
***************************************************************************************************************************
**************************************************************************************************************************/

// class User {

//     constructor(username, email){
//         //set properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
// }

// class Admin extends User{
//     deleteUser(user){
//         users = users.filter((u) => {
//             return u.username !== user.username
//         })
//     }
// }

// const userOne = new User('mario', 'mario@thenetninja.co.uk');
// const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
// const userThree = new Admin('shaun','shaun@thenetninja.co.uk')

// console.log(userOne, userTwo, userThree);
// let users = [userOne, userTwo, userThree];
// console.log(users)

// userThree.deleteUser(userTwo)
// // userOne.login().incScore().incScore().logout();
// // userOne.logout();
// // userTwo.login();
// // userTwo.logout();
// // userOne.incScore().incScore();
// console.log(users)

/*************************************************************************************************************************
**************************************************************************************************************************
SUPER()
***************************************************************************************************************************
**************************************************************************************************************************/

// class User {

//     constructor(username, email){
//         //set properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
// }

// class Admin extends User{
//     constructor(username, email, title){
//         super(username, email)
//         this.title = title;
//     }
//     deleteUser(user){
//         users = users.filter((u) => {
//             return u.username !== user.username
//         })
//     }
// }

// const userOne = new User('mario', 'mario@thenetninja.co.uk');
// const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
// const userThree = new Admin('shaun','shaun@thenetninja.co.uk', 'black-belt-ninja');

// console.log(userThree)

/*************************************************************************************************************************
**************************************************************************************************************************
PROTOTYPE MODEL     (before the class keyword)
***************************************************************************************************************************
**************************************************************************************************************************/

// function User(username, email){
//     this.username = username;
//     this.email = email;
// }

// User.prototype.login = function (){
//     console.log(`${this.username} has logged in`);
//     return this;
// }
// User.prototype.logout = function (){
//     console.log(`${this.username} has logged out`);
//     return this;
// }

// const userOne = new User('mario','mario@thenetninja.co.uk');
// const userTwo = new User('luigi','luigi@thenetninja.co.uk');

// console.log(userOne, userTwo);
// userOne.login().logout();

/*************************************************************************************************************************
**************************************************************************************************************************
PROTOTYPAL INHERITANCE
***************************************************************************************************************************
**************************************************************************************************************************/

// function User(username, email){
//     this.username = username;
//     this.email = email;
// }

// User.prototype.login = function (){
//     console.log(`${this.username} has logged in`);
//     return this;
// }
// User.prototype.logout = function (){
//     console.log(`${this.username} has logged out`);
//     return this;
// }

// function Admin(username, email, title){
//     User.call(this, username, email);
//     this.title = title
// }

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.deleteUser = function(){
//     //delete user
// }

// const userOne = new User('mario','mario@thenetninja.co.uk');
// const userTwo = new User('luigi','luigi@thenetninja.co.uk');
// const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk','black belt ninja')

// console.log(userOne, userTwo, userThree);
// userOne.login().logout();