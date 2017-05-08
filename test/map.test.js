_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every string in an array of strings plus', () => {
    const arr = ['one', 'two', 'three', 'four', 'five'];
    const mappedArr = _.map(arr, (el) => el + 'o');
    expect(mappedArr).toEqual(['oneo', 'twoo', 'threeo', 'fouro', 'fiveo']);
  });
});