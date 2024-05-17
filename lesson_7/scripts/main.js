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

//add new метод random for array
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}
//function for generate phone number
let generNumber = function getNewNum() {
    let kod = ['(099)', '(055)', '(096)', '(097)'].random();
    let num = Math.round(Math.random(1, 9) * 10000000).toString();
    return `${kod} ${num.slice(0, 3)}-${num.slice(3, 5)}-${num.slice(5, 7)}`
};

//fuction for generate new Arr with users
function makeUsersObj(users) {
    for (let i = 1; i <= 10; i++) {
        users.push(new User(i, `Vasya_${i}`, `Lom_${i}`, `${i}_ddd_${i}@gmail.com`, generNumber()));
    }
    return users;
}

let users = [];
console.log(makeUsersObj(users));
/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/
console.log(users.filter(elem => elem.id % 2 == 0));
/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
*/
console.log(users.sort((a, b) => a.id - b.id));

/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
*/
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Gogi1', 'Kant_1', 'www@gmail.com', '+34543545', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }]),
    new Client(2, 'Gogi2', 'Kant_2', 'fadgfdgwww@gmail.com', '+38022 333-44-54', [{
        id: 1,
        name: 'Cap1',
        price: 100
    }, {id: 2, name: 'Cap2', price: 200}, {id: 3, name: 'Cap3', price: 300}]),
    new Client(3, 'Gogi3', 'Kant_3', 'gffdgwww@gmail.com', '+234234234', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}, {id: 4, name: 'Cap4', price: 300}]),
    new Client(4, 'Gogi4', 'Kant_4', 'dfgfdg@gmail.com', '+234324', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}]),
    new Client(5, 'Gogi5', 'Kant_5', 'dfg5t34@gmail.com', '+38022 333-44-54', [{
        id: 1,
        name: 'Cap1',
        price: 100
    }, {id: 2, name: 'Cap2', price: 200}, {id: 3, name: 'Cap3', price: 300}]),
    new Client(6, 'Gogi6', 'Kant_6', 'erg34@gmail.com', '+123123', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}, {id: 4, name: 'Cap4', price: 300}]),
    new Client(7, 'Gogi7', 'Kant_7', '3454@gmail.com', '+123213', [{id: 1, name: 'Cap1', price: 100}]),
    new Client(8, 'Gogi8', 'Kant_8', '34543546w@gmail.com', '+123213', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}, {id: 4, name: 'Cap4', price: 300}]),
    new Client(9, 'Gogi9', 'Kant_9', '435435fgfdgwww@gmail.com', '+21312312323', [{
        id: 1,
        name: 'Cap1',
        price: 100
    }, {id: 2, name: 'Cap2', price: 200}, {id: 3, name: 'Cap3', price: 300}]),
    new Client(10, 'Gogi10', 'Kant_10', 'dfgwww@gmail.com', '+43435', [{id: 1, name: 'Cap1', price: 100}, {
        id: 2,
        name: 'Cap2',
        price: 200
    }, {id: 3, name: 'Cap3', price: 300}, {id: 4, name: 'Cap4', price: 300}]),
];
console.log(clients);
/*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
*/
console.log(clients.sort((a, b) => a.order.length - b.order.length));

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
    this.speed = speed;
    this.volume = volume;

    this.drive = function () {
        return `їдемо зі швидкістю ${this.speed} на годину`;
    }
    this.increaseMaxSpeed = function (newSpeed) {
        return this.speed += newSpeed;
    }
    this.changeYear = function (newValue) {
        return this.year = newValue;
    }
    this.addDriver = function (driver) {
         this.driver = driver;
    }
}

let car1 = new Car(1, 'Megane', 'Renault', 1999, 200, '2.0');
console.log(car1.drive());
console.log(car1.increaseMaxSpeed(50));
console.log(car1.changeYear(2020));

car1.addDriver({id: 1, name: 'Grag'});

Car.prototype.info = function () {
    let res = '';
    function show(obj) {

        for (const oneCar in obj) {
            let val = obj[oneCar];

            if (typeof val === 'function') {
                continue;
            } else if (typeof val === 'object' && val !== null) {
                res += `${oneCar}: `;
                show(val);
            } else if(typeof oneCar === 'string'){
                res += `${oneCar}: ${val} `;
            }
        }
        return res;
    }

    return show(this);

}
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

class CarNew {
    constructor(id, model, producer, year, speed, volume) {
        this.id = id;
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }

    drive() {
        return `їдемо зі швидкістю ${this.speed} на годину`;
    }

    info() {
        let res = '';
        for (const argumentsKey in this) {
            if (typeof this[argumentsKey] === 'object' && this[argumentsKey] !== null) {
                res += `${argumentsKey}: ${JSON.stringify(this[argumentsKey])}
                `;
            } else {
                res += `${argumentsKey}: ${this[argumentsKey]}
                `;
            }
        }
        return res;
    }

    increaseMaxSpeed(newSpeed) {
        return this.speed += newSpeed;
    }

    changeYear(newValue) {
        return this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }

}

let carNew = new CarNew(1, '500-C', 'MB', 1599, 300, '2.0');
console.log(carNew.drive());
console.log(carNew.info());
console.log(carNew.increaseMaxSpeed(500));
console.log(carNew.changeYear(2020));
carNew.addDriver({id: 5, name: 'Vlad'});
console.log("===INFO");
console.log(carNew.info());
console.log("===INFO");

/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
*/
class Popelushka {
    name;
    age;
    sizeFoot;

    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let popelushechki = [
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
class Prince extends Popelushka {

}

let prince = new Prince('Kolya', 44, 36);
console.log(prince);
/*
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
*/
for (const onePopelushka of popelushechki) {
    if (onePopelushka.sizeFoot === prince.sizeFoot) {
        console.log(onePopelushka);
    }
}
/*
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
 */
console.log(popelushechki.find(obj => obj.sizeFoot === prince.sizeFoot));
/*
Через Array.prototype. створити власний foreach, filter, map*/
Array.prototype.foreachCustom = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
let arr = [1, 2, 33];
arr.foreachCustom(el => console.log(el));

Array.prototype.filterCustom = function (callback) {
    let res = [];
    for (const elem of this) {
        if (callback(elem)) {
            res.push(elem);
        }
    }
    return res;
}
console.log(popelushechki.filterCustom((elem) => elem.age > 38));

Array.prototype.mapCustom = function (callback) {
    let res = [];
    for (const el of this) {
        res.push(callback(el));
    }
    return res;
}
let newPopelArr = popelushechki.mapCustom((elem) => {
    return {
        ...elem, age: elem.age * 2
    };
});
console.log(newPopelArr);


