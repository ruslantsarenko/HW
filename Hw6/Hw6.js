/*Зная структуру html, с помощью изученных
методов получить (в консоль):
1. head
2. body
3. все дочерние элементы body и вывести их в
консоль.
4. первый div и все его дочерние узлы
а) вывести все дочерние узлы в консоль
б) вывести в консоль все дочерние узлы,
кроме первого и последнего
Для навигации по DOM использовать методы,
которые возвращают только элементы
 */

/*
 console.log(document.head) ;
 
console.log(document.body) ;
console.log(document.body.children);

let firstDiv = document.querySelector('div');
const arrChildren = firstDiv.children;
console.log(firstDiv,arrChildren);

  

  for (var i = 1; i < arrChildren.length - 1; i++) {
    console.log(arrChildren[i])
  }

 */

/* . Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
Функция принимает только DOM объекты.
*/

let isParent = (parent, child) => {
  return child.parentNode === parent;
}


/*2. Получить список всех ссылок, которые не находятся внутри списка ul */
let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));
console.log(links);

/*3. Найти элемент, который находится перед и после списка ul */

let arr = document.body.children;
let ul = document.querySelector('ul');
for(let i = 0; i < arr.length;i++)
{
   if(arr[i] === ul)
   {
     let prev = arr[i - 1];
     let next = arr[i + 1];
     console.log(prev,next)
   }
   
}
/* У вас на странице есть три инпута, чекбокс(галочка) и кнопка "отправить" (итого: пять элементов).

Ваша задача - написать валидацию. То есть, пользователь заполняет все поля, нажимает на кнопку "Отправить", а вы проверяете все ли поля заполнены корректно.

Результат вывести в консоль (все хорошо/всё плохо).

Список полей:

Имя (больше 2-х символов и меньше - 40)

Логин (должен быть заполнен/не пустой)

Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)

Галочка - "Прочитал условия" (должна быть включена)

Если хоть одно из условий не совпадает, то форма не валидна.*/

function valid(form) {
  let name = document.querySelector('.name');
  let login = document.querySelector('.login');
  let password = document.querySelector('.password').value;
  let checkbox= document.querySelector('.checkbox');
  let err = 0;
  let pattern = /^(?=.*[az])(?=.*[AZ])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if ((name.value<2)||(name.value>40)){
    err++
  }else if (login.value<=0){
    err++
  }else if (pattern.test(password)==false) {
    err++
  }else if (checkbox.checked == false) {
    err++
  }
   err<1? console.log('все хорошо') : console.log('всё плохо')

}
/* */
/* */