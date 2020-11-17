/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const swap = (people, i, j) => {
  const temp = people[j];
  people[j] = people[i];
  people[i] = temp;
};
export default (people) => {
  if (!people) return [];
  people.sort((o1, o2) => {
    return o1[0] !== o2[0] ? o2[0] - o1[0] : o1[1] - o2[1];
  });
  const res = [];
  for (let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]);
  }
  return res;
};
