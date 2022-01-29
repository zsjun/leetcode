import restoreIpAddresses from "../../../src/everyday/93_Restore_IP_Addresses/index.js";

test("1", () => {
  expect(restoreIpAddresses("25525511135")).toBe(5);
});
