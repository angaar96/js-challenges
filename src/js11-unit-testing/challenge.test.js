import * as challenge from "./js11";

test('greet() test', () => {
  expect(challenge.greet()).toBe("Hello, nice to meet you");
});

test('sumTwoNumbers() test', () => {
  expect(challenge.sumTwoNumbers(1, 2)).toBe(3);
});

test('checkLarger() test', () => {
  expect(challenge.checkLarger(1, 2)).toBe(`2 is bigger than 1`);
  expect(challenge.checkLarger(2, 1)).toBe(`2 is bigger than 1`);
  expect(challenge.checkLarger(1, 1)).toBe(`Both numbers are equal`);
});

test('filterByLength() test', () => {
  expect(challenge.filterByLength(["John", "Lisa", "Anamelongerthan6characters"])).toStrictEqual(["John", "Lisa"]);
  expect(challenge.filterByLength(["Anamelongerthan6characters"])).toStrictEqual("Sorry, no valid names supplied");
});

test('reduceNumbers() test', () => {
  expect(challenge.reduceNumbers([6, 8, 10], 3)).toStrictEqual([3, 5, 7]);
  expect(challenge.reduceNumbers([2, 8, 10], 3)).toStrictEqual([0, 5, 7]);
  expect(challenge.reduceNumbers([300, 8, 10], 3)).toStrictEqual([255, 5, 7]);
});