// Дан массив из чисел.
const arr = [-8, -4, -2, 2, 2, 4, 8, 16];

// Из него делаем массив, состоящий из квадратов этих чисел.
let funcSquare = (arr).map(item => Math.pow(item, 2));
console.log(funcSquare);

// Возвращаем массив, состоящий только из уникальных значений.
function delRepeat(arr) {
    let repeat = [];
    return arr.filter(function(item) {
        return repeat.hasOwnProperty(item) ? false : (repeat[item] = true);
    });
};
console.log(delRepeat(arr));

// Проверяем то, что все элементы больше нуля.
function aboveZero(arr) {
    const zeroArr = arr.filter(item => item < 0);
    return (zeroArr.length > 0 ? false : true);
};
console.log(aboveZero(arr));

// Оставляем в массиве только отрицательные числа. 
const aboveZeroArr = arr.filter(item => item < 0);
console.log(aboveZeroArr);

// Находим сумму отрицательны чисел.
let sumOfNegativeNum = aboveZeroArr.reduce((sum, currrent) => sum + currrent, 0);
console.log(sumOfNegativeNum);


const arrSub = [1, 2, [3, 4, 5], 6 , [7], 8, [9]]

// Оставляем в массиве только подмассивы.
const subArrOnly = arrSub.filter(item => (Array.isArray(item) ? item : false));
console.log(subArrOnly);

const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, temporibus illo.'

// Возврщаем количество слов в строке, длинна которых больше 4 символов.
const loremLength4 = (string) => string = string.match(/\w{5,}/g);
console.log(loremLength4(string));

const numStr = '1111111111 22 55555, 666666 7777777';

// Возвращаем шестизначное (ни больше, ни меньше) число.
const num6 = (numStr) => numStr.match(/\b\d{6}\b/);
console.log(num6(numStr));