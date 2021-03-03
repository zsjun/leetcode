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
// Runtime: 152 ms, faster than 26.14% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 43.9 MB, less than 85.30% of JavaScript online submissions for Add Two Numbers.
export default (l1, l2) => {
  let flag = 0;
  const head = l1;
  let last;
  while (l1 && l2) {
    let tempVal = l1.val + l2.val + flag;
    if (tempVal >= 10) {
      flag = 1;
      tempVal = tempVal - 10;
    } else {
      flag = 0;
    }
    l1.val = tempVal;
    last = l1;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (l1) {
    while (l1) {
      let tempVal = l1.val + flag;
      if (tempVal >= 10) {
        flag = 1;
        tempVal = tempVal - 10;
      } else {
        flag = 0;
      }
      l1.val = tempVal;
      last = l1;
      l1 = l1.next;
    }
  } else if (l2) {
    while (l2) {
      let tempVal = l2.val + flag;
      if (tempVal >= 10) {
        flag = 1;
        tempVal = tempVal - 10;
      } else {
        flag = 0;
      }
      l2.val = tempVal;
      last.next = l2;
      last = last.next;
      l2 = l2.next;
    }
  }
  if (flag === 1) {
    last.next = new ListNode(1);
  }

  return head;
};
