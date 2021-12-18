const sum = require('../sor/sum');


  test('adds 1 + 2 to equal 3', () => {
    console.log(expect(sum(1, 2)))
    expect(sum(1, 2)).toBe(3);
  });

