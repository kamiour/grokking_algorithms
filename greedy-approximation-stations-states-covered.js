let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {
  kone: new Set(['id', 'nv', 'ut']),
  ktwo: new Set(['wa', 'id', 'mt']),
  kthree: new Set(['or', 'nv', 'ca']),
  kfour: new Set(['nv', 'ut']),
  kfive: new Set(['ca', 'az']),
};

const finalStations = new Set();

while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();

  for (let station in stations) {
    const states = stations[station];
    const coveredStates = new Set([...statesNeeded].filter((state) => states.has(state)));

    if (coveredStates.size > statesCovered.size) {
      bestStation = station;
      statesCovered = coveredStates;
    }
  }

  statesNeeded = new Set([...statesNeeded].filter((state) => !statesCovered.has(state)));
  finalStations.add(bestStation);
}

console.log(finalStations);
