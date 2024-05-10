/*
ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/
let areaRectangle = (a,b) => a*b;
console.log(areaRectangle(10,5));
/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/
let areaCirvle = (r) => 3.14 * Math.pow(r, 2);
console.log(areaCirvle(5)); //S = π r2 = π 52 = 25 π (м)2 ≈ 78.5 (м)2
/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
*/
let countCylinder = (r, h) => 2 * 3.14 * r * (r + h); //S = 2 π R (R + h)
console.log(countCylinder(5,11));
/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/
let getItemFromArr = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
getItemFromArr([1,22,false,'ggg']);
/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/
let makeTagP = (text) => `<p>${text}</p>`;
console.log(makeTagP('Okten'));
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/
let makeTagUlLi = (text) => {
    return `<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`
}
console.log(makeTagUlLi('Okten'));
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/
let makeTagList = (text, count=5) => {
    if (count === 0) {
        throw new Error('count tag <li> is 0');
    }
    let li = `<li>${text}</li>`;
    let allLi = '';
    for (let i = 0; i < count; i++) {
        allLi += li;
    }
    return `<ul>${allLi}</ul>`;
}
console.log(makeTagList('Okten', 7));
/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/
let arr = [999,333,'fiat', true];
let buildListFromArr = (arr) => {
    let allLi = '';
    for (const arrElement of arr) {
        allLi += `<li>${arrElement}</li>`;
    }
    return `<ul>${allLi}</ul>`;
}
console.log(buildListFromArr(arr));
/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/
let obj = [{id: 1, name: 'Kolya', age: 22}, {id: 2, name: 'Alyosha', age: 33}];
let buildBlockFromObj = (obj) => {
    let res = '';
    for (let objKey of obj) {
        res += '<div>';
        for (let objKeyKey in objKey) {
            res += `<div>${objKey[objKeyKey]}</div>`;
        }
        res += '</div>';
    }
    return res;
}
console.log(buildBlockFromObj(obj));
document.write(buildBlockFromObj(obj));
/*
- створити функцію яка повертає найменьше число з масиву
*/
let array = [10,21,2,0,44,300,11];
let getMinNumberFromArr = (arr) => {
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] < minNum){
            minNum = arr[i+1];
        }
    }
    return minNum;
}
console.log(getMinNumberFromArr(array));
/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
*/
let sum = (array) => {
    let res = null;
    for (const arrayElement of array) {
        res += arrayElement;
    }
    return res;
}
console.log(sum(array));
/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
*/
let swap = (arr,index1,index2) => {
    res = [];
    for (let i = 0; i < arr.length; i++) {
        if(index1 === i){
            res[index2] = arr[i];
        }else if(index2 === i){
            res[index1] = arr[i];
        }else {
            res[i] = arr[i];
        }
    }
    return res;
}
console.log(swap([11,22,33,44],0,1));
/*

- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/
