// ============== ЗАДАЧА № 1 ===============

// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение 'https://via.placeholder.com/640x480';
// descr - описание, значение 'Просторная квартира в центре';
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ['premium', 'promoted', 'top'].

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// console.log(apartment);


// ============== ЗАДАЧА № 2 ===============

// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение 'Генри';
// phone - телефон, значение '982-126-1588';
// email - почта, значение 'henry.carter@aptmail.com'.

// const apartment1 = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Генри',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };
  
// console.log(apartment1);


// ============== ЗАДАЧА № 3 ===============

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment3 = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
  // Пиши код ниже этой строки
  // const aptRating = apartment3.rating;
  // const aptDescr = apartment3.descr;
  // const aptPrice = apartment3.price;
  // const aptTags = apartment3.tags;
  // Пиши код выше этой строки


  // ============== ЗАДАЧА № 4 ===============

//   Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// const apartment4 = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// Пиши код ниже этой строки
// const ownerName = apartment4.owner.name;
// const ownerPhone = apartment4.owner.phone;
// const ownerEmail = apartment4.owner.email;
// const numberOfTags = apartment4.tags.length;
// const firstTag = apartment4.tags[0];
// const lastTag = apartment4.tags[2];
// Пиши код выше этой строки


// ============== ЗАДАЧА № 5 ===============

//   Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment5 = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// Пиши код ниже этой строки
// const aptRating = apartment5['rating'];
// const aptDescr = apartment5['descr'];
// const aptPrice = apartment5['price'];
// const aptTags = apartment5['tags'];
// Пиши код выше этой строки


// ============== ЗАДАЧА № 6 ===============

// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на 'Генри Сибола';
// массив тегов в свойстве tags добавив в конец строку 'trusted'.

// const apartment6 = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment6.price = 5000;
// apartment6.owner.name = 'Генри Сибола';
// apartment6.tags.push('trusted');

// console.log(apartment6);


// ============== ЗАДАЧА № 7 ===============

// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.

// const apartment7 = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment7.area = 60;
// apartment7.rooms = 3;
// apartment7.location = {

//     country: 'Ямайка',
    
//     city: 'Кингстон',
// };

// console.log(apartment7);


// ============== ЗАДАЧА № 8 ===============

// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
//     name,
//     price,
//     image,
//     tags,


  // Пиши код выше этой строки
// };

// console.log(product);


// ============== ЗАДАЧА № 9 ===============

// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка 'henry.carter@aptmail.com', а значением свойства password - строка 'jqueryismyjam'.

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]:'jqueryismyjam',
  
//   // Пиши код выше этой строки
// };

// console.log(credentials);


// ============== ЗАДАЧА № 10 ===============

// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment10 = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// Пиши код ниже этой строки

// for (const key in apartment10) {
//     keys.push(key);
//     values.push(apartment10[key]);
// }

//   console.log(keys);
//   console.log(values);


// ============== ЗАДАЧА № 11 ===============

// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment11 = Object.create(advert);
// apartment11.descr = 'Просторная квартира в центре';
// apartment11.rating = 4;
// apartment11.price = 2153;

// for (const key in apartment11) {
//   // Пиши код ниже этой строки
//     if(apartment11.hasOwnProperty(key)) {
    
//         keys.push(key);
//         values.push(apartment11[key]);
//     }
        
  // Пиши код выше этой строки
// }

//   console.log(keys);
// console.log(values);
  

// ============== ЗАДАЧА № 12 ===============

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
  // Пиши код ниже этой строки

    // for (const key in object) {
    //     if (object.hasOwnProperty(key)) {
    //         propCount += 1;
    //     }
    // }
  // Пиши код выше этой строки
  // return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


// ============== ЗАДАЧА № 13 ===============

// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   if (keys.hasOwnProperty(key)) {
   
//   }
//    values.push(apartment[key]);
// }

// console.log(values);
// console.log(keys);


// ============== ЗАДАЧА № 14 ===============

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;

  
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Пиши код выше этой строки
}


console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
