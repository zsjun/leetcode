const getNextArr = (needle) => {
  const len = needle.length;
  const next = new Array(len).fill(0);

  next[0] = -1;

  let k = -1;
  for (let i = 1; i < len; i++) {
    while (k != -1 && needle[k + 1] !== needle[i]) {
      k = next[k];
    }
    if (needle[k + 1] === needle[i]) {
      ++k;
    }
    next[i] = k;
  }
  return next;
};

export default (haystack, needle) => {
  if (!needle) return 0;
  if (haystack.length === 0) {
    return -1;
  }
  const hayStackLen = haystack.length;
  const needleLen = needle.length;
  const next = getNextArr(needle);

  let k = -1;

  for (let j = 0; j < hayStackLen; j++) {
    // 循环查找
    while (k > -1 && needle[k + 1] !== haystack[j]) {
      k = next[k];
    }
    if (needle[k + 1] === haystack[j]) {
      ++k;
    }
    if (k === needleLen - 1) {
      return j - needleLen + 1;
    }
  }
  return -1;
};
