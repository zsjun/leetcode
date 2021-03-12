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
//  Runtime: 88 ms, faster than 41.65% of JavaScript online submissions for Reverse Linked List.
//  Memory Usage: 40.6 MB, less than 54.45% of JavaScript online submissions for Reverse Linked List.
export default (head) => {
  let tail = null;
  while (head) {
    const temp = head;
    head = head.next;
    temp.next = tail;
    tail = temp;
  }
  return tail;
};
