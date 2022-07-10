const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    finish: 1,
  },
  b: {
    a: 3,
    finish: 5,
  },
  finish: {},
};

const costs = {
  a: 6,
  b: 2,
  finish: Infinity,
};

const parents = {
  a: 'start',
  b: 'start',
  finish: null,
};

function updateParentsAndCosts(graph, parents, costs) {
  const processedNodes = new Set();

  let node = findLowestCostNode(costs);

  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors).forEach((neighborNode) => {
      const newCost = neighbors[neighborNode] + cost;

      if (newCost < costs[neighborNode]) {
        costs[neighborNode] = newCost;
        parents[neighborNode] = node;
      }
    });

    processedNodes.add(node);

    node = findLowestCostNode(costs);
  }

  function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let node in costs) {
      const cost = costs[node];

      if (cost < lowestCost && !processedNodes.has(node)) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }

    return lowestCostNode;
  }
}

function getLowestCostPath(parents, topAncestor) {
  const parentsChain = [topAncestor];

  while (parents[topAncestor]) {
    const newTopAncestor = parents[topAncestor];
    parentsChain.unshift(newTopAncestor);

    topAncestor = newTopAncestor;
  }

  return parentsChain.join(' -> ');
}

updateParentsAndCosts(graph, parents, costs);
getLowestCostPath(parents, 'finish');
