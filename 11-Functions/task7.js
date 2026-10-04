// 1. Declaration vs Expression
sayHi();                    // ?
function sayHi() {
    console.log('1: Привет'); // 1: Привет
}

// sayHi2();                // раскомментируй — что будет?
let sayHi2 = function() {
    console.log('2: Привет'); // 2: Привет
};
sayHi2();

// 2. Функция — значение
function greet() { console.log('3: Hello'); }
let copy = greet;
copy();
console.log('4:', typeof greet); // 4: function

// 3. Колбэк
function ask(question, yes, no) {
    if (question === 'yes') yes();
    else no(); // 5: Отказ
}

ask('yes', function() { console.log('5: Согласен'); }, function() { console.log('5: Отказ'); });
ask('no',  function() { console.log('6: Согласен'); }, function() { console.log('6: Отказ'); });

// 4. IIFE
(function() {
    console.log('7: IIFE выполнилась');
})(); // 7: IIFE выполнилась

// 5. Условное объявление
let age = 20;
let welcome;
if (age < 18) {
    welcome = function() { console.log('8: Привет!'); };
} else {
    welcome = function() { console.log('8: Здравствуйте!'); };
}
welcome(); // 8: Здравствуйте!