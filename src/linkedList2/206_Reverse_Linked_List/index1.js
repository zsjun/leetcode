/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
const reverseList = (head) => {
  /* iterative solution */
  let newHead = null;
  while (head != null) {
    const next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
};
const reverseListInt = (head, newHead) => {
  if (head === null) {
    return newHead;
  }

  const next = head.next;
  head.next = newHead;

  return reverseListInt(next, head);
};
export default (head) => {
  return reverseListInt(head, null);
};
