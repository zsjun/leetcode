var solution = function (knows) {
  return function (n, l = 0, r = n - 1) {
    // 左右指针
    while (l < r) {
      // 如果左边的人认识右边的人，则左边换人，如果左边不认识右边的人
      // 右边换人
      knows(l, r) ? l++ : r--;
    }
    // 左边的都不认识右边的人
    for (let i = 0; i < n; i++) {
      // 如果有一个人不认识r，则r不是名人
      // 如果有一个人认识r，但是r-i>2，
      // 防止[[1,1],[1,1]]
      if (i !== r && ((i < r + 2 && knows(r, i)) || !knows(i, r))) {
        return -1;
      }
    }
    return r;
  };
};
