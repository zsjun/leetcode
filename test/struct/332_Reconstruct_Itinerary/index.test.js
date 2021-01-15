import findItinerary from "../../../src/struct/332_Reconstruct_Itinerary/index";

test("1", () => {
  expect(
    findItinerary([
      ["JFK", "D"],
      ["JFK", "A"],
      ["A", "C"],
      ["B", "C"],
      ["C", "JFK"],
      ["C", "D"],
      ["D", "B"],
      ["D", "A"],
    ])
  ).toEqual(["JFK", "A", "C", "D", "B", "C", "JFK", "D", "A"]);
});

test("2", () => {
  expect(
    findItinerary([
      ["JFK", "A"],
      ["A", "C"],
      ["B", "C"],
      ["C", "JFK"],
      ["C", "D"],
      ["D", "B"],
      ["D", "A"],
    ])
  ).toEqual(["JFK", "A", "C", "D", "B", "C", "JFK", "A"]);
});
