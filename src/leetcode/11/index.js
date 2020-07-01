export default (height) => {
  let i = 0;
  let len = height.length - 1;
  let max = -1;

  while (i < len) {
    let _max = -1;
    if (height[i] <= height[len]) {
      _max = (len - i) * height[i];
      if (_max > max) max = _max;
      i++;
    } else {
      _max = (len - i) * height[len];
      if (_max > max) max = _max;
      len--;
    }
  }
  return max;
};
