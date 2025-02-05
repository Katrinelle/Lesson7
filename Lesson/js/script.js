// -----

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jeck");

// alert(user.name); // Jeck
// alert(user.isAdmin); // false

// -----

// function User(name) {
//   this.name = name;
//   this.sayHi = function () {
//     alert("My name is: " + this.name);
//   };
// }

// let ivan = new User("Ivan");
// ivan.sayHi(); // вспливаюче вікно (тому що є alert) з текстом
// // y name is: Ivan

// -----

// let obj = {};

// let key = prompt("Введіть ключ", "_proto_");
// obj[key] = "повне значення";

// alert(obj[key]);

// -----

// let obj = Object.create(null);

// let key = prompt("Введіть ключ", "_proto_");
// obj[key] = "певне значення";

// alert(obj[key]);

// -----
// // робимо кола різнокольорові и видкріваємо їх

// class CircleBox {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }
//   hide() {
//     this.$el.style.display = "none";
//   }
//   show() {
//     this.$el.style.display = "block";
//   }
// }

// // extends CircleBox - extends - функція наслідцвання CircleBox - це звідки

// class CircleItem extends CircleBox {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = options.size + "px";
//     this.$el.style.height = options.size + "px";
//     this.$el.style.borderRadius = "50%";
//     this.$el.style.background = options.color;
//   }
// }

// const CircleRed = new CircleItem({
//   selector: "#circleRed",
//   color: "red",
//   size: 50,
// });

// const CircleGreen = new CircleItem({
//   selector: "#circleGreen",
//   color: "green",
//   size: 80,
// });

// const CircleBlack = new CircleItem({
//   selector: "#circleBlack",
//   color: "black",
//   size: 30,
// });

// // в консолі на сторінці пишемо CircleBlack.hide() - чорний круг ховається

// -----

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
// }

// // додаємо методи через прототип
// Car.prototype.message = function () {
//   console.log(`${this.name} is ${this.color} color`);
// };

// Car.prototype.start = function () {
//   console.log(`${this.name} is start`);
// };
// // // в консолі на сторінці пишемо opel.start() - opel is start

// const BMW = new Car("bmw", "red");

// const opel = new Car("opel", "green");

// // в консолі на сторінці пишемо BMW.message() - bmw is red color

// -----
// mixin

// let message = {
//   messageHello() {
//     console.log(`Hello`, `${this.name}`);
//   },
//   messageBye() {
//     console.log(`Bye`, `${this.name}`);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, message);

// new User("Ivan").messageHello(); // Hello Ivan

// -----

// JS 2020 року:
// height = height ?? 100;
// // на старій версії:
// height = height !== undefined && height !== null ? height : 100;

// -----
// Поліфіли – вбудовані функції

// Math.trunc;
// перевіряємо чі є ця функція

// if (!Math.trunc)

// правильні коментарі:

// @paran {number} X число
// @param {number} N піднесе в стіпінь

// if (a === 5) {
//   console.log("ok");
// }

// https://eslint.org/
