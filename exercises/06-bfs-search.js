/**
 * Задача: написать функцию, которая реализует алгоритм поиска в ширину
 */

const assert = require('assert');

const testTree = {
  data: {
    type: 'Random',
    output: {
      '1': { responce: { some: 'Some error found! Bingo!' } },
      '2': { responce: { second: 'Second error found! Bingo!' } },
      '3': { responce: { another: 'Another error found! Bingo!' } },
      '4': { responce: { text: 'The shiny text found! Bingo!' } },
      '5': { responce: { last: 'Last error found! Bingo!' } },
      '6': { someStub: { here: { lies: { some: { treasure: 1000000 } } } } }
    }
  }
}

const bfsSearch = (tree, nodeName) => {

  const search = (subtree) => {
    const keys = Object.keys(subtree)
    if (keys.indexOf(nodeName) !== -1) return subtree[nodeName]

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (typeof subtree[key] !== 'object') continue
      const check = search(subtree[key])
      if (!!check) return check
    }
    return null
  }

  return search(tree)
}

/*******************************************************************************
==================================>TESTS<=======================================
*******************************************************************************/

// console.log(bfsSearch(testTree, 'some'));
// console.log(bfsSearch(testTree, 'second'));
// console.log(bfsSearch(testTree, 'another'));
// console.log(bfsSearch(testTree, 'text'));
// console.log(bfsSearch(testTree, 'last'));
// console.log(bfsSearch(testTree, 'treasure'));

assert.equal(
  bfsSearch(testTree, 'some'),
  'Some error found! Bingo!'
)
assert.equal(
  bfsSearch(testTree, 'second'),
  'Second error found! Bingo!'
)
assert.equal(
  bfsSearch(testTree, 'another'),
  'Another error found! Bingo!'
)
assert.equal(
  bfsSearch(testTree, 'text'),
  'The shiny text found! Bingo!'
)
assert.equal(
  bfsSearch(testTree, 'last'),
  'Last error found! Bingo!'
)
assert.equal(
  bfsSearch(testTree, 'treasure'),
  1000000
)

