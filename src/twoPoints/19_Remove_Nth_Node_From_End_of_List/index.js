/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export default (head, n) => {
  let lowPoint = head;
  let quickPoint = head;
  while (n !== 0) {
    n--;
    quickPoint = quickPoint.next;
  }
  if (quickPoint !== null) {
    while (quickPoint.next !== null) {
      quickPoint = quickPoint.next;
      lowPoint = lowPoint.next;
    }
    lowPoint.next = lowPoint.next.next;
  } else {
    if (head.next !== null) {
      head = head.next;
    } else {
      head = null;
    }
  }

  return head;
};
