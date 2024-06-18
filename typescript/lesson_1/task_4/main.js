/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;

Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/
1; //////////////////////////////////////////
var hello22 = 'hello';
var own22 = 'own';
var domZoneCom22 = 'com';
var domZoneUa22 = 'ua';
var numStart22 = 1;
var discount22 = 10;
var numMinus22 = -999;
var price22 = 123;
var PI22 = 3.14;
var numFloat22 = 2.7;
var age22 = 16;
var yes22 = true;
var no22 = false;
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
