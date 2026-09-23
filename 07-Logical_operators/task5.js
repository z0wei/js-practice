let login = prompt("Login?");

if (login === '' || login === null) {
    alert("Вы отменили вход!");
} else if (login === 'Админ') {
    let password = prompt("Password?");

    if (password === '' || password === null) {
        alert("Вы отменили вход!");
    } else if (password === "Я главный") {
        alert("Здравствуйте!");
    } else {
        alert("Неверный пароль");
    }
} else {
    alert("Я вас не знаю");
}