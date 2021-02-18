import MaxStack from "../../../src/complexStruct/716_Max_Stack/index";

test("1", () => {
  const stack = new MaxStack();
  stack.push(5);
  stack.push(1);
  stack.push(5);
  // 5
  console.log(stack.top());
  // 5
  console.log(stack.popMax());
  // 1
  console.log(stack.top());
  // 5
  console.log(stack.peekMax());
  // 1
  console.log(stack.pop());
  // 5
  console.log(stack.top());
});
