let newBaseUrl = getURL('index.html');

let getNav = document.getElementById('nav-top');

let ul = document.createElement('ul');
let li = document.createElement('li');
let a = document.createElement('a');
a.href = newBaseUrl;
a.innerHTML = 'HOME';

ul.appendChild(li);
li.appendChild(a);
getNav.appendChild(ul);
