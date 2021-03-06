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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 获取到从head到n节点
const split = (head, n) => {
  for (let i = 0; i < n && head; i++) {
    head = head.next;
  }
  if (!head) return null;
  const last = head.next;
  head.next = null;
  return last;
};
// 合并两个排好序的链表，最后返回最后的结尾
const merge = (l1, l2, head) => {
  let cur = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2;
      cur = l2;
      l2 = l2.next;
    } else {
      cur.next = l1;
      cur = l1;
      l1 = l1.next;
    }
  }
  cur.next = l1 ? l1 : l2;
  let last = head;
  while (last.next) {
    last = last.next;
  }
  return last;
};

//  从底向上拆开然后就合并
export default (head) => {
  if (!head || !head.next) return head;
  const len = 0;

  let cur = head;
  while (cur) {
    ++len;
    cur = cur.next;
  }
  let left, right, tail;
  const preHead = new ListNode(0);
  preHead.next = head;
  for (let step = 1; step < len; step <<= 1) {
    let cur = preHead.next;
    tail = preHead;
    while (cur) {
      left = cur;
      right = split(left, step);
      cur = split(right, step);
      tail = merge(left, right, tail);
    }
  }
  return preHead.next;
};
