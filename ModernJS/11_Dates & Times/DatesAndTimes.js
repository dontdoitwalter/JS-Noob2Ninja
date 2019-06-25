/*************************************************************************************************************************
**************************************************************************************************************************
DATES & TIMES
***************************************************************************************************************************
**************************************************************************************************************************/

// const now = new Date();

// console.log(now);
// console.log(typeof now);

// //year, month, day, times
// console.log('getFullYear', now.getFullYear());
// console.log('getMonth', now.getMonth()); //array of months starts at 0
// console.log('getDate', now.getDate());
// console.log('getDay', now.getDay()); //array of days starting on Sunday 0
// console.log('getHours:', now.getHours());
// console.log('getSeconds:', now.getSeconds());
// console.log('getMinutes:', now.getMinutes());

// // timestamps
// console.log('timestamp', now.getTime()); // number of milliseconds since Jan 1 1970

// //date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

/*************************************************************************************************************************
**************************************************************************************************************************
TIMESTAMPS AND COMPARISONS
***************************************************************************************************************************
**************************************************************************************************************************/

// const before = new Date('February 1 2019 7:30:59');
// const now = new Date();

// console.log(now.getTime(), before.getTime()); 

// const diff = now.getTime() - before.getTime();

// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 27)

// console.log(mins, hours, days)

// console.log(`This blog was written ${days} ago`)

// //converting timestamps to date objects
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));

/*************************************************************************************************************************
**************************************************************************************************************************
BUILDING A DIGITAL CLOCK
***************************************************************************************************************************
**************************************************************************************************************************/

// const clock = document.querySelector('.clock');

// const tick = () => {
//     const now = new Date();
//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();

//     const html = `
//         <span>${h}</span> : 
//         <span>${m}</span> : 
//         <span>${s}</span>
//     `;
//     clock.innerHTML = html;
// };

// setInterval(tick, 1000)

/*************************************************************************************************************************
**************************************************************************************************************************
DATE fns LIBRARY
***************************************************************************************************************************
**************************************************************************************************************************/

// const now = new Date();

// //console.log(dateFns.isToday(now));

// //formatting options
// console.log(dateFns.format(now, 'YYYY'));
// console.log(dateFns.format(now, 'MMMM'));
// console.log(dateFns.format(now, 'dddd'));
// console.log(dateFns.format(now, 'Do'));
// console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));

// //comparing dates
// const before = new Date('February 1 2019 12:00:00');

// console.log(dateFns.distanceInWords(now, before, {addSuffix:true}));