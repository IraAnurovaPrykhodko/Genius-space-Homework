// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//     if (age > 18) {
//     return true;
//     } else {
//     return confirm('Батьки дозволили?');
//     }
// }

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Батьки дозволили?');
// }



// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// 
// const min = function (a, b) {
//     if (a > b) {
//         return b;
//     } else if(a < b) {
//         return a;
//     } return console.log(`${a} та ${b} рівні`)
// };
// min(2, 2)

// const min = (a, b) => a > b ? b : (a < b ? a : console.log(`${a} та ${b} рівні`) );
// min(2, 2);

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// 
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// const ask = (question, yes, no) => confirm(question) ? yes() : no();


// ask(
//     "Ви згодні?",
//     function() { alert("Ви погодились."); },
//     function() { alert("Ви скасували виконання."); }
// );