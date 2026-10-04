// 1. Один аргумент — без скобок
let double = n => n * 2;
console.log('1:', double(5)); // 10

// 2. Два аргумента — скобки обязательны
let sum = (a, b) => a + b;
console.log('2:', sum(3, 4)); // 7

// 3. Нет аргументов — пустые скобки
let greet = () => console.log('3: Привет!');
greet(); // 3: Привет!

// 4. Многострочная — return обязателен
let calc = (a, b) => {
    let result = a * b;
    return result + 10;
};
console.log('4:', calc(2, 3)); // 16

// 5. Без return в многострочной — undefined
let broken = (a, b) => {
    let result = a + b;
    // return забыт!
};
console.log('5:', broken(1, 2)); // undefined 

// 6. Стрелка в тернарнике
let age = 20;
let welcome = (age < 18) ?
    () => console.log('6: Привет!') :
    () => console.log('6: Здравствуйте!');
welcome(); // 6: Здравствуйте!

// 7. Стрелка как колбэк
[1, 2, 3].forEach(n => console.log('7:', n * 10)); // 7: 10, 7: 20, 7: 30

// 8. IIFE через стрелку
(() => console.log('8: IIFE'))(); // 8: IIFE