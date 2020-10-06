/* global expect, banMethods, tail */

describe('tail(array)', () => {

  beforeEach(() => {
    expect(tail).to.be.a('function');
    banMethods(tail, 'slice', 'splice', 'pop', 'shift');
  });

  it('returns the last two values of ["foo", "bar", "baz"]', () => {
    const input = ['foo', 'bar', 'baz'];
    const output = tail(input);
    expect(output).to.deep.equal(['bar', 'baz']);
  });

  it('returns the last five values of [1, 2, 3, 4, 5, 6]', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = tail(input);
    expect(output).to.deep.equal([2, 3, 4, 5, 6]);
  });

  it('returns the last three values of [true, false, false, true]', () => {
    const input = [true, false, false, true];
    const output = tail(input);
    expect(output).to.deep.equal([false, false, true]);
  });

  it('returns [] (empty array) for []', () => {
    const input = [];
    const output = tail(input);
    expect(output).to.deep.equal([]);
  });

});
