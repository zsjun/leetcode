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
//  Input: 1->2->4, 1->3->4
//  Output: 1->1->2->3->4->4
// [1,2,4]
// [1,3,4]
export default (l1, l2) => {
  let pointL1 = l1;
  let pointL2 = l2;
  let first = pointL1;
  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;
  while (pointL1 && pointL2) {
    while (pointL2 && pointL2.val >= pointL1.val) {
      pointL2 = pointL2.next;
    }
    if (pointL2 === l2) {
      const temp = pointL2.next;
      const temp1 = l1;
      l1 = pointL2;
      pointL2.next = temp1;
      pointL1 = l1;
      first = pointL1;
      pointL2 = temp;
      break;
    } else {
      pointL2 = l2;
      break;
    }
  }

  while (pointL1 && pointL2) {
    if (pointL2.val > pointL1.val) {
      first = pointL1;

      pointL1 = pointL1.next;
    } else {
      const temp = first.next;
      const temp1 = pointL2.next;

      first.next = pointL2;
      pointL2.next = temp;
      first = pointL2;
      pointL2 = temp1;
      pointL1 = temp;
    }
  }
  if (first && pointL2) {
    first.next = pointL2;
  }
  return l1;
};
