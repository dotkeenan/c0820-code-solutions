/* global expect, banMethods, drop */

describe('drop(array, count)', () => {

  beforeEach(() => {
    expect(drop).to.be.a('function');
    banMethods(drop, 'shift', 'pop', 'splice');
  });

  it('drops the first 2 elements of ["foo", "bar", "baz", "qux"]', () => {
    const output = drop(['foo', 'bar', 'baz', 'qux'], 2);
    expect(output).to.deep.equal(['baz', 'qux']);
  });

  it('drops the first element of [1, 2, 3, 4, 5]', () => {
    const output = drop([1, 2, 3, 4, 5], 1);
    expect(output).to.deep.equal([2, 3, 4, 5]);
  });

  it('drops the first 3 elements of [false, true, false, true]', () => {
    const output = drop([false, true, false, true], 3);
    expect(output).to.deep.equal([true]);
  });

  it('drops the first 7 elements of [] (empty array)', () => {
    const output = drop([], 7);
    expect(output).to.deep.equal([]);
  });

});
