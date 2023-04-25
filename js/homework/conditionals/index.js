"use strict"

// 1. Пользователь вводит ТРИ числа вывести в консоль наибольшее из них. В этой задаче необходимо сделать проверку на число (нужно убедиться, что пользователь ввел именно число)

function isNumber(num) {
    return typeof num === 'number' && !isNaN(num);
}

console.log(isNumber(3));


// 2. Используя конструкцию switch, напишите программу, которая переводит числа в слова. Например: пользователь вводит число 2, программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)

let homeworkNumber = 5;

switch(homeworkNumber) {
    case 0:
        console.log("Ноль");
        break;
    case 1: 
        console.log("Один");
        break;
    case 2:
        console.log("Два");
        break;
    case 3: 
        console.log("Три");
        break;
    case 4:
        console.log("Четыри");
        break;
    case 5: 
        console.log("Пять");
        break;
}

// 3. Дан следующий код:

let age = 30;

//    if (age < 10) {
//         console.log('hi!');
//    } else if (age < 20) {
//         console.log('hello!');
//    } else {
//         console.log('good day!');
//    }

//     Необходимо переписать этот код используя тернарный оператор

console.log(age < 10 ? 'hi!' : age < 20 ? 'hello!' : 'good day');



// 4. Написать программу для проверки таблицы умножения:
//          I. Пользователь вводит число a
//         II. Пользователь вводит число b
//        III. Пользователь вводит ответ на a * b

//     Нам необходимо проверить ответ пользователя на корректность, 
//     если пользователь ответил неправильно то выводим ответ вида: Ошибка! 
//     Правильный ответ: correctAnswer

//     Где correctAnswer - это переменная, в которой находится правильный ответ

//     Если пользователь ввел правильный ответ, то выводим сообщение вида: Правильно!

let numberA = 3;
let numberB = 2;
let correctAnswer = (numberA * numberB);

let yourAnswer = 3;

if (yourAnswer < correctAnswer){
    console.log('Ошибка!');
} else if (yourAnswer > correctAnswer){
    console.log('Ошибка!')
} else {
    console.log('Правильно!');
}