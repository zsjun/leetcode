/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 默认已经有function Node了
export default (head) => {
  if (!head) {
    return null;
  }
  let dummy = new Node(0);
  let newNode = dummy;

  // 复制一遍链接
  // 比如
  // 1 -> 2->3->4
  // 完成循环后 1 -> 1‘-> 2->2‘->3->3‘->4->4‘->null
  for (let l1 = head; l1 !== null; ) {
    l1.next = new Node(l1.val, l1.next);
    l1 = l1.next.next;
  }
  // 复制上一次random
  for (let l1 = head; l1 !== null; l1 = l1.next.next) {
    if (l1.random) {
      l1.next.random = l1.random.next;
    }
  }

  // 然后取出复制的节点
  for (let l1 = head; l1 !== null; l1 = l1.next) {
    newNode.next = l1.next;
    newNode = newNode.next;

    l1.next = l1.next.next;
  }

  return dummy.next;
};
