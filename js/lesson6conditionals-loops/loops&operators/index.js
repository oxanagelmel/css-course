"use strict"

console.log("Connected");

// && || ??

// Операторы - Зачем они нужны?
// проверять массово какие то условия

//  &&
// 2 > 1 && 10 === 10 --> true
// true && true --> если все операнты true то он возвращает последний

// Разница между && и || 
// false && true --> false
// - для && важно чтобы оба операнта были true

// false || true --> true
// - доя || важно что бы хотябы один оперант был true

// ПРАВДИВОЕ ЛОЖНОЕ ЗНАЧЕНИЕ:
// правдивое является то значение, которое если бы его преобразовали в булеванный тип дало нам true
// Boolean(10) --> true
// 10 && 20 --> 20 = само преобразование в true не случается

// 20 && 0 --> true && false --> 0 --> false

// null --> ложное

// Итог: && ищет первое ложное значение

//  ||
// полная противоположность и ищет первое правдивое/ true

// null || '' --> ''

// у && приоритнт перед ||

// 10 || false || 'hello' && undefined || false --> 10

// typeof 2 && false - 1 || undefined + 0 && typeof Boolean(2 + '')
// number && -1 || NaN && 'boolean'
//  -1 || NaN
//  -1

// typeof Boolean(2 + '') --> 'boolean'

// String(5) - 2 && typeof 20 || '' || Boolean(null) + 0 || 0 - false /10
// '5' - 2 && 'number' || '' || Boolean(null) + 0 || 0 - false /10
// 3 && 'number' || '' || Boolean(null) + 0 || 0 - false /10
// 'number' || '' || Boolean(null) + 0 || 0 - false /10
// 'number' || Boolean(null) + 0 || 0 - false /10
// 'number'

// Boolean(null) + 0 || 0 - false /10
// false + 0 || 0 - false /10
// 0 || 0 - false /10
// 0 - false /10
// 0 - 0 /10
// 0 - 0
// 0

// 'number' || 0
// 'number'


//  ??

// возвращает первое попавшееся значение которое не null и не undefined

// null ?? 0 --> 0
// 0 ?? null --> 0
// undefined ?? '' --> ''
// undefined ?? null --> null


//prompt

// открывает отдельное окошко для ввода текста и возвращает записаный текст строкой в консоль

// prompt('hello!');
// "hello" 
// нажимаешь отмену и возвращается null

// prompt('How old are you?') ?? 0 
// нажимаешь отмену и возвращается 0

// let age = prompt('old?') ?? 0;
// undefined - если нажимаешь отмену
// age
// 0
// age = prompt('old?') ?? 0;
// нажимаешь 10
// '10'

// так я не допускаю того чтобы у меня вывелось в конзоль null или undefined

// age = prompt('old?') ?? 0;
// '' нажав на ок
// пустая строка это валидное значение

// ?? с этим оператором null не пройдёт

