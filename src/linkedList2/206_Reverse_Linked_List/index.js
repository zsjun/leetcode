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

// Runtime: 84 ms, faster than 67.00% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 40.6 MB, less than 37.61% of JavaScript online submissions for Reverse Linked List.

const resver = (head, newHead) => {
  if (head === null) {
    return newHead;
  }
  const temp1 = head.next;
  head.next = newHead;
  newHead = head;
  head = temp1;
  return resver(head, newHead);
};

var reverseList = function (head) {
  let newHead = null;
  return resver(head, newHead);
};
export default (head) => {
  let newHead = null;
  while (head) {
    const temp1 = head.next;
    head.next = newHead;
    newHead = head;
    head = temp1;
  }
  return newHead;
};
