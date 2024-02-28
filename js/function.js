/* eslint-disable no-console */
//Функция для проверки длины строки
function stringCheckLenght(string, length) {
  if(string.length <= length) {
    return true;
  }
  return false;
}


// Строка короче 20 символов
// eslint-disable-next-line no-console
console.log(stringCheckLenght('проверяемая строка', 20));
// Длина строки ровно 18 символов
console.log(stringCheckLenght('проверяемая строка', 18));
// Строка длиннее 10 символов
console.log(stringCheckLenght('проверяемая строка', 10));


//Функция для проверки, является ли строка палиндромом.

function palindromeStringCheck(palindrome) {
  const normalString = palindrome.toLowerCase().replaceAll(' ', '');
  let string = '';
  for(let i = normalString.length - 1; i >= 0; i--) {
    string += normalString[i];
  }
  if(string === normalString) {
    return true;
  }
  return false;

}

//Проверка
console.log(palindromeStringCheck('топот'));
console.log(palindromeStringCheck('ДовОд')); //true
console.log(palindromeStringCheck('Кекс')); //false
console.log(palindromeStringCheck('Лёша на полке клопа нашёл ')); // true


