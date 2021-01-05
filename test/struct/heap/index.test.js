import Heap from "../../../src/struct/heap/index";

test("1", () => {
  const heap = new Heap([57, 40, 38, 11, 13, 34, 48, 75, 6, 19, 9, 7]);
  console.log(heap.top());
  heap.push(100);
  console.log(heap.top());
  heap.pop();
  heap.pop();
  console.log(heap.top());
});
