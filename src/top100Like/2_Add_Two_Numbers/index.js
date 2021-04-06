/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function sum1(l1, l2, carry) {
  if (l1 === null && l2 === null) {
    if (carry === 0) {
      return null;
    } else {
      return new ListNode(1);
    }
  }

  let v1 = l1 !== null ? l1.val : 0;
  let v2 = l2 !== null ? l2.val : 0;
  let sum = v1 + v2 + carry;

  let currDigit;
  if (sum >= 10) {
    currDigit = sum - 10;
    carry = 1;
  } else {
    currDigit = sum;
    carry = 0;
  }

  const list = new ListNode(currDigit);
  list.next = sum1(l1 != null ? l1.next : null, l2 != null ? l2.next : null, carry);
  return list;
}
// Runtime: 124 ms, faster than 94.06% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 44 MB, less than 75.57% of JavaScript online submissions for Add Two Numbers.
export default (l1, l2) => {
  return sum1(l1, l2, 0);
};
