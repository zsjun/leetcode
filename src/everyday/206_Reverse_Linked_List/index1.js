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
var reverseList = function (head) {
  if (!head) return null;
  const nextNode = reverseList(head.next);
  if (head.next) {
    head.next.next = head;
    head.next = null;
  } else {
    return head;
  }
  return nextNode;
};
