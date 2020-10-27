/* global expect, banMethods, take */

describe('take(array, count)', () => {

  beforeEach(() => {
    expect(take).to.be.a('function');
    banMethods(take, 'shift', 'pop', 'splice');
  });

  it('takes the first 2 elements of ["foo", "bar", "baz", "qux"]', () => {
    const output = take(['foo', 'bar', 'baz', 'qux'], 2);
    expect(output).to.deep.equal(['foo', 'bar']);
  });

  it('takes the first element of [1, 2, 3, 4, 5]', () => {
    const output = take([1, 2, 3, 4, 5], 1);
    expect(output).to.deep.equal([1]);
  });

  it('takes the first 3 elements of [false, true, false, true]', () => {
    const output = take([false, true, false, true], 3);
    expect(output).to.deep.equal([false, true, false]);
  });

  it('takes the first 7 elements of [] (empty array)', () => {
    const input = [];
    const output = take(input, 7);
    expect(output).to.deep.equal([]);
  });

});
