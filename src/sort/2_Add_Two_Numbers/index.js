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
//  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//  Output: 7 -> 0 -> 8
//  Explanation: 342 + 465 = 807.
//
export default (l1, l2) => {
  let c1 = l1;
  let c2 = l2;
  let sentinel = new ListNode(0);
  let d = sentinel;
  let sum = 0;
  // 遍历
  while (c1 !== null || c2 !== null) {
    sum = Math.floor(sum / 10);
    // 加上c1.val
    if (c1 !== null) {
      sum += c1.val;
      c1 = c1.next;
    }
    // 加上c2.val
    if (c2 !== null) {
      sum += c2.val;
      c2 = c2.next;
    }

    d.next = new ListNode(sum % 10);
    d = d.next;
  }

  if (Math.floor(sum / 10) === 1) {
    d.next = new ListNode(1);
  }

  return sentinel.next;
};
