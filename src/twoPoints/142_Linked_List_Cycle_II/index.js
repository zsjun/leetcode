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
  let temphead = head;
  let slow = head;
  let fast = head;

  do {
    slow = slow.next;
    fast = fast.next;
    fast = fast ? fast.next : null;
  } while (slow !== fast && fast !== null);

  if (slow === fast) {
    while (temphead !== fast) {
      temphead = temphead.next;
      fast = fast.next;
    }
  }
  return fast || -1;
};
