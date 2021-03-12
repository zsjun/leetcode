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
const reverse = (head, tail) => {
  if (!head) return tail;

  const temp = head;
  head = head.next;
  temp.next = tail;

  if (head) {
    return reverse(head, temp);
  } else {
    return temp;
  }
};
// Runtime: 88 ms, faster than 41.65% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 40.9 MB, less than 12.03% of JavaScript online submissions for Reverse Linked List.
export default (head) => {
  return reverse(head, null);
};
