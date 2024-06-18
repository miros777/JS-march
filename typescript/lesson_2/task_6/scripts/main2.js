/*
=========================
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
*/
var coursesArray = [
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
var filterModuls = coursesArray.filter(function (el) { return el.modules.indexOf('sass') === 1; });
console.log(filterModuls);
/*
--написати пошук всіх об'єктів, в який в modules є docker
*/
console.log("docker docker docker docker");
var filterDocker = coursesArray.filter(function (el) { return el.modules.indexOf('docker') === 1; });
console.log(filterDocker);
/*
 описати колоду карт (від 6 до туза без джокерів)
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
*/
var cardsSuit = ['spade', 'diamond', 'heart', 'clubs'];
var cardsValue = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
var cardsColor = ['red', 'black'];
var cardsAll = cardsValue.reduce(function (acc, oneCard) {
    var color = '';
    for (var _i = 0, cardsSuit_1 = cardsSuit; _i < cardsSuit_1.length; _i++) {
        var suit = cardsSuit_1[_i];
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red';
        }
        else if (suit === 'spade' || suit === 'clubs') {
            color = 'black';
        }
        acc.push({
            cardSuit: suit,
            value: oneCard,
            color: color
        });
    }
    return acc;
}, []);
console.log(cardsAll);
/*
- знайти піковий туз
 */
var resCard = cardsAll.forEach(function (el) {
    if (el.value === 'ace' && el.cardSuit === 'spade') {
        console.log(el);
    }
});
/*
 - всі шістки
 */
var allSix = cardsAll.filter(function (el) { return el.value === '6'; });
console.log(allSix);
/*
 - всі червоні карти
 */
var allRed = cardsAll.filter(function (el) { return el.color === 'red'; });
console.log(allRed);
/*
 - всі буби
 */
var allDiamond = cardsAll.filter(function (el) { return el.cardSuit === 'diamond'; });
console.log(allDiamond);
/*
 - всі трефи від 9 та більше
*/
var allClubs = cardsAll.filter(function (el) { return el.cardSuit === 'clubs'; }).filter(function (el) { return el.value !== '6'; }).filter(function (el) { return el.value !== '7'; }).filter(function (el) { return el.value !== '8'; });
console.log(allClubs);
