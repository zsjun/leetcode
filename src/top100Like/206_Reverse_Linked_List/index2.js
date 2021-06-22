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
//  Runtime: 64 ms, faster than 99.88% of JavaScript online submissions for Reverse Linked List.
//  Memory Usage: 41.2 MB, less than 7.21% of JavaScript online submissions for Reverse Linked List.
const reverseList = (head) => {
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
export default reverseList;
