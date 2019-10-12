/*Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ] */

let arrMinLeng = [  [14, 45],  [1],  ['a', 'c', 'd']];

arrMinLeng.sort((a,b)=>{
  return a.length-b.length
  
})
//console.log(arrMinLeng);
/* Есть массив объектов:
[
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores). */

arrCpu = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
];

arrCpu.sort((a,b)=>{
  return a.info.cores-b.info.cores
  
})
//console.log(arrCpu)

/* Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
*/

let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(arrProducts, lowPrice, HighPrice) {
  let arrResult = [];
  arrProducts.forEach(function(obj) {
  if ((obj.price>= lowPrice)&&(obj.price<=HighPrice)) {
    
    arrResult.push(obj);
    arrResult.sort((a,b)=>{
      return a.price- b.price
    })
  }
  })
  return console.log(arrResult)
}
filterCollection(products, 15, 30);

/* На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/

let OddArr = [1,2,3,5,8,9,10];
function getOdd(someArr) {
 let oddResult = [];
 someArr.forEach(function(el) {
           
        if (el % 2 == 0) {
          oddResult.push({'digit' : el,'odd' : false})
        }else {
          oddResult.push({'digit' : el,'odd' : true})
          }
      })
      return console.log(oddResult)
    }
    //getOdd(OddArr);

/* Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.*/

let arrNumb = [12, 4, 50, 1, 0, 18, 40];

function IsNull(someArrNumb) {
 let isNullRes =  someArrNumb.includes(0);
 isNullRes === true ? isNullRes = false: isNullRes = 'нет нулей'
return isNullRes;
}

//console.log(IsNull(arrNumb))

// Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

let arrWords = ['yes', 'hello', 'no', 'easycode', 'what'];

let wordLen = function(element) {
  // checks whether an element is even
  return element.length > 3;
};

console.log(arrWords.some(wordLen ));

/* Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!” */

arrIndex = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

function getSec(someArr) {
  
  someArr.sort((a,b)=>{
    return a.index -b.index
   })
  let SecResult = someArr.reduce(function(acc,obj){
  return acc+obj.char
},'')

return console.log(SecResult);
}

getSec(arrIndex);

/* Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
*/

let myEvery = function(arr, callback) {
  if ((arr.length>1)&&(typeof callback === "function")) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    } 
  } return true;
}
};

let randArr = [6,7,8,10,12];

function positiveNumb(a) {
  return a>5
};

console.log(myEvery(randArr, positiveNumb))

/* Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки

*/
let arrSepWords = ['my', 'name', 'is', 'Trinity'];
let arrValue = [10, 20, 30];
let arrAge = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
let arrMirror = ['abc', '123'];

function showResult(arr,callbackFunc) {

return console.log(callbackFunc(arr));
}

let stickTogether = function (arr) {
  let out = 'New value: ';
 arr.forEach(function(el){
   out+=el
 })
 return out;
}

//showResult(arrSepWords,stickTogether);

let doMulti = function(arr) {
  let out = 'New value: ';
  arr.forEach(function(el){
    out+=el*10+' '
  })
  return out;
}

showResult(arrValue,doMulti);

let ShowAge = function(arr) {
  let out = 'New value: ';
  arr.forEach(function(el){
    out+=el.name+' '+'is '+el.age+', '
  })
  return out;
}
//showResult(arrAge,ShowAge);

let doMirror = function(arr) {
  let out = 'New value: ';
  arr.forEach(function(el){
    out+=el.split('').reverse().join('')+', '
  })
  return out;
}
//showResult(arrMirror,doMirror);