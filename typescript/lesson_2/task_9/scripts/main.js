var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
var userOne = new User(22, 'Vasya', 'Test', 'email@gmail.com', 380983338485);
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};
//function for generate phone number
var generNumber = function getNewNum() {
    var kod = ['(099)', '(055)', '(096)', '(097)'].random();
    var num = Math.round(Math.random() * 10000000).toString();
    return "".concat(kod, " ").concat(num.slice(0, 3), "-").concat(num.slice(3, 5), "-").concat(num.slice(5, 7));
};
//fuction for generate new Arr with users
function makeUsersObj2(users) {
    for (var i = 1; i <= 10; i++) {
        users.push(new User(i, "Vasya_".concat(i), "Lom_".concat(i), "".concat(i, "_ddd_").concat(i, "@gmail.com"), Number(generNumber())));
    }
    return users;
}
var usersNew = [];
var users2 = makeUsersObj2(usersNew);
console.log(users2);
/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/
console.log(users2.filter(function (elem) { return elem.id % 2 == 0; }));
/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
*/
console.log(users2.sort(function (a, b) { return a.id - b.id; }));
/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
*/
var Client = /** @class */ (function () {
    function Client(id, name, surname, email, phone, order) {
        this._id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
    return Client;
}());
var clients = [
    new Client(1, 'Gogi1', 'Kant_1', 'www@gmail.com', '+34543545', [{ id: 1, name: 'Cap1', price: 100 }, {
            id: 2,
            name: 'Cap2',
            price: 200
        }]),
    new Client(2, 'Gogi2', 'Kant_2', 'fadgfdgwww@gmail.com', '+38022 333-44-54', [{
            id: 1,
            name: 'Cap1',
            price: 100
        }, { id: 2, name: 'Cap2', price: 200 }, { id: 3, name: 'Cap3', price: 300 }]),
    new Client(3, 'Gogi3', 'Kant_3', 'gffdgwww@gmail.com', '+234234234', [{ id: 1, name: 'Cap1', price: 100 }, {
            id: 2,
            name: 'Cap2',
            price: 200
        }, { id: 3, name: 'Cap3', price: 300 }, { id: 4, name: 'Cap4', price: 300 }]),
    new Client(4, 'Gogi4', 'Kant_4', 'dfgfdg@gmail.com', '+234324', [{ id: 1, name: 'Cap1', price: 100 }, {
            id: 2,
            name: 'Cap2',
            price: 200
        }, { id: 3, name: 'Cap3', price: 300 }]),
    new Client(5, 'Gogi5', 'Kant_5', 'dfg5t34@gmail.com', '+38022 333-44-54', [{
            id: 1,
            name: 'Cap1',
            price: 100
        }, { id: 2, name: 'Cap2', price: 200 }, { id: 3, name: 'Cap3', price: 300 }]),
    new Client(6, 'Gogi6', 'Kant_6', 'erg34@gmail.com', '+123123', [{ id: 1, name: 'Cap1', price: 100 }, {
            id: 2,
            name: 'Cap2',
            price: 200
        }, { id: 3, name: 'Cap3', price: 300 }, { id: 4, name: 'Cap4', price: 300 }]),
    new Client(7, 'Gogi7', 'Kant_7', '3454@gmail.com', '+123213', [{ id: 1, name: 'Cap1', price: 100 }]),
    new Client(8, 'Gogi8', 'Kant_8', '34543546w@gmail.com', '+123213', [{ id: 1, name: 'Cap1', price: 100 }, {
            id: 2,
            name: 'Cap2',
            price: 200
        }, { id: 3, name: 'Cap3', price: 300 }, { id: 4, name: 'Cap4', price: 300 }]),
    new Client(9, 'Gogi9', 'Kant_9', '435435fgfdgwww@gmail.com', '+21312312323', [{
            id: 1,
            name: 'Cap1',
            price: 100
        }, { id: 2, name: 'Cap2', price: 200 }, { id: 3, name: 'Cap3', price: 300 }]),
    new Client(10, 'Gogi10', 'Kant_10', 'dfgwww@gmail.com', '+43435', [{ id: 1, name: 'Cap1', price: 100 }, {
            id: 2,
            name: 'Cap2',
            price: 200
        }, { id: 3, name: 'Cap3', price: 300 }, { id: 4, name: 'Cap4', price: 300 }]),
];
console.log(clients);
/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*/
console.log(clients.sort(function (a, b) { return Object.keys(a.order).length - Object.keys(b.order).length; }));
/*

- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/
function Car(id, model, producer, year, speed, volume) {
    this.id = id;
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.spead = speed;
    this.volume = volume;
    this.drive = function () {
        return "\u0457\u0434\u0435\u043C\u043E \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(this.spead, " \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443");
    };
    this.increaseMaxSpeed = function (newSpeed) {
        return this.spead += newSpeed;
    };
    this.changeYear = function (newValue) {
        return this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
var car1 = new Car(1, 'Megane', 'Renault', 1999, 200, '2.0');
console.log(car1.drive());
console.log(car1.increaseMaxSpeed(50));
console.log(car1.changeYear(2020));
car1.addDriver({ id: 1, name: 'Grag' });
Car.prototype.info = function () {
    var res = '';
    function show(obj) {
        for (var oneCar in obj) {
            var val = obj[oneCar];
            if (typeof val === 'function')
                continue;
            if (typeof val === 'object' && val !== null) {
                res += "".concat(oneCar, ": ");
                show(val);
            }
            else if (typeof oneCar === 'string') {
                res += "".concat(oneCar, ": ").concat(val, " ");
            }
        }
        return res;
    }
    return show(this);
};
console.log('========INFO Car');
console.log(car1.info());
console.log('========INFO Car');
/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/
console.log('================================');
var CarNew = /** @class */ (function () {
    function CarNew(id, model, producer, year, speed, volume) {
        this._id = id;
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }
    CarNew.prototype.drive = function () {
        return "\u0457\u0434\u0435\u043C\u043E \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(this.speed, " \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443");
    };
    CarNew.prototype.info = function () {
        var res = '';
        for (var argumentsKey in this) {
            if (typeof this[argumentsKey] === 'object' && this[argumentsKey] !== null) {
                res += "".concat(argumentsKey, ": ").concat(JSON.stringify(this[argumentsKey]), "\n                ");
            }
            else {
                res += "".concat(argumentsKey, ": ").concat(this[argumentsKey], "\n                ");
            }
        }
        return res;
    };
    CarNew.prototype.increaseMaxSpeed = function (newSpeed) {
        return this.speed += newSpeed;
    };
    CarNew.prototype.changeYear = function (newValue) {
        return this.year = newValue;
    };
    CarNew.prototype.addDriver = function (driver) {
        this.driver = driver;
    };
    return CarNew;
}());
var carNew = new CarNew(1, '500-C', 'MB', 1599, 300, '2.0');
console.log(carNew.drive());
console.log(carNew.info());
console.log(carNew.increaseMaxSpeed(500));
console.log(carNew.changeYear(2020));
carNew.addDriver({ id: 5, name: 'Vlad' });
console.log("===INFO");
console.log(carNew.info());
console.log("===INFO");
/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
*/
var Popelushka = /** @class */ (function () {
    function Popelushka(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
    return Popelushka;
}());
var popelushechki = [
    new Popelushka('Olya', 22, 35),
    new Popelushka('Olya1', 32, 34),
    new Popelushka('Olya2', 20, 35),
    new Popelushka('Olya3', 30, 41),
    new Popelushka('Olya4', 15, 36),
    new Popelushka('Olya5', 54, 38),
    new Popelushka('Olya6', 18, 40),
    new Popelushka('Olya7', 21, 35),
    new Popelushka('Olya8', 24, 40),
    new Popelushka('Olya9', 28, 36)
];
console.log(popelushechki);
/*
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 */
var Prince = /** @class */ (function (_super) {
    __extends(Prince, _super);
    function Prince() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Prince;
}(Popelushka));
var prince = new Prince('Kolya', 44, 36);
console.log(prince);
/*
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
*/
for (var _i = 0, popelushechki_1 = popelushechki; _i < popelushechki_1.length; _i++) {
    var onePopelushka = popelushechki_1[_i];
    if (onePopelushka.sizeFoot === prince.sizeFoot) {
        console.log(onePopelushka);
    }
}
/*
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
 */
console.log(popelushechki.find(function (obj) { return obj.sizeFoot === prince.sizeFoot; }));
Array.prototype.foreachCustom = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};
var arr555 = [1, 2, 33];
arr555.foreachCustom(function (el) { return console.log(el); });
Array.prototype.filterCustom2 = function (callback) {
    var res = [];
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var elem = _a[_i];
        if (callback(elem)) {
            res.push(elem);
        }
    }
    return res;
};
console.log(popelushechki.filterCustom2(function (elem) { return elem.age > 38; }));
Array.prototype.mapCustom2 = function (callback) {
    var res = [];
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var el = _a[_i];
        res.push(callback(el));
    }
    return res;
};
var newPopelArr = popelushechki.mapCustom2(function (elem) {
    return Object.assign(Object.assign({}, elem), { age: elem.age * 2 });
});
console.log(newPopelArr);
