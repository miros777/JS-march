/*
 - Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'
    */
console.log('hello world', 'довжина', 'hello world'.length);
console.log('lorem ipsum', 'довжина', 'lorem ipsum'.length);
console.log('javascript is cool', 'довжина', 'javascript is cool'.length);
/*
- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'
*/
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
/*
- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
*/
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
/*
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
*/
let str = ' dirty string   ';
console.log(str.trim());
/*
- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
*/
let strLong = 'Ревуть воли як ясла повні';
let stringToarray = (strLong) => strLong.split(' ');
console.log(stringToarray(strLong));
/*
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
*/
let newArr = [10,8,-7,55,987,-1011,0,1050,0];
let elemArrtoStr = newArr.map((elem) => elem.toString());
console.log(elemArrtoStr);
/*
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
*/
let nums = [11,21,3];
function sortNums(nums, direction){
    if(direction === 'ascending'){
        return nums.toSorted((a,b) => a - b);
    }else if(direction === 'descending'){
        return nums.toSorted((a,b) => b - a);
    }else {
        throw new Error('not correct argument');
    }
}
console.log(sortNums(nums,'ascending'))  // [3,11,21]
console.log(sortNums(nums,'descending'))  // [21,11,3]

/*
==========================
- є масив
 -- відсортувати його за спаданням за monthDuration
 */
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((cours1,cours2) => cours2.monthDuration - cours1.monthDuration));
/*
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 */

console.log(coursesAndDurationArray.filter((elem) => elem.monthDuration === 5));
/*
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 */
let map = coursesAndDurationArray.map((elem, index, array) => ({id:index + 1, ...elem}));
console.log(map);
/*
 =========================
 описати колоду карт (від 6 до туза без джокерів)
 - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
*/
// function genarateCatds(){
//     if()
// }
/*
=========================
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
=========================
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker
*/