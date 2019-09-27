
//           Занятие 1.Слайд 10.1 Получить первую и последнюю буквы строки

let string = 'some test string';

let firstLetter = string[0];
let lastLetter = string[string.length - 1];
//console.log(firstLetter, lastLetter);

//           Занятие 1.Слайд 10.2. Сделать первую и последнюю буквы в верхнем регистре

let FirstUppCase = firstLetter.toUpperCase();
let LastUppCase = lastLetter.toUpperCase();
//console.log(FirstUppCase, LastUppCase);

//           Занятие 1.Слайд 10.3. Найти положение слова ‘string’ в строке

let position = string.indexOf('string');
//console.log(position);

//           Занятие 1.Слайд 10.4. Найти положение второго пробела (“вручную” ничего не считать)

let space = string.indexOf(' ');
let secSpace = string.indexOf(' ', space+1);
//console.log(secSpace);

//           Занятие 1.Слайд 10.5. Получить строку с 5-го символа длиной 4 буквы

let slice1 = string.substr(5,4);
//console.log(slice1);

//           Занятие 1.Слайд 10.6. Получить строку с 5-го по 9-й символы

let slice2 = string.slice(5,9);
//console.log(slice2);

//           Занятие 1.Слайд 10.7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

cutString = string.slice(0, -6);
//console.log(cutString);

//           Занятие 1.Слайд 10.8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

let a = 20;
let b = 16;
let Str = String(a)+String(b);
//console.log(Str);

//           Занятие 1.Слайд 13.1. Получить число pi из Math и округлить его до 2-х знаков после точки

let numb1 = Math.PI;
numb1 = numb1.toFixed(2);
//console.log(numb1);

//           Занятие 1.Слайд 13.2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

let maxNumb = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let minNumb = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
//console.log(maxNumb,minNumb);

//           Занятие 1.Слайд 13.3. Работа с Math.random: a. Получить случайное число и округлить его до двух цифр после запятой

random1 = Math.random();
random1 = random1.toFixed(2);
//console.log(random1);

//           Занятие 1.Слайд 13.3. Работа с Math.random: b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
let x = 6; //в эту переменную вводить макс
random2 = Math.random()*x;
random2 = random2.toFixed();
//console.log(random2);

//           Занятие 1.Слайд 13.4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

let result = 0.6 + 0.7;
result = parseFloat(result.toFixed(1));
//console.log(result);

//           Занятие 1.Слайд 13.5. Получить число из строки ‘100$’

let dollar = parseInt('100$');
//console.log(dollar);

//           Занятие 2.Слайд 12
/* Чему равно а, почему?

let a = 0 || 'string';       Вернет  'string' потому что 0 false                            // ‘string’;  0 - false, ‘string’ - true
let a = 1 && 'string';  Вернет 'string' потому что 1 не false
let a = null || 25;  Вернет 25 потому что null не true
let a = null && 25; Вернет null потому что он false
let a = null || 0 || 35;  Вернет 35 потому что null и 0 не true
let a = null && 0 && 35;  Вернет null потому что он false

Что отобразится в консоли. Почему?

12 + 14 + '12'  Отобразится 2612 - сначала произойдет сложение 12 и 14 а потом результат склеится с строчным 12
3 + 2 - '1' Отобразится 4 - сложится 3 и 2, а строчный 1 переведется в число
'3' + 2 - 1 Отобразится 31 из 2 вычтется 1 и склеится с строчным 3
true + 2 Отобразится 3 - true станет единицей и произойдет сложение
+'10' + 1 Отобразится 11 - плюс преобразует строчные 10 в число и произойдет сложение
undefined + 2 Отобразится NaN потому что undefined не может преобразоваться в число
null + 5 Отобразится 5 - null станет 0 
true + undefined Отобразится NaN - undefined не преобразится в число
 */

 //           Занятие 2.Слайд 16.1Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

 let variable1;

 if (variable1 ==='hidden') {
  variable = 'visible';
 } else {
  variable1 = 'hidden'
 }
 //console.log(variable1);

 /*           Занятие 2.Слайд 16.2
  Используя if, записать условие:
  если переменная равна нулю, присвоить ей 1;
 если меньше нуля - строку “less then zero”;
 если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись). */

let variable2 = -3;

if (variable2 === 0) {
  variable2 = 1
} else if (variable2<0) {
  variable2 = 'less then zero'
} else variable2 *=10
//console.log(variable2);

/* Занятие 2.Слайд 16.3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. */

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };

if (car['age']>5) {
  console.log('Need Repair');
  car['needRepair'] = true;
} else ( car['needRepair'] = false);
//console.log(car);

/* Занятие 2.Слайд 16.4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль. */

let item = { name: 'Intel core i7', price: '100$', discount: '15%' };
let priceNumb = item['price'];
priceNumb = parseFloat(priceNumb);
let discountNumb = item['discount'];
discountNumb = parseFloat(discountNumb);
let NaNCheck = isNaN(discountNumb);

if (("discount" in item === true) && (NaNCheck===false)) {
  item.priceWithDiscount = priceNumb - (priceNumb * discountNumb)/100;
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}

/* Занятие 2.Слайд 16.5. Дан следующий код:

let product = {
    name: “Яблоко”,
    price: “10$”
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

Написать условие если (цена товара больше или равна минимальной цене) и (меньше или равна максимальной цене) то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено. */

let product = {
  name: 'Яблоко',
  price: '10$'
};

let min = 10;
let max = 20;

let priceNumb2 = product['price'];
priceNumb2 = parseFloat(priceNumb2);

if ((priceNumb2>= min)&&(priceNumb2<= max)) {
  console.log(product.name)
} else {
  console.log('товаров не найдено')
}







