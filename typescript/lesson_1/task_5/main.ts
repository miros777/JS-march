/*
ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/
let areaRectangle = (a: number, b: number): number => a*b;
console.log(areaRectangle(10,5));
/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/
let areaCircle = (r: number): number => 3.14 * Math.pow(r, 2);
console.log(areaCircle(5)); //S = π r2 = π 52 = 25 π (м)2 ≈ 78.5 (м)2
/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
*/
let countCylinder = (r: number, h: number):number => 2 * 3.14 * r * (r + h); //S = 2 π R (R + h)
console.log(countCylinder(5,11));
/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/
let getItemFromArr = (arr: any[]) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
getItemFromArr([1,22,false,'ggg']);
/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/
let makeTagP = (text: string): string => `<p>${text}</p>`;
console.log(makeTagP('Okten'));
/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/
let makeTagUlLi = (text: string): string => {
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
let makeTagList = (text: string, count: number=5): string => {
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
let arrElem: (string | number | boolean)[] = [999,333,'fiat', true];
let buildListFromArr = (arrElem): string => {
    let allLi = '';
    for (const arrElement of arrElem) {
        allLi += `<li>${arrElement}</li>`;
    }
    return `<ul>${allLi}</ul>`;
}
console.log(buildListFromArr(arrElem));
/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/
let obj: {id: number, name: string, age: number}[] = [{id: 1, name: 'Kolya', age: 22}, {id: 2, name: 'Alyosha', age: 33}];
let buildBlockFromObj = (obj): string => {
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
let array: number[] = [10,21,2,0,44,300,11];
let getMinNumberFromArr = (arr): number => {
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
let sum = (array): number => {
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
let swap = (arr: number[],index1: number,index2: number) => {
    let res: number[] = [];
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
let exchange = (sumUAH: number,currencyValues: {currency: string, value: number}[],exchangeCurrency: string):number => {
    for (const obj of currencyValues) {
        if(obj.currency === exchangeCurrency){
            return sumUAH/obj.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))