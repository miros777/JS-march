/*
* - створити блок,
- додати йому класи wrap, collapse, alpha, beta
* */
let divBlock = document.createElement('div');
divBlock.innerText = 'First block';
divBlock.setAttribute('class', ...['wrap', 'collapse', 'alpha', 'beta']);
divBlock.classList.add('wrap', 'collapse', 'alpha', 'beta');
console.log(divBlock);
/*
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
*/
divBlock.style.backgroundColor = 'red';
divBlock.style.color = 'white';
divBlock.style.fontSize = '22px';
console.log(divBlock);
/*
- додати цей блок в body.
*/
document.body.appendChild(divBlock);
/*
- клонувати його повністю, та додати клон в body.
*/
let cloneDivBlock = divBlock.cloneNode(true);
document.body.appendChild(cloneDivBlock);
/*
- Є масив:
['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
*/
let data = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');
for (const liData of data) {
    let li = document.createElement('li');
    li.innerText = liData;
    ul.appendChild(li);
}
document.body.appendChild(ul);
/*
- Є масив
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.
*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesKey of coursesAndDurationArray) {
    let customDiv = document.createElement('div');
    customDiv.innerHTML = `title : ${coursesKey['title']}; monthDuration : ${coursesKey['monthDuration']}`;
    customDiv.style.backgroundColor = 'yellow';
    document.body.appendChild(customDiv);
}
/*
=========================
- Є масив
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
Завдання робити через цикли.
*/
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesElement of coursesAndDurationArray2) {
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = coursesElement.title;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = coursesElement.monthDuration;

    document.body.appendChild(div).append(h1, p);
}

/*
==========================

- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
*/
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.classList.add('member');
    div.innerHTML = `name: ${simpson.name} <br> surname: ${simpson.surname} <br> age: ${simpson.age} <br> info: ${simpson.info} <br>`;

    let imgage = document.createElement('img');
    imgage.setAttribute('src', simpson.photo);
    div.appendChild(imgage);

    document.body.appendChild(div);
    document.body.appendChild(document.createElement('hr'));
}

/*
=========================
Цикл в циклі
- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список
з елементами
Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом*/
let coursesArray5 = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const coursesElement of coursesArray5) {
    let div = document.createElement('div');
    let divHead = document.createElement('div');
    divHead.style.display = 'flex';
    divHead.style.flexWrap = 'wrap';
    divHead.style.justifyContent = 'space-between';
    div.appendChild(divHead);

    let divChild1 = document.createElement('div');
    let divChild2 = document.createElement('div');
    let divChild3 = document.createElement('div');

    divChild1.innerText = 'title: ' + coursesElement.title;
    divChild1.style.width = '100%';
    divHead.appendChild(divChild1);

    divChild2.innerText = 'monthDuration: ' + coursesElement.monthDuration;
    divChild2.style.width = '45%';
    divHead.appendChild(divChild2);

    divChild3.innerText = 'hourDuration: ' + coursesElement.hourDuration;
    divChild3.style.width = '45%';
    divHead.appendChild(divChild3);

    let ulForModules = document.createElement('ul');
    ulForModules.setAttribute('class', 'mod-ul');
    div.appendChild(ulForModules);

    if(coursesElement.modules){
        for (const value of coursesElement.modules) {
            let moduleLi = document.createElement('li');
            moduleLi.innerText = value;
            ulForModules.appendChild(moduleLi);
        }
    }

    document.body.appendChild(div);
}