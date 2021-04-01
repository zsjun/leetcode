/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */

// Input: (stamp = 'abc'), (target = 'ababc');
// Output: [0, 2];

// Input: (stamp = 'abca'), (target = 'aabcaca');
// Output: [3, 0, 1];
export default (s, t) => {
  if (s[0] !== t[0] || s[s.length - 1] !== t[t.length - 1]) {
    return [];
  }
  const sLen = s.length;
  const tLen = t.length;
  const path = new Array(tLen).fill(-1);
  // const pos = new Map()
  // for(let i =0;i<s.length;i++) {

  // }
  // pos = collections.defaultdict(set)
  // for i, c in enumerate(s): pos[c].add(i)
  path[0] = 0;
  function dfs(tIndex, index) {
    // rule1
    if (tIndex >= tLen) {
      return;
    }
    if (t[tIndex] === s[path[tIndex - 1] + 1]) {
      path[tIndex] = path[tIndex - 1] + 1;
    } else if (t[tIndex] === s[0]) {
      path[tIndex] = 0;
    } else if (t[tIndex - 1] === s[s.length - 1]) {
      path[tIndex] = s.indexOf(t[tIndex]);
    }
    return dfs(tIndex + 1);
  }

  // def path2res(path):
  //     down, up = [], []
  //     for i in range(len(path)):
  //         if path[i] == 0:
  //             up.append(i)
  //         elif i and path[i] - 1 != path[i - 1]:
  //             down.append(i - path[i])
  //     return down[::-1] + up

  dfs(1);
  for (let i = 0; i < tLen; i++) {
    if (t[i] === -1) {
      return [];
    }
  }
  console.log(path);
  // if not dfs(0, 0): return []
  // return path2res(path)
};
