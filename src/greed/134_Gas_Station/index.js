/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
export default (gas, cost) => {
  let maxIndex = 0;
  let max = 0;
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] - cost[i] > max) {
      max = gas[i] - cost[i];
      maxIndex = i;
    }
  }
  max = 0;
  let begin = 0;
  let allGas;
  let costGas;
  console.log(maxIndex);
  for (let j = 0; j < gas.length; j++) {
    let beginCount = 0;
    allGas = 0;
    costGas = 0;
    beginCount = j;
    if (j < maxIndex) {
      while (beginCount <= maxIndex) {
        allGas += gas[beginCount];
        costGas += cost[beginCount];
        beginCount++;
      }
    } else if (j === maxIndex) {
      allGas += gas[j];
      costGas += cost[j];
    } else {
      beginCount = 0;
      while (beginCount <= maxIndex) {
        allGas += gas[beginCount];
        costGas += cost[beginCount];
        beginCount++;
      }
      beginCount = j;
      while (beginCount < gas.length) {
        allGas += gas[beginCount];
        costGas += cost[beginCount];
        beginCount++;
      }
    }

    if (allGas - costGas > max) {
      max = allGas - costGas;
      begin = j;
    }
  }
  let k = 0;
  allGas = 0;
  costGas = 0;
  k = begin;
  while (k < gas.length) {
    allGas += gas[k];
    costGas += cost[k];
    k++;
  }
  k = 0;
  while (k < begin) {
    allGas += gas[k];
    costGas += cost[k];
    k++;
  }

  if (allGas < costGas) return -1;

  return begin;
};
