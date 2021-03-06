// ===============ЗАДАЧА №18

function calculateTotal(number) {
    let total = 0;
  
    for(let i = 1; i <= number; i += 1) {
    
        total += i;
    }
    return total;
}

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal(30));


// ===============ЗАДАЧА №19

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i += 1) { 
  const fruit = fruits[i];
//   console.log(fruit);
}


// ===============ЗАДАЧА №20

function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i += 1 ) {
    total += order[i];

  }

  return total;
}

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// ===============ЗАДАЧА №21
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
    const words = string.split(' ');
  
    let wordLength = 0;
    let maxWord;

    for (let i = 0; i < words.length; i += 1) {
          
        if (words[i].length > wordLength) {
            wordLength = words[i].length;
            maxWord = words[i];

        }
  
    }
    return maxWord;

}


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));



// ===============ЗАДАЧА №22

// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];

    for (let i = min; i <= max; i += 1) {
        // console.log(i);
       numbers.push(i);
    }
  return numbers;
}

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));


// ===============ЗАДАЧА №23

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

function filterArray(numbers, value) {
 
    const filterNumbers = [];

    for (let i = 0; i < numbers.length; i += 1) {
        // console.log(numbers[i]);

        if (numbers[i] <= value) {
            continue;
        } else {
            filterNumbers.push(numbers[i]);
        }
    }
    return filterNumbers;
}

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// ===============ЗАДАЧА №24

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

    return fruits.includes(fruit);
}

// console.log(checkFruit('слива'));
// console.log(checkFruit('мандарин'));
// console.log(checkFruit('груша'));
// console.log(checkFruit('Груша'));
// console.log(checkFruit('яблоко'));


// ===============ЗАДАЧА №24

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {

    const newArray = [];
    
    for (let i of array1) {

        if (array2.includes(i)) {
            newArray.push(i);
        
        }
    
    }

    return newArray;  
}

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));


// ===============ЗАДАЧА №25

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;

  for (let i of order) {
    total += i;
  }

  return total;
}

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ===============ЗАДАЧА №29

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

function getEvenNumbers(start, end) {
      
    const even = [];

    for (let i = start; i <= end; i += 1) {

        if (i % 2 === 0) {
            // console.log(i);
            even.push(i);
        }
    }
    
    return even;
  }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// ===============ЗАДАЧА №30

// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

const start = 6;
const end = 27;
let number = 0;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
      number = i;
      break;
  }
}

// console.log(number);


// ===============ЗАДАЧА №31

// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.

function findNumber(start, end, divisor) {

  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return i;
    }
  }

  return number;
}

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));


// ===============ЗАДАЧА №32

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
    
    let boolean = false;

    for (let i = 0; i < array.length; i += 1) {
    

        if (array[i] === value) {
            boolean = true;
            return boolean;
       
        }   
        
    }
    return boolean;
}

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));