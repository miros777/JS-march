/*
Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/
var arr = [1, 2, 3, 55, 66, 'renault', true, false, { name: 'Vasya', age: 100 }, ['salary', 'page', true]];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
/*
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
*/
var book1 = {
    title: 'Kobzar',
    pageCount: 300,
    genre: 'poeziya'
};
var book2 = {
    title: 'No name',
    pageCount: 500,
    genre: 'komedi'
};
var book3 = {
    title: 'Kolobok',
    pageCount: 100,
    genre: 'drama'
};
/*
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
*/
var bookOne = {
    title: 'Kobzar',
    pageCount: 300,
    genre: 'poeziya',
    authors: [{ name: 'Shevchenko', age: 33 }]
};
var bookTow = {
    title: 'No name',
    pageCount: 500,
    genre: 'komedi',
    authors: [{ name: 'Poroh', age: 53 }]
};
var bookThree = {
    title: 'Kolobok',
    pageCount: 100,
    genre: 'drama',
    authors: [{ name: 'Taras', age: 55 }]
};
/*
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
*/
var arr2 = [
    {
        name: 'Kolya',
        username: 'Kolya',
        password: '123frtd('
    },
    {
        name: 'Kolya2',
        username: 'Kolya2',
        password: '51441984('
    },
    {
        name: 'Kolya3',
        username: 'Kolya3',
        password: '498498498('
    },
    {
        name: 'Kolya4',
        username: 'Kolya4',
        password: '198198189('
    },
    {
        name: 'Kolya5',
        username: 'Kolya5',
        password: '1189198('
    },
    {
        name: 'Kolya6',
        username: 'Kolya6',
        password: '18918918('
    },
    {
        name: 'Kolya7',
        username: 'Kolya7',
        password: '9855511afwqf('
    },
    {
        name: 'Kolya8',
        username: 'Kolya8',
        password: 'qwfw151189('
    },
    {
        name: 'Kolya9',
        username: 'Kolya9',
        password: 'qwfwq3243a4fasf('
    },
    {
        name: 'Kolya10',
        username: 'Kolya10',
        password: '191e98ge1gf89ew1f83r3('
    },
];
console.log('password:', arr2[0].password);
console.log('password:', arr2[1].password);
console.log('password:', arr2[2].password);
console.log('password:', arr2[3].password);
console.log('password:', arr2[4].password);
console.log('password:', arr2[5].password);
console.log('password:', arr2[6].password);
console.log('password:', arr2[7].password);
console.log('password:', arr2[8].password);
console.log('password:', arr2[9].password);
/*
- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
*/
var arr3 = [
    [22, 33, 15],
    [12, 23, 25],
    [11, 24, 22],
    [16, 44, 20],
    [7, 30, 17],
    [33, 22, 20],
    [5, 17, 15]
];
// або
var arr4 = [
    {
        morning: 22,
        day: 33,
        night: 22
    },
    {
        morning: 43,
        day: 17,
        night: 33
    },
    {
        morning: 65,
        day: 41,
        night: 44
    },
    {
        morning: 55,
        day: 4,
        night: 55
    },
    {
        morning: 44,
        day: 56,
        night: 54
    },
    {
        morning: 22,
        day: 12,
        night: 32
    },
    {
        morning: 11,
        day: 43,
        night: 22
    },
];
/*
Логічні розгалуження:
- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
*/
var x = 55;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
/*
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
*/
var time = 1;
if (time >= 15 && time < 30) {
    console.log('Друга четверть');
}
else if (time >= 30 && time < 45) {
    console.log('Третя четверть');
}
else if (time >= 45 && time <= 59) {
    console.log('Четверта четверть');
}
else {
    console.log('Перша четверть');
}
/*
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/
var day = 31;
if (day > 10 && day <= 20) {
    console.log('Друга декада');
}
else if (day > 20 && day <= 31) {
    console.log('Третя декада');
}
else if (day > 0 && day <= 10) {
    console.log('Перша декада');
}
else {
    console.log('Не вірна дата');
}
/*
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/
var dayWeek = 7;
var nameDay;
switch (dayWeek) {
    case 1:
        nameDay = 'Monday';
        break;
    case 2:
        nameDay = 'Tuesday';
        break;
    case 3:
        nameDay = 'Wednesday';
        break;
    case 4:
        nameDay = 'Thursday';
        break;
    case 5:
        nameDay = 'Friday';
        break;
    case 6:
        nameDay = 'Saturday';
        break;
    case 7:
        nameDay = 'Sunday';
        break;
    default:
        nameDay = 'No Day. Error!';
}
console.log(nameDay);
/*
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.
*/
var number1 = 500;
var number2 = 100;
if ((typeof number1 && typeof number2) === 'number') {
    if (number1 > number2) {
        console.log('Max number:', number1);
    }
    else if (number1 === number2) {
        console.log('Числа рівні, MAX:', number1);
    }
    else {
        console.log('Max number:', number2);
    }
}
/*
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false,
 а це 0 null undefined і тд).
 */
var xxx = 'string';
if (xxx === 0 || xxx === undefined || xxx === null || xxx === false || xxx === '') {
    xxx = 'default';
}
console.log(xxx);
/*
- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
*/
var coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + ':', 'Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + ':', 'Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + ':', 'Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + ':', 'Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + ':', 'Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + ':', 'Супер');
}
