const gcd = (a, b) => {
  if (a === b) return a;
  let min = Math.min(a, b);
  if (min === 0) {
    return Math.max(a, b);
  }
  let temp;
  if (a < b) {
    temp = b - a;
  } else {
    temp = a - b;
  }

  return gcd(min, temp);
};

export default gcd;
