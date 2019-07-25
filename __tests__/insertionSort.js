const insertionSort = require('../insertionSort');

describe('insertionSort', () => {
  test('should sort a small array', () => {
    expect(insertionSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
  });

  test('should sort this long array', () => {
    expect(insertionSort([1, 9, 2, 4, 3, 5, 7, 6, 8, 0])).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
  });

  test('should sort items with negative values', () => {
    expect(insertionSort([5, -1, -50, 23, 7, 30, -2])).toEqual([
      -50,
      -2,
      -1,
      5,
      7,
      23,
      30
    ]);
  });

  test('should sort an already sorted array', () => {
    expect(insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should sort an array with just one item', () => {
    expect([1]).toEqual([1]);
  });

  test('should sort an empty array', () => {
    expect([]).toEqual([]);
  });
});
