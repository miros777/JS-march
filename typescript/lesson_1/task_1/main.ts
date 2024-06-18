/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;

Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/


// 1 //////////////////////////////////////////
let hello: string = 'hello';
let own :string = `own`;
let domZoneCom :string = 'com';
let domZoneUa :string = 'ua';
let numStart :number = 1;
let discount :number = 10;
let numMinus :number = -999;
let price :number = 123;
const PI :number = 3.14;
let numFloat :number = 2.7;
let age :number = 16;
let yes :boolean = true;
let no :boolean = false;

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
