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
// Runtime: 96 ms, faster than 36.86% of JavaScript online submissions for Odd Even Linked List.
// Memory Usage: 41.3 MB, less than 19.30% of JavaScript online submissions for Odd Even Linked List.
export default (head) => {
  let copyOddHead = head;
  if (!head) {
    return head;
  }
  let copytEvenHead = head.next;
  let temp = copytEvenHead;

  while (copytEvenHead) {
    const next = copytEvenHead.next;
    if (!next) {
      head.next = temp;
      break;
    }
    head.next = next;
    head = next;

    copytEvenHead.next = head.next;
    copytEvenHead = head.next;

    if (!head.next) {
      head.next = temp;
      break;
    }
  }

  return copyOddHead;
};
