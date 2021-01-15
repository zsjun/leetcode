/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const sortArray = (a, b) => {
  if (a[0] === b[0]) {
    return a[1].localeCompare(b[1]);
  }
  return a[0].localeCompare(b[0]);
};
export default (tickets) => {
  if (!tickets || tickets.length === 0) return [];
  const map = new Map();
  const result = [];

  tickets.sort(sortArray);
  for (let i = 0; i < tickets.length; i++) {
    if (map.has(tickets[i][0])) {
      map.get(tickets[i][0]).push(tickets[i][1]);
    } else {
      map.set(tickets[i][0], [tickets[i][1]]);
    }
  }

  let key = "JFK";
  const drawback = [];
  for (let i = 0; i < tickets.length; i++) {
    while (!map.has(key) || map.get(key).length === 0) {
      drawback.push(key);
      key = result.pop();
    }
    result.push(key);
    key = map.get(key).shift();
  }
  result.push(key);
  while (drawback.length > 0) {
    result.push(drawback.pop());
  }

  return result;
};
