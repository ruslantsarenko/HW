
/* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3) */

function multiply() {
  let result = 1;
  if (arguments.length == 0) return 0;
  else {
  for(let i=0; i<arguments.length; i++) result *= arguments[i];
  return result;
  }
}
//console.log(multiply(1,2,3,4,5))

/* Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”. */

function reverseString(str) {
  let invertOut = '';
  for (let i= str.length-1; i>=0; i-- ) {
  invertOut+=str.charAt(i);
  }
  return  console.log (invertOut);
}
/* Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: */

function getCodeStringFromText(str) {
  let CodeStrOut = '';
  for(let i=0; i<str.length; i++) {
    CodeStrOut +=str.charCodeAt(i) + ' ';
  }
  return console.log (CodeStrOut);
}
getCodeStringFromText('lksdv')

/* Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа. */

function randomizer(argument) {
  if ((argument>=1)&&(argument<=10)){
    argument = Math.floor(argument);
    let randNumb = Math.floor(Math.random() * 10) + 1; 
    if (randNumb === argument) { 
      return console.log('Вы выиграли')} 
    else return console.log('Вы не угадали ваше число ' + argument + ' ' + 'а выпало число '+ randNumb )
  }
  else return console.log('Ошибка- нужно число от 1 до 10')
  }
//randomizer(6);

//  5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(numb) {
  numb = Math.floor(numb);
  let arrNumb = [];
  for (let i=1; i<=numb; i++) {
    arrNumb.push(i); 
  }
  return console.log(arrNumb)
}
//getArray(5);

/* Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
doubleArray([1,2,3]) // [1,2,3,1,2,3] */

function doubleArray(argument) {
    let arrOut = [];
    arrOut = arrOut.concat(argument);
  
  for (let i=0; i<argument.length; i++) {
    arrOut.push(argument[i]);  
  }
  return console.log(arrOut)
}
doubleArray([1,'яблоко',3]);

/*Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
 */

 function changeCollection() {
   let changeCollResult = [];
   [].forEach.call(arguments, function (el) { 
    el.shift();
    changeCollResult.push(el);
 })
 return console.log(changeCollResult)
 }
 //changeCollection([1,2,3], ['a', 'b', 'c'])




/* Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
 */
let users = [ {name: 'Denis', age: '29', gender: 'male'} , {name: 'Ivan', age: '20', gender: 'male'},{name: 'Kate', age: '29', gender: 'female'} ];


  function funcGetUsers(arrName, arg, value) {
    let GetUsersResult = [];
    if (funcGetUsers.arguments.length == 3){
      arrName.forEach(function(key) {
        if ((arg == 'name')&&(key.name == value)) {
        GetUsersResult.push(key);
        }else if ((arg == 'age')&&(key.age == value)) {
        GetUsersResult.push(key);
        }else if ((arg == 'gender')&&(key.gender == value)){
        GetUsersResult.push(key);
        }
     
    });
      if (GetUsersResult.length == 0) {
        return console.log('нет пользователей с такими параметрами')
      }else  return console.log(GetUsersResult)
   
    }else return console.log('недостаточно данных')
  }
//funcGetUsers(users, 'gender', 'male');
  
/*1. Исходный массив [-2, 3, 4, -5, -6, 2, 4, -56]. Найдите количество отрицательных и положительных элементов*/

let arrNumbers = [-2, 3, 4, -5, -6, 2, 4, -56]

  let negCount = 0;
  let posCount = 0;
for (let i=0; i<arrNumbers.length; i++){
 
  if(arrNumbers[i]>0){
    posCount++
  }else if (arrNumbers[i]<0){
    negCount++
  }
}
  //console.log('Количество отрицательных элементов '+ negCount+' '+'Количество положительных элементов '+posCount)


 


/*2. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,

каждый элемент которого будет хранить информацию о числе и его четности:

[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]  */

let OddArr = [1,2,3,5,8,9,10];
function getOdd(OddArr) {
 let oddResult = [];
      for (let i=0; i<OddArr.length; i++) {
           
        if (OddArr[i] % 2 == 0) {
          oddResult.push({'digit' : OddArr[i],'odd' : false})
        }else {
          oddResult.push({'digit' : OddArr[i],'odd' : true})
          }
      }return console.log(oddResult)}
//getOdd(OddArr);