import leastInterval from "../../../src/sort/621_Task_Scheduler/index";

// test("1", () => {
//   expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
// });

// test("2", () => {
//   expect(leastInterval(["A", "A", "A", "B", "B", "B"], 0)).toBe(6);
// });

// test("4", () => {
//   expect(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)).toBe(16);
// });
test("3", () => {
  expect(
    leastInterval(
      [
        "A",
        "A",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "E",
        "E",
        "F",
        "F",
        "G",
        "G",
        "H",
        "H",
        "I",
        "I",
        "J",
        "J",
        "K",
        "K",
        "L",
        "L",
        "M",
        "M",
        "N",
        "N",
        "O",
        "O",
        "P",
        "P",
        "Q",
        "Q",
        "R",
        "R",
        "S",
        "S",
        "T",
        "T",
        "U",
        "U",
        "V",
        "V",
        "W",
        "W",
        "X",
        "X",
        "Y",
        "Y",
        "Z",
        "Z",
      ],
      2
    )
  ).toBe(52);
});
