/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// [1, 4, 3, 2, 5, 2];
// 3;
export default (head, x) => {
  let slow = head;
  let fast = head;
  // while (head) {
  //   console.log(head.val);
  //   head = head.next;
  // }
  let slowNum = 0;
  let fastNum = 0;
  while (fast && slow) {
    if (slow.val < x) {
      slowNum++;
      while (slow.next && slow.next.val < x) {
        slow = slow.next;
        slowNum++;
      }
    }
    if (slow && slow.next && slow.next.val >= x) {
      fast = slow.next;
      fastNum = slowNum + 1;
    }
    if (fast.val >= x) {
      fastNum++;
      while (fast.next && fast.next.val >= x) {
        fast = fast.next;
        fastNum++;
      }
    }
    if (slowNum === 0 && fastNum >= 0) {
      if (fast.next !== null) {
        const temp = head;
        const temp1 = fast.next.next;
        head = fast.next;
        head.next = temp;
        fast.next = temp1;
        slow = head;
        continue;
        // while (head) {
        //   console.log(head.val);
        //   head = head.next;
        // }
      }
    }
    // if (slow || slow.next === null) {
    //   return head;
    // }
    // console.log(slow.val);
    // console.log(fast.val);
    if (fast.next !== null) {
      if (fast.next.next === null) {
        if (slow === head && fast === head) {
          head = slow.next;
          slow = head;
          head.next = fast;
          fast.next = null;
        } else {
          const temp = slow.next;
          if (!temp) {
            return head;
          }
          slow.next = fast.next;
          slow.next.next = temp;
          fast.next = null;
        }
      } else {
        const temp = slow.next;
        if (!temp) {
          return head;
        }
        const temp1 = fast.next.next;

        if (slow === head && fast === head) {
          slow = temp;
          head = slow;
          slow.next = fast;
          fast.next = temp1;
        } else {
          slow.next = fast.next;
          fast.next.next = temp;
          fast.next = temp1;
          slow = slow.next;
        }
      }
    } else {
      return head;
    }
  }
  return head;
};
