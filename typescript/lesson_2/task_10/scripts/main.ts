// MY CUSTOM FUNCTIONS
function makeHr(nameTag): void {
    let hrR: HTMLHRElement = document.createElement('hr');
    hrR.style.height = '3px';
    hrR.style.background = 'red';
    nameTag.after(hrR);
}

/*
Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
 Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
*/
let form1 = document.forms['form1'];

let formBtn: HTMLElement  = document.getElementById('send');
formBtn.addEventListener('click', function (e: MouseEvent): void {
    e.preventDefault();
    let getDataForm = {
        name: form1.name.value,
        surname: form1.surname.value,
        age: form1.age.value
    }
    let ul: HTMLUListElement = document.createElement('ul');
    ul.setAttribute('id', 'list');
    for (const prop in getDataForm) {
        let li: HTMLLIElement = document.createElement('li');
        li.innerText = `${prop}: ${getDataForm[prop]}`;
        ul.appendChild(li);
    }
    if (document.getElementById('list')) {
        ul.remove();
    } else {
        form1.appendChild(ul);
    }
    form1.reset();
});
makeHr(form1);
/*
==========================
є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
*/
addEventListener("load", function (e): void {
    if (sessionStorage.getItem('start') && !!localStorage.getItem('num')) {
        let newNum = +localStorage.getItem('num') + 1;
        localStorage.setItem('num', JSON.stringify(newNum));
    } else {
        sessionStorage.setItem('start', JSON.stringify(new Date()));
        localStorage.setItem('num', JSON.stringify(0));
    }

    let div: HTMLDivElement = document.createElement('div');
    div.innerHTML = localStorage.getItem('num');
    let divRes: HTMLElement = document.getElementById('numCount');
    divRes.appendChild(div);
    makeHr(divRes);
});
/*
зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів
*/
function clearDiv(): void {
    let dixWithData: NodeListOf<Element> = document.querySelectorAll('#allObject div.activeBlock');
    if (dixWithData) {
        dixWithData.forEach(el => el.remove());
    }
}

let res: any[] = [];
for (let i: number = 0; i < 100; i++) {
    let obj: {id: number, number: number} = {id: i + 1, number: (i + 1) * 1000};
    res.push(obj);
}

let btnPrev: HTMLButtonElement = document.createElement('button');
btnPrev.innerText = 'Prev';
btnPrev.setAttribute('id', 'prev');

let btnNext: HTMLButtonElement = document.createElement('button');
btnNext.innerText = 'Next';
btnNext.setAttribute('id', 'next');
let divWithObj: HTMLDivElement = document.createElement('div');
divWithObj.setAttribute('id', 'allObject');
divWithObj.append(btnPrev, btnNext);
document.body.appendChild(divWithObj);

sessionStorage.setItem('countStart', JSON.stringify(0));
sessionStorage.setItem('countEnd', JSON.stringify(10));

btnNext.addEventListener('click', function (e): void {
    if (+sessionStorage.getItem('countEnd') >= 90) {
        this.setAttribute('class', 'disabled');
    }
    let btnPrev: HTMLElement = document.getElementById('prev');
    btnPrev.classList.remove('disabled');

    let end: number = +sessionStorage.getItem('countEnd') + 10;
    let start: number = +sessionStorage.getItem('countStart') + 10;
    sessionStorage.setItem('countStart', JSON.stringify(start));
    sessionStorage.setItem('countEnd', JSON.stringify(end));
    clearDiv();

    for (let i: number = +sessionStorage.getItem('countStart'); i < +sessionStorage.getItem('countEnd'); i++) {
        let one: HTMLDivElement = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = `${JSON.stringify(res[i])}`;
        divWithObj.appendChild(one);
    }
});

btnPrev.addEventListener('click', function (e): void {

    if (+sessionStorage.getItem('countStart') <= 10) {
        this.setAttribute('class', 'disabled');
    }
    let btnNext: HTMLElement = document.getElementById('next');
    btnNext.classList.remove('disabled');

    let end: number = +sessionStorage.getItem('countEnd') - 10;
    let start: number = +sessionStorage.getItem('countStart') - 10;
    sessionStorage.setItem('countStart', JSON.stringify(start));
    sessionStorage.setItem('countEnd', JSON.stringify(end));
    clearDiv();

    for (let i: number = +sessionStorage.getItem('countStart'); i < +sessionStorage.getItem('countEnd'); i++) {
        let one: HTMLDivElement = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = `${JSON.stringify(res[i])}`;
        divWithObj.appendChild(one);
    }
});

if (+sessionStorage.getItem('countStart') === 0) {
    let btnPrev: HTMLElement = document.getElementById('prev');
    btnPrev.setAttribute('class', 'disabled');

    for (let i: number = +sessionStorage.getItem('countStart'); i < +sessionStorage.getItem('countEnd'); i++) {
        let one: HTMLDivElement = document.createElement('div');
        one.classList.toggle('activeBlock');
        one.innerHTML = `${JSON.stringify(res[i])}`;
        divWithObj.appendChild(one);
    }
}
makeHr(divWithObj);
/*
- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
*/
let divBlock: HTMLDivElement = document.createElement('div');
divBlock.style.background = 'grey';
divBlock.style.width = '300px';
divBlock.style.height = '300px';
divBlock.setAttribute('id', 'text');

let btnInDiv: HTMLButtonElement = document.createElement('button');
btnInDiv.innerText = 'BUTTON';

document.body.appendChild(divBlock);
document.body.appendChild(btnInDiv);

btnInDiv.addEventListener('click', function (e): void {
    divBlock.remove();
})
makeHr(btnInDiv);

/*
- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити
вік чи меньше він ніж 18, та повідомити про це користувача
*/

let input: HTMLInputElement = document.createElement('input');
input.setAttribute('name', 'ageNum');
input.setAttribute('type', 'number');
input.setAttribute('placeholder', 'Your age');
let inputBtn: HTMLButtonElement = document.createElement('button');
inputBtn.innerText = 'SEND AGE';
document.body.append(input, inputBtn);

let form2: HTMLFormElement = document.createElement('form');
form2.setAttribute('name', 'form2');
form2.append(input, inputBtn);
document.body.append(form2);

let divInfo: HTMLElement = document.createElement('div');
divInfo.setAttribute('id', 'res');
divInfo.style.color = 'red';
form2.appendChild(divInfo);
inputBtn.addEventListener('click', function (e): void {
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

    form2.reset();
});
makeHr(form2);
/*
*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/
let form3: HTMLFormElement = document.createElement('form');
form3.setAttribute('name', 'form3');
form3.setAttribute('action', '#');

let form3InputRow: HTMLInputElement = document.createElement('input');
form3InputRow.setAttribute('name', 'row');
form3InputRow.setAttribute('type', 'number');
form3InputRow.setAttribute('placeholder', 'row');

let form3InputSell: HTMLInputElement = document.createElement('input');
form3InputSell.setAttribute('name', 'cell');
form3InputSell.setAttribute('type', 'number');
form3InputSell.setAttribute('placeholder', 'cell');

let form3InputInfo: HTMLInputElement = document.createElement('input');
form3InputInfo.setAttribute('name', 'info');
form3InputInfo.setAttribute('type', 'text');
form3InputInfo.setAttribute('placeholder', 'text');

let form3Btn: HTMLButtonElement = document.createElement('button');
form3Btn.innerText = 'Build Table';

let form3Clear: HTMLButtonElement = document.createElement('button');
form3Clear.innerText = 'Clear';

form3.append(form3InputRow, form3InputSell, form3InputInfo, form3Btn, form3Clear);
document.body.appendChild(form3);
form3Btn.addEventListener('click', function (e): void {
    e.preventDefault();
    let getForm3 = document.forms['form3'];

    let table: HTMLTableElement = document.createElement('table');
    table.setAttribute('id', 'tableBuild');

    for (let i: number = 1; i <= getForm3.row.value; i++) {
        let tr: HTMLTableRowElement = document.createElement('tr');
        table.appendChild(tr);

        for (let c: number = 1; c <= getForm3.cell.value; c++) {
            let td: HTMLTableCellElement = document.createElement('td');
            td.style.border = '1px solid';
            td.innerText = getForm3.info.value;
            tr.appendChild(td);
        }
    }

    document.body.appendChild(table);
    getForm3.reset();
});
form3Clear.addEventListener('click', function (e): void {
    document.getElementById('tableBuild').remove();
})

