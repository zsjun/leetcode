const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

export default gcd;
