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
// 1, 2, 3, 4, 5, null;
export default (head) => {
  // let odd = head;
  // let even = head.next;
  // let tempEven = even;
  // while (odd.next) {
  //   odd.next = even.next;
  //   even.next = even.next.next;

  //   even = even.next;
  //   odd = odd.next;
  // }
  // odd.next = tempEven;
  // even.next = null;
  // return head;

  if (head != null) {
    let odd = head,
      even = head.next,
      evenHead = even;

    while (odd != null && odd.next != null && even !== null && even.next !== null) {
      odd.next = odd.next.next;
      even.next = even.next.next;
      odd = odd.next;
      even = even.next;
    }
    odd.next = evenHead;
  }
  return head;
};
