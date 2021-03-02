import forwardLeds from "../../../src/todayHeadLine/circle_led/index";

function getData(num) {
  const list = [];
  for (let i = 0; i < num; i++) {
    list[i] = Math.random() > 0.5 ? 1 : 0;
    // list[i] = 0;
  }
  return list;
}
test("1", () => {
  const res = new Array(100).fill(1);
  const list1 = getData(100);
  expect(forwardLeds(list1)).toEqual(res);
});
