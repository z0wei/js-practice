function agecheck(age) {
    if (age > 18) {
        return true;
    } else {
        return alert("Родители должны разрешить вам использовать этот сайт");
    }
}


function agecheck(age) {
    if (age > 18) {
        return true;
    }
    return alert("Родители должны разрешить вам использовать этот сайт");
} // смысла в else нет, так как return завершает выполнение функции и возвращает значение.