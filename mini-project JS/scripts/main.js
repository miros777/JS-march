/*В index.html
1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
*/

async function getDataAllUsersFromAPI() {
    const usersAll = await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then((users) => {

            let usersDiv = document.getElementById('users');

            for (const val in users) {
                let divUser = document.createElement('div');
                divUser.setAttribute('class', 'user');

                let divContent = document.createElement('div');
                divContent.setAttribute('class', 'userContent');

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

                divContent.append(spanID, spanName);

                divUser.append(divContent, btnUser);
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

    let params = new URLSearchParams(document.location.search);
    let idUser = params.get("id");

    const users = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
        .then(res => res.json())
        .then((user) => {

            let divUser = document.createElement('div');
            divUser.setAttribute('class', 'user');

            let divContent = document.createElement('div');
            divContent.setAttribute('class', 'userContent');

            let spanID = document.createElement('span');
            spanID.setAttribute('class', 'userID userValue');

            let spanName = document.createElement('span');
            spanName.setAttribute('class', 'userName userValue');

            let spanUsername = document.createElement('span');
            spanUsername.setAttribute('class', 'userSurname userValue');

            let spanEmail = document.createElement('span');
            spanEmail.setAttribute('class', 'userEmail userValue');

            let spanPhone = document.createElement('span');
            spanPhone.setAttribute('class', 'userPhone userValue');

            let spanWebsite = document.createElement('span');
            spanWebsite.setAttribute('class', 'userName userValue');

            // address
            let spanCity = document.createElement('span');
            spanCity.setAttribute('class', 'userCity userValue');

            let spanGeoLat = document.createElement('span');
            spanGeoLat.setAttribute('class', 'userGroLat userValue');

            let spanGeoLng = document.createElement('span');
            spanGeoLng.setAttribute('class', 'userGroLng userValue');

            let spanStreet = document.createElement('span');
            spanStreet.setAttribute('class', 'userStreet userValue');

            let spanSuite = document.createElement('span');
            spanSuite.setAttribute('class', 'userSuite userValue');

            let spanZipcode = document.createElement('span');
            spanZipcode.setAttribute('class', 'userZip userValue');

            // company
            let spanBs = document.createElement('span');
            spanBs.setAttribute('class', 'userBs userValue');

            let spanCatch = document.createElement('span');
            spanCatch.setAttribute('class', 'userCatch userValue');

            let spanNameCompany = document.createElement('span');
            spanNameCompany.setAttribute('class', 'userNameCompany userValue');

            let {id, name, username, email, phone, website, address, company} = user;

            spanID.innerText = `id: ${id}`;
            spanName.innerText = name;
            spanUsername.innerText = username;
            spanEmail.innerText = email;
            spanPhone.innerText = phone;
            spanWebsite.innerText = website;

            spanCity.innerText = address.city;
            spanGeoLat.innerText = address.geo.lat;
            spanGeoLng.innerText = address.geo.lng;
            spanStreet.innerText = address.street;
            spanSuite.innerText = address.suite;
            spanZipcode.innerText = address.zipcode;

            spanBs.innerText = company.bs;
            spanCatch.innerText = company.catchPhrase;
            spanNameCompany.innerText = company.name;

            let btnUserPosts = document.createElement('button');
            btnUserPosts.setAttribute('id', 'allPosts');
            let linkUser = document.createElement('a');
            linkUser.innerText = 'post of current user';

            btnUserPosts.appendChild(linkUser);

            divContent.append(spanID, spanName, spanUsername, spanEmail, spanPhone, spanWebsite, spanCity, spanGeoLat, spanGeoLng, spanStreet, spanSuite, spanZipcode, spanBs, spanCatch, spanNameCompany);

            divUser.append(divContent, btnUserPosts);
            document.body.appendChild(divUser);

            // console.log(user);

            btnUserPosts.addEventListener('click', function (e) {
                fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
                    .then(value => value.json())
                    .then(posts => {
                        let getUserDiv = document.getElementsByClassName('user')[0];
                        let divPostAll = document.createElement('div');
                        divPostAll.setAttribute('class', 'postAll');

                        for (const post of posts) {

                            let divPost = document.createElement('div');
                            divPost.setAttribute('class', 'postOne');

                            let divPostTitle = document.createElement('div');
                            divPostTitle.setAttribute('class', 'postTitle');
                            divPostTitle.innerText = `${post.title}`;

                            let divPostBtn = document.createElement('button');
                            divPostBtn.setAttribute('id', `post_${post.id}`);
                            let postLink = document.createElement('a');
                            postLink.href = `http://localhost:63342/JS-march/mini-project%20JS/post-details.html?id=${post.id}&idUser=${idUser}`;
                            postLink.innerText = 'Read more...';
                            divPostBtn.appendChild(postLink);

                            divPost.append(divPostTitle, divPostBtn);

                            divPostAll.appendChild(divPost);
                            getUserDiv.appendChild(divPostAll);
                        }

                        //

                        // return idUser;
                    })

            });

        });
}

async function getUserPostsFromAPI() {
    let params = new URLSearchParams(document.location.search);
    let idUser = params.get("idUser");
    let idPost = params.get("id");

    let post = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)

        .then(val => val.json())
        .then(user => {
            return user;
        }).then(users => {
                return fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`);
            }
        )
        .then(val => val.json())
        .then(posts => {
            for (const post of posts) {
                if (post.id == idPost) {
                    // console.log(post);
                    console.log(post.id);
                    console.log(post.title);
                    console.log(post.userId);
                    console.log(post.body);
                }

            }
            return idPost;
        })
        .then(posts => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
        })
        .then(val => val.json())
        .then(comments => {
            console.log(comments)
        })
    // console.log(post)


    // return post;
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