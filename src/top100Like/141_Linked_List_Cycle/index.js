/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Runtime: 84 ms, faster than 84.37% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 41 MB, less than 67.87% of JavaScript online submissions for Linked List Cycle.
export default (head) => {
  let slow = head;
  let fast = head;
  if (!head || (head && !head.next)) {
    return false;
  }
  while (fast) {
    slow = slow.next;
    if (fast) {
      fast = fast.next;
    }
    if (fast) {
      fast = fast.next;
    }
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
