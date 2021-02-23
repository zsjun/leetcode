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
  let curHead = head;
  let count = 0;
  while (curHead !== null && count !== k) {
    // 寻找第k+1个节点
    curHead = curHead.next;
    count++;
  }
  if (count === k) {
    // 循环
    curHead = reverseKGroup(curHead, k);
    // 反转当前
    while (count > 0) {
      const tmp = head.next;
      head.next = curHead;
      curHead = head;
      head = tmp;
      count--;
    }
    head = curHead;
  }
  return head;
};

export default reverseKGroup;
