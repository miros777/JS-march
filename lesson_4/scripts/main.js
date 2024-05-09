/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
*/
function countArea(a, b) {
    return a * b;
}

/*
- створити функцію яка обчислює та повертає площу кола з радіусом r
*/
function countCircle(r) {
    let res = 3.14 * r;
    return (Math.pow(res, 2)).toFixed(2);
}

/*
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радісом r
*/
function countCylinder(r, h) {
    return 2 * 3.14 * r * (r + h); //S = 2 π R (R + h)
}

/*
- створити функцію яка приймає масив та виводить кожен його елемент
*/
function showItemsArr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

/*
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
*/
function newTagP(text = 'Hello') {
    return `<p>${text}</p>`;
}

console.log(newTagP());

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
*/
function newTagUlLi(text = 'Hello!') {
    let res = '';
    for (let i = 0; i < 3; i++) {
        res += `<li>${text}</li>`;
    }
    return `<ul>${res}</ul>`;
}

console.log(newTagUlLi());

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/
function newTagUl(text = 'Hello!', countLi = 5) {
    let res = '';
    for (let i = 0; i < countLi; i++) {
        res += `<li>${text}</li>`;
    }
    return `<ul>${res}</ul>`;
}

console.log(newTagUl());

/*
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
*/
function doNewList(arr = [11, 'do', false]) {
    let li = '';

    for (const arrElement of arr) {
        li += `<li>${arrElement}</li>`;
    }

    return `<ul>${li}</ul>`
}

console.log(doNewList());

/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/
function doNewBlockFromObj(arr = [{id: 1, name: 'Kolya', age: 22}, {id: 2, name: 'Alyosha', age: 33}]) {
    let res = '';
    for (const obj of arr) {
        res += `<div>
                <div>${obj['id']}</div>
                <div>${obj['name']}</div>
                <div>${obj['age']}</div>
              </div>
              `;
    }
    return res;
}

console.log(doNewBlockFromObj());
/*
- створити функцію яка повертає найменьше число з масиву
*/
function retMinNumberFromArr(arr=[1,2,33,-44,565,55]){
    return Math.min(...arr);
}
console.log(retMinNumberFromArr());
/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
*/
function sum(arr=[1,3,43]){
    let sum = 0;
    for (const number of arr) {
        sum += number;
    }
    return sum;
}
console.log(sum());
/*
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
*/
function swap(arr = [11,22,33,44],index1=0,index2=1){
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(index1 === i){
            resArr[index1+1] = arr[i];
        }else if(index2 === i){
            resArr[index2-1] = arr[i];
        }else {
            resArr[i] = arr[i];
        }

    }
    return resArr;
}
console.log(swap());
/*
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
* */
function exchange(sumUAH = 900,currencyValues=[{currency:'USD',value:30},{currency:'EUR',value:55}],exchangeCurrency='EUR'){
    let res = 0;
    for (const curObj of currencyValues) {
        if(curObj.currency === exchangeCurrency){
            res = sumUAH* curObj.value;
        }
    }

    return res;
}
console.log(exchange());