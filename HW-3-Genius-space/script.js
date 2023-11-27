// For a single-line comment    Ctrl + /         
// For a block comment          Shift + Alt + A    

// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// 
// const fruts = [
//     { id: 0, name: "Apple" },
//     { id: 1, name: "Tomat" },
//     { id: 2, name: "Cherry" },
//     { id: 3, name: "Orange" },
// ];
  
// let nameArr = [];
// for (let i=0; i < fruts.length; i++) {
//     let item = fruts[i].name;
//     nameArr.push(item);
// };

// console.log(nameArr);


// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i=2; i <= 10; i++) {
//     if (i % 2 == 0) {
//     console.log(i);
//     }
// };

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//  console.log( `цифра ${i}!` );
// }
////
// let a = 0;
// while (a < 5){
//  console.log(`цифра ${a}!`);
//  a++;
// };

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.



let input;


do {
    const promptRes = prompt('Введіть число більше за 100.');
    if (!promptRes) {
        console.log('Ви скасували промт');
    } else {
        input = Number(); 
    }
} while (input <= 100);















// -- 5 --
// Вирахуйте середній вік
// const girls = [
//  { age: 23, name: "Оля" },
//  { age: 29, name: "Аня" },
//  { age: 10, name: "Юля" },
//  { age: 20, name: "Катя" },
// ];

// let ageArr = [];

// for (let i=0; i < girls.length; i++) {
//     let item = girls[i].age;
//     ageArr.push(item);
// };

// console.log(ageArr);

// let averAge = ageArr.reduce((sum, item) => sum + item) / ageArr.length;
// console.log(averAge);