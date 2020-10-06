/* global expect, banMethods, dropRight */

describe('dropRight(array, count)', () => {

  beforeEach(() => {
    expect(dropRight).to.be.a('function');
    banMethods(dropRight, 'shift', 'pop', 'splice');
  });

  it('drops the last 2 elements of ["foo", "bar", "baz", "qux"]', () => {
    const output = dropRight(['foo', 'bar', 'baz', 'qux'], 2);
    expect(output).to.deep.equal(['foo', 'bar']);
  });

  it('drops the last element of [1, 2, 3, 4, 5]', () => {
    const output = dropRight([1, 2, 3, 4, 5], 1);
    expect(output).to.deep.equal([1, 2, 3, 4]);
  });

  it('drops the last 3 elements of [false, true, false, true]', () => {
    const output = dropRight([false, true, false, true], 3);
    expect(output).to.deep.equal([false]);
  });

  it('drops the last 7 elements of [] (empty array)', () => {
    const output = dropRight([], 7);
    expect(output).to.deep.equal([]);
  });

});
