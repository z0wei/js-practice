function greet(name) {
    return `Привет, ${name}!`;
}

console.log(greet("Аня"));    // Привет, Аня!
console.log(greet("Вася"));   // Привет, Вася!



let isAdult = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

console.log(isAdult(20));   // true
console.log(isAdult(15));   // false



let double = a => a * 2;
console.log(double(5));   // 10
console.log(double(0));   // 0



function cals(a, b, c) {
switch (c) {
    case "+":
        return a + b;
    case "-":
        return a - b;
    case "*":
        return a * b;
    case "/":
        return a / b;
    default:
        return "Ошибка";  
}
}



function processUser(login, callback) {
    if (login === "" || login === null) {
        callback("Ошибка: пустой логин");
    } else {
        callback("Пользователь: " + login);
    }
}
processUser("admin", function(msg) { console.log(msg); });
processUser("", function(msg) { console.log(msg); });
processUser(null, (msg) => console.log(msg));







