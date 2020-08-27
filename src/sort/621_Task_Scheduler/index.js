/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
export default (tasks, n) => {
  if (n <= 0) {
    return tasks.length;
  }
  let sHash = new Array(26).fill(0);
  // 找到字符每次出现的次数
  for (let i = 0; i < tasks.length; i++) {
    // A = 65
    if (!sHash[tasks[i].charCodeAt(0) - 65]) {
      sHash[tasks[i].charCodeAt(0) - 65] = 1;
    } else {
      sHash[tasks[i].charCodeAt(0) - 65]++;
    }
  }
  sHash.sort((a, b) => a - b);

  let i = 25;
  // 找到出现次数最大的
  while (i >= 0 && sHash[i] === sHash[25]) {
    i--;
  }
  //(sHash[25] - 1) * (n + 1) 表示最大次数出现的
  // sHash[25] - 1表示字符出现次数最多的次数
  // (n + 1) 表示被出现次数分割的块数，比如AACCCDDEEE 3 则
  // sHash[25] = C出现的次数3，n+1 是指 C和间隔3 加在一起的个数
  // 25 - i 表示在和C出现的此时一样的字符个数
  // 因为最小肯定是tasks的长度，所以要取最大数,一般出现这种情况是当sHash[25] - 1分成的各个块的时候，已经被插满了
  //
  return Math.max(tasks.length, (sHash[25] - 1) * (n + 1) + 25 - i);
};
