import { count } from "../utils";

test("adds 1 + 2 to equal 3", () => {
  expect(count(1, 2)).toBe(3);
});

test("add 1 + 3 = 4", () => {
  expect(count(1, 3)).toBe(4);
});
