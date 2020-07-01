/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// A: [1, 2, 3, 2, 1, 9];
// B: [3, 2, 1, 4, 7];
export default (A, B) => {
  const lenA = A.length;
  const lenB = B.length;
  if (lenA < lenB) {
    let tmp = B;
    B = A;
    A = tmp;
  }
  let endA = 0;
  let endB = 0;
  let max = 0;
  for (let i = 0; i < lenB; i++) {
    for (let j = 0; j < lenB; j++) {
      if (A[i] === B[j]) {
        endA = i + 1;
        endB = j + 1;
        max = endA - i > max ? endA - i : max;
        while (endA < lenB && endB < lenB) {
          if (A[endA] === B[endB]) {
            if (endA - i + 1 > max) {
              max = endA - i + 1;
            }
            endA++;
            endB++;
          } else {
            endA = lenB;
          }
        }
      }
    }
  }

  return max;
};
