// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//     name: 'Kate',
//     spec: 'JS dev',
//     averRaiting: 65,
//     missLessons: 15,
//     city: '',
//     hobby: '',
//     info: function (city, hobby) {
//         console.log(`Ім'я ${this.name}`);
//         console.log(`Спеціальність ${this.spec}`);
//         console.log(`Середній бал ${this.averRaiting}`);
//         console.log(`Кількість пропущених занять ${this.missLessons}`);
//         console.log(`Місто ${city}`);
//         console.log(`Хобі ${hobby}`);
//     },
// };
// student.info();

// const Petya = {
//     name: 'Petya',
//     spec: 'Python dev',
//     averRaiting: 49,
//     missLessons: 28,
//     city: 'Kyiv',
//     hobby: '',
// }
// student.info.bind(Petya)('Kyiv');

// const Anny = {
//     name: 'Anny',
//     spec: 'Product Manager',
//     averRaiting: 88.9,
//     missLessons: 7,
//     city: 'Lutsk',
//     hobby: 'cats',
// }
// student.info.call(Anny, 'Lutsk', 'cats');

// const Tom = {
//     name: 'Tom',
//     spec: 'Tester',
//     averRaiting: 90,
//     missLessons: 1,
//     city: 'Uzhorod',
//     hobby: 'football',
// }
// student.info.apply(Tom, ['Uzhorod', 'football']);


// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const buttonPush = {
//     showDefinition() {
//         alert(`${this.name} — ${this.definition}`);
//     },
// };

// const htmlInfo = {
//     name: 'HTML',
//     definition: 'стандартизована мова розмітки документів для перегляду вебсторінок у браузері.',
// };

// document.querySelector('#html').addEventListener('click', buttonPush.showDefinition.bind(htmlInfo));

// const cssInfo = {
//     name: 'CSS',
//     definition: ' це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.',
// };

// document.querySelector('#css').addEventListener('click', buttonPush.showDefinition.bind(cssInfo));


// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) 'banana' 30, 4,5
// 2) 'cherry' 58, 1,3
// 3) 'orange' 89. 3,4

// const shopItem = function (name, price, amount) {
//     let sum = price * amount;
//     return console.log(`${name} ${sum}`)
// };

// shopItem('banana', 30, 4.5);
// shopItem('cherry', 58, 1.3);
// shopItem('orange', 89, 3.4);



// const firstItem = {
//     name: 'banana',
//     price: 30,
//     amount: 4.5,
//     shop: function(){
//         console.log(`${this.name} ${this.price}`);
//     }
// };

// firstItem.shop();

