const calculator = require("./calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("Integration Testing with add and mul", () => {
  expect(calculator.add(calculator.mul(4, 5), 2)).toBe(22);
});
