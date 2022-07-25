// задача 1
// function finalGrade(exam, projects) {
// 	return (exam > 90 || projects > 10) ?
// 	+'100' : (exam > 75 && exam < 90 && projects > 4 && projects < 10 ) ?
// 	+'90' : (exam > 50 && exam < 75 && projects > 1 && projects < 5 ) ?
// 	+'75' : (exam < 50  && projects > 2) ? +'0' : +'0';
// }

// function finalGrade(exam, projects) {
//     if (exam > 90 || projects >= 10) {
//         return 100;
//     } else if (exam > 75 && projects >= 5) {
//         return 90;
//     } else if (exam > 50 && projects >= 2) {
//         return 75;
//     } else {
//         return 0;
//     }
// }

// console.log(finalGrade(100, 12));
// console.log(finalGrade(99, 0));
// console.log(finalGrade(10, 15));
// console.log(finalGrade(85, 5));
// console.log(finalGrade(55, 3));
// console.log(finalGrade(55, 0));
// console.log(finalGrade(20, 2));
// console.log(finalGrade(85, 4));

// задача 2
// console.log(fizzbuzz(9));

// function fizzbuzz(number) {
//     if (number % 3 == 0 && number % 5 == 0) {
//         return "FizzBuzz";
//     } else if (number % 3 == 0) {
//         return "Fizz";
//     } else if (number % 5 == 0) {
//         return "Buzz";
//     } else {
//         return number;
//     }
// }

//задача 3

// const arithmetic = (a, b, operator) => {
//    if (operator == 'add') {
// 	   return a + b
//    } else if (operator == 'subtract') {
//        return  a - b
//    } else if (operator == 'divide') {
// 	return a / b
//    } else if (operator == 'multiply' ) {
// 	   return a * b
//    } else {
// 	   return NaN
//    }
// };

// console.log(arithmetic(5, 2, "add"));
// console.log(arithmetic(5, 2, "subtract"));
// console.log(arithmetic(5, 2, "multiply"));
// console.log(arithmetic(5, 2, "divide"));

// задача 4
// const areBracketsBalanced = str => {
// 	let prev = '';
// 	for (let replaced = str; replaced != prev; prev = replaced, replaced = replaced.replace('()', ''));
// 	return prev == '';
//   }

//   const str1 = '(())';
//   const str2 = '(()))';
//   const str3 = '()()()()';
//   const str4 = '(()()))';

//   const arr = [str1, str2, str3, str4];
//   arr.forEach(item => {
// 	const result = areBracketsBalanced(item);
// 	console.log(item, result);
//   })

//задача 5

// function findAllIdx(arr, value) {
//     let newArr = [];
//     arr.forEach((item, index) => {
//         if (item === value) {
//             newArr.push(index);
//         } else {
//             return newArr;
//         }
//     });
//     return newArr;
// }

// console.log(findAllIdx([5, 2, 3, '5', 2, 5, 4], '5'))

//конструктор обьектов
// let count = 1;
// function User(name) {
//     this.id = count++;
//     this.name = name;
//     this.isAdmin = false;
//     this.age = 32;
//     this.sayHello = function () {
//         console.log("hello");
//     };
// 	// alert(new.target);   -- проверяет на создание если через new то выведет функцию
// }

// let user = new User("Вася");
// let user2 = new User("Петя");
// let user3 = new User("Люба");

// user.isAdmin = true;
// User()
// console.log(user);
// console.log(user2);
// console.log(user3);

// function User() {
// 	alert(new.target);
//   }

//   // без "new":
//   User(); // undefined

//   // с "new":
//   new User(); // function User { ... }

// function A() {  }
// function B() { }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); // true

//конструктор запрашивает два числа и возвращает методы умножения и суммы

// function Calculator() {
//     this.read = function () {
//         this.a = +prompt("аргумент");
//         this.b = +prompt("аргумент");
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

//==================================================
// function Accumulator(startingValue) {
//     this.read = function () {
//         this.a = +prompt("a");
//         return this.a
//     }
//     this.value = startingValue + this.a;
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

//===============================================
// Задача 6

// function replaceItemsClear(arr, item, replaceItem) {
//     let newArr = arr.slice();
//     for (i = 0; i < newArr.length; i++) {
//         if (newArr[i] === item) {
//             newArr[i] = replaceItem;
//         }
//     }

//     return newArr;
// }

// function replaceItemsMutate(arr, item, replaceItem) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             arr[i] = replaceItem;
// 		}
//     }
// 	return arr
// }

// console.log(replaceItemsClear([1, 2, 3, 4, 2], 2, "a"));

//задача 6

// Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало.

// Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным.

// Функция должна возвращать новый массив, а не мутировать старый.

// Примеры:

// const moveToStart = (arr, n) => {
//     if (n && n >= arr.length) {
//         newArr = arr.slice();
//         return newArr;
//     }
//     if (n && n < arr.length) {
//         let amount = arr.length - n;
//         return arr.slice(amount).concat(arr.slice(0, amount));
//     }
// };

// console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]

// console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]

// Задача 7

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";   // середина массива
// console.log(styles.shift());
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// Задача 8
// Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.

// Пример:

// const hasArray = (arr) => {
//     return arr.some((elem) => Array.isArray(elem));
// };

// const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
// console.log(hasArray(data1));

// const data2 = [1, 2, 8, "hello"];
// console.log(hasArray(data2));

// const data3 = [{}];
// console.log(hasArray(data3));

// Задача 9

// Реализуйте функцию getNumbersByParity, которая принимает массив чисел в качестве первого аргумента и строку "even" или "odd" в качестве второго. Функция должна вернуть новый массив, состоящий из четных чисел, если вторым аргументом было передано "even" и нечетных, если было передано "odd".

// Оба аргумента функции обязательны. Первый обязательно будет массивом, а второй - строкой "even"/"odd".

// const data = [1, 2, 3, 4, 5, 6];
// const getNumbersByParity = (data, parity) => {
//     if (parity == "even") {
//         const newArr = data.filter((elem) => elem % 2 == 0);
//         return newArr;
//     }
// 	if(parity == 'odd') {
// 		const newArr = data.filter((elem) => elem % 2 !== 0);
//         return newArr;
// 	}
// };

// const data = [1, 2, 3, 4, 5, 6];
// console.log(getNumbersByParity(data, "even")); // [2, 4, 6];
// console.log(getNumbersByParity(data, "odd")); // [1, 3, 5];

// Задача 10

// var sum = 0;
// function sequenceSum(begin, end) {
//     if (begin <= end) {
//         sum = sum + end;
//         if (end != 0) {
//             sum = sequenceSum(begin, end - 1);
//         }
//     }
//     return sum;
// }

// function sequenceSum(begin, end) {
//     if (begin === end) {
//         return begin;
//     } else if (begin > end) {
//         return NaN;
//     } else {
//         return begin + sequenceSum(begin + 1, end);
//     }
// }

// NaN (т.к. это "пустая" последовательность)
// console.log(sequenceSum(1, 5));

// 0 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(0, 0);
// 6 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(6, 6);

// Задача 11
// Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

// function getStringCount(object) {
// 	if (typeof object == 'string') return 1;

// 	if (!object) return 0;

// 	return Object.values(object).reduce((acc, cur) => acc + getStringCount(cur), 0);
//   }
// console.log(
//     getStringCount({
//         first: "1",
//         second: "2",
//         third: false,
//         fourth: ["anytime", 2, 3, 4],
//         fifth: null,
//     })
// ); // 3

// getStringCount
// (['1', '2', ['3']]) // 3

// Задача 12

// OptionalChaining
// Напишите функцию, которая принимает первым параметром объект, вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

// Если какое-то из свойств не найдено - функция возвращает undefined.

// Пример:

// const obj = {
//   a: {
//     b: {
//       c: {
//         d: 'Привет!'
//       }
//     }
//   }
// }
// optionalChaining(obj, ["a", "b", "c", "d"]); // Привет
// optionalChaining(obj, ["a", "b", "c", "d", "e"]); // undefined

// optionalChaining(obj, ["a", "c", "d"]); // undefined
// optionalChaining(obj, ["b", "d", "a"]); // undefined

// const obj = {
//     a: {
//         b: {
//             c: {
//                 d: "Привет!",
//             },
//         },
//     },
// };

// function optionalChaining(obj, chain) {
//     if (chain.length === 0) {
//         return undefined;
//     }
//     for (key of chain) {
//         if (obj[key]) {
//             obj = obj[key];
//         } else {
//             return undefined;
//         }
//     }
//     return obj;
// }

// console.log(optionalChaining(obj, ["a", "b", "c", "d"])); // Привет

// Задача 13

// Задача замыкание
// const f = () => console.log("hi!");
// const once = (fn) => {
// 	fn = fn()
//     return function(fn) {
// 		return fn
// 	}
// };
// const onceF = once(f);
// onceF();
// onceF();
// onceF();

// Задача 14 коллбэк filter()
// исходный массив
// let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

//============================================
// inRange(a, b) – число находится между a и b (включительно).
// Если аргумент или элемент массива можно привести к числу,
// то функция должна сначала приводить его к числу, а потом проверять условие.
// Если a > b, то функция должна возвращать false для всех элементов массива

// const inRange = (a, b) => {
//     return function (x) {
//         return x >= a && x <= b;
//     };
// };
// const inRange = (a, b) => {
//     return (el) => el >= a && el <= b;
// };
// const inRange = (a, b) => (el) => el >= a && el <= b;
// console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
//============================================
// function inArray(arr) {
//     return function (x) {
//         return arr.includes(x);
//     };
// }
// const inArray = (arr) => (el) => {return arr.includes(el)}
// console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
//============================================
// const notInArray = (arr) => {
//     return function (x) {
//        return !arr.includes(x);
//     };
// };
// const inArray = (arr) => (el) => {return !arr.includes(el)}
// console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]

//==================================================
// Задача 15

// createObjectCalculator
// Реализуйте функцию createObjectCalculator, которая принимает в качестве аргументов два числа, а возвращает следующий объект:

// Объект calculator (калькулятор) с тремя методами:

// read(a, b) (читать) принимает два значения и сохраняет их как свойства объекта. sum() (суммировать) возвращает сумму сохранённых значений. mul() (умножить) перемножает сохранённые значения и возвращает результат.

// Гарантируется, что оба числа, передаваемых в read всегда будут числами.

// Пример:

// const calculator = createObjectCalculator(2, 3);
// console.log(calculator.sum()); // 2 + 3 = 5
// console.log(calculator.mul()); // 2 * 3 = 6
// calculator.read(12, 34);
// console.log(calculator.sum()); // 12 + 34 = 46
// console.log(calculator.mul()); // 12 * 34 = 408

// const createObjectCalculator = (initialA, initialB) => {
//     return {
//         sum(a = initialA, b = initialB) {
//             return this.a + this.b || a + b;
//         },

//         mul(a = initialA, b = initialB) {
//             return this.a * this.b || a * b;
//         },

//         read(a = initialA, b = initialB) {
//             this.a = Number(a)
//             this.b = Number(b);
//         },
//     };
// };

// const calculator = createObjectCalculator(2, 3);
// console.log(calculator.sum());
// console.log(calculator.mul());
// calculator.read(12, 34);
// console.log(calculator.sum());
// console.log(calculator.mul());

//================================================
// Задача 16

// Реализуйте функцию getField, которая принимает массив объектов в качестве первого аргумента и ключ объекта в строке в качестве второго. Функция должна вернуть новый массив. На месте объекта должно находиться значение поля объекта, находящееся по ключу, переданному в функцию вторым аргументом. Массив гарантированно состоит из объектов. Если в данном объекте, нет такого поля, то вместо значения поля должен быть undefined. Если массив не передан, то функция должна вернуть пустой массив.

// const data = [
// 	{
// 	  name: 'Denis',
// 	  age: 25,
// 	},
// 	{
// 	  name: 'Ivan',
// 	},
// 	{
// 	  name: 'Ann',
// 	  age: 18,
// 	},
//   ];

//   console.log(getField(data, 'age'));
// [25, undefined, 18]

// const getField = (data, field) => {
// 	let arr = data.map(person => person[field])
// 	return arr
// }
// console.log(getField(data, 'age'));

//==========================================
// Задача 17
// Create Usernames
// Дан массив пользователей. Необходимо преобразовать массив так, чтобы у каждого пользователя появился username. Поле username создается путем конкатенации firstName в нижнем регистре, первой буквы lastName в нижнем регистре и года рождения пользователя, который необходимо вычислить из текущей даты и возраста пользователя. Учтите, что функция должна работать даже в том случае, если вызвать ее, к примеру, через 10 лет.

// Данные всегда будут передаваться в указаном ниже формате.
// Возраст представлен в виде целого числа.
// Фамилия всегда будет в формате "N.", где N - первая буква фамилии.
// Порядок объектов в массиве должен сохраняться.
// Порядок полей в объекте не важен.

// Пример:

// Данные на входе:

// const data = [
// {
// 	firstName: 'Emily',
// 	lastName: 'N.',
// 	country: 'Ireland',
// 	continent: 'Europe',
// 	age: 30,
// 	language: 'Ruby'
// },
// {
// 	firstName: 'Nor',
//     lastName: 'E.',
//     country: 'Malaysia',
//     continent: 'Asia',
//     age: 20,
//     language: 'Clojure'
// }
// ];
// Данные на выходе:

// const processedData = createUsernames(data);
// console.log(processedData);  [
//   {
// 	  firstName:
// 	  'Emily',
// 	  lastName: 'N.',
// 	  country: 'Ireland',
// 	  continent: 'Europe',
// 	  age: 30,
// 	  language: 'Ruby',
//    username: 'emilyn1990'
//   },
//   {
// 	  firstName: 'Nor',
// 	  lastName: 'E.',
// 	  country: 'Malaysia',
// 	  continent: 'Asia',
// 	  age: 20,
// 	  language: 'Clojure',
//    username: 'nore2000'
//   }
// ];

// const data = [
// 	{
// 		firstName: 'Emily',
// 		lastName: 'N.',
// 		country: 'Ireland',
// 		continent: 'Europe',
// 		age: 30,
// 		language: 'Ruby'
// 	},
// 	{
// 		firstName: 'Nor',
// 		lastName: 'E.',
// 		country: 'Malaysia',
// 		continent: 'Asia',
// 		age: 20,
// 		language: 'Clojure'
// 	}
// 	];
// const createUsernames = users => {
//     return users.map(item => ({
// 		...item,
//         username: `${item.firstName.toLowerCase()}${item.lastName[0].toLowerCase()}${new Date().getFullYear() - 2 - item.age}`
// 	}))
// };

// processedData = createUsernames(data);
// console.log(processedData);

// console.log(new Date().getFullYear());

//==============================================
// Задача 18

// Урок с кодом
// Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их стоимостей. Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.

// Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.

// Пример:

// Пример:

// const data = [
// 	{
//         type: "food",
//         price: 130,
//     },
//     {
//         type: "clothes",
//         price: 7300,
//     },
//     {
//         type: "other",
//         price: 1400,
//     },
// ]

// // calculatePrice(data); // 8830

// const calculatePrice = (orders) => {
//     if (Array.isArray(orders)) {
//         let amount = orders.reduce((acc, element) => acc += element.price, 0);
// 		return amount
//     } else if(Array.isArray(orders) === false) {
// 		return 0
// 	}
// 	return 0
// };

// console.log(calculatePrice(data));

//==============================================
// Задача 19
// Invert
// Напишите функцию, которая создает объект, состоящий из инвертированных ключей и значений объекта.

// Если объект содержит повторяющиеся значения, последующие значения перезаписывают присвоения свойств предыдущих значений.

// Пример:

// invert({ a: 1, b: 2, c: 3 }) // { 1: a, 2: b, 3: c }

// function invert (obj) {
// 	let arr = Object.entries(obj).map((item) => item.reverse())
// 	let obj1 = Object.fromEntries(arr)
// 	return obj1
// }
// console.log(invert({ a: 1, b: 2, c: 3 }))

// Задача 20

// Реализуйте функцию merge, которая будет принимать неограниченное количество объектов в качестве аргументов и возвращать новый объект, который должен содержать все поля со всех объектов. Если ключи в объектах повторяются, то каждый последующий объект при совпадении ключей должен иметь больший приоритет над предыдущим. Порядок полей в результирующем объекте не важен.

// const merge = (...rest) => {
//     return Object.assign({}, ...rest)
// };

// console.log( merge({ name: 'John', age: 22,},{ surname: 'Klein', age: 20, profession: 'student',},{ profession: 'frontend developer', country: 'USA',}));
// Ответ
// {
//   name: 'John',
//   surname: 'Klein',
//   age: 20,
//   profession: 'frontend developer',
//   country: 'USA',
// }

//=================================================
// задача 21
// getArraysCounts
// Реализуйте функцию getArraysCounts, которая принимает массив в качестве аргумента. Функция должна вернуть Map, в котором ключи - все уникальные элементы в массиве, а значения - количество этих элементов в массиве.

// const getArraysCounts = (arr) => {
// 	const counts = arr.reduce((acc, item) => {
// 	 if(acc.has(item)) {
// 	 const count = acc.get(item) + 1;
// 	 acc.set(item, count);
// 	}else {
// 		acc.set(item, 1)
// 	}
// 	   return acc;
//    }, new Map());
// 	   return counts;
//    }
// const getArraysCounts = items => {
//     const map = new Map()
//     for (const item of items) {
//         map.set(item, map.has(item) ? map.get(item) + 1 : 1)
//     }
//     return map
// }

// const obj = { name: 123 };
// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
// const counts = getArraysCounts(data); // экземпляр Map
// console.log(counts);
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2

//===========================================
// Задача 22

// const unique = (arr) => {
//     return [...new Set(arr)]
// };
// const data1 = [1, 2, 3, 3, 4, 4];
// console.log(unique(data1)); // [1, 2, 3, 4]

// const obj = { name: 'John' };
// const data2 = [obj, obj, obj, { name: 'John' }];
// const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]

// console.log(result[0] === obj); // true
// console.log(result[1] === obj); // false

//==========================================
// Задача 23

// getDaysBetweenDates
// Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.

// const getDaysBetweenDates = (a, b) => {
//     const result = (function getCulc(a, b) {
//         if (arguments.length < 2 || a === undefined || b === undefined) {
//             throw new TypeError("TypeError");
//         } else {
//             let date;
//             let differ;
//             let dat1 = new Date(a);
//             let dat2 = new Date(b);
//             if (dat1 === null || dat2 === null) {
//                 date = new Date();
//                 date = +date;
//                 return date;
//             } else if (a > b) {
//                 differ = Math.ceil(
//                     (dat2.getTime() - dat1.getTime()) /
//                         (1000 * 60 * 60 * 24)
//                 );
// 				if(differ == -0) {
// 					differ = 0
// 				}
//                 return differ;
//             } else if (a < b) {
//                 differ = Math.floor(
//                     (Date.UTC(
//                         dat2.getFullYear(),
//                         dat2.getMonth(),
//                         dat2.getDate()
//                     ) -
//                         Date.UTC(
//                             dat1.getFullYear(),
//                             dat1.getMonth(),
//                             dat1.getDate()
//                         )) /
//                         (1000 * 60 * 60 * 24)
//                 );
//                 return differ;
//             } else {
//                 differ =
//                     (Date.UTC(
//                         dat2.getFullYear(),
//                         dat2.getMonth(),
//                         dat2.getDate()
//                     ) -
//                         Date.UTC(
//                             dat1.getFullYear(),
//                             dat1.getMonth(),
//                             dat1.getDate()
//                         )) /
//                     (1000 * 60 * 60 * 24);
//                 return differ;
//             }
//         }
//     })(a, b);
//     return result;
// };

//  console.log(getDaysBetweenDates("1-1-2020", "1-2-2020"));
//  console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)));
// console.log(
//     getDaysBetweenDates(
//         new Date(2014, 8, 5, 0, 0),
//         new Date(2014, 8, 4, 23, 59)
//     )
// );

//==============================================================
// Задача 24
// function isEmpty(obj) {
//     for (key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             return false;
//         }
//     }
// 	return true
// }

// console.log(isEmpty(obj)); // -> true
// console.log(isEmpty({ prop: "value" })); // -> false

// Напишите функцию isEmptyWithProtos,  если у объекта и его прототипов(не включая Object.prototype) нет свойств возвращает true, иначе возвращает false.

// const protoObj = Object.create(null);
// const obj = Object.create(protoObj);

// function isEmptyWithProtos(obj) {
//     for (key in obj) {
//         return false;
//     }
//     return true;
// }
// console.log(obj);
// console.log({});

// console.log(isEmptyWithProtos(obj)); // -> true
// console.log(isEmptyWithProtos({})); // -> false

//============================================================================
// Задача 25

// Реализуйте функционал для работы с книгами в библиотеке:

// создание книги(добавление новой книги в библиотеку)
// Выдача книги читателю
// Получение книги от читателя
// Получение у кого книга сейчас находится
// Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

// name - имя книги
// author - имя автора
// year - год книги
// reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null
// Необходимо реализовать на прототипе следующие методы работы с книгой:

// isAvailable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
// takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
// returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке
// changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
// changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
// getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи

// function Book(name, author, year) {
//     this.name = name;
//     this.author = author;
//     this.year = year;
//     this.reader = null;

//     Book.prototype.isAvaliable = function () {
//         if (this.reader === null) {
//             return true;
//         }
//         return false;
//     };
// 	Book.prototype.isAvailable = function () {
//         if (this.reader === null) {
//             return true;
//         }
//         return false;
//     };

//     Book.prototype.takeBook = function (readerName) {
//         if (this.reader === null) {
//             this.reader = readerName;
//             return true;
//         } else {
//             return false;
//         }
//     };

//     Book.prototype.returnBook = function () {
//         if (this.reader === null) {
//             return false;
//         } else {
//             this.reader = null;
//             return true;
//         }
//     };

//     Book.prototype.changeBookName = function(newBookName) {
//         if (this.name) {
//             this.name = newBookName;
//             return true;
//         } else {
//             return false;
//         }
//     };

//     Book.prototype.changeAuthorName = function (newAuthorName) {
//         if (this.author) {
//             this.author = newAuthorName;
//             return true;
//         } else {
//             return false;
//         }
//     };

//     Book.prototype.getCurrentReader = function () {
//         if (this.reader === null) {
//             return this.reader;
//         }
//         return this.reader;
//     };
// }

// let user = new Book("Max", "Dostoevskiy", 1869);
// console.log(user);

// let user2 = new Book("Gax", "Bulgakov", 1786);
// console.log(user2);

//========================================================================
// Задача 26

// Prototypes Decorator
// Необходимо добавить возможность логирования в функцию add класса Addition

// Используя прототип класса Addition добавить декоратор к функции add, дающий возможность логировать ее вызов
// При этом результат выполнения add должен быть как и в оригинале, но дополнительно при вызове выводить в консоль 'called'

// Менять изначальную функцию, класс или созданный объект нельзя.
// Код можно писать только в обозначенной зоне.

// class Addition {
//     constructor(num) {
//         this.num = num;
//     }

//     add(...nums) {
//         const sum = (a, b) => a + b;
//         return this.num + nums.reduce(sum);
//     }
// }
// Addition.prototype.add = LogResult(Addition.prototype.add)
// function LogResult(func) {
//     return function () {
//         let result = func.apply(this, arguments);
//         console.log("Called");
//         return result;
//     };
// }
// const startedValue = new Addition(5);
// let result = startedValue.add(3, 5, 6); // В консоль выводится "called"
// console.log(result); // В консоль выводится 19

//=================================================================
// Задача 27
// Object Create
// В данном задании вам нужно будет реализовать полифл Object.create.

// Реализуйте аналог стандартной фунции Object.create - создаёт и возвращает новый объект, прототипом которого является первый аргумент, переданный в функцию. Если передан второй аргумент - устанавливает его в качестве свойств для нового объекта. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

// Ваша функция должна принимать два параметра:

// prototype (обязательный) - объект или null (но не undefined), который будет являтся прототипом для созданного объекта.
// properties (optional) - аргумент, который установит свойства для нового объекта (будет передан в Object.defineProperties).
// Если параметры фунции отсутствуют или prototype НЕ является объектом или null, то необходимо пробросить TypeError.

// В результате Object.create вернет созданный объект с внутренним свойством [[Prototype]], установленным в значение переданного в аргументе prototype. Если properties передан и НЕ является undefined, то будет вызван Object.defineProperties(obj, properties), где obj - объект,который должен быть возвращен из Object.create.

// Подсказки:

// Для доступа к внутреннему свойству объекта [[Prototype]] используйте методы Object.getPrototypeOf/Object.setPrototypeOf.
// В JavaScript все является объектом, кроме: null и undefined.
// NaN, Infinity, /regular expression literals/, function(){} - это всё тоже объекты.
// const A = {
//     objectName: "Object A",
//     getObjectName: function () {
//         return `This is ${this.objectName}!`;
//     },
// };

// const B = Object.create(A, {
//     objectName: {
//         value: "Object B",
//     },
// });

// Object.create = function (proto, propertiesObject) {
//     let obj = {};
//     if (proto === null || (typeof (proto === "object") && proto != undefined)) {
//         Object.setPrototypeOf(obj, proto);
//         Object.defineProperties(obj, { ...propertiesObject });
//         return obj;
//     } else if (propertiesObject === null) {
//         return obj;
//     } else {
//         throw new TypeError();
//     }
// };

// A.getObjectName(); // This is Object A!
// B.getObjectName(); // This is Object B!

// A.hasOwnProperty("getObjectName"); // true
// A.hasOwnProperty("objectName"); // true

// B.hasOwnProperty("getObjectName"); // false
// B.hasOwnProperty("objectName"); // true

//===========================================================================
// Задача 28

// Личный Счет
// Создайте 2 класса - Person для описания клиента и Account для работы с банковским счетом частного лица.
// Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

// Person
// const person = new Person('Johannes', 'Helms', '1983-01-02');
// Методы
// getAge() - Возвращает возраст владельца счета
// Свойства
// firstName - Имя
// lastName - Фамилия
// fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)
// Account
// new Account(person, 1000);
// Методы
// addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
// withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
// getAmount() - Получить текущее состояние счета
// getAccountHistory() - Возвращает массив с объектами формата { timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. Поле target может иметь значения in или out.
// transfer(fromAccount, toAccount, amount) - статический метод, переводит деньги с одного счета на другой
// Свойства
// person - Владелец счета
// Пример
// const alex = new Person('Alexey', 'Petrov', '1994-05-22');
// const alexAccount = new Account(alex, 1000);
// const helen = new Person('Helen', 'Smith', '1990-06-06');
// const helenAccount = new Account(helen, 400);

// alexAccount.addMoney(1000, 'Зарплата');
// const amount = alexAccount.getAmount();
// alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
// Account.transfer(alexAccount, helenAccount, 100);
// helenAccount.getAmount(); // 500
// alexAccount.getAmount(); // 1700

// class Person {
//     constructor(firstName, lastName, date) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.date = date;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     getAge() {
//         return (
//             ((new Date().getTime() - new Date(this.date)) /
//                 (24 * 3600 * 365.25 * 1000)) |
//             0
//         );
//     }
// }

// class Account {
//     constructor(person, amount) {
//         this.person = person;
//         this.inBalance = amount;
//         this.outBalance = amount;
//         this.balance = [];
//     }

//     addMoney(amount, description) {
//         this.balance.push({
//             timestamp: Date.now(),
//             target: "in",
//             amount,
//             description,
//         });
//         this.outBalance += amount;
//         return this;
//     }
//     withdrawMoney(amount, description) {
//         this.balance.push({
//             timestamp: Date.now(),
//             target: "out",
//             amount,
//             description,
//         });
//         this.outBalance -= amount;
//         return this;
//     }
//     getAmount() {
//         return this.outBalance;
//     }

//     getAccountHistory() {
//         return this.balance;
//     }
//     getInfo(nameAccount) {
//         let info = nameAccount.getAccountHistory();
//         return info
//             .map(
//                 (e) =>
//                     `Операция: ${e.target}, пометка: '${e.description}', сумма: ${e.amount}`
//             )
//             .forEach(function (item) {
//                 console.log(item);
// 				return this
//             });
//     }

//     static transfer(fromAccount, toAccount, amount) {
//         let description = "Перевод денег внутри банка";
//         fromAccount.withdrawMoney(
//             amount,
//             `${description} на счет ${toAccount.person.fullName}`
//         );
//         toAccount.addMoney(
//             amount,
//             `${description} со счета ${fromAccount.person.fullName}`
//         );
//     }
// }

// const alex = new Person("Alexey", "Petrov", "1994-05-22");
// const alexAccount = new Account(alex, 1000);

// const helen = new Person("Helen", "Smith", "1990-06-06");
// const helenAccount = new Account(helen, 400);

// alexAccount.addMoney(1000, "Зарплата");
// const amount = alexAccount.getAmount();
// console.log(amount);
// console.log(alexAccount.withdrawMoney(amount * 0.1, "Налоги"));
// Account.transfer(alexAccount, helenAccount, 100);
// console.log(helenAccount.getAmount()); // 500
// console.log(alexAccount.getAmount()); // 1700
// console.log(alexAccount);
// console.log(helenAccount);
// alexAccount.getAccountHistory();
// helenAccount.getAccountHistory();

//==============================================================================
// Задача 29
// Реализовать класс Calc с методами sub / add / result

// В конструкторе можем передать начальное иммутабельное значение (поумолчанию 0), потом методами add и sum прибавлять и вычитать из него.
// Вызов add/sub можно объединять в цепочку (fluent interface), методы возвращают новый объект класса.
// По вызову result() получаем результат вычислений.

// class Calc {
//     constructor(num = 0) {
//         this.num = num;
//     }

//     add(a) {
//         return new Calc(this.num + a);
//     }

//     sub(a) {
//         return new Calc(this.num - a);
//     }

//     result() {
//         return this.num;
//     }
// }

// const calc = new Calc();
// calc.result(); // 0
// calc.add(5).result(); // 0 + 5 = 5
// calc.result(); // 0
// calc.add(3).sub(10).result(); // 0 + 3 - 10 = -7

// const ten = calc.add(10);
// ten.sub(5).result(); // 10 - 5 = 5
// ten.result(); // 10

//=================================================================
//Задача 30
// Транслятор событий
// Cоздайте класс EventEmitter для управления событиями. У этого класса должны быть следующие методы:
// .on(event, callback) - добавить обработчик события

// .off(event, callback) - удалить обработчик события

// .once(event, callback) - добавить обработчик события, который сработает единожды

// .emit(event, [...arg]) - вызвать все обработчики события event, можно передать аргументы

// Расширьте EventEmitter классом BroadcastEventEmitter так, чтобы была возможность вызвать все обработчики всех событий:
// emit("*", [...arg]) - вызвать все обработчики событий, можно передать аргументы
// Event Emitter можно перевести как “транслятор” событий.

// class EventEmitter {
//     constructor(events = {}) {
//         this.events = {};
//     }

//     on(eventName, callback) {
//         if (typeof this.events[eventName] !== "object") {
//             this.events[eventName] = [];
//         }
//         this.events[eventName].push(callback);
//         return () => this.off(eventName, callback);
//     }
//     off(eventName, callback) {
//         if (typeof this.events[eventName] === "object") {
//             const idx = this.events[eventName].indexOf(callback);
//             if (idx > -1) {
//                 this.events[eventName].splice(idx, 1);
//             }
//         }
//     }
//     emit(eventName, ...args) {
//         if (typeof this.events[eventName] === "object") {
//             this.events[eventName].forEach((callback) =>
//                 callback.apply(this, args)
//             );
//         }
//     }
//     once(eventName, callback) {
//         const remove = this.on(eventName, (...args) => {
//             remove();
//             callback.apply(this, args);
//         });
//     }
// }

// class BroadcastEventEmitter extends EventEmitter {
//     emit(eventName, ...args) {
//         if (eventName === "*") {
//             Object.keys(this.events).forEach((e) => super.emit(e, ...args));
//         } else {
//             super.emit(eventName, ...args);
//         }
//     }
// }

// Представьте себе такую ситуацию: происходит какое-то событие, например пользователь кликнул на кнопку, на которое должны отреагировать разные участки программы. Чтобы проще организовать такую логику, используют шаблон Event Emitter, который можно реализовать разными способами. Основная идея в том, чтобы грамотно создать основу для управления событиями и реализовать возможность любым элементам “подписаться” на него (и быть в курсе происходящего).

// let input = document.querySelector("input");
// let button = document.querySelector("button");
// let h1 = document.querySelector("h1");

// let emitter = new EventEmitter();
// console.log(emitter);

// emitter.on("event:name-changed", (data) => {
//     h1.innerHTML = `New value is: ${data.name}`;
// });

// подписываемся на событие 'event:name-changed' и передаём обработчик вторым аргументом. Теперь при возникновении этого события, мы будем вызывать обработчик и обновим текст заголовка при возникновении этого события.

// button.addEventListener("click", () => {
//     emitter.emit("event:name-changed", { name: input.value });
// });

//=====================================================
// Задача 31

// function arraysToCsv(data) {
// 	return data.map((array) =>
// 			 array
// 				 .map((e) => {
// 					 let type = typeof e;
// 					 if (type !== "number" && type !== "string")
// 						 throw new Error("Unexpected value");
// 						 if (type === 'string') {
// 							 if (e.match(/(,|"|\n)/)) {
// 							   e = e.replace(/"/g, '""');
// 							   e = `"${e}"`;
// 							 }
// 							 return e;
// 						   } else {
// 							 return e;
// 						   }

// 				 })
// 				 .join(",")
// 		 )
// 		 .join("\n")
//  }

//  console.log(
// 	 arraysToCsv([
// 		 [1, 2],
// 		 ["a", "b"],
// 	 ])
//  ); // '1,2\na,b'
//  console.log(
// 	 arraysToCsv([
// 		 [1, 2],
// 		 ["a,b", "c,d"],
// 	 ])
//  ); // '1,2\n"a,b","c,d"'

//========================================================================
// Задача 32
// В localStorage по ключу "counters" находится JSON c объектом, полями которого являются имена счётчиков, а значениями - числовое значение счётчика. Напишите функцию incrementCounter, которой на вход первым параметром передаётся counterName - имя счётчика.

// Задача функцции увеличить значение счётчика counterName на 1 и обновить данные в localStorage. В localStorage может находится невалидный JSON, чтение которого может првести к ошибке, в этом случае функция должна записывать новые данные, где у указанного счетчика будет значение 1. В конце функция должна возвращать значение счетчика после инкремента.

// Пример использования:

// в localStorage 1 счетчик: bannerClick = 5
// incrementCounter('bannerClick'); // 6
// incrementCounter('bannerClose'); // 1
// в localStorage 2 счетчика: bannerClick = 6, bannerClose = 1

// function incrementCounter(counterName) {
//     let counters;

//     try {
//         counters = JSON.parse(localStorage.getItem("counters"));
//     } catch (e) {
//         counters = {};
//     }
//     if (typeof counters[counterName] !== "number") {
//         counters[counterName] = 0;
//     }
//     counters[counterName]++;
//     localStorage.setItem("counters", JSON.stringify(counters));

//     return counters[counterName];
// }

//===================================================================
//Задача 33
// getRepeatableData
// Написать функцию getRepeatableData, котрая принимает на вход три параметра:

// getData- функция, возвращающая данные со стороннего источника. Может генерировать ошибки (см ниже)
// key - аргумент, с которым нужно вызвать getData
// maxRequestsNumber- максимальное количество вызовов getData функции. Если этот параметр отсутствует - повторяем бесконечное количество раз.
// getRepeatableData(getData, key, maxRequestNumber);

// Функция getRepeatableData должна вызывать getData и обрабатывать ошибки по условию:

// Если вызов getData возвращает ошибку NotFoundError, то мы пробрасываем исключение.
// Если вызов getData возвращает ошибку TemporaryError, то мы должны делать повторный вызов getData функции. Кол-во таких вызовов не должно превышать значение maxRequestsNumber. Если кол-во повторого вызыва превышает maxRequestsNumber, то функция getRepeatableData должна пробрасывать ошибку AttemtsLimitExceeded.
// Если getData выполняется без ошибок - функция должна вернуть то, что вернула getData. Пример:
// class AttemptsLimitExceeded extends Error {
//     constructor() {
//         super("Max attempts limit exceed");
//         this.name = "AttemptsLimitExceeded";
//     }
// }

// class NotFoundError extends Error {
//     constructor() {
//         super("Not found");
//         this.name = "NotFoundError";
//     }
// }

// class TemporaryError extends Error {
//     constructor() {
//         super("TemporaryError");
//         this.name = "TemporaryError";
//     }
// }

// function getRepeatableData(getData, key, maxRequestsNumber = Infinity) {
//     let data = null;
//     if (maxRequestsNumber === 0) {
//         throw new AttemptsLimitExceeded();
//     }
//     try {
//         data = getData(key);
//     } catch (e) {
//         if (e.name == "NotFoundError") {
//             throw e;
//         } else if (e.name == "TemporaryError") {
//             return getRepeatableData(
//                 getData,
//                 key,
//                 maxRequestsNumber === null ? null : maxRequestsNumber - 1
//             );
//         }
//     }
//     return data;
// }

// const getData = (key) => "hello" + key;
// const res = getRepeatableData(getData, "1", 3); // 'hello1'

// class ExecutionError extends Error {
//     constructor(element, name, stack, message) {
//         super(message);

//         this.element = element;

//         this.name = name;

//         this.stack = stack;
//     }

//     getArgData() {
//         return this.element;
//     }
// }

// function applyFn(dataArr, callback) {
//     return dataArr.reduce(
//         function (acc, currentElement, i) {
//             const { succeeded, errors } = acc;

//             try {
//                 succeeded.push(callback(currentElement));
//             } catch (e) {
//                 errors.push(new ExecutionError(dataArr[i], e.name, e.stack));
//             }

//             return acc;
//         },
//         {
//             succeeded: [],

//             errors: [],
//         }
//     );
// }

// const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
//   succeeded: [2, 3, 4],
//   errors: [],

// const dataArr = ['{"login":"login","password":"password"}', '{{}'];
// const callback = JSON.parse;
// const { succeeded, errors } = applyFn(dataArr, callback);
//   succeeded: [{ login: 'login', password: "password" }],
//   errors: [ExecutionError],
// errors[0].getArgData(); // '{}'

//======================================================
//Задача 34

// SumFileSizes
// Напишите функцию, которая принимает имена двух файлов и вызывает функцию, переданную третьим параметром и передает ей первым агрументом сумму их размеров.

// Для получения рамзера файла необходимо использовать функцию getFileSize(filename, cb).

// let fileSizes = {
//     testFile1: 65,
//     testFile2: 48,
// };

// function getFileSize(filename, cb) {
//     setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
// }

// function sumFileSizes(filename1, filename2, cb) {
//     let sum = Object.keys(fileSizes).reduce(
//         (acc, key) => acc + fileSizes[key],
//         0
//     );
//     return cb(sum);
// }


//===========================================================
//Задача 35
// getUsersInfo
// Вам нужно написать функцию, которая получает массив всех пользователей и передает его в функцию коллбэк.

// Пример использования

// getUsersInfo((users) => {
//   console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
// });
// Для получения данных вам предоставлены 2 асинхронные функции

// getUsersIds - Возвращает массив с идентификаторами пользователей
// getUserInfo - Возвращает данные пользователя по заданному идентификатору
// getUsersIds((ids) => {
//   console.log(ids); // ['id2', 'id6']
// });

// getUserInfo('someUserId', (userInfo) => {
//   console.log(userInfo); // { name: 'Alex', age: 70 }
// });
// Функция должна вызвать callback, переданный первым агрументом и передать туда массив данных о пользователях.

// Порядок пользователей в результирующем массиве должен соответствовать порядку идентификаторов в массиве из getUsersIds

// Hint: Вне платформы вы можете создать эти функции с помощью setTimeout и какого-то общего хранилица данных.


// const { getUserInfo, getUsersIds } = db;

// function getUsersInfo(onLoad) {
//      getUsersIds((ids) => {
//         if (ids.length === 0) return onLoad([]);
//         const users = [];
//         users.length = ids.length;
//         let c = ids.length;

//         for (let i = 0; i < ids.length; ++i) {
//             const id = ids[i];

//             getUserInfo(id, (user) => {
//                 users[i] = user;
//                 if (!--c) onLoad(users);
//             });
//         }
//     });
// }


//=========================================================
//Задача 36
// increaseSalary
// Давайте напишем функцию, которая будет увеличивать зарплату сотруднику с наименьшей зарплатой.

// Вам нужно

// Получает данные по всем работникам
// Находит работника с наименьшей зарплатой
// Отправляет запрос на повышение зарплаты этому сотруднику на 20%
// Если запрос прошел успешно - отправить сотруднику уведомление об увеличении ЗП тектом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
// Если запрос завершился неудачей - отправить данные об ошибке администратору
// Должна всегда возвращать resolved промис с boolean значением:

// true если увеличение прошло успешно
// false если нет
// Все функции для получения/изменения данных асинхронны и возвращают промисы.
// Вам предоставлены функции:

// api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
// api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
// api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
// api.notifyAdmin(error); // Принимает ошибку

// function increaseSalary() {
// 	return new Promise(resolve, reject => {
// 		api.getEmployees()
// 	})
// }

// const api = {
//     _employees: [
//         { id: 1, name: "Alex", salary: 120000 },
//         { id: 2, name: "Fred", salary: 110000 },
//         { id: 3, name: "Bob", salary: 80000 },
//     ],

//     getEmployees() {
//         return new Promise((resolve) => {
//             resolve(this._employees.slice());
//         });
//     },

//     setEmployeeSalary(employeeId, newSalary) {
//         return new Promise((resolve) => {
//             this._employees = this._employees.map((employee) =>
//                 employee.id !== employeeId
//                     ? employee
//                     : {
//                           ...employee,
//                           salary: newSalary,
//                       }
//             );
//             resolve(this._employees.find(({ id }) => id === employeeId));
//         });
//     },

//     notifyEmployee(employeeId, text) {
//         return new Promise((resolve) => {
//             resolve(true);
//         });
//     },

//     notifyAdmin(error) {
//         return new Promise((resolve) => {
//             resolve(true);
//         });
//     },

//     setEmployees(newEmployees) {
//         return new Promise((resolve) => {
//             this._employees = newEmployees;
//             resolve();
//         });
//     },
// };
// function increaseSalary() {
//     return api
//         .getEmployees()
//         .then((employeeData) => {
//             const [minSalaryEmployee] = employeeData.reduce(
//                 ([minEmployee, minSalary], employee) => {
//                     const { salary } = employee;
//                     return salary < minSalary
//                         ? [employee, salary]
//                         : [minEmployee, minSalary];
//                 },
//                 [null, Infinity]
//             );
//             const { id, salary: oldSalary } = minSalaryEmployee;
//             const newSalary = oldSalary * 1.2;
//             return { id, salary: newSalary };
//         })
//         .then(({ id, salary }) => api.setEmployeeSalary(id, salary))
//         .then(({ name, id, salary }) => {
//             api.notifyEmployee(
//                 id,
//                 `Hello, ${name}! Congratulations, your new salary is ${salary}!`
//             );
//             return true;
//         })
//         .catch((e) => {
//             api.notifyAdmin(e);
//             return false;
//         });
// }
// function increaseSalary() {
//     return api
//         .getEmployees()
//         .then((users) => {
//             const user = users.reduce((acc, curr) =>
//                 acc.salary < curr.salary ? acc : curr
//             );
//             return user;
//         })
//         .then((user) => {
// 			const id = user.id
// 			const salary = user.salary + (user.salary / 100) * 20
// 			return api.setEmployeeSalary(id, salary)
// 		})
//         .then((user) => {
// 			name = user.name
// 			id = user.id
// 			salary = user.salary
//             api.notifyEmployee(
//                 id,
//                 `Hello, ${name}! Congratulations, your new salary is ${salary}!`
//             );
//             return true;
//         })
//         .catch((e) => {
//             api.notifyAdmin(e);
//             return false;
//         });
// }
// increaseSalary();

//=====================================================
// Задача 37
// PromiseRace
// Напишите функцию, которая принимает массив промисов и возвращает результат того, который завершился первым. При этом если первый промис выдал ошибку - необходимо вернуть ее.
// const firstPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(300), 300)
// );

// const secondPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(200), 200)
// );

// const thirdPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(100), 100)
// );

// promiseRace([firstPromise, secondPromise, thirdPromise]); // 100

// return new Promise((resolve, reject) => {
//     promises.forEach((prom) => prom.then(resolve).catch(reject));
// });

//======================================================
// Задача 38

// Напишите асинхронную функцию, которая принимает массив промисов и возвращает массив результатов вызова этих промисов.

// const firstPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(300), 300)
// );

// const secondPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(200), 200)
// );

// const thirdPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(100), 100)
// );

// promiseAll([firstPromise, secondPromise, thirdPromise]).then(console.log); // [300, 200, 100]


// function promiseAll(promises) {
//     if (promises.length === 0) return Promise.resolve([]);
//     const arr = [...promises];

//     return new Promise((resolve, reject) => {
//         let count = 0;
//         for (let i = 0; i < promises.length; i++) {
//             promises[i]
//                 .then((res) => {
//                     arr[i] = res;
//                     if (++count === promises.length) resolve(arr);
//                 })
//                 .catch((err) => reject(err));
//             console.log(promises[i]);
//         }
//     });
// }

//===============================================
//Задача 39
// increaseSalary
// Давайте доработаем нашу функцию увеличения зарплат, но теперь будем увеличивать ЗП всем сотрудникам и добавим к ней дополнительный функционал.
// Теперь будем использовать функционал async/await для решения этой задачи.

// Вам нужно написать функцию, которая

// Получает данные по всем работникам
// Считаем среднее-арифметическое по ЗП
// Тем сотрудникам, у которых ЗП меньше средней - повышаем на 20%, у кого больше - на 10%
// Если запрос прошел успешно - отправлять сотруднику уведомление об увеличении ЗП тектом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
// Если запрос завершился неудачей - отправлять данные ошибки администратору
// По итогу отправить суммарное ЗП работников после повышения в бухгалтерию
// Должна всегда возвращать resolved промис с числовым значением, сколько зарплат успешно повышено.

// Все функции для получения/изменения данных асинхронны и возвращают промисы.
// Вам предоставлены функции:

// api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
// api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
// api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
// api.notifyAdmin(error); // Принимает ошибку
// api.sendBudgetToAccounting(summarySalaries); // Принимает суммарную ЗП

// const api = {
//     _employees: [
//         { id: 1, name: "Alex", salary: 120000 },
//         { id: 2, name: "Fred", salary: 110000 },
//         { id: 3, name: "Bob", salary: 80000 },
//     ],

//     getEmployees() {
//         return new Promise((resolve) => {
//             resolve(this._employees.slice());
//         });
//     },

//     setEmployeeSalary(employeeId, newSalary) {
//         return new Promise((resolve) => {
//             const updatedEmployees = this._employees.map((employee) =>
//                 employee.id !== employeeId
//                     ? employee
//                     : {
//                           ...employee,
//                           salary: newSalary,
//                       }
//             );
//             this._employees = updatedEmployees;
//             resolve(this._employees.find(({ id }) => id === employeeId));
//         });
//     },

//     notifyEmployee(employeeId, text) {
//         return new Promise((resolve) => {
//             resolve(true);
//         });
//     },

//     notifyAdmin(error) {
//         return new Promise((resolve) => {
//             resolve();
//         });
//     },

//     setEmployees(newEmployees) {
//         return new Promise((resolve) => {
//             this._employees = newEmployees;
//             resolve();
//         });
//     },

//     sendBudgetToAccounting(newBudget) {
//         return new Promise((resolve) => {
//             resolve();
//         });
//     },
// };

// async function increaseSalary() {
//     let countCall = 0;
//     let sumBudget = 0;

//     const employeesList = await api.getEmployees();
//     const averageSalaries = Math.floor(
//         employeesList.reduce((acc, el) => (acc += el.salary), 0) /
//             employeesList.length
//     );

//     try {
//         for (employee of employeesList) {
//             let changedSalary = 0;
//             const sendRequestSalary = async () => {
//                 try {
//                     await api.setEmployeeSalary(employee.id, changedSalary);
//                     let text = `Hello, ${employee.name}! Congratulations, your new salary is ${changedSalary}!`;
//                     await api.notifyEmployee(employee.id, text);
//                     countCall++;
//                     sumBudget += changedSalary;
//                 } catch (error) {
//                     await api.notifyAdmin(error);
//                 }
//             };
//             if (employee.salary > averageSalaries) {
//                 changedSalary = parseInt(employee.salary * 1.1);
//                 console.log(changedSalary);
//                 await sendRequestSalary();
//             } else if (employee.salary < averageSalaries) {
//                 changedSalary = parseInt(employee.salary * 1.2);
//                 await sendRequestSalary();
//             }
//         }
//     } catch (error) {
//         await api.notifyAdmin(error);
//     } finally {
//         await api.sendBudgetToAccounting(sumBudget);
//     }
//     return countCall;
// }
// increaseSalary();

//==============================================================
// Задача 40
// PromisesInSeries
// Напишите функцию, которая принимает массив асинхронных функций и последовательно(следующая начинается, когда закончилась предыдущая) вызывает их, передавая в аргументы результат вызова предыдущей функции.

// const firstPromise = () =>
//     new Promise((resolve) => setTimeout(() => resolve(300)), 300);

// const secondPromise = () =>
//     new Promise((resolve) => setTimeout(() => resolve(200)), 200);

// const thirdPromise = () =>
//     new Promise((resolve) => setTimeout(() => resolve(100)), 100);

// promisesInSeries([firstPromise, secondPromise, thirdPromise]);
// Выполнит resolve(300) через 300 мс, потом resolve(200) через 200 мс, потом resolve(100) через 100 мс
// function promisesInSeries(fns) {
// 	if (fns.length == 0) Promise.resolve(undefined);
//     return fns.reduce((promise, fn) => promise.then(fn), Promise.resolve());
// }

// async function promisesInSeries(asyncFns) {
// 	if (asyncFns.length == 0) Promise.resolve(undefined);
//     let promise;
//     for (let i = 0; i < asyncFns.length; i++) {
//         promise = await Promise.resolve(asyncFns[i](promise));
//         console.log(promise);
//     }

//     return promise;
// }


//=============================================================================
// Задача 41
// Урок с кодом
// Throttle
// Реализуйте функции throttle.

// Примечание: из-за особенностей тестирования реализация new Date() изменена так, что изначальная текущая дата (new Date() или Date.now()) будет равна нулю и будут вручную увеличиваться в тестах. Учтите это, если будете использовать дату в реализации функций.

// Примечание: функции, полученные из throttle, должны передавать полученные аргументы и контекст вызова в оригинальную функцию

// Примечание: функция throttle может быть реализована без использования таймеров

// Функция должна принимать функцию и время задержки, а возвращать модифицированную функцию. Возвращенная функция должна следовать следующим правилам:

// Функция throttle должна вызывать функцию и запускать таймер, равный времени задержки, в течение которого функция не может быть вызвана заново. Throttle необходим для того, чтобы обеспечить возможность вызова функции не чаще, чем указанное время задержки. Если время задержки равно 500 мс, то при вызове функции, возвращенной из throttle, каждые 100 мс 10 раз подряд функция будет вызвана лишь три раза:
// первый вызов функции на 0мс (первая попытка вызова функции после 0 мс задержки),
// второй на 500 мс (пятая попытка вызова функции после 500 мс задержки)
// и третий на 1000 мс (десятая попытка вызова функции после 1000 мс задержки).
// Пример throttle:

// let counter = 0;
// const fn = () => {
//     counter++;
// };

// const throttle = (fn, throttleTime) => {
//     let isWaiting;
//     return function (...args) {
//         if (isWaiting) {
//             return;
//         }
//         fn.apply(this, args);
//         isWaiting = true;

//         setTimeout(() => {
//             isWaiting = false;
//         }, throttleTime);
//     };
// };
//аналогично

// const throttle = (fn, throttleTime) => {
//     let isWaiting;
// 	let savedArgs = null;
// 	let savedThis = null
//     return function wrapper(...args) {
//         if (isWaiting) {
// 			savedArgs = args;
// 			savedThis = this
//             return;
//         }
//         fn.apply(this, args);
//         isWaiting = true;

//         setTimeout(() => {
//             isWaiting = false;
// 			if(savedThis) {
// 			wrapper.apply(savedThis, savedArgs)
// 			savedThis = null;
// 			savedArgs = null;
// 			}
//         }, throttleTime);
//     };
// };
// const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс
// const debouncedFn = throttle(fn, 1000);
// throttledFn(); // первый вызов
// setTimeout(throttledFn, 100); // вызов через 100 мс после последнего вызова
// первый вызов был заблокирован, второй ожидает окончания таймера
// setTimeout(throttledFn, 500); // вызов через 100 мс после последнего вызова
// второй вызов был заблокирован, третий ожидает окончания таймера
// setTimeout(throttledFn, 900); // ...
// setTimeout(throttledFn, 400); // после этого вызова не следует других вызовов
// только этот вызов сработает, т.к. после него прошло 200 мс и других вызовов не было
// console.log(counter); // 1


// const intervalId = setInterval(throttledFn, 100);
// setTimeout(() => clearInterval(intervalId), 1000); // удаляем интервал через 10 вызовов

// console.log(counter); // 3
//===========================================================================
// Задача 42
// Debounce
// Реализуйте функции debounce.

// Примечание: функции, полученные из debounce, должны передавать полученные аргументы и контекст вызова в оригинальную функцию
// Функция должна принимать функцию и время задержки, а возвращать модифицированную функцию. Возвращенная функция должна следовать следующим правилам:

// Функция debounce должна запускать таймер, равный времени задержки, и игнорировать вызовы функции в течение времени задержки, а так же начинать отсчет задержки заново каждый раз, когда функция была вызвана. Как только пройдет время задержки с момента последнего вызова функции, дебаунс должен вызвать последнюю вызванную функцию. Debounce нужен для того, чтобы "собрать" многократные вызовы одной и той же функции в течение короткого промежутка времени и вызвать ее только единожды после окончания вызовов. При вызове функции, возвращенной из debounce (переданная в debounce задержка равна 200 мс), 100 раз подряд с задержкой в меньше, чем 200 мс, функция будет вызвана лишь единожды спустя 200 мс после последнего (сотого) вызова.
// Пример debounce:

// let counter = 0;
// const fn = () => {
//     counter++;
// };

// const debounce = (fn, debounceTime) => {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, debounceTime);
//     };
// };

// const debouncedFn = debounce(fn, 200);
// debouncedFn(); // первый вызов
// setTimeout(debouncedFn, 100); // вызов через 100 мс после последнего вызова
// первый вызов был заблокирован, второй ожидает окончания таймера
// setTimeout(debouncedFn, 200); // вызов через 100 мс после последнего вызова
// второй вызов был заблокирован, третий ожидает окончания таймера
// setTimeout(debouncedFn, 300); // ...
// setTimeout(debouncedFn, 400); // после этого вызова не следует других вызовов
// только этот вызов сработает, т.к. после него прошло 200 мс и других вызовов не было
// console.log(counter); // 1