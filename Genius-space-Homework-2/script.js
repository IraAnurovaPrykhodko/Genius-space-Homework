// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
/*
let num = -3;
if (num > 0) {
    console.log("true");
} else {
    console.log("false");
}
*/

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true
/*
let value = "test";
if (value === "test") {
    console.log(true);
} else {
    console.log(false);
}
*/

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13
/*
let numb = 13;
if (numb > 10) {
    numbN = numb-5;
    console.log(numbN);
} else {
    numbN = numb+5;
    console.log(numbN);
}
*/

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
/*
const number = Number(prompt("Напишіть ціле число в межах від 1 до 12 включно"));
let month;

switch(number) {
    case 1 :
        month = "Січень";
        break;  
    case 2 :
        month = "Лютий";
        break;  
    case 3 :
        month = "Березень";
        break;  
    case 4 :
        month = "Квітень";
        break;
    case 5 :
        month = "Травень";
        break;
    case 6 :
        month = "Червень";
        break;  
    case 7 :
        month = "Липень";
        break;  
    case 8 :
        month = "Серпень";
        break;  
    case 9 :
        month = "Вересень";
        break;
    case 10 :
        month = "Жовтень";
        break;
    case 11 :
        month = "Листопад";
        break;
    case 12 :
        month = "Грудень";
        break;             
    default:
        alert(`${number} не коректне число, введіть інше`);
}

if (month) {
    alert(`${number} - це ${month}`);
}
*/

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
/*
let value0 = prompt("Введіть тризначне число");
let value = Number(value0);
if (value > 99 && value < 1000) {
    function sumOfDigit(value) { 
        let valueStr = value.toString(); 
        let sum = 0; 
    
        for (let digit of valueStr) { 
            sum += parseInt(digit); 
        } 
        return sum;
        
    } 
    alert(`Сума цифр у числі ${value} = ` + sumOfDigit(value));   
    
} else if (isNaN(value)) {
    alert(`Ви ввели текст чи інші не цифрові символи - ${value0}. Веедіть тризначне число.`);
} else {
    alert(`Не коректне число ${value}. Введіть інше тризначне число.`);
}
*/