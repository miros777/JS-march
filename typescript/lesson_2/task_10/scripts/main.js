// MY CUSTOM FUNCTIONS
function makeHr(nameTag) {
    var hrR = document.createElement('hr');
    hrR.style.height = '3px';
    hrR.style.background = 'red';
    nameTag.after(hrR);
}
/*
Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
 Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
*/
var form1 = document.forms['form1'];
var formBtn = document.getElementById('send');
formBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var getDataForm = {
        name: form1.name.value,
        surname: form1.surname.value,
        age: form1.age.value
    };
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'list');
    for (var prop in getDataForm) {
        var li = document.createElement('li');
        li.innerText = "".concat(prop, ": ").concat(getDataForm[prop]);
        ul.appendChild(li);
    }
    if (document.getElementById('list')) {
        ul.remove();
    }
    else {
        form1.appendChild(ul);
    }
    form1.reset();
});
makeHr(form1);
/*
==========================
є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
*/
addEventListener("load", function (e) {
    if (sessionStorage.getItem('start') && !!localStorage.getItem('num')) {
        var newNum = +localStorage.getItem('num') + 1;
        localStorage.setItem('num', JSON.stringify(newNum));
    }
    else {
        sessionStorage.setItem('start', JSON.stringify(new Date()));
        localStorage.setItem('num', JSON.stringify(0));
    }
    var div = document.createElement('div');
    div.innerHTML = localStorage.getItem('num');
    var divRes = document.getElementById('numCount');
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
    var dixWithData = document.querySelectorAll('#allObject div.activeBlock');
    if (dixWithData) {
        dixWithData.forEach(function (el) { return el.remove(); });
    }
}
var res = [];
for (var i = 0; i < 100; i++) {
    var obj = { id: i + 1, number: (i + 1) * 1000 };
    res.push(obj);
}
var btnPrev = document.createElement('button');
btnPrev.innerText = 'Prev';
btnPrev.setAttribute('id', 'prev');
var btnNext = document.createElement('button');
btnNext.innerText = 'Next';
btnNext.setAttribute('id', 'next');
var divWithObj = document.createElement('div');
divWithObj.setAttribute('id', 'allObject');
divWithObj.append(btnPrev, btnNext);
document.body.appendChild(divWithObj);
sessionStorage.setItem('countStart', JSON.stringify(0));
sessionStorage.setItem('countEnd', JSON.stringify(10));
btnNext.addEventListener('click', function (e) {
    if (+sessionStorage.getItem('countEnd') >= 90) {
        this.setAttribute('class', 'disabled');
    }
    var btnPrev = document.getElementById('prev');
    btnPrev.classList.remove('disabled');
    var end = +sessionStorage.getItem('countEnd') + 10;
    var start = +sessionStorage.getItem('countStart') + 10;
    sessionStorage.setItem('countStart', JSON.stringify(start));
    sessionStorage.setItem('countEnd', JSON.stringify(end));
    clearDiv();
    for (var i = +sessionStorage.getItem('countStart'); i < +sessionStorage.getItem('countEnd'); i++) {
        var one = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = "".concat(JSON.stringify(res[i]));
        divWithObj.appendChild(one);
    }
});
btnPrev.addEventListener('click', function (e) {
    if (+sessionStorage.getItem('countStart') <= 10) {
        this.setAttribute('class', 'disabled');
    }
    var btnNext = document.getElementById('next');
    btnNext.classList.remove('disabled');
    var end = +sessionStorage.getItem('countEnd') - 10;
    var start = +sessionStorage.getItem('countStart') - 10;
    sessionStorage.setItem('countStart', JSON.stringify(start));
    sessionStorage.setItem('countEnd', JSON.stringify(end));
    clearDiv();
    for (var i = +sessionStorage.getItem('countStart'); i < +sessionStorage.getItem('countEnd'); i++) {
        var one = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = "".concat(JSON.stringify(res[i]));
        divWithObj.appendChild(one);
    }
});
if (+sessionStorage.getItem('countStart') === 0) {
    var btnPrev_1 = document.getElementById('prev');
    btnPrev_1.setAttribute('class', 'disabled');
    for (var i = +sessionStorage.getItem('countStart'); i < +sessionStorage.getItem('countEnd'); i++) {
        var one = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = "".concat(JSON.stringify(res[i]));
        divWithObj.appendChild(one);
    }
}
makeHr(divWithObj);
/*
- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
*/
var divBlock = document.createElement('div');
divBlock.style.background = 'grey';
divBlock.style.width = '300px';
divBlock.style.height = '300px';
divBlock.setAttribute('id', 'text');
var btnInDiv = document.createElement('button');
btnInDiv.innerText = 'BUTTON';
document.body.appendChild(divBlock);
document.body.appendChild(btnInDiv);
btnInDiv.addEventListener('click', function (e) {
    divBlock.remove();
});
makeHr(btnInDiv);
/*
- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити
вік чи меньше він ніж 18, та повідомити про це користувача
*/
var input = document.createElement('input');
input.setAttribute('name', 'ageNum');
input.setAttribute('type', 'number');
input.setAttribute('placeholder', 'Your age');
var inputBtn = document.createElement('button');
inputBtn.innerText = 'SEND AGE';
document.body.append(input, inputBtn);
var form2 = document.createElement('form');
form2.setAttribute('name', 'form2');
form2.append(input, inputBtn);
document.body.append(form2);
var divInfo = document.createElement('div');
divInfo.setAttribute('id', 'res');
divInfo.style.color = 'red';
form2.appendChild(divInfo);
inputBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (form2.ageNum.value < 18 && form2.ageNum.value > 1) {
        divInfo = document.getElementById('res');
        divInfo.innerText = 'Ваш вік менше 18 років';
    }
    else if (form2.ageNum.value < 1) {
        divInfo = document.getElementById('res');
        divInfo.innerText = 'Помилка. Введіть не може бути 0 або менше';
    }
    else {
        divInfo = document.getElementById('res');
        divInfo.innerText = 'Форма відправлена';
    }
    form2.reset();
});
makeHr(form2);
/*
*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/
var form3 = document.createElement('form');
form3.setAttribute('name', 'form3');
form3.setAttribute('action', '#');
var form3InputRow = document.createElement('input');
form3InputRow.setAttribute('name', 'row');
form3InputRow.setAttribute('type', 'number');
form3InputRow.setAttribute('placeholder', 'row');
var form3InputSell = document.createElement('input');
form3InputSell.setAttribute('name', 'cell');
form3InputSell.setAttribute('type', 'number');
form3InputSell.setAttribute('placeholder', 'cell');
var form3InputInfo = document.createElement('input');
form3InputInfo.setAttribute('name', 'info');
form3InputInfo.setAttribute('type', 'text');
form3InputInfo.setAttribute('placeholder', 'text');
var form3Btn = document.createElement('button');
form3Btn.innerText = 'Build Table';
var form3Clear = document.createElement('button');
form3Clear.innerText = 'Clear';
form3.append(form3InputRow, form3InputSell, form3InputInfo, form3Btn, form3Clear);
document.body.appendChild(form3);
form3Btn.addEventListener('click', function (e) {
    e.preventDefault();
    var getForm3 = document.forms['form3'];
    var table = document.createElement('table');
    table.setAttribute('id', 'tableBuild');
    for (var i = 1; i <= getForm3.row.value; i++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (var c = 1; c <= getForm3.cell.value; c++) {
            var td = document.createElement('td');
            td.style.border = '1px solid';
            td.innerText = getForm3.info.value;
            tr.appendChild(td);
        }
    }
    document.body.appendChild(table);
    getForm3.reset();
});
form3Clear.addEventListener('click', function (e) {
    document.getElementById('tableBuild').remove();
});
