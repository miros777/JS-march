/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
*/
for (var i_1 = 0; i_1 < 10; i_1++) {
    document.write("<div>Block ".concat(i_1 + 1, "</div>"));
}
/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
*/
for (var i_2 = 0; i_2 < 10; i_2++) {
    document.write("<div>Block ".concat(i_2 + 1, ". ID: ").concat(i_2, "</div>"));
}
/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
*/
var count = 0;
while (count < 20) {
    document.write("<h1>Block ".concat(count + 1, "</h1>"));
    count++;
}
/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
*/
var count2 = 0;
while (count2 < 20) {
    document.write("<h1>Block ".concat(count2 + 1, ". ID: ").concat(count2, "</h1>"));
    count2++;
}
/*
- Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

ШАБЛОН:
 <ul>
    <li>ITEM OF ARRAY</li>
    <!--
        і тд інші об'єкти масиву
         ...
         ...
         ...
    -->
</ul>

замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

-----------------------------------------------
*/
var listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (var i_3 = 0; i_3 < listOfItems.length; i_3++) {
    if (i_3 === 0) {
        document.write('<ul>');
    }
    document.write("<li>".concat(listOfItems[i_3], "</li>"));
    if (i_3 === listOfItems.length - 1) {
        document.write('</ul>');
    }
}
/*
Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

ШАБЛОН
 <div class="product-card">
        <h3 class="product-title">TITLE. Price - PRICE</h3>
        <img src="IMAGE" alt="" class="product-image">
</div>
Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
--------------------
*/
var products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (var i_4 = 0; i_4 < products.length; i_4++) {
    var product = products[i_4];
    document.write("\n        <div class=\"product-card\">\n            <h3 class=\"product-title\">".concat(product.title, ". Price - ").concat(product.price, "</h3>\n            <img src=\"").concat(product.image, "\" alt=\"").concat(product.title, "\" class=\"product-image\">\n        </div>\n    "));
}
/*
є масив
 за допомоги циклу вивести:
 - користувачів зі статусом true
 - користувачів зі статусом false
 - користувачів які старші за 30 років
 */
var users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
document.write("<h2>\u0421\u0442\u0430\u0442\u0443\u0441 true</h2>");
for (var i_5 = 0; i_5 < users.length; i_5++) {
    var user = users[i_5];
    if (user.status === true) {
        document.write("<div>Name: ".concat(user.name, ". Age: ").concat(user.age, "</div>"));
    }
}
document.write("<h2>\u0421\u0442\u0430\u0442\u0443\u0441 false</h2>");
for (var i_6 = 0; i_6 < users.length; i_6++) {
    var user = users[i_6];
    if (user.status === false) {
        document.write("<div>Name: ".concat(user.name, ". Age: ").concat(user.age, "</div>"));
    }
}
document.write("<h2>\u0421\u0442\u0430\u0440\u0448\u0435 30</h2>");
for (var i_7 = 0; i_7 < users.length; i_7++) {
    var user = users[i_7];
    if (user.age > 30) {
        document.write("<div>Name: ".concat(user.name, ". Age: ").concat(user.age, "</div>"));
    }
}
//additional
/*
--створити масив з:
- з 5 числових значень
*/
var arrNum = [2, 44, 55, 66, 65];
/*
- з 5 стічкових значень
*/
var arrStr = ['str1', 'str2', 'str3', 'str4', 'str5'];
/*
- з 5 значень стрічкового, числового та булевого типу
*/
var arrAny = ['Vasya', 'Petya', 123, 666, true];
/*
- та вивести його в консоль
*/
console.log(arrNum);
console.log(arrStr);
console.log(arrAny);
/*
-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
*/
var arrNew = [];
arrNew[2] = 9000;
arrNew[6] = 'test';
arrNew[7] = false;
arrNew[222] = null;
arrNew[12] = 1219992399998888888824234;
console.log(arrNew);
/*
- є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while
*/
var arrAny2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
var i = 0;
var arrLength = arrAny2.length;
while (i < arrLength) {
    console.log(arrAny2[i]);
    i++;
}
/*
2. перебрати його циклом for
*/
for (var j = 0; j < arrLength; j++) {
    console.log(arrAny2[j]);
}
/*
3. перебрати циклом while та вивести  числа тільки з непарним індексом
*/
var counter = 0;
while (counter < arrLength) {
    if (counter % 2 === 1) {
        console.log(arrAny2[counter]);
    }
    counter++;
}
/*
4. перебрати циклом for та вивести  числа тільки з непарним індексом
*/
for (var j = 0; j < arrLength; j++) {
    if (j % 2 === 1) {
        console.log(arrAny2[j]);
    }
}
/*
5. перебрати циклом while та вивести  числа тільки парні  значення
*/
console.log('---');
var y = 0;
while (y < arrLength) {
    if (arrAny2[y] % 2 === 0) {
        console.log(arrAny2[y]);
    }
    y++;
}
/*
6. перебрати циклом for та вивести  числа тільки парні  значення
*/
console.log('---');
for (var j = 0; j < arrLength; j++) {
    if (arrAny2[j] % 2 === 0) {
        console.log(arrAny2[j]);
    }
}
/*
7. замінити кожне число кратне 3 на слово "okten"
*/
console.log('---');
for (var j = 0; j < arrLength; j++) {
    if (arrAny2[j] % 3 === 0) {
        arrAny2[j] = 'okten';
    }
}
console.log(arrAny2);
/*
8. вивести масив в зворотньому порядку.
*/
var arrNumber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log('---');
for (var j = arrNumber.length - 1; j >= 0; j--) {
    console.log(arrNumber[j]);
}
/*
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
*/
var arrAny22 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let arrLength = arr2.length;
var iter = arrLength - 1;
while (iter >= 0) {
    console.log(arrAny22[iter]);
    iter--;
}
/*
2. перебрати його циклом for
*/
for (var j = arrLength - 1; j >= 0; j--) {
    console.log(arrAny22[j]);
}
/*
3. перебрати циклом while та вивести  числа тільки з непарним індексом
*/
var counter2 = arrLength - 1;
while (counter2 >= 0) {
    if (arrAny22[counter2] % 2 === 1) {
        console.log(arrAny22[counter2]);
    }
    counter2--;
}
/*
4. перебрати циклом for та вивести  числа тільки з непарним індексом
*/
for (var j = arrLength - 1; j >= 0; j--) {
    if (arrAny22[j] % 2 === 1) {
        console.log(arrAny22[j]);
    }
}
/*
5. перебрати циклом while та вивести  числа тільки парні  значення
*/
console.log('---');
var yyy = arrLength - 1;
while (yyy >= 0) {
    if (arrAny22[yyy] % 2 === 0) {
        console.log(arrAny22[yyy]);
    }
    yyy--;
}
/*
6. перебрати циклом for та вивести  числа тільки парні  значення
*/
console.log('---');
for (var j = arrLength - 1; j >= 0; j--) {
    if (arrAny22[j] % 2 === 0) {
        console.log(arrAny22[j]);
    }
}
/*
- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
*/
var arrNumber555 = [22, 11, 22, 33, 4, 4, 566, 7, 78, 8];
console.log('---');
for (var j = 0; j < arrNumber555.length; j++) {
    console.log(arrNumber555[j]);
}
/*
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
*/
var arrStrNames = ['ddd', 'hgnhhh', 'fgb', 'ergreg', 'were', 'sdf', 'sdfds', 'ssdfsd', 'dd', 'ff',];
console.log('---');
for (var _i = 0, arrStrNames_1 = arrStrNames; _i < arrStrNames_1.length; _i++) {
    var item = arrStrNames_1[_i];
    console.log(item);
}
/*
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
*/
console.log('---');
var arrFirst = [false, true, null, 111, 'ladsda', ['wqewqe', 999], { name: 'Giga' }, 0.9, 777, 'Pink'];
for (var _a = 0, arrFirst_1 = arrFirst; _a < arrFirst_1.length; _a++) {
    var item = arrFirst_1[_a];
    console.log(item);
}
/*
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
*/
console.log('---');
var arrFirstMy = [false, true, false, 111, 'ladsda', 'dsdsd', 51511, 555, 777, 'Pink'];
for (var _b = 0, arrFirstMy_1 = arrFirstMy; _b < arrFirstMy_1.length; _b++) {
    var item = arrFirstMy_1[_b];
    if (typeof item === 'boolean') {
        console.log(item);
    }
}
/*
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
*/
console.log('---');
var arrFirstMy11 = [false, true, false, 111, 'ladsda', 'dsdsd', 51511, 555, 777, 'Pink'];
for (var _c = 0, arrFirstMy11_1 = arrFirstMy11; _c < arrFirstMy11_1.length; _c++) {
    var item = arrFirstMy11_1[_c];
    if (typeof item === 'number') {
        console.log(item);
    }
}
/*
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
*/
console.log('---');
var arrFirstMy77 = [false, true, false, 111, 'ladsda', 'dsdsd', 51511, 555, 777, 'Pink'];
for (var _d = 0, arrFirstMy77_1 = arrFirstMy77; _d < arrFirstMy77_1.length; _d++) {
    var item = arrFirstMy77_1[_d];
    if (typeof item === 'string') {
        console.log(item);
    }
}
/*
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
*/
console.log('-----');
var arrSuperb = [false, true, false, 111, 'ladsda', 'dsdsd', 51511, 555, 777, 'Pink'];
for (var j = 0; j < arrSuperb.length; j++) {
    console.log(arrSuperb[j]);
}
/*
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
*/
document.write('<div>for на 10  ітерацій</div>');
for (var j = 0; j < 10; j++) {
    document.write(j + 1 + '<br>');
}
/*
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
*/
document.write('<div>for на 100  ітерацій</div>');
for (var j = 0; j < 100; j++) {
    document.write(j + 1 + '<br>');
}
/*
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
*/
// debugger;
document.write('<div>for на 100 з кроком 2.</div>');
for (var j = 0; j < 100; j += 2) {
    document.write(j + '<br>');
}
/*
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
*/
document.write('<div>for на 100 парні кроки</div>');
for (var j = 0; j < 100; j++) {
    if (j % 2 === 0) {
        document.write(j + '<br>');
    }
}
/*
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
*/
document.write('<div>for на 100 непарні кроки</div>');
for (var j = 0; j < 100; j++) {
    if (j % 2 > 0) {
        document.write(j + '<br>');
    }
}
/*
стоврити масив книжок (назва, кількість сторінок, автори , жанри).
*/
var arrBooks = [
    {
        name: 'Jimi 777',
        pages: 10290,
        author: ['Gary'],
        zhanr: ['Comedy', 'Dram']
    },
    {
        name: 'Kolobok',
        pages: 189,
        author: ['Taras Shevchenko'],
        zhanr: ['Comedy', 'Dram', 'Any']
    },
    {
        name: 'Kolobok222',
        pages: 1003,
        author: ['Nazar Shevchenko'],
        zhanr: ['DDD drama']
    },
    {
        name: 'Kolobok76767',
        pages: 10290,
        author: ['Shevchenko555', 'Franko'],
        zhanr: ['Ne drama']
    },
    {
        name: 'Kolobok6754754754',
        pages: 10290,
        author: ['Shevchenko555', 'Franko'],
        zhanr: ['Ne drama']
    }
];
/*
-знайти найбільшу книжку.
*/
console.log('=================');
var resMax = [];
var start = 0;
for (var _e = 0, arrBooks_1 = arrBooks; _e < arrBooks_1.length; _e++) {
    var startElement = arrBooks_1[_e];
    if (startElement.pages > start) {
        start = startElement.pages;
    }
    else if (startElement.pages === start) {
        resMax[resMax.length] = startElement;
        // console.log(startElement.pages);
        // console.log(start);
    }
}
console.log('Найбільша книга', resMax, 'start', start);
/*
- знайти книжку/ки з найбільшою кількістю жанрів
*/
console.log('=====');
var resMaxZhanr = '';
for (var j = 0; j < arrBooks.length; j++) {
    for (var k = 1; k < arrBooks.length; k++) {
        if (arrBooks[j]['zhanr'].length > arrBooks[k]['zhanr'].length) {
            resMaxZhanr = arrBooks[j]['name'];
        }
    }
}
console.log('Найбільша кількістю жанрів Книга', resMaxZhanr);
/*
- знайти книжку/ки з найдовшою назвою
*/
var resMaxSizeName = 0;
var bookName2 = '';
for (var j = 0; j < arrBooks.length; j++) {
    if (arrBooks[j]['name'].length > resMaxSizeName) {
        resMaxSizeName = arrBooks[j]['name'].length;
        bookName2 = arrBooks[j]['name'];
    }
}
console.log('найдовша Книга', bookName2);
/*
- знайти книжку/ки які писали 2 автори
*/
var resMaxAuthor = 'Немає такої книги';
var bookRes = [];
for (var j = 0; j < arrBooks.length; j++) {
    if (arrBooks[j]['author'].length === 2) {
        bookRes.push(arrBooks[j]['name']);
    }
}
console.log('писали 2 автори', bookRes);
/*
- знайти книжку/ки які писав 1 автор
*/
var bookResOneAuthor = [];
for (var j = 0; j < arrBooks.length; j++) {
    if (arrBooks[j]['author'].length === 1) {
        bookResOneAuthor.push(arrBooks[j]['name']);
    }
}
console.log('писал 1 автор', bookResOneAuthor);
