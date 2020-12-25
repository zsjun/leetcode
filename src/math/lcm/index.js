const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

export default (a, b) => {
  return Math.floor((a * b) / gcd(a, b));
};
