/* global expect, banMethods, last */

describe('last(array)', () => {

  beforeEach(() => {
    expect(last).to.be.a('function');
    banMethods(last, 'slice', 'splice', 'pop', 'shift', 'filter');
  });

  it('returns "baz" for ["foo", "bar", "baz"]', () => {
    const input = ['foo', 'bar', 'baz'];
    const output = last(input);
    expect(output).to.equal('baz');
  });

  it('returns 5 for [1, 2, 3, 4, 5]', () => {
    const input = [1, 2, 3, 4, 5];
    const output = last(input);
    expect(output).to.equal(5);
  });

  it('returns true for [false, true, false, true]', () => {
    const input = [false, true, false, true];
    const output = last(input);
    expect(output).to.equal(true);
  });

  it('returns undefined for [] (empty arrays)', () => {
    const input = [];
    const output = last(input);
    expect(output).to.equal(undefined);
  });

});
