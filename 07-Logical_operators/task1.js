alert(null || 2 || undefined); // Ответ: 3.
alert (alert(1) || 2 || alert(3)); //Ответ: сначала 1, затем 2. 
//Первый оператор ИЛИ || выполнит первый alert(1) Получит undefined и пойдёт дальше
alert(1 && null && 2); // Ответ: null.
alert(alert(1) && alert(2)); // Ответ: 1, а затем undefined
// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.
alert(null || 2 && 3 || 4); // Ответ: 3.

let value = NaN;
value &&= 10; //NaN  
value ||= 20; //20  
value &&= 30; //30    
value ||= 40; //30
alert(value); // Ответ: 30.


