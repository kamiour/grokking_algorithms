const you = { name: 'you', isMangoSeller: false };
const alice = { name: 'alice', isMangoSeller: false };
const bob = { name: 'bob', isMangoSeller: false };
const claire = { name: 'claire', isMangoSeller: false };
const anuj = { name: 'anuj', isMangoSeller: false };
const peggy = { name: 'peggy', isMangoSeller: false };
const thom = { name: 'thom', isMangoSeller: true };
const jonny = { name: 'jonny', isMangoSeller: false };

const graph = {};
graph[you.name] = [alice, bob, claire];
graph[bob.name] = [anuj, peggy];
graph[alice.name] = [peggy];
graph[claire.name] = [thom, jonny];
graph[anuj.name] = [];
graph[peggy.name] = [];
graph[thom.name] = [];
graph[jonny.name] = [];

function search(person) {
  const queue = graph[person.name];

  while (queue.length > 0) {
    const personToCheck = queue.pop();

    if (personToCheck.isChecked) {
      continue;
    }

    if (personToCheck.isMangoSeller) {
      return `Mango seller is: ${personToCheck.name}`;
    } else {
      personToCheck.isChecked = true;
      queue.unshift(...graph[personToCheck.name]);
    }
  }

  return 'No mango seller found';
}
