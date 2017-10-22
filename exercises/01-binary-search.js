/*
 * Написать функцию, которая осуществляет поиск элемента в сортированном массиве
 * по алгоритму бинарного поиска. Если элемент найден - вернуть true, иначе false
 */

const assert = require('assert');

const testArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
    44, 45
]


// 1 - Решение в лоб :)
const stupidBinarySearch = (num, numList) => {
    let list = numList.slice()
    let index = Number.parseInt(list.length / 2)

    if (list[index] === num) { return true }

    while (list[index] !== num) {
        if (list.length === 1) { return false }
        if (list[index] > num) {
            list = list.slice(0, index)
        } else {
            list = list.slice(index, list.length)
        }
        index = Number.parseInt(list.length / 2)
    }

    return true
}

// 2 - Решение с использованием рекурсии
const recursiveBinarySearch = (num, numList) => {

    const search = (i, list) => {
        if ( list[i] === num ) { return true }
        if ( list.length === 1 ) { return false }

        if ( list[i] > num ) {
            const sublist = list.slice(0, i)
            return search( Number.parseInt(sublist.length / 2), sublist )
        } else {
            const sublist = list.slice(i, list.length)
            return search( Number.parseInt(sublist.length / 2), sublist )
        }
    }

    const index = Number.parseInt(numList.length / 2)
    return search(index, numList)
}

/*******************************************************************************
==================================>TESTS<=======================================
*******************************************************************************/

// Testing stupidBinarySearch
for (var i = 0; i < 50; i++) {
    console.log('Result:', stupidBinarySearch(i, testArray))
    assert.equal(
        stupidBinarySearch(i, testArray),
        testArray.indexOf(i) > -1
    )
}

// Testing recursiveBinarySearch
for (var i = 0; i < 50; i++) {
    console.log('Result:', recursiveBinarySearch(i, testArray))
    assert.equal(
        recursiveBinarySearch(i, testArray),
        testArray.indexOf(i) > -1
    )
}
