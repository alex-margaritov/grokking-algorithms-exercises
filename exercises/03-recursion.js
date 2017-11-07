/*
 * Задача: Написать функцию, реализующую алгоритм рекурсивного поиска в массиве
 * (предполагается, что на входе объект с truthy значениями свойств)
 */
 
const assert = require('assert')

const testObj = {
  key1: 'VALUE_OF_KEY_1',
  randomKeys: {
    someKeyHere: [],
    someAnotherKey: 1
  },
  user: {
    name: "Вася",
    age: 25,
    roles: {
      isAdmin: 'very important value',
      isEditor: true
    }
  },
  onemorefield: {
    andonemore: {
      aaandonemore: {
        andmore: {
          more: {
            finally: true
          }
        }
      }
    }
  }
}

const getType = (elem) => Object.prototype.toString.call(elem).slice(8, -1)
const isObject = (elem) => getType(elem) === 'Object'

const findKeyInObject = (key, obj) => {
  if (!!obj[key]) return obj[key]

  for (let otherKey in obj) {
    if ( isObject(obj[otherKey]) ) {
      const findResult = findKeyInObject(key, obj[otherKey])
      if (!!findResult) return findResult
    }
  }

  return undefined
}

/*******************************************************************************
==================================>TESTS<=======================================
*******************************************************************************/

// console.log(findKeyInObject('key1', testObj))
assert.equal( findKeyInObject('key1', testObj), testObj.key1 )

// console.log(findKeyInObject('age', testObj))
assert.equal( findKeyInObject('age', testObj), testObj.user.age )

// console.log(findKeyInObject('someKeyHere', testObj))
assert.equal( findKeyInObject('someKeyHere', testObj), testObj.randomKeys.someKeyHere )

// console.log(findKeyInObject('isAdmin', testObj))
assert.equal( findKeyInObject('isAdmin', testObj), testObj.user.roles.isAdmin )

// console.log(findKeyInObject('finally', testObj));
assert.equal(
  findKeyInObject('finally', testObj),
  testObj.onemorefield.andonemore.aaandonemore.andmore.more.finally
)
