
// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
const week = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресение",
    };
    console.log(week[2]);

// Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
const user = {
name: 'Kirill',
surname: 'Mazunin',
age: 41
}
alert(`${user.name} - ${user.surname} - ${user.age}`); 

// Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
user.middleName = prompt('Введите отчество');
console.log(user);

// Удалите свойство surname
delete user.surname;

// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

const week2 = {};

for (let i = 0; i < arr1.length; i++) {
week2[arr1[i]] = arr2[i];
}

// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
const obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
obj[key] = obj[key] **2;
}
console.log(obj);

// const obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// Найдите сумму элементов приведенного объекта.

let sum = 0;
for (let key in object) {
    for (let innerKey in object[key]) {
        sum += object[key][innerKey]
    }
}
console.log(sum);

или

const values = Object.values(obj);
const resValues = [].concat(...values.map((el) => Object.values(el))).reduce((acc, val) => acc + val, 0);
console.log(resValues);

или

const values = Object.values(obj);
const resValues = values.reduce((acc, el) => acc.concat(Object.values(el)), []). reduce((acc, val) => acc + val, 0);
console.log(resValues);

// Создайте объект riddles 
// Добавьте свойства question, answer
// создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// Добавьте свойство hints (содержащее 2 подсказки)
// Если пользователь ответил неверно, ему даётся одна подсказка
// Если пользователь ответил второй раз неверно, даётся вторая подсказка
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”
let riddles = {
    question : 'Зимой и летом одним цветом',
    answer : 'ель',
    askQuestion: function () {
    const userAnswer = promt(this.question);
    if(answerUser.toLowerCase() === this.answer.toLowerCase()) {
    console.log('Правильно');
    } else{
        console.log('Не правильно');
        const hint_1 = "Это растет в лесу"
        const hint_2 = "Её наряжают в новый год"
        console.log(hint_1);
        console.log(hint_2);
    }
}
}
    riddles.askQuestion();