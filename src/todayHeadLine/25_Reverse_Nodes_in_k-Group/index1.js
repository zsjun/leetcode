/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// Runtime: 92 ms, faster than 90.78% of JavaScript online submissions for Reverse Nodes in k-Group.
// Memory Usage: 41.8 MB, less than 78.67% of JavaScript online submissions for Reverse Nodes in k-Group.
const reverseKGroup = (head, k) => {
  if (!head) return null;

  let len = 0;
  let curHead = head;
  // 计算链表的长度
  while (curHead != null) {
    len++;
    curHead = curHead.next;
  }

  const round = Math.floor(len / k);
  if (round === 0) return head;

  const dummy = new ListNode(-1);
  dummy.next = head;
  let pre = dummy;
  for (let i = 0; i < round; i++) {
    //for each list with size k, reverse it
    let start = pre.next;
    let then = start.next;
    for (let j = 0; j < k - 1; j++) {
      start.next = then.next;
      then.next = pre.next;
      pre.next = then;
      then = start.next;
    }
    pre = start;
  }
  return dummy.next;
};

export default reverseKGroup;
