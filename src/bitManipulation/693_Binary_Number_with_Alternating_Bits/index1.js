export default (n) => {
  let pre = n & 1;
  n >>= 1;
  while (n > 0) {
    if (((n & 1) ^ pre) === 0) return false;
    pre = n & 1;
    n >>= 1;
  }
  return true;
};
