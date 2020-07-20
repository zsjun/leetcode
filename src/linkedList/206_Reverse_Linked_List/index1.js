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
export default (head) => {
  let pre = null;
  while (head) {
    const temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }
  return pre;
};
