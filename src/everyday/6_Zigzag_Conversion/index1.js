var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  // 增加一个头结点
  let dummy = new Node(0);
  let newNode = dummy;
  // 中间插入一个节点，然后进行
  for (let l1 = head; l1 !== null; l1 = l1.next.next) {
    l1.next = new Node(l1.val, l1.next);
  }

  for (let l1 = head; l1 !== null; l1 = l1.next.next) {
    if (l1.random) {
      l1.next.random = l1.random.next;
    }
  }

  for (let l1 = head; l1 !== null; l1 = l1.next.next) {
    newNode.next = l1.next;
    newNode = newNode.next;
    // 把加入的节点给重新删掉
    l1.next = l1.next.next;
  }

  return dummy.next;
};
