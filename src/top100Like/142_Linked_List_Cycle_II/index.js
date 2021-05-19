/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

export default (head) => {
  if (head === null || head.next === null) return null;
  let slow = head;
  let fast = head;
  let start = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      while (slow !== start) {
        slow = slow.next;
        start = start.next;
      }
      return start;
    }
  }
  return null;
};
