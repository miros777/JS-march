function getURL(page, baseURL = new URL(document.URL)) {
    let originURL = baseURL.origin + '/';
    let pathToFile = originURL + 'JS-march/mini-projectJS' + '/';

    return pathToFile + page;
}

/*В index.html
1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
*/

async function getDataAllUsersFromAPI() {
    const usersAll = await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then((users) => {

            let newBaseUrl = getURL('user-details.html');

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
                linkUser.setAttribute('href', `${newBaseUrl}?id=${id}`);
                linkUser.setAttribute('title', `${newBaseUrl}?id=${id}`);

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
            spanName.innerText = `name: ${name}`;
            spanUsername.innerText = `username: ${username}`;
            spanEmail.innerText = `email: ${email}`;
            spanPhone.innerText = `phone: ${phone}`;
            spanWebsite.innerText = `website: ${website}`;

            spanCity.innerHTML = `<b>Address:</b><br>city: ${address.city}`;
            spanGeoLat.innerText = `lat: ${address.geo.lat}`;
            spanGeoLng.innerText = `geo: ${address.geo.lng}`;
            spanStreet.innerText = `street: ${address.street}`;
            spanSuite.innerText = `suite: ${address.suite}`;
            spanZipcode.innerText = `zipcode: ${address.zipcode}`;

            spanBs.innerHTML = `<b>Company:</b><br>bs:${company.bs}`;
            spanCatch.innerText = `catchPhrase: ${company.catchPhrase}`;
            spanNameCompany.innerText = `name: ${company.name}`;

            let btnUserPosts = document.createElement('button');
            btnUserPosts.setAttribute('id', 'allPosts');
            let linkUser = document.createElement('a');
            linkUser.href = '#';
            linkUser.innerText = 'post of current user';

            let divPostAll = document.createElement('div');
            divPostAll.setAttribute('id', 'postAll');

            btnUserPosts.appendChild(linkUser);
            divContent.append(spanID, spanName, spanUsername, spanEmail, spanPhone, spanWebsite, spanCity, spanGeoLat, spanGeoLng, spanStreet, spanSuite, spanZipcode, spanNameCompany, spanBs, spanCatch);
            divUser.append(divContent, btnUserPosts, divPostAll);
            document.body.appendChild(divUser);

            function handleClick() {

                fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
                    .then(value => value.json())
                    .then(posts => {

                        let newBaseUrl = getURL('post-details.html');

                        let getUserDiv = document.getElementsByClassName('user')[0];

                        let divPostAll = document.getElementById('postAll');

                        for (const post of posts) {

                            let divPost = document.createElement('div');
                            divPost.setAttribute('class', 'postOne');

                            let divPostTitle = document.createElement('h4');
                            divPostTitle.setAttribute('class', 'postTitle');
                            divPostTitle.innerText = `${post.title}`;

                            let divPostBtn = document.createElement('button');
                            divPostBtn.setAttribute('id', `post_${post.id}`);
                            let postLink = document.createElement('a');
                            postLink.href = `${newBaseUrl}?id=${post.id}&idUser=${idUser}`;
                            postLink.innerText = 'Read more...';
                            divPostBtn.appendChild(postLink);

                            divPost.append(divPostTitle, divPostBtn);

                            divPostAll.appendChild(divPost);
                            getUserDiv.appendChild(divPostAll);

                        }
                    });
            }

            btnUserPosts.addEventListener('click', handleClick, {once: true});
        });
}

/*
На странице post-details.html:
7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
*/

async function getUserPostsFromAPI() {
    let params = new URLSearchParams(document.location.search);
    let idUser = params.get("idUser");
    let idPost = params.get("id");

    let post = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
        .then(val => val.json())
        .then(posts => {
            for (const post of posts) {
                if (post.id == idPost) {
                    let divPost = document.createElement('div');
                    divPost.setAttribute('class', 'postOne');

                    let divPostID = document.createElement('div');
                    divPostID.setAttribute('class', 'postID');
                    divPostID.innerText = `post_id: ${post.id}`;

                    let divPostTitle = document.createElement('div');
                    divPostTitle.setAttribute('class', 'postTitle');
                    divPostTitle.innerText = `${post.title}`;

                    let divPostUserID = document.createElement('div');
                    divPostUserID.setAttribute('class', 'postUserID');
                    divPostUserID.innerText = `userId: ${post.userId}`;

                    let divPostBody = document.createElement('div');
                    divPostBody.setAttribute('class', 'postBody');
                    divPostBody.innerText = `${post.body}`;

                    divPost.append(divPostID, divPostTitle, divPostUserID, divPostBody);

                    document.body.appendChild(divPost);
                }
            }
            return idPost;
        })
        .then(posts => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
        })
        .then(val => val.json())
        .then(comments => {

            if (comments.length > 0) {
                let currentPost = document.getElementsByClassName('postOne')[0];
                let divSeparator = document.createElement('h2');
                divSeparator.setAttribute('class', 'commentStart');
                divSeparator.innerText = 'Comments All';

                currentPost.appendChild(divSeparator);

                let divCommentAll = document.createElement('div');
                divCommentAll.setAttribute('class', 'commentAll');

                for (const comment of comments) {

                    let divComment = document.createElement('div');
                    divComment.setAttribute('class', 'commentOne');

                    let divCommentHeader = document.createElement('div');
                    divCommentHeader.setAttribute('class', 'commentHeader');

                    let divCommentName = document.createElement('h4');
                    divCommentName.setAttribute('class', 'commentName');
                    divCommentName.innerText = `${comment.name}`;

                    let divCommentEmail = document.createElement('div');
                    divCommentEmail.setAttribute('class', 'commentEmail');
                    divCommentEmail.innerText = `${comment.email}`;

                    let divCommentBody = document.createElement('div');
                    divCommentBody.setAttribute('class', 'commentBody');
                    divCommentBody.innerText = `${comment.body}`;

                    divComment.append(divCommentHeader, divCommentBody);
                    divCommentHeader.append(divCommentName, divCommentEmail);

                    divCommentAll.appendChild(divComment);
                    document.body.appendChild(divCommentAll);
                }
            }
        })
}

/*

Стилизація проєкта -
index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
блоки з короткою іфною про post - в ряд по 5 .
post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)*/