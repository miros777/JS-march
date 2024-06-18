/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;

Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/
// 1 //////////////////////////////////////////
var hello = 'hello';
var own = "own";
var domZoneCom = 'com';
var domZoneUa = 'ua';
var numStart = 1;
var discount = 10;
var numMinus = -999;
var price = 123;
var PI = 3.14;
var numFloat = 2.7;
var age = 16;
var yes = true;
var no = false;
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
var firstName = 'Andrii';
var middleName = 'Olegovich';
var lastName = 'Syniavskyi';
var person = "".concat(lastName, " ").concat(firstName, " ").concat(middleName);
console.log(person);
// 3 ////////////////////////////////////////////////////
var a = 100;
var b = '100';
var c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// 4 ////////////////////////////////////////////////
var nameNew = prompt('Your name?', 'Vasya');
var midName = prompt('Your middleName?', 'Petrovich');
var yearBirthday = prompt('Your Birthday?', '2000');
console.log(nameNew, midName, yearBirthday);
