export default (a, b) => {
  if (a === b) return a;
  const min = Math.min(a, b);
  let max = 1;
  for (let i = min; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      max = Math.max(max, i);
    }
  }
  return max;
};
