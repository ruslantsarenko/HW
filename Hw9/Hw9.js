/*Есть класс Planet
function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}
Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
принимать, кроме name, название спутника (satelliteName). Переопределите метод
getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
дополнительный текст 'The satellite is' + satelliteName.
Например:
var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName(); // 'Planet name is earth. The satellite is moon’
 */

class Planet  {
  constructor(name){
    this.name = name;
  }
    getName() {
      return 'Planet name is ' + this.name;
  }
}

class PlanetWithSatellite extends Planet {
 constructor(name,satelliteName ){
   super(name)
  this.satelliteName = satelliteName;
 }
 
  getName() {
    return super.getName() + '. ' + 'The satellite is ' + this.satelliteName;
  }
}
let earth = new PlanetWithSatellite('earth', 'moon');
console.log(earth.getName()); 

/*2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
Создайте наследников этого класса:
классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
От каждого класса создать экземпляр (дом, торговый центр)
 */

 class Building {
   constructor(name,countFloors) {
     this.name = name;
     this.countFloors = countFloors; 
   }
   setFloors(val) {
     this.countFloors = val
   }
   getFloors() {
     return this.countFloors
   }
 }
 class House extends Building {
   constructor(countFlats,...restProps){
     super(...restProps);
     this.countFlats = countFlats
   }
   getFloors() {
     return {
       этажи: super.getFloors(),
       всегоКвартир: super.getFloors() * this.countFlats
     }
   }
 }

 class Market extends Building {
  constructor(countStores,...restProps){
    super(...restProps);
    this.countStores = countStores
  }
  getFloors() {
    return {
      этажи: super.getFloors(),
      всегоМагазинов: super.getFloors() * this.countStores,
    }
  }
}

 const testHouse = new House(2,'дом',5);
 const testMarket = new Market(3,'магаз',3)
 console.log(testHouse. getFloors());
 console.log(testMarket. getFloors());

/*3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
“Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
Задача на переопределение метода у экземпляров класса.

 */
class Furniture {
  constructor(name,price) {
    this.name = name;
    this.price = price; 
  }
  
}
Furniture.prototype.getInfo = function() {
  return 'Name: ' + this.name + ' '+'Price: ' + this.price;
}
class OfficeFurniture extends Furniture {
  constructor(countTables,...restProps){
    super(...restProps);
    this.countTables = countTables
  }
  getInfo() {
    return super.getInfo() + ' ' + 'Количество комп столов ' + this.countTables
   }
}

class HomeFurniture extends Furniture {
  constructor(isBookcases,...restProps){
    super(...restProps);
    this.isBookcases = isBookcases
  }
  getInfo() {
    return super.getInfo() + ' ' + 'Наличие книжных шкафов ' + this.isBookcases
   }
}


const testOffFurn = new OfficeFurniture(2,'мебель',300);
const testHomeFurn = new HomeFurniture(true,'мебель',500);
console.log(testOffFurn.getInfo());
console.log(testHomeFurn.getInfo());

/* 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
true/false, должно быть скрытым). Свойства определяются в момент вызова
конструктора.
У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)
*/

class User {
  constructor(name,date) {
    this.name = name;
    this.date = date; 
  }
  
}
User.prototype.getInfo = function() {
  return 'Name: ' + this.name + ' '+'Date: ' + this.date;

}

class Admin extends User {
  constructor(name,date,superAdmin){
    super(name,date);
    this._localSuperAdmin = superAdmin
  }
  getAdmin() {
     
   return this._localSuperAdmin
  }
  getInfo () {
  
    return super.getInfo() + ' superAdmin: ' + this._localSuperAdmin;
  };
 }

  const testAdmin = new Admin('Вася','16 june',true);
  console.log(testAdmin.getInfo())

  class Guest extends User {

        constructor(name, date) {
            super(name, date);
            this.validDate = date + 7;
          }
        getInfo() {
          return super.getInfo() + 'validDate' + validDate 
        }  
    }
    let testGuest = new Guest('Гость', 16);
    console.log(testGuest);


    