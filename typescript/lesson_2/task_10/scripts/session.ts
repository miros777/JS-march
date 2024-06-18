/*
==========================
Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю
інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
=========================
*/
function getNamePageNow(path: string = window.location.pathname, namePage): string {
    let slicePath: string[] = path.split('/');
    let checkPage: string = slicePath.find(el => {
        if (el === namePage) {
            return el;
        }
    });
    return checkPage;
}

if (getNamePageNow(window.location.pathname, 'index.html') === 'index.html') {
    let newDate: Date = new Date();
    let obj: {date: number, month: number, year: number, hours: number, min: number} = {date: newDate.getDate(), month: newDate.getMonth(), year: newDate.getFullYear(), hours: newDate.getHours(), min: newDate.getMinutes()};

    if (!localStorage.getItem('sessions')) {
        let arr: any[] = [];
        arr.push(obj);
        localStorage.setItem('sessions', JSON.stringify(arr));
    } else {
        let pars = JSON.parse(localStorage.getItem('sessions'));
        pars.push(obj);
        localStorage.setItem('sessions', JSON.stringify(pars));
    }
}

if (getNamePageNow(window.location.pathname, 'session.html') === 'session.html') {
    let res: string = localStorage.getItem('sessions')
    let resObj = JSON.parse(res);

    let ul: HTMLUListElement = document.createElement('ul');
    for (const OneObj of resObj) {
        res = '';
        for (const oneObjKey in OneObj) {
            res += `${oneObjKey}: ${OneObj[oneObjKey]} `;
        }
        let li: HTMLLIElement = document.createElement('li');
        li.innerText = 'Session - ' + res;
        ul.appendChild(li);

        document.body.appendChild(ul);
    }
}
