/*- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.*/
var div = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(function (res) { return res.json(); })
    .then(function (_a) {
    var carts = _a.carts;
    for (var _i = 0, carts_1 = carts; _i < carts_1.length; _i++) {
        var cartsAllElement = carts_1[_i];
        var divProd = document.createElement('div');
        divProd.setAttribute('class', 'cart');
        var data = "<b style=\"font-size: 20px; background: pink\">CART</b> id: ".concat(cartsAllElement.id, "<br>\n                        discountedTotal: ").concat(cartsAllElement.discountedTotal, "<br>\n                        total: ").concat(cartsAllElement.total, "<br>\n                        totalProducts: ").concat(cartsAllElement.totalProducts, "<br>\n                        totalQuantity: ").concat(cartsAllElement.totalQuantity, "<br>\n                        userId: ").concat(cartsAllElement.userId, "<br><hr>");
        divProd.innerHTML = data;
        div.appendChild(divProd);
        var divProduct = document.createElement('div');
        var res = '<b style="background: dodgerblue">PRODUCTS CART</b><br><br>';
        for (var _b = 0, _c = cartsAllElement.products; _b < _c.length; _b++) {
            var product = _c[_b];
            res += "<b style=\"color: red\">id: ".concat(product.id, "</b> <br>");
            res += "title: ".concat(product.title, " <br>");
            res += "price: ".concat(product.price, " <br>");
            res += "quantity: ".concat(product.quantity, " <br>");
            res += "total: ".concat(product.total, " <br>");
            res += "discountPercentage: ".concat(product.discountPercentage, " <br>");
            res += "discountedTotal: ".concat(product.discountedTotal, " <br>");
            res += "thumbnail: ".concat(product.thumbnail, " <br><br>");
        }
        divProduct.innerHTML = res + '<hr>';
        divProd.appendChild(divProduct);
    }
});
/*)
- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
*/
fetch('https://dummyjson.com/recipes')
    .then(function (res) { return res.json(); })
    .then(function (_a) {
    var recipes = _a.recipes;
    console.log(recipes);
    var divIngredients = document.getElementById('ingredients');
    for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
        var rec = recipes_1[_i];
        var divOneRec = document.createElement('div');
        divOneRec.setAttribute('class', 'oneRec');
        var oneRecContent = "caloriesPerServing: ".concat(rec.caloriesPerServing, "<br>\n            cookTimeMinutes: ").concat(rec.cookTimeMinutes, "<br>\n            cuisine: ").concat(rec.cuisine, "<br>\n            difficulty: ").concat(rec.difficulty, "<br>\n            id: ").concat(rec.id, "<br>\n            instructions: ").concat(rec.instructions, "<br>\n            mealType: ").concat(rec.mealType, "<br>\n            name: ").concat(rec.difficulty, "<br>\n            prepTimeMinutes: ").concat(rec.prepTimeMinutes, "<br>\n            rating: ").concat(rec.rating, "<br>\n            reviewCount: ").concat(rec.reviewCount, "<br>\n            servings: ").concat(rec.servings, "<br>\n            tags: ").concat(rec.tags, "<br>\n            userId: ").concat(rec.userId);
        var img = document.createElement('img');
        img.src = rec.image;
        var ul = document.createElement('ul');
        for (var _b = 0, _c = rec.ingredients; _b < _c.length; _b++) {
            var ingredient = _c[_b];
            var li = document.createElement('li');
            li.innerHTML = ingredient;
            ul.appendChild(li);
        }
        divOneRec.innerHTML = oneRecContent;
        divOneRec.append(ul, img);
        divIngredients.appendChild(divOneRec);
    }
});
