"Use strict"

console.log("Connected");


//Types

/**
 * 1. string - строка - любое значение в кавычках ''
 * 2. number - число - 23   2.5
 * 3. undefined - если есть неопределённость значения
 * 4. null - отсутствие значения - пустота - даже не 0
 * 5. boolean - true or false
 * 6. object - ссылочный тип данных - любое значение например {}
 * 
 * 7. begint  -  что бы можно было считать большие числа - добавлять в консоле к числу букву n и оно считает коректно
 * 8. symbol  -  с помощью символа можно создавать в js уникальные значения - используется для итерируемых обьектов
 */


// ПЕРЕМЕННАЯ и её польза:
// --> ячейка памяти
// без неё нужно было бы каждый раз в ручную менять имя
// addAdressTo('Petya');
// addPurchaseTo('Petya');
// //.....
// shipProductsTo('Petya');


// С ПЕРЕМЕННОЙ - я могу поменять имя только раз в переменной
// let userName = 'Petya';

// addAdressTo('userName');
// addPurchaseTo('userName');
// //.....
// shipProductsTo('userName');


// Как обьявить ПЕРЕМЕННУЮ?
// var a = 2;  //--> устаревший и без контроля use strict его можно обьявить много раз и это может стать проблемой
// let b = 3;
// const c = 4;


// c let можно перезаписать значение
// let a = 2;
// a = 3;

// console.log(a);

// const  - константа получает своё значение при рождении и больше его не меняет
// const c = 4;
// c = 5;      // изза этого вылазеет ошибка

// console.log(c);


// Именование переменной:
// - $laeofjodfm
// - user2
// - _user
// - userName

// - 2user - нельзя ставить перед названием числа и.т.д.!!!


// typeof
console.log( typeof 2 ); // определение того что стоит после typeof
// --> здесь он определяет и выводит в консоль что это number


console.log( typeof null ); // выводит object - ошибка

console.log( typeof 'Oxana' ); // string


// ВОЗВРАТ ЗНАЧЕНИЯ:
// любое обращение к переменной всегда возвращает значение

// z.B.
const age = 2;
console.log(age);
console.log( 3 + 4); //js вычесляет значение и выводит/возвращает  результат значения 7

console.log(console.log());

console.log( typeof typeof 2);
// сначала вычесляется typeof 2 - 'number' 
// а потом вчесляется typeof 'number' и вводит string!

// typeof = унарный оператор - может быть только один оперант с права
// оперант = вычесленное значение

// +/- = бинарный оператор



// ПРЕОБРАЗОВАНИЕ 
// в строку:
// String();
// 2 + ''
// преобразование в лева на право

// в булевый:
// Boolean();

