export default prices => {
  let count = 0;

  for (let i = 0, l = prices.length; i < l; i++) {
    for (let j = i; j < l - 1; j++) {
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[i];
        i = j + 1;
      } else {
        i = j;
        break;
      }
    }
  }
  return count;
};
