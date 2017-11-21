/*
 * Задача: Написать функцию, которая осуществляет сортировку массива по
 * алгоритму быстрой сортировки
 */

const assert = require('assert');

const testArray = [
  17, 84, 75, 85, 21, 85, 45, 69, 10, 44, 50, 82, 31, 99, 78, 79, 19, 66, 39,
  62, 60, 76, 14, 55, 88, 82, 64, 37, 67, 25, 32, 93, 66, 86, 64, 94, 20, 20,
  81, 12, 1, 16, 98, 25, 34, 80, 30, 59, 92, 60
];

const quickSort = arr => {
  if (arr.length < 2) return arr;

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[ pivotIndex ];
  const noPivotArr = arr.slice();
  noPivotArr.splice(pivotIndex, 1);

  const less = noPivotArr.filter(item => item <= pivot);
  const more = noPivotArr.filter(item => item > pivot);
  return [...quickSort(less), pivot, ...quickSort(more)];
}

/*******************************************************************************
==================================>TESTS<=======================================
*******************************************************************************/

// console.log(quickSort(testArray));
// console.log(testArray.sort((a, b) => a - b));
assert.deepEqual(
    quickSort(testArray),
    testArray.sort((a, b) => a - b)
)
