/* Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3. */
//-------------------------------------------------------------//

function compareVariables(num1, num2) {
  let answer;

  if (!Boolean(Number(num1)) || !Boolean(Number(num2))) {
    answer = "Ошибка! Обе переменных должны бить Числами!";
    return answer;
  }

  switch (Boolean(Number(num1)) & Boolean(Number(num2))) {
    case (num1 <= 1) & (num2 >= 3):
      answer = `Отлично: ${num1} <= 1, а ${num2} >= 3`;
      break;

    case (num1 > 1) & (num2 >= 3):
      answer = `Ошибка! ${num1} <= 1 Переменная1 должна быть: Num1 <= 1`;
      break;

    case (num1 <= 1) & (num2 < 3):
      answer = `Ошибка! ${num2} >= 3 Переменная2 должна быть: Num2 >= 3`;
      break;

    default:
      answer = "Ошибка! Переменные должны быть: Num1 <= 1, Num2 >= 3";
      break;
  }

  return answer;
}

//

console.log(`${compareVariables("1", "3")}\n`);
console.log(`${compareVariables("0.5", "13.5")}\n`);

console.log(`${compareVariables("3", "1")}\n`);
console.log(`${compareVariables("3", "3")}\n`);
console.log(`${compareVariables("1", "1")}\n`);

console.log(`${compareVariables("asg", "sg")}\n`);

//-------------------------------------------------------------//
/* Задание 2
Перепишите код к тернарному оператору
*/
//-------------------------------------------------------------//

let test = true;

if (test === true) {
  console.log("+++");
} else {
  console.log("---");
}

//

console.log(test === true ? `+++` : `---`);

//-------------------------------------------------------------//
/* Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */
//-------------------------------------------------------------//

function witchDecadeOfMonth(day) {
  console.log(
    day < 10
      ? `${day} это Первая декада месяца`
      : day < 20
      ? `${day} это Вторая декада месяца`
      : day < 31
      ? `${day} это Третья декада месяца`
      : `${day} День ??? В месяце нет столько дней`
  );
}

//

witchDecadeOfMonth(4);
witchDecadeOfMonth(12);
witchDecadeOfMonth(22);
witchDecadeOfMonth(33);

//-------------------------------------------------------------//

/* Задание 4
Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
(Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: пользователь всегда вводит корректное положительное целое число. */
//-------------------------------------------------------------//

function categoriesOfTheNumber(num) {
  const answerNum = num;
  let numArray = [];
  let digitPlacePointer = 10;
  let index = 0;

  while (num > 0) {
    numArray[index] = num % digitPlacePointer;
    num = num - numArray[index];
    digitPlacePointer *= 10;
    index++;
  }

  printAnswer(answerNum, numArray.reverse());
}

function printAnswer(num, numArray) {
  let answer = `В числе ${num} количество:\n`;

  numArray.forEach((element) => {
    switch (true) {
      case element > 999999:
        answer = answer + `Единицы миллионов ${element / 1000000},\n`;
        break;
      case element > 99999:
        answer = answer + `Сотен тысяч ${element / 100000},\n`;
        break;
      case element > 9999:
        answer = answer + `Десяток тысяч ${element / 10000},\n`;
        break;
      case element > 999:
        answer = answer + `Единиц тысяч ${element / 1000},\n`;
        break;
      case element > 99:
        answer = answer + `Сотен ${element / 100},\n`;
        break;
      case element > 9:
        answer = answer + `Десятков ${element / 10},\n`;
        break;
      default:
        answer = answer + `Единиц ${element / 1}.\n`;
        break;
    }
  });
  console.log(answer);
}

//немного увлекся..

let inputNumber = 123456;

categoriesOfTheNumber(inputNumber);

//-------------------------------------------------------------//

categoriesOfTheNumber(prompt("Введите число до Миллиона"));
