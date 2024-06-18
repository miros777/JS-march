/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;

Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/


1 //////////////////////////////////////////
let hello22 :string = 'hello';
let own22 :string = 'own';
let domZoneCom22 :string = 'com';
let domZoneUa22 :string = 'ua';
let numStart22 :number = 1;
let discount22 :number = 10;
let numMinus22 :number = -999;
let price22 :number = 123;
const PI22 :number = 3.14;
let numFloat22 :number = 2.7;
let age22 :number = 16;
let yes22 :boolean = true;
let no22 :boolean = false;

console.log(hello22);
console.log(own22);
console.log(domZoneCom22);
console.log(domZoneUa22);
console.log(numStart22);
console.log(discount22);
console.log(numMinus22);
console.log(price22);
console.log(PI22);
console.log(numFloat22);
console.log(age22);
console.log(yes22);
console.log(no22);

// 2 //////////////////////////////////////////////////////
let firstName :string = 'Andrii';
let middleName :string = 'Olegovich';
let lastName :string = 'Syniavskyi';

let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

// 3 ////////////////////////////////////////////////////
let a :number = 100;
let b :string = '100';
let c :boolean = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 4 ////////////////////////////////////////////////

let nameNew: string  = prompt('Your name?', 'Vasya');
let midName: string  = prompt('Your middleName?', 'Petrovich');
let yearBirthday: string = prompt('Your Birthday?', '2000');

console.log(nameNew, midName, yearBirthday);
