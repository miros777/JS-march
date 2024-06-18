/*- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.*/
let div: HTMLElement = document.getElementById('carts');

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}): void => {

        for (const cartsAllElement of carts) {
            let divProd: HTMLDivElement = document.createElement('div');
            divProd.setAttribute('class', 'cart');

            let data: string = `<b style="font-size: 20px; background: pink">CART</b> id: ${cartsAllElement.id}<br>
                        discountedTotal: ${cartsAllElement.discountedTotal}<br>
                        total: ${cartsAllElement.total}<br>
                        totalProducts: ${cartsAllElement.totalProducts}<br>
                        totalQuantity: ${cartsAllElement.totalQuantity}<br>
                        userId: ${cartsAllElement.userId}<br><hr>`;

            divProd.innerHTML = data;
            div.appendChild(divProd);

            let divProduct: HTMLDivElement = document.createElement('div');
            let res: string = '<b style="background: dodgerblue">PRODUCTS CART</b><br><br>';
            for (const product of cartsAllElement.products) {
                res += `<b style="color: red">id: ${product.id}</b> <br>`;
                res +=`title: ${product.title} <br>`;
                res +=`price: ${product.price} <br>`;
                res +=`quantity: ${product.quantity} <br>`;
                res +=`total: ${product.total} <br>`;
                res +=`discountPercentage: ${product.discountPercentage } <br>`;
                res +=`discountedTotal: ${product.discountedTotal} <br>`;
                res +=`thumbnail: ${product.thumbnail} <br><br>`;
            }
            divProduct.innerHTML = res + '<hr>';
            divProd.appendChild(divProduct);
        }
    });


/*)
- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
*/
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes}): void => {
        console.log(recipes);
        let divIngredients: HTMLElement = document.getElementById('ingredients');

        for(let rec of recipes) {
            let divOneRec: HTMLDivElement = document.createElement('div');
            divOneRec.setAttribute('class', 'oneRec');

            let oneRecContent: string = `caloriesPerServing: ${rec.caloriesPerServing}<br>
            cookTimeMinutes: ${rec.cookTimeMinutes}<br>
            cuisine: ${rec.cuisine}<br>
            difficulty: ${rec.difficulty}<br>
            id: ${rec.id}<br>
            instructions: ${rec.instructions}<br>
            mealType: ${rec.mealType}<br>
            name: ${rec.difficulty}<br>
            prepTimeMinutes: ${rec.prepTimeMinutes}<br>
            rating: ${rec.rating}<br>
            reviewCount: ${rec.reviewCount}<br>
            servings: ${rec.servings}<br>
            tags: ${rec.tags}<br>
            userId: ${rec.userId}`;

            let img: HTMLImageElement = document.createElement('img');
            img.src = rec.image;

            let ul: HTMLUListElement = document.createElement('ul');

            for (const ingredient of rec.ingredients) {
                let li: HTMLLIElement = document.createElement('li');
                li.innerHTML = ingredient;
                ul.appendChild(li);
            }
            divOneRec.innerHTML = oneRecContent;
            divOneRec.append(ul, img);
            divIngredients.appendChild(divOneRec);

        }
    })
