const pEL = document.querySelector('#block p:first-child'); // Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
console.log(pEL);

const www = document.getElementsByClassName('www'); // Получите ссылку на первый абзац с классом www. и вывести его в консоль
const pOne = www[0];
console.log(pOne);    


const link = document.querySelector('.link'); // Вам необходимо поменять текст внутри ссылки на “link text js”. Заменить href, на значение https://developer.mozilla.org/ru/ 
link.textContent = 'link text js';
link.setAttribute('href', 'ссылка');

const img = document.querySelector('.photo'); //Вам необходимо с помощью js поменять значение src на любое изображение из интернета
img.setAttribute('scr', 'ссылка');



// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 

const contentDiv = document.querySelector('.content');
const newP = document.createElement('p');
newP.textContent = 'Новый текстовой документ';
contentDiv.appendChild(newP);
contentDiv.removeChild(newP);

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const contentDiv = document.querySelector(".content");
const newButton = document.createElement("button");
newButton.textContent = "Жмякни меня!";
contentDiv.appendChild(newButton);

let clickCount = 0;
newButton.addEventListener("click", () => {
clickCount++;
console.log(`Количество нажатий на кнопку: ${clickCount}`);
});

const resetButton = document.createElement('button');
resetButton.textContent = 'Сбросить жмяки';
resetButton.setAttribute('id', 'resetButton');
resetButton.addEventListener('click', function() {
clickCount = 0;
console.log('Счетчик обнулен');
});
const content = document.querySelector('.content');
content.appendChild(resetButton);



// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const contentDiv = document.querySelector(".content");
const button = document.createElement("button");
button.textContent = "Отправить";
contentDiv.appendChild(button);


button.addEventListener('click', () => {
button.textContent = "Текст отправлен"
setTimeout(()=>{
    button.textContent = "Отправить"
}, 3000);
});