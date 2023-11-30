// Домашнє завдання
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
    name = '';
    phone = '';

    constructor(options) {
        this.name = options.name;
        this.phoneNumber = options.phone;
    }

    set phoneNumber(newPhone) {
        this.phone = `+38093${newPhone}`;
    }

    get abonentData() {
        return `Name : ${this.name}, Phone: ${this.phone}`
    }

}

const Masha = new Abonent({
    name: 'Masha',
    phone: 672223344,
});

console.log(Masha.abonentData);

const Tom = new Abonent({
    name: 'Tom',
    phone: 666903344,
});

console.log(Tom.abonentData);

const Iva = new Abonent({
    name: 'Iva',
    phone: 112233344,
});

console.log(Iva.abonentData);
