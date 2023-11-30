// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

const Calculator = function() {
    this.firstNumber = 0;
    this.secondNumber = 0;

    this.read = function() {
        this.firstNumber = prompt('Введіть перше число', '0');
        this.secondNumber = prompt('Введіть друге число', '0');
        alert(`${this.firstNumber} ${this.secondNumber}`);
    }

    this.sum = function() {
        let sumNumber = Number(this.firstNumber) + Number(this.secondNumber);
        console.log(sumNumber);
    }

    this.mul = function() {
        let mulNumber = Number(this.firstNumber) * Number(this.secondNumber);
        console.log(mulNumber);
    }

};


let dddd = new Calculator();

dddd.read();
dddd.sum();
dddd.mul();


