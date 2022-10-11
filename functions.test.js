import {
  capitalize,
  reverseString,
  calc,
  caesarCipher,
  analyzeArray,
} from "./functions.js";

// Test names would not be so silly in a real environment :)

test("Capitalize the string please", () => {
  expect(capitalize("joe")).toBe("Joe");
});

test("Flip switch it and reverse it", () => {
  expect(reverseString("flip this")).toBe("siht pilf");
});

test("Calculizor engage", () => {
  expect(calc.add(1, 1)).toBe(2);
  expect(calc.subtract(5, 1)).toBe(4);
  expect(calc.divide(8, 4)).toBeCloseTo(2);
  expect(calc.multiply(3, 5)).toBeCloseTo(15);
});

test("Now it's a secret", () => {
  expect(caesarCipher("Attack at dawn", 5)).toBe("Fyyfhp fy ifbs");
});

test("Analysis paralysis, woof!", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
