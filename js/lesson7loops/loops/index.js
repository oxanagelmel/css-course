"Use strict"

console.log("Connected");

//безконечно
// while (2) {
//     console.log('hello');
// }

// while (условие) {
//      console.log(i--);

    //  тело = пространство между {}
    //  итерация
    //  одно условие одна итерация

// }

// let i = 0;

// while (i < 5) {         //i = 0 меньше 5 и уменьшается с --
//     console.log(i--);   //идёт в минус и получается всегда true и цикл продолжается
// }

// while (i < 5) {         // i = 0 меньше 5 и увеличивается с ++
//     console.log(i++);   // переменная меняется и становится лож и нет зацикливания
// }


// // for используется чаще
// for (let i = 0; i < 5; i++) {

//     console.log(i);

// }

// let i = 0;
// for ( ; prompt('null'); ) {

//     console.log(i++);

// }



// Задача:
// 1. вывести в консоль числа от 7 до 3
// 2. вывести на экран двузначные числа которые делятся на 4 но не делятся на 6
// 3. написать программу которая выводит числа от 1 до n (n вводится prompt'ом)

//break


let hamsters = 100;
let tries = 0; 

do {
    let userHamtersAmount = prompt('enter how many hamsters do u wanna get');

    if (isNaN(userHamtersAmount)) {
        alert('please enter a number!');
        continue;
    }

    if (userHamtersAmount === null) {
        break;
    }

    userHamtersAmount = Number(userHamtersAmount);

    if (userHamtersAmount <= hamsters) {
        hamsters -= userHamtersAmount;
        alert (`You successfully got ${userHamtersAmount} hamsters`);
    } else {
        alert(`There is no so many hamsters!`);
    }

    tries++;

} while (hamsters > 0)

if (hamsters === 0) {
    console.log(`You won and made ${tries} tries!`);
}else {
    console.log(`You've cancelled the game!`)
}



