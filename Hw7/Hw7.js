/* Найти параграф и получить его текстовое содержимое (только текст!)
 */

const par = document.querySelector('p')
console.log(par.textContent)

/*Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
*/
 
function domInfo(arg) {
   const res = {
    type: arg.nodeType,
    name: arg.nodeName,
    countChild: arg.childNodes.length,

  }
  return res
}


/*Найти в коде список ul и добавить класс “list” */
const ul = document.querySelector('ul');
ul.classList.add('list');

/* Найти в коде ссылку, находящуюся после списка ul, и добавить id=link*/

const someLink = ul.nextElementSibling.nextElementSibling;

someLink.setAttribute('id','link' )


/*На li через один (начиная с самого первого) установить класс “item”
 */

 const secLi = ul.firstElementChild.nextElementSibling;
 
 secLi.classList.add('item');
 
/*На все ссылки в примере установить класс “custom-link” */
const allLinks = document.querySelectorAll('a');
allLinks.forEach((el) =>{
  el.classList.add('custom-link')
})

/* Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
<ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul>
Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

*/

const allLi = ul.children;

  ul.insertAdjacentHTML('beforeend', `<li>item ${allLi.length+1}</li>`);
  ul.insertAdjacentHTML('beforeend', `<li>item ${allLi.length+1}</li>`);


/*  В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong)*/

const allLinksInUl = document.querySelectorAll('ul li a');
allLinksInUl.forEach((a)=>{
  a.insertAdjacentHTML('beforeend','<strong></strong>')
})

/*В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 
 */

const newImg = document.createElement('img');
newImg.setAttribute('href', 'test.jpg');
newImg.setAttribute('alt', 'картинка');
document.body.prepend(newImg)

/*. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
 */

const mark = document.querySelector('mark');
mark.insertAdjacentHTML('beforeend','green')
mark.classList.add('green')

/*Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:

Условия:
В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
Количество пользователей может быть любым.
Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.
 */

const map = ["_id", "name", "isActive", "balance"];
const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
    "nestedField": { total: 200 }
  }
];

class Table {
  constructor(arr) {
    this.arr = arr;
    this.render()
  }

  render() {
    const table = document.createElement('table');
    table.insertAdjacentHTML('beforeend', '<thead><th>#</th><th>Name</th><th>Email</th><th>Balance</th></thead>');

    let totalBal = 0;
    this.arr.forEach((user,i)=>{
      totalBal += user.balance; 
      const html = ` <tr><td>${i+1}</td><td>${user.name}</td><td>${user.email}</td><td>${user.balance}</td></tr>`
      table.insertAdjacentHTML('beforeend',html)
      
    })
    const htmlBal = `<tr><td></td><td></td><td></td><td>Total balance: <b>${totalBal}</b></td></tr>`
    table.insertAdjacentHTML('beforeend',htmlBal)
    return document.body.append(table)
    
  }
}
const tableUsers = new Table(users);