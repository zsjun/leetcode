import removeNthFromEnd from "../../../src/twoPoints/19_Remove_Nth_Node_From_End_of_List/index";

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function creatListNode(params) {}
test("1", () => {
  expect(removeNthFromEnd([1, 2, 3, 4, 5], 2).toBe([1, 2, 3, 5]));
});
