// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку
// "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)

// function userData(name, surname, age){
// alert (`Привет ${name} ${surname} с возрастом ${age}`)
// }
// let name = prompt('Введите ваше имя ');
// let surname = prompt('Введите вашу фамилию ');
// let age = prompt('Введите сколько вам лет');
// userData(name, surname, age);

// Создайте функцию которая возводит переданное число в квадрат

// function userData(number, kvadrat){
//     alert (`Число ${number} в квадрате будет ${kvadrat}`)
// }
// let number = prompt('Введите число ');
// let kvadrat = number*number;
// userData(number, kvadrat);

// Сделайте функцию, которая параметром принимает число и проверяет, 
// положительное это число или отрицательное. 
// В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

function userData(number){
    if (number>0) {
        alert('+++');
    } else if(number<0){
        alert('---');
    }
}
let number = prompt('Введите число ');
userData(number);
 
// Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func() 

let num1 = +prompt('Введите число 1');
let num2 = +prompt('Введите число 2');
let num3 = +prompt('Введите число 3');

let sum = (num1, num2, num3) => num1 + num2 + num3;
console.log(sum(num1, num2, num3));

// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. 
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. 
// Просуммируйте полученные результаты и выведите их в консоль.

let number = prompt('Введите число из которого хотите извлечь корень');
let sqrt = (number) => console.log(Math.sqrt(number));
sqrt(number);

// Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции

let a = prompt('Введите число 1');
let b = prompt('Введите число 2');

let min = (a, b) => console.log(Math.min(a, b));
min(a, b);

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

let count = +prompt('Введите число от1 до 7');

function week(count) {
switch(count) {
case 1 :
console.log("Понедельник");
break;
case 2 :
console.log("Вторник");
break;
case 3 :
console.log("Среда");
break;
case 4 :
console.log("Четверг");
break;
case 5 :
console.log("Пятница");
break;
case 6 :
console.log("Суббота");
break;
case 7 :
console.log("Воскресенье");
break;
}
}
week(count);



const getWeekday2 = (param) => {
    let weekday = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    return weekday[param - 1];
    }
    console.log(getWeekday2(2));

// Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток 
// (Доброе утро\день\вечер\ночи Иван)

let name = prompt('Введите имя');
let date = new Date();
console.log(date)
function dateHello(name, date) {
if(date.getHours() > 4 && date.getHours() < 12) {
alert(`Доброе утра ${name}`)
} else if (date.getHours() > 12 && date.getHours() < 17) {
alert(`Доброе день ${name}`)
} else if (date.getHours() > 17 && date.getHours() < 22) {
alert(`Доброе вечер ${name}`)
} else {
alert(`Доброе ночи ${name}`)
}
}
dateHello(name, date);




function greetingDay(name) {
let time = new Date().getHours();
let greeting = '';
if (time > 5 && time < 12) {
greeting = 'Доброе утро';
} else if (time > 12 && time < 17) {
greeting = 'Добрый день';
} else if (time > 17 && time < 24) {
greeting = 'Добрый вечер';
} else {
greeting = 'Доброй ночи';
}
console.log(greeting, name)
}
greetingDay('Кирилл');
