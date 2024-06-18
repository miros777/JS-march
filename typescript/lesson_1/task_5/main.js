/*
ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/
var areaRectangle = function (a, b) { return a * b; };
console.log(areaRectangle(10, 5));
/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/
var areaCircle = function (r) { return 3.14 * Math.pow(r, 2); };
console.log(areaCircle(5)); //S = π r2 = π 52 = 25 π (м)2 ≈ 78.5 (м)2
/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
*/
var countCylinder = function (r, h) { return 2 * 3.14 * r * (r + h); }; //S = 2 π R (R + h)
console.log(countCylinder(5, 11));
/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/
var getItemFromArr = function (arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var arrElement = arr_1[_i];
        console.log(arrElement);
    }
};
getItemFromArr([1, 22, false, 'ggg']);
/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/
var makeTagP = function (text) { return "<p>".concat(text, "</p>"); };
console.log(makeTagP('Okten'));
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/
var makeTagUlLi = function (text) {
    return "<ul>\n                <li>".concat(text, "</li>\n                <li>").concat(text, "</li>\n                <li>").concat(text, "</li>\n            </ul>");
};
console.log(makeTagUlLi('Okten'));
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/
var makeTagList = function (text, count) {
    if (count === void 0) { count = 5; }
    if (count === 0) {
        throw new Error('count tag <li> is 0');
    }
    var li = "<li>".concat(text, "</li>");
    var allLi = '';
    for (var i = 0; i < count; i++) {
        allLi += li;
    }
    return "<ul>".concat(allLi, "</ul>");
};
console.log(makeTagList('Okten', 7));
/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/
var arrElem = [999, 333, 'fiat', true];
var buildListFromArr = function (arrElem) {
    var allLi = '';
    for (var _i = 0, arrElem_1 = arrElem; _i < arrElem_1.length; _i++) {
        var arrElement = arrElem_1[_i];
        allLi += "<li>".concat(arrElement, "</li>");
    }
    return "<ul>".concat(allLi, "</ul>");
};
console.log(buildListFromArr(arrElem));
/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/
var obj = [{ id: 1, name: 'Kolya', age: 22 }, { id: 2, name: 'Alyosha', age: 33 }];
var buildBlockFromObj = function (obj) {
    var res = '';
    for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
        var objKey = obj_1[_i];
        res += '<div>';
        for (var objKeyKey in objKey) {
            res += "<div>".concat(objKey[objKeyKey], "</div>");
        }
        res += '</div>';
    }
    return res;
};
console.log(buildBlockFromObj(obj));
document.write(buildBlockFromObj(obj));
/*
- створити функцію яка повертає найменьше число з масиву
*/
var array = [10, 21, 2, 0, 44, 300, 11];
var getMinNumberFromArr = function (arr) {
    var minNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] < minNum) {
            minNum = arr[i + 1];
        }
    }
    return minNum;
};
console.log(getMinNumberFromArr(array));
/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
*/
var sum = function (array) {
    var res = null;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var arrayElement = array_1[_i];
        res += arrayElement;
    }
    return res;
};
console.log(sum(array));
/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
*/
var swap = function (arr, index1, index2) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (index1 === i) {
            res[index2] = arr[i];
        }
        else if (index2 === i) {
            res[index1] = arr[i];
        }
        else {
            res[i] = arr[i];
        }
    }
    return res;
};
console.log(swap([11, 22, 33, 44], 0, 1));
/*

- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/
var exchange = function (sumUAH, currencyValues, exchangeCurrency) {
    for (var _i = 0, currencyValues_1 = currencyValues; _i < currencyValues_1.length; _i++) {
        var obj_2 = currencyValues_1[_i];
        if (obj_2.currency === exchangeCurrency) {
            return sumUAH / obj_2.value;
        }
    }
};
console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));
