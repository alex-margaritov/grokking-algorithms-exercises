/**
 * Задача: написать функцию, реализующую алгоритм Дийкстры на взвешенном графе
 */

const assert = require('assert');

/**
 *      Test Graph
 *       B --5-- E
 *      / \     / \
 *     3   2   1   4
 *    /     \ /     \
 *   A --6-- D --6-- G
 *    \     / \     /
 *     5   3   3   1
 *      \ /     \ /
 *       C --5-- F
*/
const testGraph = {
  A: { B: 3, C: 5, D: 6 },
  B: { E: 5, D: 2 },
  C: { D: 3, F: 5 },
  D: { E: 1, F: 3, G: 6 },
  E: { G: 4 },
  F: { G: 1 },
  G: {}
};

const getShortestLength = (graph, start, end) => {
  const costs = Object.assign({}, graph[start], { [end]: Number.MAX_VALUE });
  Object.keys(graph).forEach((item) => {
    if (Object.keys(costs).indexOf(item) === -1) costs[item] = Number.MAX_VALUE;
  });

  const parents = Object.keys(graph[start]).reduce((prev, cur) => {
    prev[cur] = start; // eslint-disable-line no-param-reassign
    return prev;
  }, {});

  const processed = [];

  const findClosestNode = (currentCosts) => {
    let lowestCost = Number.MAX_VALUE;
    let lowestCostNode;
    Object.keys(currentCosts).forEach((node) => {
      const cost = currentCosts[node];
      if (cost < lowestCost && processed.indexOf(node) === -1) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    });
    return lowestCostNode;
  };


  let node = findClosestNode(costs);
  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];
    // eslint-disable-next-line
    Object.keys(neighbors).forEach((neighbor) => {
      const newCost = cost + neighbors[neighbor];
      if (costs[neighbor] > newCost) {
        costs[neighbor] = newCost;
        parents[neighbor] = node;
      }
    });
    processed.push(node);
    node = findClosestNode(costs);
  }
  return costs[end];
};

/*
==================================>TESTS<=======================================
*/

// console.log(getShortestLength(testGraph, 'A', 'G'));
assert.equal(
  getShortestLength(testGraph, 'A', 'G'),
  9
);

assert.equal(
  getShortestLength(testGraph, 'A', 'D'),
  5
);

assert.equal(
  getShortestLength(testGraph, 'A', 'E'),
  6
);
