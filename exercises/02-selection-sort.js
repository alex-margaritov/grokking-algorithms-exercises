/*
 * Задача: Написать функцию, реализующую алгоритм сортировки массива выбором
 */

const assert = require('assert');

const testArray = [
    55, 92, 25, 79, 4, 14, 81, 49, 87, 70, 4, 84, 39, 41, 79, 86, 0, 41, 22, 26,
    45, 71, 81, 34, 44, 72, 67, 90, 62, 39, 76, 19, 55, 15, 6, 57, 48, 94, 94,
    43, 23, 30, 94, 46
]

// Сортировка чисел по убыванию
const descentSort = (list) => {
    const result = []
    const innerList = list.slice()

    const findMaxIndex = (list) => {
        let max = Number.MIN_VALUE
        let index
        for (let i = 0; i < list.length; i++) {
            if (list[i] > max) { max = list[i]; index = i }
        }
        return index
    }

    while (innerList.length > 0) {
        const currentMaxIndex = findMaxIndex(innerList)
        const [currentMax] = innerList.splice( currentMaxIndex, 1 )
        result.push(currentMax)
    }

    return result
}

/*******************************************************************************
==================================>TESTS<=======================================
*******************************************************************************/

// Testing descentSort
// console.log('Result:\n[', descentSort(testArray).join(', '), ']');
assert.deepEqual(
    descentSort(testArray),
    testArray.sort( (a, b) => b - a )
)
