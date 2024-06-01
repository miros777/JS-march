/*В index.html
1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
*/
async function getDataAllUsersFromAPI() {
    const users = await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then((users) => {

            let usersDiv = document.getElementById('users');

            for (const val in users) {
                let divUser = document.createElement('div');
                divUser.setAttribute('class', 'user');

                let spanID = document.createElement('span');
                spanID.setAttribute('class', 'userID');

                let spanName = document.createElement('span');
                spanName.setAttribute('class', 'userName');

                let {id, name} = users[val];
                spanID.innerText = id;
                spanName.innerText = name;

                let btnUser = document.createElement('button');
                let linkUser = document.createElement('a');
                linkUser.setAttribute('href', `http://localhost:63342/JS-march/mini-project%20JS/user-details.html?id=${id}`);
                linkUser.setAttribute('title', `http://localhost:63342/JS-march/mini-project%20JS/user-details.html?id=${id}`);

                linkUser.innerText = name;
                btnUser.appendChild(linkUser);

                divUser.append(spanID, spanName, btnUser);
                usersDiv.appendChild(divUser);
            }

        });
}

/*
На странице user-details.html:
4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
*/
async function getDataUserFromAPI() {
    const users = await fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(res => res.json())
        .then((users) => {

            });
}

/*
На странице post-details.html:
7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

Стилизація проєкта -
index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
блоки з короткою іфною про post - в ряд по 5 .
post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)*/