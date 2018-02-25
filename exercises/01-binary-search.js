/*
 * Задача: Написать функцию, которая осуществляет поиск элемента в сортированном
 * массиве по алгоритму бинарного поиска.
 */

const assert = require('assert');

const testArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
  44, 45
];


// 1 - Решение в лоб :) (возвращает true если число найдено, иначе - false)
const stupidBinarySearch = (num, numList) => {
  let list = numList.slice();
  let index = Number.parseInt(list.length / 2, 10);

  if (list[index] === num) { return true; }

  while (list[index] !== num) {
    if (list.length === 1) { return false; }
    if (list[index] > num) {
      list = list.slice(0, index);
    } else {
      list = list.slice(index, list.length);
    }
    index = Number.parseInt(list.length / 2, 10);
  }

  return true;
};

// 2 - Решение с использованием рекурсии
// (возвращает true если число найдено, иначе - false)
const recursiveBinarySearch = (num, numList) => {
  const search = (i, list) => {
    if (list[i] === num) { return true; }
    if (list.length === 1) { return false; }

    if (list[i] > num) {
      const sublist = list.slice(0, i);
      return search(Number.parseInt(sublist.length / 2, 10), sublist);
    }
    const sublist = list.slice(i, list.length);
    return search(Number.parseInt(sublist.length / 2, 10), sublist);
  };

  const index = Number.parseInt(numList.length / 2, 10);
  return search(index, numList);
};

// 3 - Решение с возвратом индекса найденного элемента
const customIndexOf = (num, numList) => {
  let low = 0;
  let high = numList.length - 1;

  while (low <= high) {
    const index = Number.parseInt((low + high) / 2, 10);
    const item = numList[index];
    if (item === num) return index;

    if (item > num) high = index - 1;
    else low = index + 1;
  }

  return -1;
};

/*
==================================>TESTS<=======================================
*/

// Testing stupidBinarySearch
for (let i = 0; i < 50; i += 1) {
  // console.log('Result:', stupidBinarySearch(i, testArray))
  assert.equal(
    stupidBinarySearch(i, testArray),
    testArray.indexOf(i) > -1
  );
}

// Testing recursiveBinarySearch
for (let i = 0; i < 50; i += 1) {
  // console.log('Result:', recursiveBinarySearch(i, testArray))
  assert.equal(
    recursiveBinarySearch(i, testArray),
    testArray.indexOf(i) > -1
  );
}

// Testing customIndexOf
for (let i = 0; i < 50; i += 1) {
  // console.log('Result:', customIndexOf(i, testArray))
  assert.equal(
    customIndexOf(i, testArray) > -1,
    testArray.indexOf(i) > -1
  );
}
