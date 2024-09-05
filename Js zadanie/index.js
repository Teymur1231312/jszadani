// Zadinie 1
// function multiplyNumbers() {
//     let num1 = prompt("Введите первое число:");
//     let num2 = prompt("Введите второе число:");
//     let result = num1 * num2;
//     alert("Результат умножения: " + result);
// }
// multiplyNumbers();

// Zadanie 2
// function greetUser() {
//     let firstName = prompt("Введите ваше имя:");
//     let lastName = prompt("Введите вашу фамилию:");
//     let age = prompt("Введите ваш возраст:");
//     alert("Привет " + firstName + " " + lastName + " с возрастом " + age + " лет");
// }
// greetUser();

// Zadanie 3
// function determineGender() {
//     let gender = prompt("Введите ваш пол (M или F):");
//     let result;
//     if (gender === 'M') {
//         result = "Ваш пол мужской";
//     } else if (gender === 'F') {
//         result = "Ваш пол женский";
//     } else {
//         result = "Ваш пол не определен";
//     }
//     alert(result);
// }
// determineGender();

// Zadanie 4
// function getDayOfWeek() {
//     let day = parseInt(prompt("Введите число от 1 до 7:"));
//     let dayName;
//     switch(day) {
//         case 1: dayName = "Понедельник"; break;
//         case 2: dayName = "Вторник"; break;
//         case 3: dayName = "Среда"; break;
//         case 4: dayName = "Четверг"; break;
//         case 5: dayName = "Пятница"; break;
//         case 6: dayName = "Суббота"; break;
//         case 7: dayName = "Воскресенье"; break;
//         default: dayName = "Некорректное число"; break;
//     }
//     alert(dayName);
// }
// getDayOfWeek();

// Zadanie 5
// for (let i = 1; i <= 100; i++) {
//     let ageCategory;
//     if (i <= 17) {
//         ageCategory = "ребенок";
//     } else if (i <= 30) {
//         ageCategory = "молодой";
//     } else if (i <= 55) {
//         ageCategory = "зрелый";
//     } else {
//         ageCategory = "старый";
//     }
//     document.write(i + " – " + ageCategory + "<br>");
// }

// Zadanie 6
// function ageStatus(age) {
//     if (age <= 17) return "ребенок";
//     if (age <= 30) return "молодой";
//     if (age <= 55) return "зрелый";
//     return "старый";
// }

// function displayPersonInfo(name, age) {
//     let status = ageStatus(age);
//     alert(name + " имеет возраст " + age + " и он " + status);
// }

// displayPersonInfo(prompt("Введите ваше имя:"), parseInt(prompt("Введите ваш возраст:")));

// Zadanie 7
// function sayHello() {
//     alert('Привет Мир!');
// }

// Zadanie 8
// function fillInput() {
//     document.getElementById('emailInput').value = 'test@email.ru';
// }

// Zadanie 9
// function showInputText() {
//     let inputText = document.getElementById('userInput').value;
//     if (inputText) {
//         alert("Вы ввели '" + inputText + "'");
//     } else {
//         alert("Вы ничего не ввели в поле");
//     }
// }

// Zadanie 10
// function blockInput() {
//     document.getElementById('Окно').disabled = true;
// }

// function unblockInput() {
//     document.getElementById('Окно').disabled = false;
// }

// Zadanie 11
// function toggleSquare() {
//     let square = document.getElementById('square');
//     let button = document.querySelector('button');
//     if (square.style.display === 'none') {
//         square.style.display = 'block';
//         button.textContent = 'Скрыть квадрат';
//     } else {
//         square.style.display = 'none';
//         button.textContent = 'Показать квадрат';
//     }
// }

// Zadanie 12
// function changeColor(element, color) {
//     element.style.backgroundColor = color;
// }