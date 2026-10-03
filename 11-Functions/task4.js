let a = +prompt("Число:");
let b = +prompt("Степень:");

function pow(x, n) {
    if (n < 1 || n % 1 !== 0) {
        return "Ошибка: степень должна быть натуральной";
    }
    return x ** n;
}

console.log(pow(a, b));