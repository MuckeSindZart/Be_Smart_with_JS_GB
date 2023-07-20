/* Задание 1
Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах.
 */

let tempNowCelsius = 0;

function translateTempCelsiusToFahrenheit(tempNowCelsius) {
  return (9 / 5) * tempNowCelsius + 32;
}
console.log(tempNowCelsius, "°C");
console.log(translateTempCelsiusToFahrenheit(tempNowCelsius), "°F");

/* Задание 2
Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль. */

let userName = "Alexander";
let admin = userName;

console.log("Admin ->", admin);
