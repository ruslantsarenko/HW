
/*           Занятие 3.Слайд 4.1 Записать в виде switch case следующее условие:
if (a === ‘block’) {
	console.log(‘block’)
} else if (a === ‘none’) {
	console.log(‘none’)
} else if (a === ‘inline’) {
console.log(‘inline’)
} else {
	console.log(‘other’)
}
Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение. */

let a = 'block';

switch (a) {

  case 'block' : console.log('block');
  break;

  case 'none' : console.log('none');
  break;

  case 'inline' : console.log('inline');
  break;

  default : console.log('other');
}

/*           Занятие 3.Слайд 4.2 Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора. 


             Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”. */

let vari1 =  'hidden' ;

vari1 === 'hidden'?vari1= 'visible' : vari1 = 'hidden';


/*           Используя if, записать условие:
 если переменная равна нулю, присвоить ей 1;
если меньше нуля - строку “less then zero”;
если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись). 

*/
let variable = -2
variable < 0 ? variable = 'less then zero' : variable > 0 ? variable *= 10 : variable =1
console.log(variable) ;


/*Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. */

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };

 (car['age']>5) ? (console.log('Need Repair'))&& (car['needRepair'] = true) : ( car['needRepair'] = false);

/*           Занятие 3.Слайд 10.1 На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
будут в верхнем регистре. Использовать for или while. */

let string = 'i am in the easycode';
let out = '';
for (let i=0; i<string.length; i++ ) {
  
  out += (string[i - 1] === ' ') ? string[i].toUpperCase() : string[i];

};
console.log(out);
//Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let strInvert = 'tseb eht ma i';
let invertOut = '';

for (let i=strInvert.length-1; i>=0; i-- ) {
  invertOut += strInvert.charAt(i);
}

/* Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.*/

let factIn = 10;
let factOut = 1;
for (let i=1; i<=factIn; i++ ) {
   factOut*= i;
}

/*На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for. */

let string2 = 'JavaScript is a pretty good language';
let out2 = '';
for (let i=0; i<string2.length; i++ ) {
  
  out2 += string2[i - 1] === ' ' ? string2[i].toUpperCase() : string2[i];
  };
  out2 = out2.split(' ').join('');

console.log(out2);

/* 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of. */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i=0; i<=arr.length; i++) {
if (i%2 !== 0) {
  console.log(i);
}
}
/*  Дан объект:
let list = {
     name: ‘denis’,
     work: ‘easycode’,
     age: 29
}

Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
*/

let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}
for (let key in list) {
  if(typeof list[key] === "string" ){
    list[key]= list[key].toUpperCase();
  }

};




/*1. Создать объект с полем product, равным ‘iphone’
2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
3. Добавить поле details, которое будет содержать объект с полями model и color */

const obj = {
  product : 'iphone'
}
obj.price = 1000;
obj.currency = 'dollar';
obj.details = {
  model : 5,
  color : 'blue'
}
