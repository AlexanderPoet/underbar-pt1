const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('lists unique numbers as values', () => {
    const nums = {
      two: 2,
      four: 4,
      five: 5,
      five: 5,
      seven: 7,
      four: 4,
      ten: 10,
      two: 2
    };
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });
});