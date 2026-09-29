let discount;
let count = 0;
let total = 0;
while (true) {
    let price = +prompt("Введите цену товара(0 — закончить):");
    if (price === null) break;
    if (price === 0) break;
    if (price < 0 ) {
        alert("Цена не может быть отрицательной");
        continue;
    }
  count++;
  total += price;
}
switch (true) {
    case total < 1000:
        discount = 0;
        break;
    case total < 5000:
        discount = 5;
        break;
    case total < 10000:
        discount = 10;
        break;
    default:
        discount = 15;
} 
let finalTotal = total - (total * discount / 100);
let check = finalTotal > 5000 ? "ДОРОГАЯ ПОКУПКА" : "ОБЫЧНАЯ ПОКУПКА";
let basketType;
if (count === 0 || total === 0) {
    basketType = "Корзина пустая";
} else if (count > 10 && total > 5000) {
    basketType = "Оптовая закупка";
} else {
    basketType = "Обычная покупка";
}
console.log("Товаров: " + count + " | Сумма: " + total + " | Скидка: " + discount + "% | Итог: " + finalTotal + " | Тип: " + basketType + " | Чек: " + check);