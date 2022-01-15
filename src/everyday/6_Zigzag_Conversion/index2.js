var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  let dummy = new Node(0);
  let cur = dummy;
  // 插入一个节点，复制val
  for (let l1 = head; l1 !== null; l1 = l1.next.next) {
    l1.next = new Node(l1.val, l1.next);
  }
  // 复制random
  for (let l1 = head; l1 !== null; l1 = l1.next.next) {
    if (l1.random) {
      l1.next.random = l1.random.next;
    }
  }
  // 复制
  for (let l1 = head; l1 !== null; l1 = l1.next.next) {
    cur.next = l1.next;
    cur = cur.next;
  }
  return dummy.next;
};
