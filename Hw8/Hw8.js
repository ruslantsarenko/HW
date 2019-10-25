/*1. Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
 */
function minus(firstArg) {
  if (isNaN(firstArg) ===true) {
    firstArg = 0;
  }
  return function doSubtr(secArg) {
    if (isNaN(secArg) ===true) {
      secArg = 0;
    }
    return console.log(firstArg - secArg) 
  }
}
//minus(10)();

/*Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)
 */

function multiplyMaker(arg) {
  
  let result = arg;
  return function(arg2) {
    return result*=arg2;
  }
}
const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));


/* Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5
*/
const stringModule = (function () {

  let result = '';
    function setStr(str) {
    result = typeof str === 'number' ? String(str) : str;
    }
    function getStr() {
      return result;
  }
    function getStrLength() {
      return result.length
  }
    function invertStr() {
      let strInvert = '';

        for (let i=result.length-1; i>=0; i-- ) {
          strInvert += result.charAt(i);
      }
      return strInvert;
    }
  return {
    setStr,
    getStr,
    getStrLength,
    invertStr,
  }
})();
stringModule.setStr(123);
console.log(stringModule.getStr());
console.log(stringModule.getStrLength());
console.log(stringModule.invertStr());

/* Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение();  */

const calcModule = (function () {

  let res;
    function setValue(val) {
    
    res = typeof val === 'number' ? val : 'Передайте число';
    return this
    }
    function sumValue(val) {
      res += val;
      return this;
  }
  function multValue(val) {
      res *= val;
      return this;
  }
  function subtractValue(val) {
      res -= val;
      return this;
  }
  function divideValue(val) {
      res /= val;
      return this;
  }
  function exponeValue(val) {
      res = Math.pow(res, val);
      return this;
  }
  function getValue() {
      res = +res.toFixed(2);
      return res;
  }

  return {
      setValue,
      sumValue,
      multValue,
      subtractValue,
      divideValue,
      exponeValue,
      getValue
  }
})();
calcModule.setValue(10);
calcModule.sumValue(5);
calcModule.multValue(2);
console.log(calcModule.getValue());