/*
=========================
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
*/
let coursesArray: {title: string, monthDuration: number, hourDuration: number, modules: string[]}[] = [
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

let filterModuls: {title: string, monthDuration: number, hourDuration: number, modules: string[]}[] = coursesArray.filter((el) => el.modules.indexOf('sass') === 1);
console.log(filterModuls);

/*
--написати пошук всіх об'єктів, в який в modules є docker
*/
console.log("docker docker docker docker");

let filterDocker: {title: string, monthDuration: number, hourDuration: number, modules: string[]}[] = coursesArray.filter((el) => el.modules.indexOf('docker') === 1);
console.log(filterDocker);

/*
 описати колоду карт (від 6 до туза без джокерів)
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
*/
let cardsSuit: string[] = ['spade', 'diamond', 'heart', 'clubs'];
let cardsValue: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let cardsColor: string[] = ['red', 'black'];

let cardsAll: any[] = cardsValue.reduce((acc: any[], oneCard: string) => {
    let color: string = '';

    for (const suit of cardsSuit) {
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red';
        } else if (suit === 'spade' || suit === 'clubs') {
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
let resCard: void = cardsAll.forEach((el): void => {
    if (el.value === 'ace' && el.cardSuit === 'spade') {
        console.log(el);
    }
});
/*
 - всі шістки
 */
let allSix: any[] = cardsAll.filter(el => {return el.value === '6'});
console.log(allSix);
/*
 - всі червоні карти
 */
let allRed: any[] = cardsAll.filter(el => {return el.color === 'red'});
console.log(allRed);
/*
 - всі буби
 */
let allDiamond: any[] = cardsAll.filter(el => {return el.cardSuit === 'diamond'});
console.log(allDiamond);
/*
 - всі трефи від 9 та більше
*/
let allClubs: any[] = cardsAll.filter(el =>  el.cardSuit === 'clubs').filter(el =>  el.value !== '6').filter(el =>  el.value !== '7').filter(el =>  el.value !== '8');
console.log(allClubs);