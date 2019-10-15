/*Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};
 */
const rectangle = {
  height : 5,
  width : 4,
  getSquare() {
    let SquareRes = this.height * this.width
   console.log(SquareRes)
  }

}
rectangle.getSquare();

/*Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5
 */

const price = {
  price: 10,
  discount: '20%',
  getPrice() {
    console.log(this.price)
  },
  getPriceWithDiscount() {
    
    let discountNumb = parseFloat(this.discount);
      if(!isNaN(discountNumb)){
        let priceWithDiscount = this.price - (this.price * discountNumb)/100;
        console.log(priceWithDiscount);
      }else {
      console.log(price);
    }
  },
};

//price.getPriceWithDiscount();

/* Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;
*/

const objHeight = {
  height : 10,
  heightInc() {
    this.height++;
  }
}
objHeight.heightInc();
objHeight.heightInc();
console.log(objHeight.height)

/*Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {...},
    plusOne: function () {...},
    minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3
 */
const numerator = {
  value: 1,
  double: function () {
    this.value*=2
    return this
  },
  plusOne: function () {
    this.value++
    return this
  },
  minusOne: function () {
    this.value--
    return this
  },
}
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value)

/*Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств. 


  */

 function Calculator() {

  this.read = function() {
    this.a = +prompt('Введите первое число', 0);
    this.b = +prompt('Введите второе число', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();