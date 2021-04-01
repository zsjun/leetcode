/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */

// Input: (stamp = 'abc'), (target = 'ababc');
// Output: [0, 2];

// Input: (stamp = 'abca'), (target = 'aabcaca');
// Output: [3, 0, 1];

function canReplace(target, targetBegin, stamp) {
  for (let i = 0; i < stamp.length; i++) {
    if (target[i + targetBegin] !== '*' && target[i + targetBegin] !== stamp[i]) {
      return false;
    }
  }
  return true;
}

function doReplace(target, p, len, count) {
  for (let i = 0; i < len; i++) {
    if (target[i + p] != '*') {
      target[i + p] = '*';
      count++;
    }
  }
  return count;
}
export default (stamp, target) => {
  const res = [];
  const targetLen = target.length;
  const stampLen = stamp.length;
  const visited = new Array(targetLen).fill(false);

  let hasRepalced = 0;
  target = target.split('');
  stamp = stamp.split('');
  while (hasRepalced < targetLen) {
    let doneReplace = false;
    for (let i = 0; i <= targetLen - stampLen; i++) {
      if (!visited[i] && canReplace(target, i, stamp)) {
        hasRepalced = doReplace(target, i, stampLen, hasRepalced);
        doneReplace = true;
        visited[i] = true;
        res.push(i);
        if (hasRepalced === targetLen) {
          break;
        }
      }
    }

    if (!doneReplace) {
      return [];
    }
  }

  return res.reverse();
};
