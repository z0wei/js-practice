let numbers = prompt("число больше 100");    // prompt("Введите число больше ста!");
while (numbers) {
    if (numbers>100) {
        console.log("НАЙС!"); break;
    }else {
        numbers = prompt("повтори попытку");
    }
}




let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);