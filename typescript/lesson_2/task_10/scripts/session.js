/*
==========================
Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю
інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
=========================
*/
function getNamePageNow(path, namePage) {
    if (path === void 0) { path = window.location.pathname; }
    var slicePath = path.split('/');
    var checkPage = slicePath.find(function (el) {
        if (el === namePage) {
            return el;
        }
    });
    return checkPage;
}
if (getNamePageNow(window.location.pathname, 'index.html') === 'index.html') {
    var newDate = new Date();
    var obj = { date: newDate.getDate(), month: newDate.getMonth(), year: newDate.getFullYear(), hours: newDate.getHours(), min: newDate.getMinutes() };
    if (!localStorage.getItem('sessions')) {
        var arr = [];
        arr.push(obj);
        localStorage.setItem('sessions', JSON.stringify(arr));
    }
    else {
        var pars = JSON.parse(localStorage.getItem('sessions'));
        pars.push(obj);
        localStorage.setItem('sessions', JSON.stringify(pars));
    }
}
if (getNamePageNow(window.location.pathname, 'session.html') === 'session.html') {
    var res = localStorage.getItem('sessions');
    var resObj = JSON.parse(res);
    var ul = document.createElement('ul');
    for (var _i = 0, resObj_1 = resObj; _i < resObj_1.length; _i++) {
        var OneObj = resObj_1[_i];
        res = '';
        for (var oneObjKey in OneObj) {
            res += "".concat(oneObjKey, ": ").concat(OneObj[oneObjKey], " ");
        }
        var li = document.createElement('li');
        li.innerText = 'Session - ' + res;
        ul.appendChild(li);
        document.body.appendChild(ul);
    }
}
