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
// 当使用东西的时候，一定要注意是否存在
var deleteDuplicates = function (head) {
  if (!head) return null;
  let newHead = null;
  while (head) {
    if (head && head.next && head.val === head.next.val) {
      while (head && head.next && head.val === head.next.val) {
        head = head.next;
      }
      head = head.next;
    } else {
      newHead = head;
      break;
    }
  }

  let pre = newHead;
  let cur = pre ? pre.next : null;
  while (cur && cur.next) {
    if (cur && cur.next && cur.val === cur.next.val) {
      while (cur && cur.next && cur.val === cur.next.val) {
        cur = cur.next;
      }
      pre.next = cur.next;
      cur = cur.next;
    } else {
      pre = cur;
      cur = cur.next;
    }
  }
  return newHead;
};
