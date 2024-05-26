// MY CUSTOM FUNCTIONS
function makeHr(nameTag){
    let hrR = document.createElement('hr');
    hrR.style.height = '3px';
    hrR.style.background = 'red';
    nameTag.after(hrR);
}

/*
Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
 Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
*/
let form1 = document.forms['form1'];

let formBtn = document.getElementById('send');
formBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let getDataForm = {
        name: form1.name.value,
        surname: form1.surname.value,
        age: form1.age.value
    }
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'list');
    for (const prop in getDataForm) {
        let li = document.createElement('li');
        li.innerText = `${prop}: ${getDataForm[prop]}`;
        ul.appendChild(li);
    }
    if (document.getElementById('list')) {
        ul.remove();
    } else {
        form1.appendChild(ul);
    }
});
makeHr(form1);
// makeHr();
/*
==========================
є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
*/
addEventListener("load", function (e) {
    if (sessionStorage.getItem('start')) {
        if (localStorage.getItem('num') && localStorage.getItem('num') !== 0) {
            localStorage.setItem('num', +localStorage.getItem('num') + 1);
        }
    } else {
        sessionStorage.setItem('start', JSON.stringify(new Date()));
        localStorage.setItem('num', 0);
    }

    let div = document.createElement('div');
    div.innerHTML = localStorage.getItem('num');
    let divRes = document.getElementById('numCount');
    divRes.appendChild(div);
    // document.body.appendChild(divRes);
    makeHr(divRes);
});


/*
зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів
*/
let res = [];
for (let i = 0; i <= 100; i++) {
    let obj = {id: i + 1, number: (i + 1) * 1000};
    res.push(obj);
}
console.log(res);
let btnPrev = document.createElement('button');
btnPrev.innerText = 'Prev';
btnPrev.setAttribute('id', 'prev');

let btnNext = document.createElement('button');
btnNext.innerText = 'Next';
btnNext.setAttribute('id', 'next');
let divWithObj = document.createElement('div');
divWithObj.append(btnPrev, btnNext);
document.body.appendChild(divWithObj);

sessionStorage.setItem('countStart', 0);
sessionStorage.setItem('countEnd', 10);

btnNext.addEventListener('click', function (e) {

    let end = +sessionStorage.getItem('countEnd') + 10;
    let start = +sessionStorage.getItem('countStart') + 10;
    sessionStorage.setItem('countStart', start);
    sessionStorage.setItem('countEnd', end);

    for (let i = start; i <= end; i++) {
        if (start) {
            let one = document.createElement('div');
            // one.classList.add('oneObj');
            one.classList.toggle('activeBlock');
            one.innerHTML = `${JSON.stringify(res[i])}`;
            divWithObj.appendChild(one);
            // let all = document.getElementsByClassName('activeBlock');
        }


    }
    // console.log(document.querySelector('oneOBJ'));
});

btnPrev.addEventListener('click', function (e) {
    let end = +sessionStorage.getItem('countEnd') - 10;
    let start = +sessionStorage.getItem('countStart') - 10;
    sessionStorage.setItem('countStart', start);
    sessionStorage.setItem('countEnd', end);

    for (let i = start; i <= end; i++) {
        let one = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = `${JSON.stringify(res[i])}`;
        divWithObj.appendChild(one);
    }
});
makeHr(divWithObj);

/*
- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
*/
let divBlock = document.createElement('div');
divBlock.style.background = 'grey';
divBlock.style.width = '300px';
divBlock.style.height = '300px';
divBlock.setAttribute('id', 'text');

let btnInDiv = document.createElement('button');
btnInDiv.innerText = 'BUTTON';

document.body.appendChild(divBlock);
document.body.appendChild(btnInDiv);

btnInDiv.addEventListener('click', function (e) {
    divBlock.remove();
})
makeHr(btnInDiv);

/*
- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити
вік чи меньше він ніж 18, та повідомити про це користувача
*/


let input = document.createElement('input');
input.setAttribute('name', 'ageNum');
input.setAttribute('type', 'number');
let inputBtn = document.createElement('button');
inputBtn.innerText = 'SEND AGE';
document.body.append(input, inputBtn);

let form2 = document.createElement('form');
form2.setAttribute('name', 'form2');
form2.append(input, inputBtn);
document.body.append(form2);

let divInfo = document.createElement('div');
divInfo.setAttribute('id', 'res');
divInfo.style.color = 'red';
form2.appendChild(divInfo);
inputBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if(form2.ageNum.value < 18){
        divInfo = document.getElementById('res');
        divInfo.innerText = 'Ваш вік менше 18 років';
    }else{
        divInfo = document.getElementById('res');
        divInfo.innerText = 'Форма відправлена';
    }
});
makeHr(form2);
/*
*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)

*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається*/