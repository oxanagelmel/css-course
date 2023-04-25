"use strict"

console.log("Connected");

// Conditionals можно проверять через if


// let age = 10;

// if (age) {          // правдивое ли значение или нет преобразовав в boolean
//     console.log('hello!');
// }else {
//     console.log('goodbye!');
// }

// Если нужно что бы случилось одно из предложенных то с else
// if (age < 10) {         
//     console.log('hi');
// } else if (age < 20) {
//     console.log('hello!');
// } else if (age < 30) {
//     console.log('good day!');
// } else if (age < 40){
//     console.log('privet');
// }


// Если нужно чтобы несколько проверок произошли
// if (age < 10) {         
//     console.log('hi');
// }

// if (age < 20) {
//     console.log('hello!');
// }

// if (age < 30) {
//     console.log('good day!');
// }
// if (age < 40){
//     console.log('privet');
// }

// Нельзя думать что это && и || так как они выводять только одно правдивое или ложное значение


// switch

// натыкаясь на один он выводит всё в консоль
// let dayNumber = 5;

// switch (dayNumber) {
//     case 1:  // 1 === dayNumber сравнение
//         console.log('Monday');
//         break;     // что бы остановилось на одном
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:      // dayNumber === 5 || dayNumber === 6
//     case 6:
//         console.log('Friday');
//         break;
// }

// let userName = 'Oleg';

// if (userName === 'Oleg') {
//     console.log('double discount');
// } else if (userName === 'Petya' || userName === 'Vasya') {
//     console.log('discount!');
// } // если у нас всё с === то лучше switch case

// // или 

// switch(userName) { //userName пишится только один раз
//     case 'Oleg':
//         console.log('double discount');
//         break;
//     case 'Petya': 
//     case 'Vasya':
//         console.log('discount!');
//         break;
//     default:        // аналог else если не совпадает ни один вариант
//         console.log('smth');
// }
// Здесь легче писать и читать код дописывая только case´ы и если проверяется что то штучное
// Если другое имя которого нет в списке или нету default то ничего не вводится в консоль



// ternary operator
// условие ? ок : не ок;
// a ? b : c;

// применяется для того чтобы он вернул что то первое или что то второе

let age = 10;

// НЕ ПРАВИЛЬНО
// const result = age > 18 ? console.log('hello') : console.log('hi');
// const result = age > 18 ? undefined : undefined;
// console.log(result);
// писать тернарный оператор с console.log внутри не правильно, так как он всегда нам вводит здесь undefined


// Тернарным оператором нужно пользоваться тогда когда то что он возвращает, вы этим будете пользоваться. Например вывести в консоль или запустить prompt usw.

// ПРАВИЛЬНЫЙ СПОСОБ использовать Тернарный Оператор:
console.log(age > 18 ? 'hello' : 'hi');


let dayNumber = 2;

console.log(dayNumber > 4 ? 'Oleg' : 'Anna');

// если условие true то оператор возвращает нам первое от двоиточия --> 'Oleg'
// если условие false то второе --> 'Anna'


// if (age > 18) {
//     console.log('hello');
// } else {
//     console.log('hi');
// }


