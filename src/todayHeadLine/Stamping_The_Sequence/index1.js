// /**
//  * @param {string} stamp
//  * @param {string} target
//  * @return {number[]}
//  */
// // Input: (stamp = 'abc'), (target = 'ababc');
// // Output: [0, 2];

// // Input: (stamp = 'abca'), (target = 'aabcaca');
// // Output: [3, 0, 1];
// export default (s, t) => {
//   if (s[0] !== t[0] || s[s.length - 1] !== t[t.length - 1]) {
//     return [];
//   }
//   const sLen = s.length;
//   const tLen = t.length;
//   const path = new Array(tLen).fill(-1);
//   path[0] = 0;
//   path[tLen - 1] = sLen - 1;
//   // tIndex target的索引，index是t[tIndex]在stamp中的索引
//   let low = 1;
//   let high = tLen - 2;
//   while (low <= high) {
//     if (s[path[low - 1] + 1] === t[low]) {
//       path[low] = path[low - 1] + 1;
//       ++low;
//     } else if (s[path[high + 1] - 1] === t[high]) {
//       path[high] = path[high + 1] - 1;
//       --high;
//     } else {
//       if (t[low] === s[0]) {
//         path[low] = 0;
//         ++low;
//       } else if (t[high] === s[sLen - 1]) {
//         path[high] = 0;
//         --high;
//       } else {
//         return [];
//       }
//     }
//   }
//   let res = [];
//   let low1 = 0;
//   let high1 = path.length - 1;

//   while (low1 < high1) {
//     res.push(low1);
//     while (path[low1 + 1] > path[low1]) {
//       ++low1;
//     }
//     ++low1;
//     if (high1 > low1) {
//       let count = 1;

//       while (path[high1 - 1] < path[high1]) {
//         ++count;
//         --high1;
//       }
//       --high1;
//       res.push(high1 - sLen - count);
//     }
//   }
//   return res;
// };
