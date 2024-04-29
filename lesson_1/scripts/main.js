/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;

Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/


// 1 //////////////////////////////////////////
let hello = 'hello';
let own = 'own';
let domZoneCom = 'com';
let domZoneUa = 'ua';
let numStart = 1;
let discount = 10;
let numMinus = -999;
let price = 123;
const PI = 3.14;
let numFloat = 2.7;
let age = 16;
let yes = true;
let no = false;

console.log(hello);
console.log(own);
console.log(domZoneCom);
console.log(domZoneUa);
console.log(numStart);
console.log(discount);
console.log(numMinus);
console.log(price);
console.log(PI);
console.log(numFloat);
console.log(age);
console.log(yes);
console.log(no);

// 2 //////////////////////////////////////////////////////
let firstName = 'Andrii';
let middleName = 'Olegovich';
let lastName = 'Syniavskyi';

let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

// 3 ////////////////////////////////////////////////////
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 4 ////////////////////////////////////////////////

let name = prompt('Your name?', 'Vasya');
let midName = prompt('Your middleName?', 'Petrovich');
let yearBirthday = prompt('Your Birthday?', 2000);

console.log(name, midName, yearBirthday);
