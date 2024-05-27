// MY CUSTOM FUNCTIONS
function makeHr(nameTag) {
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
/*
==========================
є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
*/
addEventListener("load", function (e) {
    if (sessionStorage.getItem('start')) {
        if (localStorage.getItem('num') && +localStorage.getItem('num') !== 0) {
            let newNum = +localStorage.getItem('num') + 1;
            localStorage.setItem('num', JSON.stringify(newNum));
        }
    } else {
        sessionStorage.setItem('start', JSON.stringify(new Date()));
        localStorage.setItem('num', JSON.stringify(0));
    }

    let div = document.createElement('div');
    div.innerHTML = localStorage.getItem('num');
    let divRes = document.getElementById('numCount');
    divRes.appendChild(div);
    makeHr(divRes);
});

/*
зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів
*/
function clearDiv() {
    let dixWithData = document.querySelectorAll('#allObject div.activeBlock');
    if (dixWithData) {
        dixWithData.forEach(el => el.remove());
    }
}

let res = [];
for (let i = 0; i < 100; i++) {
    let obj = {id: i + 1, number: (i + 1) * 1000};
    res.push(obj);
}

let btnPrev = document.createElement('button');
btnPrev.innerText = 'Prev';
btnPrev.setAttribute('id', 'prev');

let btnNext = document.createElement('button');
btnNext.innerText = 'Next';
btnNext.setAttribute('id', 'next');
let divWithObj = document.createElement('div');
divWithObj.setAttribute('id', 'allObject');
divWithObj.append(btnPrev, btnNext);
document.body.appendChild(divWithObj);

sessionStorage.setItem('countStart', JSON.stringify(0));
sessionStorage.setItem('countEnd', JSON.stringify(10));

btnNext.addEventListener('click', function (e) {
    if (+sessionStorage.getItem('countEnd') >= 90) {
        this.setAttribute('class', 'disabled');
    }
    let btnPrev = document.getElementById('prev');
    btnPrev.classList.remove('disabled');

    let end = +sessionStorage.getItem('countEnd') + 10;
    let start = +sessionStorage.getItem('countStart') + 10;
    sessionStorage.setItem('countStart', JSON.stringify(start));
    sessionStorage.setItem('countEnd', JSON.stringify(end));
    clearDiv();

    for (let i = +sessionStorage.getItem('countStart'); i < +sessionStorage.getItem('countEnd'); i++) {
        let one = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = `${JSON.stringify(res[i])}`;
        divWithObj.appendChild(one);
    }
});

btnPrev.addEventListener('click', function (e) {

    if (+sessionStorage.getItem('countStart') <= 10) {
        this.setAttribute('class', 'disabled');
    }
    let btnNext = document.getElementById('next');
    btnNext.classList.remove('disabled');

    let end = +sessionStorage.getItem('countEnd') - 10;
    let start = +sessionStorage.getItem('countStart') - 10;
    sessionStorage.setItem('countStart', JSON.stringify(start));
    sessionStorage.setItem('countEnd', JSON.stringify(end));
    clearDiv();

    for (let i = +sessionStorage.getItem('countStart'); i < +sessionStorage.getItem('countEnd'); i++) {
        let one = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = `${JSON.stringify(res[i])}`;
        divWithObj.appendChild(one);
    }
});

if (+sessionStorage.getItem('countStart') === 0) {
    let btnPrev = document.getElementById('prev');
    btnPrev.setAttribute('class', 'disabled');

    for (let i = +sessionStorage.getItem('countStart'); i < +sessionStorage.getItem('countEnd'); i++) {
        let one = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = `${JSON.stringify(res[i])}`;
        divWithObj.appendChild(one);
    }
}
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
input.setAttribute('placeholder', 'Your age');
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

    if (form2.ageNum.value < 18 && form2.ageNum.value > 1) {
        divInfo = document.getElementById('res');
        divInfo.innerText = 'Ваш вік менше 18 років';
    } else if (form2.ageNum.value < 1) {
        divInfo = document.getElementById('res');
        divInfo.innerText = 'Помилка. Введіть не може бути 0 або менше';
    } else {
        divInfo = document.getElementById('res');
        divInfo.innerText = 'Форма відправлена';
    }
});
makeHr(form2);
/*
*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/
let form3 = document.createElement('form');
form3.setAttribute('name', 'form3');
form3.setAttribute('action', '#');

let form3InputRow = document.createElement('input');
form3InputRow.setAttribute('name', 'row');
form3InputRow.setAttribute('type', 'number');
form3InputRow.setAttribute('placeholder', 'row');

let form3InputSell = document.createElement('input');
form3InputSell.setAttribute('name', 'cell');
form3InputSell.setAttribute('type', 'number');
form3InputSell.setAttribute('placeholder', 'cell');

let form3InputInfo = document.createElement('input');
form3InputInfo.setAttribute('name', 'info');
form3InputInfo.setAttribute('type', 'text');
form3InputInfo.setAttribute('placeholder', 'text');

let form3Btn = document.createElement('button');
form3Btn.innerText = 'Build Table';

let form3Clear = document.createElement('button');
form3Clear.innerText = 'Clear';

form3.append(form3InputRow, form3InputSell, form3InputInfo, form3Btn, form3Clear);
document.body.appendChild(form3);
form3Btn.addEventListener('click', function (e) {
    e.preventDefault();
    let getForm3 = document.forms['form3'];

    let table = document.createElement('table');
    table.setAttribute('id', 'tableBuild');

    for (let i = 1; i <= getForm3.row.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for (let c = 1; c <= getForm3.cell.value; c++) {
            let td = document.createElement('td');
            td.style.border = '1px solid';
            td.innerText = getForm3.info.value;
            tr.appendChild(td);
        }
    }

    document.body.appendChild(table);
});
form3Clear.addEventListener('click', function (e) {
    document.getElementById('tableBuild').remove();
})

