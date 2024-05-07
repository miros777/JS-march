/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
*/
for (let i = 0; i < 10; i++) {
    document.write(`<div>Block ${i + 1}</div>`);
}
/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
*/
for (let i = 0; i < 10; i++) {
    document.write(`<div>Block ${i + 1}. ID: ${i}</div>`);
}
/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
*/
let count = 0;
while (count < 20) {
    document.write(`<h1>Block ${count + 1}</h1>`);
    count++;
}
/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
*/
let c = 0;
while (c < 20) {
    document.write(`<h1>Block ${c + 1}. ID: ${c}</h1>`);
    c++;
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
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++) {
    if (i === 0) {
        document.write('<ul>');
    }
    document.write(`<li>${listOfItems[i]}</li>`);
    if (i === listOfItems.length - 1) {
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
let products = [
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
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img src="${product.image}" alt="${product.title}" class="product-image">
        </div>
    `);
}
/*
є масив
 за допомоги циклу вивести:
 - користувачів зі статусом true
 - користувачів зі статусом false
 - користувачів які старші за 30 років
 */
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write(`<h2>Статус true</h2>`);
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.status === true) {
        document.write(`<div>Name: ${user.name}. Age: ${user.age}</div>`);
    }
}

document.write(`<h2>Статус false</h2>`);
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.status === false) {
        document.write(`<div>Name: ${user.name}. Age: ${user.age}</div>`);
    }
}

document.write(`<h2>Старше 30</h2>`);
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.age > 30) {
        document.write(`<div>Name: ${user.name}. Age: ${user.age}</div>`);
    }
}

//additional
/*
--створити масив з:
- з 5 числових значень
*/
let arrNum = [2, 44, 55, 66, 65];
/*
- з 5 стічкових значень
*/
let arrStr = ['str1', 'str2', 'str3', 'str4', 'str5'];
/*
- з 5 значень стрічкового, числового та булевого типу
*/
let arrAny = ['Vasya', 'Petya', 123, 666, true];

/*
- та вивести його в консоль
*/
console.log(arrNum);
console.log(arrStr);
console.log(arrAny);
/*
-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
*/
let arrNew = [];
arrNew[2] = 9000;
arrNew[6] = 'test';
arrNew[7] = false;
arrNew[222] = null;
arrNew[12] = BigInt(1219992343888888888824234);
console.log(arrNew);

/*
- є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while
*/
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
let arrLength = arr.length;
while (i < arrLength) {
    console.log(arr[i]);
    i++;
}
/*
2. перебрати його циклом for
*/
for (let j = 0; j < arrLength; j++) {
    console.log(arr[j]);
}
/*
3. перебрати циклом while та вивести  числа тільки з непарним індексом
*/
let counter = 0;
while (counter < arrLength) {
    if (counter % 2 === 1) {
        console.log(arr[counter]);
    }
    counter++;
}
/*
4. перебрати циклом for та вивести  числа тільки з непарним індексом
*/
for (let j = 0; j < arrLength; j++) {
    if (j % 2 === 1) {
        console.log(arr[j]);
    }
}
/*
5. перебрати циклом while та вивести  числа тільки парні  значення
*/
console.log('---');
let y = 0;
while (y < arrLength) {
    if (arr[y] % 2 === 0) {
        console.log(arr[y]);
    }
    y++;
}
/*
6. перебрати циклом for та вивести  числа тільки парні  значення
*/
console.log('---');
for (let j = 0; j < arrLength; j++) {
    if (arr[j] % 2 === 0) {
        console.log(arr[j]);
    }
}
/*
7. замінити кожне число кратне 3 на слово "okten"
*/
console.log('---');
for (let j = 0; j < arrLength; j++) {
    if (arr[j] % 3 === 0) {
        arr[j] = 'okten';
    }
}
console.log(arr);

/*
8. вивести масив в зворотньому порядку.
*/
let arrNumber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log('---');
for (let j = arrNumber.length - 1; j >= 0; j--) {
    console.log(arrNumber[j]);
}
/*
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
*/

let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let arrLength = arr2.length;
let iter = arrLength - 1;
while (iter >= 0) {
    console.log(arr[iter]);
    iter--;
}
/*
2. перебрати його циклом for
*/
for (let j = arrLength - 1; j >= 0; j--) {
    console.log(arr2[j]);
}

/*
3. перебрати циклом while та вивести  числа тільки з непарним індексом
*/
let counter2 = arrLength - 1;
while (counter2 >= 0) {
    if (arr[counter2] % 2 === 1) {
        console.log(arr[counter2]);
    }
    counter2--;
}
/*
4. перебрати циклом for та вивести  числа тільки з непарним індексом
*/
for (let j = arrLength - 1; j >= 0; j--) {
    if (arr[j] % 2 === 1) {
        console.log(arr[j]);
    }
}
/*
5. перебрати циклом while та вивести  числа тільки парні  значення
*/
console.log('---');
let yyy = arrLength - 1;
while (yyy >= 0) {
    if (arr[yyy] % 2 === 0) {
        console.log(arr[yyy]);
    }
    yyy--;
}
/*
6. перебрати циклом for та вивести  числа тільки парні  значення
*/
console.log('---');
for (let j = arrLength - 1; j >= 0; j--) {
    if (arr[j] % 2 === 0) {
        console.log(arr[j]);
    }
}


/*
- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
*/
let arrNumber555 = [22, 11, 22, 33, 4, 4, 566, 7, 78, 8];
console.log('---');
for (let j = 0; j < arrNumber555.length; j++) {
    console.log(arrNumber555[j]);
}
/*
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
*/
let arrStrNames = ['ddd', 'hgnhhh', 'fgb', 'ergreg', 'were', 'sdf', 'sdfds', 'ssdfsd', 'dd', 'ff',];
console.log('---');
for (const item of arrStrNames) {
    console.log(item);
}
/*
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
*/
console.log('---');
let arrFirst = [false, true, null, 111, 'ladsda', ['wqewqe', 999], {name: 'Giga'}, 0.9, 777, 'Pink'];
for (const item of arrFirst) {
    console.log(item);
}
/*
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
*/
console.log('---');
let arrFirstMy = [false, true, false, 111, 'ladsda', 'dsdsd', 51511, 555, 777, 'Pink'];
for (const item of arrFirstMy) {
    if (typeof item === 'boolean') {
        console.log(item);
    }
}
/*
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
*/
console.log('---');
let arrFirstMy11 = [false, true, false, 111, 'ladsda', 'dsdsd', 51511, 555, 777, 'Pink'];
for (const item of arrFirstMy11) {
    if (typeof item === 'number') {
        console.log(item);
    }
}
/*
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
*/
console.log('---');
let arrFirstMy77 = [false, true, false, 111, 'ladsda', 'dsdsd', 51511, 555, 777, 'Pink'];
for (const item of arrFirstMy77) {
    if (typeof item === 'string') {
        console.log(item);
    }
}
/*
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
*/
console.log('-----');
let arrSuperb = [false, true, false, 111, 'ladsda', 'dsdsd', 51511, 555, 777, 'Pink'];
for (let j = 0; j < arrSuperb.length; j++) {
    console.log(arrSuperb[j]);
}
/*
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
*/
document.write('<div>for на 10  ітерацій</div>');
for (let j = 0; j < 10; j++) {
    document.write(j + 1 + '<br>');
}
/*
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
*/
document.write('<div>for на 100  ітерацій</div>');
for (let j = 0; j < 100; j++) {
    document.write(j + 1 + '<br>');
}
/*
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
*/
// debugger;
document.write('<div>for на 100 з кроком 2.</div>');
for (let j = 0; j < 100; j += 2) {
    document.write(j + '<br>');
}
/*
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
*/
document.write('<div>for на 100 парні кроки</div>');
for (let j = 0; j < 100; j++) {
    if (j % 2 === 0) {
        document.write(j + '<br>');
    }
}
/*
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
*/
document.write('<div>for на 100 непарні кроки</div>');
for (let j = 0; j < 100; j++) {
    if (j % 2 > 0) {
        document.write(j + '<br>');
    }
}
/*
стоврити масив книжок (назва, кількість сторінок, автори , жанри).
-знайти наібльшу книжку.
*/
let arrBooks = [
    {
        name: 'Jimi 777',
        pages: 177020,
        author: ['Gary'],
        zhanr: ['Comedy', 'Dram']
    },
    {
        name: 'Kolobok',
        pages: 1008889,
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
        name: 'Kolobok6754754754',
        pages: 10290,
        author: ['Shevchenko555', 'Franko'],
        zhanr: ['Ne drama']

    }
]
let resMax = 0;
for (let j = 0; j < arrBooks.length; j++) {
    if (arrBooks[j]['pages'] > resMax) {
        resMax = arrBooks[j]['pages'];
    }
}
console.log('Найбільша книга', resMax);

/*
- знайти книжку/ки з найбільшою кількістю жанрів
*/
console.log('=====');
let resMaxZhanr = 0;

for (let j = 0; j < arrBooks.length; j++) {
    for (let k = 1; k < arrBooks.length; k++) {
        if (arrBooks[j]['zhanr'].length > arrBooks[k]['zhanr'].length) {
            resMaxZhanr = arrBooks[j]['name'];
        }
    }
}
console.log('Найбільша кількістю жанрів Книга', resMaxZhanr);
/*
- знайти книжку/ки з найдовшою назвою
*/
let resMaxSizeName = 0;
let bookName2 = [];
for (let j = 0; j < arrBooks.length; j++) {
    if (arrBooks[j]['name'].length > resMaxSizeName) {
        resMaxSizeName = arrBooks[j]['name'].length;
        bookName2 = arrBooks[j]['name'];
    }
}
console.log('найдовша Книга', bookName2);
/*
- знайти книжку/ки які писали 2 автори
*/
let resMaxAuthor = 'Немає такої книги';
let bookRes = [];
for (let j = 0; j < arrBooks.length; j++) {
    if (arrBooks[j]['author'].length === 2) {
        bookRes.push(arrBooks[j]['name']);
    }
}
console.log('писали 2 автори', bookRes);
/*
- знайти книжку/ки які писав 1 автор
*/
let bookResOneAuthor = [];
for (let j = 0; j < arrBooks.length; j++) {
    if (arrBooks[j]['author'].length === 1) {
        bookResOneAuthor.push(arrBooks[j]['name']);
    }
}
console.log('писал 1 автор', bookResOneAuthor);

