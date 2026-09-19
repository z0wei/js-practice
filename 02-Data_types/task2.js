let firstName = "Dima";
let lastName = "Ivanov";
let age = 16;
const COUNTRY = "Russia"; // COUNTRY = "USA";  // Ошибка: нельзя перезаписать const
let fullName = `${firstName} ${lastName}`;
console.log('До дня рождения:');
console.log(fullName);
console.log(age);
console.log(COUNTRY);
console.log('После дня рождения:');
age = 17;
console.log(fullName);
console.log(COUNTRY);
console.log(age);
console.log("typeof age:", typeof age);