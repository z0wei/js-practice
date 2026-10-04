let login = prompt("Введите логин:");
let age = +prompt("Введите возраст:");
let password = prompt("Введите пароль:");

function checkLogin(login) {
    let levelusers = 1;
    switch (login) {
        case "admin":
            levelusers=100;
            break;
        case "moderator":
            levelusers=50;
            break;
        case "user":
            levelusers=10;
            break;
        default:
            levelusers=1;
    }
    return levelusers;
}

let checkage = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let checkPassword = (password) => {
    if (password !== "" && password !== null) {
        return true;
    } else {
        return false;
    }
}

let levelusers = checkLogin(login);
let isAdult = checkage(age);
let hasPassword = checkPassword(password);
let result;

if (!isAdult || !hasPassword) {
   result = "Отказано";
} else {
   result = "Разрешено";
}

let statuS = (levelusers > 50) ? "Привилегированный" : "Обычный";

let role;
role ??= "guest";

console.log("Login: " + login + "| Уровень:" + levelusers + "| Роль:" + role + "| Статус:" + statuS + "| Доступ:" + result);
