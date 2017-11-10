/*
 * Задача: Написать функцию, реализующую суммирование элементов в массиве
 * по подходу "разделяй и влавствуй"
 */

 const assert = require('assert')

const testArray = [2, 3, 5, 6, 7, 1, 3, 5, 15, 23, 11]

const sum = arr => {
  const len = arr.length
  if (len === 0) return 0;
  return arr[0] + sum(arr.slice(1))
}

/*******************************************************************************
==================================>TESTS<=======================================
*******************************************************************************/

// console.log(sum(testArray));
assert.equal(
  testArray.reduce((prev, curr) => prev + curr, 0),
  sum(testArray)
)

const emptyArray = []
assert.equal(
  emptyArray.reduce((prev, curr) => prev + curr, 0),
  sum(emptyArray)
)

const bigArray = [
  2, 3, 5, 6, 7, 1, 3, 5, 15, 23, 0, 2, 3, 5, 6, 7, 1, 3, 5, 0, 23, 11
]
assert.equal(
  bigArray.reduce((prev, curr) => prev + curr, 0),
  sum(bigArray)
)
